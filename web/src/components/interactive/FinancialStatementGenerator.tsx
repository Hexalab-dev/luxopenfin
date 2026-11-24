import React, {useMemo, useState} from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

export const FinancialStatementGenerator = (): JSX.Element => {
  const [revenue, setRevenue] = useState('250000');
  const [cogs, setCogs] = useState('120000');
  const [operatingExpenses, setOperatingExpenses] = useState('70000');
  const [otherIncome, setOtherIncome] = useState('2500');
  const [interestExpense, setInterestExpense] = useState('3500');
  const [taxRate, setTaxRate] = useState('0.21');

  const [currentAssets, setCurrentAssets] = useState('95000');
  const [nonCurrentAssets, setNonCurrentAssets] = useState('180000');
  const [currentLiabilities, setCurrentLiabilities] = useState('72000');
  const [nonCurrentLiabilities, setNonCurrentLiabilities] = useState('65000');

  const statements = useMemo(() => {
    const rev = parseAmount(revenue);
    const costOfGoods = parseAmount(cogs);
    const opex = parseAmount(operatingExpenses);
    const oIncome = parseAmount(otherIncome);
    const interest = parseAmount(interestExpense);
    const tax = Math.max(parseFloat(taxRate), 0);

    const grossProfit = rev - costOfGoods;
    const operatingIncome = grossProfit - opex;
    const pretaxIncome = operatingIncome + oIncome - interest;
    const taxes = pretaxIncome > 0 ? pretaxIncome * tax : 0;
    const netIncome = pretaxIncome - taxes;

    const current = parseAmount(currentAssets);
    const nonCurrent = parseAmount(nonCurrentAssets);
    const assetsTotal = current + nonCurrent;
    const currentL = parseAmount(currentLiabilities);
    const nonCurrentL = parseAmount(nonCurrentLiabilities);
    const liabilitiesTotal = currentL + nonCurrentL;
    const equity = assetsTotal - liabilitiesTotal;

    return {
      incomeStatement: {
        rev,
        costOfGoods,
        grossProfit,
        operatingIncome,
        otherIncome: oIncome,
        interest,
        pretaxIncome,
        taxes,
        netIncome,
      },
      balanceSheet: {
        current,
        nonCurrent,
        assetsTotal,
        currentL,
        nonCurrentL,
        liabilitiesTotal,
        equity,
      },
    };
  }, [
    revenue,
    cogs,
    operatingExpenses,
    otherIncome,
    interestExpense,
    taxRate,
    currentAssets,
    nonCurrentAssets,
    currentLiabilities,
    nonCurrentLiabilities,
  ]);

  return (
    <section className={styles.toolCard} id="financial-statement-generator">
      <h2>
        <Translate id="statements.title">Mini Financial Statement Builder</Translate>
      </h2>
      <p className="text--secondary">
        <Translate id="statements.description">
          Enter top-line assumptions to generate a lightweight income statement and balance sheet snapshot for classroom discussions or
          SME coaching sessions.
        </Translate>
      </p>

      <h3>
        <Translate id="statements.incomeStatementInputs">Income Statement Inputs</Translate>
      </h3>
      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="statements.revenue">Revenue (€)</Translate>
          </span>
          <input type="number" value={revenue} onChange={(e) => setRevenue(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.cogs">COGS (€)</Translate>
          </span>
          <input type="number" value={cogs} onChange={(e) => setCogs(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.operatingExpenses">Operating Expenses (€)</Translate>
          </span>
          <input type="number" value={operatingExpenses} onChange={(e) => setOperatingExpenses(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.otherIncome">Other Income (€)</Translate>
          </span>
          <input type="number" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.interestExpense">Interest Expense (€)</Translate>
          </span>
          <input type="number" value={interestExpense} onChange={(e) => setInterestExpense(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.taxRate">Tax Rate</Translate>
          </span>
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="margin-top--xs"
          />
          <small className="text--secondary">
            <Translate id="statements.taxRateNote">Enter as decimal (0.21 = 21%)</Translate>
          </small>
        </label>
      </div>

      <h3 className="margin-top--lg">
        <Translate id="statements.balanceSheetInputs">Balance Sheet Inputs</Translate>
      </h3>
      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="statements.currentAssets">Current Assets (€)</Translate>
          </span>
          <input type="number" value={currentAssets} onChange={(e) => setCurrentAssets(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.nonCurrentAssets">Non-Current Assets (€)</Translate>
          </span>
          <input type="number" value={nonCurrentAssets} onChange={(e) => setNonCurrentAssets(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.currentLiabilities">Current Liabilities (€)</Translate>
          </span>
          <input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="statements.nonCurrentLiabilities">Non-Current Liabilities (€)</Translate>
          </span>
          <input
            type="number"
            value={nonCurrentLiabilities}
            onChange={(e) => setNonCurrentLiabilities(e.target.value)}
            className="margin-top--xs"
          />
        </label>
      </div>

      <div className={styles.toolGrid}>
        <div>
          <h3>
            <Translate id="statements.incomeStatement">Income Statement</Translate>
          </h3>
          <ul className={styles.list}>
            <li>
              <span>
                <Translate id="statements.revenue">Revenue</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.rev)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.cogs">COGS</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.costOfGoods)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.grossProfit">Gross Profit</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.grossProfit)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.operatingExpenses">Operating Expenses</Translate>
              </span>
              <strong>{formatCurrency(parseAmount(operatingExpenses))}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.operatingIncome">Operating Income</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.operatingIncome)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.otherIncomeExpense">Other Income / (Expense)</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.otherIncome - statements.incomeStatement.interest)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.pretaxIncome">Pretax Income</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.pretaxIncome)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.taxes">Taxes</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.taxes)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.netIncome">Net Income</Translate>
              </span>
              <strong>{formatCurrency(statements.incomeStatement.netIncome)}</strong>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <Translate id="statements.balanceSheet">Balance Sheet</Translate>
          </h3>
          <ul className={styles.list}>
            <li>
              <span>
                <Translate id="statements.currentAssets">Current Assets</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.current)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.nonCurrentAssets">Non-Current Assets</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.nonCurrent)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.totalAssets">Total Assets</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.assetsTotal)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.currentLiabilities">Current Liabilities</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.currentL)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.nonCurrentLiabilities">Non-Current Liabilities</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.nonCurrentL)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.totalLiabilities">Total Liabilities</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.liabilitiesTotal)}</strong>
            </li>
            <li>
              <span>
                <Translate id="statements.equity">Equity (balancing figure)</Translate>
              </span>
              <strong>{formatCurrency(statements.balanceSheet.equity)}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

