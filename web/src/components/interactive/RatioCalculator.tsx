import React, {useMemo, useState} from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

export const RatioCalculator = (): JSX.Element => {
  const [currentAssets, setCurrentAssets] = useState('125000');
  const [inventory, setInventory] = useState('38000');
  const [currentLiabilities, setCurrentLiabilities] = useState('82000');
  const [totalDebt, setTotalDebt] = useState('210000');
  const [totalEquity, setTotalEquity] = useState('165000');
  const [netIncome, setNetIncome] = useState('42000');
  const [netSales, setNetSales] = useState('310000');
  const [totalAssets, setTotalAssets] = useState('375000');

  const ratios = useMemo(() => {
    const assets = parseAmount(currentAssets);
    const inv = parseAmount(inventory);
    const liabilities = parseAmount(currentLiabilities);
    const debt = parseAmount(totalDebt);
    const equity = parseAmount(totalEquity);
    const income = parseAmount(netIncome);
    const sales = parseAmount(netSales);
    const assetsTotal = parseAmount(totalAssets);

    return {
      currentRatio: liabilities > 0 ? assets / liabilities : null,
      quickRatio: liabilities > 0 ? (assets - inv) / liabilities : null,
      debtToEquity: equity > 0 ? debt / equity : null,
      netMargin: sales > 0 ? income / sales : null,
      returnOnAssets: assetsTotal > 0 ? income / assetsTotal : null,
      workingCapital: assets - liabilities,
    };
  }, [currentAssets, inventory, currentLiabilities, totalDebt, totalEquity, netIncome, netSales, totalAssets]);

  return (
    <section className={styles.toolCard} id="ratio-calculator">
      <h2>
        <Translate id="ratios.title">Financial Ratio Benchmarks</Translate>
      </h2>
      <p className="text--secondary">
        <Translate id="ratios.description">
          Enter summary figures to compute liquidity, leverage, and profitability ratios. Ideal for quick Luxembourg SME diagnostics or
          classroom exercises.
        </Translate>
      </p>

      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="ratios.currentAssets">Current Assets (€)</Translate>
          </span>
          <input type="number" value={currentAssets} onChange={(e) => setCurrentAssets(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.inventory">Inventory (€)</Translate>
          </span>
          <input type="number" value={inventory} onChange={(e) => setInventory(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.currentLiabilities">Current Liabilities (€)</Translate>
          </span>
          <input type="number" value={currentLiabilities} onChange={(e) => setCurrentLiabilities(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.totalDebt">Total Debt (€)</Translate>
          </span>
          <input type="number" value={totalDebt} onChange={(e) => setTotalDebt(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.totalEquity">Total Equity (€)</Translate>
          </span>
          <input type="number" value={totalEquity} onChange={(e) => setTotalEquity(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.netIncome">Net Income (€)</Translate>
          </span>
          <input type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.netSales">Net Sales (€)</Translate>
          </span>
          <input type="number" value={netSales} onChange={(e) => setNetSales(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="ratios.totalAssets">Total Assets (€)</Translate>
          </span>
          <input type="number" value={totalAssets} onChange={(e) => setTotalAssets(e.target.value)} className="margin-top--xs" />
        </label>
      </div>

      <div className={styles.toolGrid}>
        <div>
          <h3>
            <Translate id="ratios.liquidity">Liquidity</Translate>
          </h3>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.currentRatio">Current Ratio</Translate>
            </span>
            <strong>{ratios.currentRatio ? ratios.currentRatio.toFixed(2) : '—'}x</strong>
          </div>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.quickRatio">Quick Ratio</Translate>
            </span>
            <strong>{ratios.quickRatio ? ratios.quickRatio.toFixed(2) : '—'}x</strong>
          </div>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.workingCapital">Working Capital</Translate>
            </span>
            <strong>{formatCurrency(ratios.workingCapital)}</strong>
          </div>
        </div>
        <div>
          <h3>
            <Translate id="ratios.leverage">Leverage</Translate>
          </h3>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.debtToEquity">Debt-to-Equity</Translate>
            </span>
            <strong>{ratios.debtToEquity ? ratios.debtToEquity.toFixed(2) : '—'}x</strong>
          </div>
        </div>
        <div>
          <h3>
            <Translate id="ratios.profitability">Profitability</Translate>
          </h3>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.netProfitMargin">Net Profit Margin</Translate>
            </span>
            <strong>{ratios.netMargin ? `${(ratios.netMargin * 100).toFixed(1)}%` : '—'}</strong>
          </div>
          <div className={styles.resultRow}>
            <span>
              <Translate id="ratios.returnOnAssets">Return on Assets</Translate>
            </span>
            <strong>{ratios.returnOnAssets ? `${(ratios.returnOnAssets * 100).toFixed(1)}%` : '—'}</strong>
          </div>
        </div>
      </div>
      <p className="margin-top--md text--secondary text--small">
        <Translate id="ratios.tip">
          Tip: Compare outputs to sector medians from STATEC or Luxembourg House of Entrepreneurship dashboards when coaching SMEs.
        </Translate>
      </p>
    </section>
  );
};

