import React, {FormEvent, useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

type CalcType = 'net-to-gross' | 'gross-to-net';

type VatItem = {
  id: string;
  description: string;
  rate: number;
  net: number;
  vat: number;
  gross: number;
};

const VAT_RATES = [
  {value: 3, labelKey: 'vat.rateSuperReduced'},
  {value: 8, labelKey: 'vat.rateReduced'},
  {value: 14, labelKey: 'vat.rateIntermediate'},
  {value: 17, labelKey: 'vat.rateStandard'},
];

export const VatCalculator = (): JSX.Element => {
  const [calcType, setCalcType] = useState<CalcType>('net-to-gross');
  const [singleRate, setSingleRate] = useState(17);
  const [singleAmount, setSingleAmount] = useState<string>('');
  const [singleResult, setSingleResult] = useState<{net: number; vat: number; gross: number} | null>(null);

  const [itemRate, setItemRate] = useState(17);
  const [itemDescription, setItemDescription] = useState('');
  const [itemAmount, setItemAmount] = useState('');
  const [items, setItems] = useState<VatItem[]>([]);

  const totals = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.net += item.net;
        acc.vat += item.vat;
        acc.gross += item.gross;
        return acc;
      },
      {net: 0, vat: 0, gross: 0},
    );
  }, [items]);

  const handleSingleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const amount = parseAmount(singleAmount);
    if (amount <= 0) {
      setSingleResult(null);
      return;
    }

    const rateDecimal = singleRate / 100;
    if (calcType === 'net-to-gross') {
      const vat = amount * rateDecimal;
      setSingleResult({net: amount, vat, gross: amount + vat});
    } else {
      const net = amount / (1 + rateDecimal);
      const vat = amount - net;
      setSingleResult({net, vat, gross: amount});
    }
  };

  const clearSingle = (): void => {
    setSingleAmount('');
    setSingleResult(null);
  };

  const handleAddItem = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const net = parseAmount(itemAmount);
    if (!itemDescription.trim() || net <= 0) {
      return;
    }
    const rateDecimal = itemRate / 100;
    const vat = net * rateDecimal;
    const gross = net + vat;
    setItems((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        description: itemDescription.trim(),
        rate: itemRate,
        net,
        vat,
        gross,
      },
    ]);
    setItemDescription('');
    setItemAmount('');
  };

  const removeItem = (id: string): void => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearItems = (): void => setItems([]);

  return (
    <section className={styles.toolCard} id="vat-calculator">
      <h2>
        <Translate id="vat.title">🇱🇺 Luxembourg VAT Calculator</Translate>
      </h2>
      <p className="text--secondary margin-bottom--md">
        <Translate id="vat.description">
          Supports the four Luxembourg VAT rates (3%, 8%, 14%, 17%) with both single and multi-line calculations. Useful for VAT
          returns, invoice checks, or training scenarios.
        </Translate>
      </p>

      <div className={styles.toolGrid}>
        <div>
          <h3>
            <Translate id="vat.singleCalculation">Single Calculation</Translate>
          </h3>
          <form className="margin-bottom--md" onSubmit={handleSingleSubmit}>
            <div className={styles.inlineFields}>
              <label>
                <span className="text--bold">
                  <Translate id="vat.calculationType">Calculation Type</Translate>
                </span>
                <select value={calcType} onChange={(e) => setCalcType(e.target.value as CalcType)} className="margin-top--xs">
                  <option value="net-to-gross">{translate({id: 'vat.netToGross', message: 'Net → Gross'})}</option>
                  <option value="gross-to-net">{translate({id: 'vat.grossToNet', message: 'Gross → Net'})}</option>
                </select>
              </label>
              <label>
                <span className="text--bold">
                  <Translate id="vat.vatRate">VAT Rate</Translate>
                </span>
                <select value={singleRate} onChange={(e) => setSingleRate(parseInt(e.target.value, 10))} className="margin-top--xs">
                  {VAT_RATES.map((rate) => (
                    <option key={rate.value} value={rate.value}>
                      {translate({id: rate.labelKey, message: `${rate.value}%`})}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className="text--bold">
                  <Translate id="vat.amount">Amount (€)</Translate>
                </span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={singleAmount}
                  onChange={(e) => setSingleAmount(e.target.value)}
                  className="margin-top--xs"
                  required
                />
              </label>
            </div>
            <div className="margin-top--sm">
              <button type="submit" className="button button--primary margin-right--sm">
                <Translate id="vat.calculate">Calculate</Translate>
              </button>
              <button type="button" className="button button--secondary" onClick={clearSingle}>
                <Translate id="vat.clear">Clear</Translate>
              </button>
            </div>
          </form>
          {singleResult && (
            <div className={styles.toolCard}>
              <div className={styles.resultRow}>
                <span>
                  <Translate id="vat.netAmount">Net Amount</Translate>
                </span>
                <span>{formatCurrency(singleResult.net)}</span>
              </div>
              <div className={styles.resultRow}>
                <span>
                  <Translate id="vat.vatAmount">VAT Amount</Translate>
                </span>
                <span>{formatCurrency(singleResult.vat)}</span>
              </div>
              <div className={styles.resultRow}>
                <span>
                  <Translate id="vat.grossAmount">Gross Amount</Translate>
                </span>
                <span>{formatCurrency(singleResult.gross)}</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3>
            <Translate id="vat.multiLineWorksheet">Multi-Line Worksheet</Translate>
          </h3>
          <form onSubmit={handleAddItem}>
            <div className={styles.inlineFields}>
              <label>
                <span className="text--bold">
                  <Translate id="vat.descriptionLabel">Description</Translate>
                </span>
                <input
                  type="text"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  placeholder={translate({id: 'vat.descriptionPlaceholder', message: 'e.g., Office Supplies'})}
                  className="margin-top--xs"
                  required
                />
              </label>
              <label>
                <span className="text--bold">
                  <Translate id="vat.vatRate">VAT Rate</Translate>
                </span>
                <select value={itemRate} onChange={(e) => setItemRate(parseInt(e.target.value, 10))} className="margin-top--xs">
                  {VAT_RATES.map((rate) => (
                    <option key={rate.value} value={rate.value}>
                      {translate({id: rate.labelKey, message: `${rate.value}%`})}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className="text--bold">
                  <Translate id="vat.netAmountLabel">Net Amount (€)</Translate>
                </span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={itemAmount}
                  onChange={(e) => setItemAmount(e.target.value)}
                  className="margin-top--xs"
                  required
                />
              </label>
            </div>
            <div className="margin-top--sm">
              <button type="submit" className="button button--success margin-right--sm">
                <Translate id="vat.addItem">Add Item</Translate>
              </button>
              <button type="button" className="button button--danger" onClick={clearItems} disabled={!items.length}>
                <Translate id="vat.clearItems">Clear Items</Translate>
              </button>
            </div>
          </form>

          {items.length > 0 && (
            <>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      <Translate id="vat.tableDescription">Description</Translate>
                    </th>
                    <th>
                      <Translate id="vat.tableRate">Rate</Translate>
                    </th>
                    <th className="text--right">
                      <Translate id="vat.tableNet">Net</Translate>
                    </th>
                    <th className="text--right">
                      <Translate id="vat.tableVAT">VAT</Translate>
                    </th>
                    <th className="text--right">
                      <Translate id="vat.tableGross">Gross</Translate>
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.description}</td>
                      <td>
                        <span className={styles.badge}>{item.rate}%</span>
                      </td>
                      <td className="text--right">{formatCurrency(item.net)}</td>
                      <td className="text--right">{formatCurrency(item.vat)}</td>
                      <td className="text--right">{formatCurrency(item.gross)}</td>
                      <td className="text--right">
                        <button type="button" className="button button--sm button--link" onClick={() => removeItem(item.id)}>
                          <Translate id="vat.remove">Remove</Translate>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="margin-top--md">
                <div className={styles.resultRow}>
                  <span>
                    <Translate id="vat.totalNet">Total Net</Translate>
                  </span>
                  <strong>{formatCurrency(totals.net)}</strong>
                </div>
                <div className={styles.resultRow}>
                  <span>
                    <Translate id="vat.totalVAT">Total VAT</Translate>
                  </span>
                  <strong>{formatCurrency(totals.vat)}</strong>
                </div>
                <div className={styles.resultRow}>
                  <span>
                    <Translate id="vat.totalGross">Total Gross</Translate>
                  </span>
                  <strong>{formatCurrency(totals.gross)}</strong>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

