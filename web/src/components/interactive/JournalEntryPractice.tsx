import React, {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

type JournalLine = {
  id: string;
  account: string;
  description: string;
  debit: string;
  credit: string;
};

const SCENARIOS = [
  {
    id: 'vat-sale',
    titleKey: 'journal.scenarioVatSale',
    title: 'Sale with Luxembourg VAT (17%)',
    descriptionKey: 'journal.scenarioVatSaleDesc',
    description: 'Invoice of €1,200 net plus VAT to a local customer, paid by bank transfer.',
    hintKey: 'journal.scenarioVatSaleHint',
    hint: 'Use 5131 (bank), 7061 (sales of goods) or 703 (services), 461411 (output VAT).',
  },
  {
    id: 'payroll',
    titleKey: 'journal.scenarioPayroll',
    title: 'Monthly payroll',
    descriptionKey: 'journal.scenarioPayrollDesc',
    description: 'Gross salaries €15,000, employee social security €1,942.50, wage tax withheld €1,800, the rest paid by bank.',
    hintKey: 'journal.scenarioPayrollHint',
    hint: 'Accounts 6211 (gross salaries), 4621 (CCSS), 46124 (wage tax withheld), 5131 (bank).',
  },
  {
    id: 'asset-purchase',
    titleKey: 'journal.scenarioAssetPurchase',
    title: 'Asset purchase with down payment',
    descriptionKey: 'journal.scenarioAssetPurchaseDesc',
    description: 'Machine bought for €40,000 + 17% VAT (€46,800 in total). 20% of the total paid immediately by bank, balance due to the supplier in 30 days.',
    hintKey: 'journal.scenarioAssetPurchaseHint',
    hint: 'Accounts 222 (machinery), 421611 (input VAT), 5131 (bank), 44111 (supplier).',
  },
];

export const JournalEntryPractice = (): JSX.Element => {
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const [lines, setLines] = useState<JournalLine[]>([
    {id: 'line-1', account: '', description: '', debit: '', credit: ''},
    {id: 'line-2', account: '', description: '', debit: '', credit: ''},
  ]);

  const scenario = SCENARIOS.find((item) => item.id === scenarioId) || SCENARIOS[0];

  const totals = useMemo(() => {
    return lines.reduce(
      (acc, line) => {
        acc.debit += parseAmount(line.debit);
        acc.credit += parseAmount(line.credit);
        return acc;
      },
      {debit: 0, credit: 0},
    );
  }, [lines]);

  const isBalanced = Math.abs(totals.debit - totals.credit) < 0.01 && totals.debit > 0;

  const updateLine = (id: string, field: keyof JournalLine, value: string): void => {
    setLines((prev) => prev.map((line) => (line.id === id ? {...line, [field]: value} : line)));
  };

  const addLine = (): void => {
    setLines((prev) => [...prev, {id: `line-${Date.now()}`, account: '', description: '', debit: '', credit: ''}]);
  };

  const clearLines = (): void => {
    setLines([
      {id: 'line-1', account: '', description: '', debit: '', credit: ''},
      {id: 'line-2', account: '', description: '', debit: '', credit: ''},
    ]);
  };

  return (
    <section className={styles.toolCard} id="journal-entry-practice">
      <h2>
        <Translate id="journal.title">Journal Entry Practice</Translate>
      </h2>
      <p className="text--secondary">
        <Translate id="journal.description">Use authentic prompts to practice dual-entry with PCN codes. Balancing feedback is immediate.</Translate>
      </p>

      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="journal.scenario">Scenario</Translate>
          </span>
          <select value={scenarioId} onChange={(e) => setScenarioId(e.target.value)} className="margin-top--xs">
            {SCENARIOS.map((item) => (
              <option key={item.id} value={item.id}>
                {translate({id: item.titleKey, message: item.title})}
              </option>
            ))}
          </select>
        </label>
        <div>
          <span className="text--bold">
            <Translate id="journal.prompt">Prompt</Translate>
          </span>
          <p className="margin-vert--xs">{translate({id: scenario.descriptionKey, message: scenario.description})}</p>
          <p className="text--secondary text--small">
            <Translate id="journal.hint">Hint:</Translate> {translate({id: scenario.hintKey, message: scenario.hint})}
          </p>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Translate id="journal.tableAccount">PCN Account</Translate>
            </th>
            <th>
              <Translate id="journal.tableDescription">Description</Translate>
            </th>
            <th className="text--right">
              <Translate id="journal.tableDebit">Debit (€)</Translate>
            </th>
            <th className="text--right">
              <Translate id="journal.tableCredit">Credit (€)</Translate>
            </th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.id}>
              <td>
                <input
                  type="text"
                  value={line.account}
                  onChange={(e) => updateLine(line.id, 'account', e.target.value)}
                  placeholder={translate({id: 'journal.accountPlaceholder', message: 'e.g., 7061'})}
                />
              </td>
              <td>
                <input type="text" value={line.description} onChange={(e) => updateLine(line.id, 'description', e.target.value)} />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={line.debit}
                  onChange={(e) => updateLine(line.id, 'debit', e.target.value)}
                  className="text--right"
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={line.credit}
                  onChange={(e) => updateLine(line.id, 'credit', e.target.value)}
                  className="text--right"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="margin-top--sm">
        <button type="button" className="button button--primary margin-right--sm" onClick={addLine}>
          <Translate id="journal.addLine">Add Line</Translate>
        </button>
        <button type="button" className="button button--secondary" onClick={clearLines}>
          <Translate id="journal.reset">Reset</Translate>
        </button>
      </div>

      <div className="margin-top--md">
        <div className={styles.resultRow}>
          <span>
            <Translate id="journal.totalDebits">Total Debits</Translate>
          </span>
          <strong>{formatCurrency(totals.debit)}</strong>
        </div>
        <div className={styles.resultRow}>
          <span>
            <Translate id="journal.totalCredits">Total Credits</Translate>
          </span>
          <strong>{formatCurrency(totals.credit)}</strong>
        </div>
      </div>

      <div className={`alert margin-top--md ${isBalanced ? 'alert--success' : 'alert--warning'}`}>
        {isBalanced ? (
          <Translate id="journal.balanced">Balanced! Debits equal credits.</Translate>
        ) : (
          <Translate id="journal.notBalanced">Entry not balanced yet — adjust your amounts.</Translate>
        )}
      </div>
    </section>
  );
};

