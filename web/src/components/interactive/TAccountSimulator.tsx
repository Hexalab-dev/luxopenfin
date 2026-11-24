import React, {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

type LedgerEntry = {
  id: string;
  account: string;
  label: string;
  debit: number;
  credit: number;
  memo: string;
};

export const TAccountSimulator = (): JSX.Element => {
  const [accountCode, setAccountCode] = useState('');
  const [accountLabel, setAccountLabel] = useState('');
  const [debit, setDebit] = useState('');
  const [credit, setCredit] = useState('');
  const [memo, setMemo] = useState('');
  const [entries, setEntries] = useState<LedgerEntry[]>([]);

  const ledger = useMemo(() => {
    return entries.reduce<Record<string, {label: string; items: LedgerEntry[]; debit: number; credit: number}>>((acc, entry) => {
      if (!acc[entry.account]) {
        acc[entry.account] = {label: entry.label, items: [], debit: 0, credit: 0};
      }
      acc[entry.account].items.push(entry);
      acc[entry.account].debit += entry.debit;
      acc[entry.account].credit += entry.credit;
      return acc;
    }, {});
  }, [entries]);

  const handleAddEntry = (): void => {
    const debitValue = parseAmount(debit);
    const creditValue = parseAmount(credit);
    if (!accountCode.trim() || (!debitValue && !creditValue)) {
      return;
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `entry-${Date.now()}`,
        account: accountCode.trim(),
        label: accountLabel.trim() || accountCode.trim(),
        debit: debitValue,
        credit: creditValue,
        memo: memo.trim(),
      },
    ]);

    setDebit('');
    setCredit('');
    setMemo('');
  };

  const clearLedger = (): void => setEntries([]);

  return (
    <section className={styles.toolCard} id="t-account-simulator">
      <h2>
        <Translate id="taccount.title">T-Account Simulator</Translate>
      </h2>
      <p className="text--secondary">
        <Translate id="taccount.description">Build ledger postings and instantly visualize PCN balances in debit/credit format.</Translate>
      </p>

      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="taccount.accountCode">Account Code</Translate>
          </span>
          <input
            type="text"
            value={accountCode}
            onChange={(e) => setAccountCode(e.target.value)}
            className="margin-top--xs"
            placeholder={translate({id: 'taccount.accountCodePlaceholder', message: '461411'})}
          />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="taccount.accountLabel">Account Label</Translate>
          </span>
          <input
            type="text"
            value={accountLabel}
            onChange={(e) => setAccountLabel(e.target.value)}
            className="margin-top--xs"
            placeholder={translate({id: 'taccount.accountLabelPlaceholder', message: 'TVA due'})}
          />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="taccount.debit">Debit (€)</Translate>
          </span>
          <input type="number" step="0.01" value={debit} onChange={(e) => setDebit(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="taccount.credit">Credit (€)</Translate>
          </span>
          <input type="number" step="0.01" value={credit} onChange={(e) => setCredit(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="taccount.memo">Memo</Translate>
          </span>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="margin-top--xs"
            placeholder={translate({id: 'taccount.memoPlaceholder', message: 'Invoice 2025-031'})}
          />
        </label>
      </div>
      <div className="margin-top--sm">
        <button type="button" className="button button--primary margin-right--sm" onClick={handleAddEntry}>
          <Translate id="taccount.addPosting">Add Posting</Translate>
        </button>
        <button type="button" className="button button--secondary" onClick={clearLedger} disabled={!entries.length}>
          <Translate id="taccount.clearLedger">Clear Ledger</Translate>
        </button>
      </div>

      {!entries.length ? (
        <p className="margin-top--md text--secondary">
          <Translate id="taccount.noPostings">No postings yet. Add entries to build your ledger.</Translate>
        </p>
      ) : (
        <div className="margin-top--lg">
          {Object.entries(ledger).map(([code, data]) => {
            const balance = data.debit - data.credit;
            return (
              <div key={code} className="margin-bottom--lg">
                <h3>
                  {code} · {data.label}{' '}
                  <span className={styles.badge}>
                    {balance >= 0
                      ? `${translate({id: 'taccount.debitBalance', message: 'Debit'})} ${formatCurrency(balance)}`
                      : `${translate({id: 'taccount.creditBalance', message: 'Credit'})} ${formatCurrency(Math.abs(balance))}`}
                  </span>
                </h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>
                        <Translate id="taccount.tableMemo">Memo</Translate>
                      </th>
                      <th className="text--right">
                        <Translate id="taccount.tableDebit">Debit</Translate>
                      </th>
                      <th className="text--right">
                        <Translate id="taccount.tableCredit">Credit</Translate>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.memo || '—'}</td>
                        <td className="text--right">{item.debit ? formatCurrency(item.debit) : '—'}</td>
                        <td className="text--right">{item.credit ? formatCurrency(item.credit) : '—'}</td>
                      </tr>
                    ))}
                    <tr>
                      <td>
                        <strong>
                          <Translate id="taccount.total">Total</Translate>
                        </strong>
                      </td>
                      <td className="text--right">
                        <strong>{formatCurrency(data.debit)}</strong>
                      </td>
                      <td className="text--right">
                        <strong>{formatCurrency(data.credit)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

