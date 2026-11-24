import React, {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {clampToZero, formatCurrency, parseAmount} from './utils';

const TAX_CLASSES = [
  {value: 0.12, labelKey: 'payroll.taxClass1'},
  {value: 0.1, labelKey: 'payroll.taxClass1a'},
  {value: 0.08, labelKey: 'payroll.taxClass2'},
  {value: 0.15, labelKey: 'payroll.taxClassCustom'},
];

// CCSS rates as of 1 January 2026 — check ccss.lu each year.
const SOCIAL_MINIMUM_WAGE = 2703.74; // unskilled, 18+, monthly (1 Jan 2026)
const CONTRIBUTION_CEILING = 5 * SOCIAL_MINIMUM_WAGE; // €13,518.70
const DEPENDENCY_ALLOWANCE = SOCIAL_MINIMUM_WAGE / 4; // dependency base = gross − 1/4 SSM, no ceiling
const EMPLOYEE_SOCIAL = 0.028 + 0.0025 + 0.085; // health (in kind + cash) + pension = 11.55%
const EMPLOYEE_DEPENDENCY = 0.014; // dependency insurance, employee only
const EMPLOYER_SOCIAL = 0.028 + 0.0025 + 0.085 + 0.0014 + 0.0023; // health + pension + health at work + Mutualité class 1 = 11.92%
const ACCIDENT_INSURANCE = 0.0065; // employer only, before bonus-malus factor

export const PayrollCalculator = (): JSX.Element => {
  const [grossSalary, setGrossSalary] = useState('5000');
  const [benefits, setBenefits] = useState('150');
  const [taxClass, setTaxClass] = useState(0.12);
  const [bonus, setBonus] = useState('0');

  const breakdown = useMemo(() => {
    const gross = clampToZero(parseAmount(grossSalary));
    const benefit = clampToZero(parseAmount(benefits));
    const bonusAmount = clampToZero(parseAmount(bonus));
    const taxableBase = gross + bonusAmount;
    const cappedBase = Math.min(taxableBase, CONTRIBUTION_CEILING);
    const employeeSocial =
      cappedBase * EMPLOYEE_SOCIAL + clampToZero(taxableBase - DEPENDENCY_ALLOWANCE) * EMPLOYEE_DEPENDENCY;
    const withholdingTax = taxableBase * taxClass;
    const netPay = taxableBase - employeeSocial - withholdingTax + benefit;
    const employerSocial = cappedBase * EMPLOYER_SOCIAL;
    const accident = cappedBase * ACCIDENT_INSURANCE;
    const totalEmployerCost = taxableBase + employerSocial + accident + benefit;

    return {
      taxableBase,
      employeeSocial,
      withholdingTax,
      netPay,
      employerSocial,
      accident,
      totalEmployerCost,
    };
  }, [grossSalary, benefits, taxClass, bonus]);

  return (
    <section className={styles.toolCard} id="payroll">
      <h2>
        <Translate id="payroll.title">Luxembourg Payroll Snapshot</Translate>
      </h2>
      <p className="text--secondary">
        <Translate id="payroll.description">
          Estimate monthly Luxembourg payroll by entering a gross salary, tax class, and optional benefits/bonuses. Social security uses
          CCSS rates as of 1 January 2026 (check ccss.lu each year); withholding tax percentages are illustrative only — actual
          withholding follows the employee's tax card. For training purposes.
        </Translate>
      </p>

      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="payroll.grossSalary">Monthly Gross Salary (€)</Translate>
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
            className="margin-top--xs"
          />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="payroll.benefits">Monthly Benefits (€)</Translate>
          </span>
          <input type="number" min="0" step="0.01" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="payroll.bonus">Bonus / 13th Month (€)</Translate>
          </span>
          <input type="number" min="0" step="0.01" value={bonus} onChange={(e) => setBonus(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="payroll.taxClass">Tax Class</Translate>
          </span>
          <select value={taxClass} onChange={(e) => setTaxClass(parseFloat(e.target.value))} className="margin-top--xs">
            {TAX_CLASSES.map((opt) => (
              <option key={opt.labelKey} value={opt.value}>
                {translate({id: opt.labelKey, message: `Class ${opt.value}`})}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.toolGrid}>
        <div>
          <h3>
            <Translate id="payroll.employeePays">Employee Pays</Translate>
          </h3>
          <ul className={styles.list}>
            <li>
              <span>
                <Translate id="payroll.taxableBase">Taxable Base</Translate>
              </span>
              <strong>{formatCurrency(breakdown.taxableBase)}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.employeeSocial">Employee Social Security (11.55% + 1.40% dependency on gross − ¼ minimum wage)</Translate>
              </span>
              <strong>{formatCurrency(breakdown.employeeSocial)}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.withholdingTax">Withholding Tax</Translate> ({(taxClass * 100).toFixed(1)}%)
              </span>
              <strong>{formatCurrency(breakdown.withholdingTax)}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.netPay">Net Pay (incl. benefits)</Translate>
              </span>
              <strong>{formatCurrency(breakdown.netPay)}</strong>
            </li>
          </ul>
        </div>

        <div>
          <h3>
            <Translate id="payroll.employerCost">Employer Cost</Translate>
          </h3>
          <ul className={styles.list}>
            <li>
              <span>
                <Translate id="payroll.employerSocial">Employer Social Charges (11.92%, Mutualité class 1)</Translate>
              </span>
              <strong>{formatCurrency(breakdown.employerSocial)}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.accidentInsurance">Accident Insurance (0.65%)</Translate>
              </span>
              <strong>{formatCurrency(breakdown.accident)}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.benefitsLabel">Benefits</Translate>
              </span>
              <strong>{formatCurrency(parseAmount(benefits))}</strong>
            </li>
            <li>
              <span>
                <Translate id="payroll.totalEmployerCost">Total Employer Cost</Translate>
              </span>
              <strong>{formatCurrency(breakdown.totalEmployerCost)}</strong>
            </li>
          </ul>
        </div>
      </div>
      <p className="margin-top--md text--small text--secondary">
        <Translate id="payroll.note">
          Note: Employer charges assume Mutualité des employeurs class 1 (0.23%; classes 2–4: 0.95%, 1.56%, 2.66%) and an accident
          bonus-malus factor of 1.00. Contributions except dependency insurance are capped at 5 × the social minimum wage
          (€13,518.70/month). For statutory calculations, consult ccss.lu.
        </Translate>
      </p>
    </section>
  );
};

