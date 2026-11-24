import React, {useMemo, useState} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {formatCurrency, parseAmount} from './utils';

export const BreakEvenCalculator = (): JSX.Element => {
  const [fixedCosts, setFixedCosts] = useState('15000');
  const [pricePerUnit, setPricePerUnit] = useState('25');
  const [variableCostPerUnit, setVariableCostPerUnit] = useState('14');
  const [targetProfit, setTargetProfit] = useState('5000');
  const [expectedUnits, setExpectedUnits] = useState('1200');

  const analysis = useMemo(() => {
    const fixed = parseAmount(fixedCosts);
    const price = parseAmount(pricePerUnit);
    const variable = parseAmount(variableCostPerUnit);
    const profit = Math.max(parseAmount(targetProfit), 0);
    const expected = Math.max(parseAmount(expectedUnits), 0);

    const contributionMargin = price - variable;
    if (contributionMargin <= 0) {
      return null;
    }

    const breakEvenUnits = fixed / contributionMargin;
    const breakEvenRevenue = breakEvenUnits * price;
    const targetUnits = profit > 0 ? (fixed + profit) / contributionMargin : 0;
    const marginOfSafetyUnits = expected - breakEvenUnits;
    const marginOfSafetyPct = expected > 0 ? (marginOfSafetyUnits / expected) * 100 : 0;

    return {
      breakEvenUnits,
      breakEvenRevenue,
      targetUnits,
      targetRevenue: targetUnits * price,
      contributionMargin,
      contributionRatio: contributionMargin / price,
      marginOfSafetyUnits,
      marginOfSafetyPct,
    };
  }, [fixedCosts, pricePerUnit, variableCostPerUnit, targetProfit, expectedUnits]);

  return (
    <section className={styles.toolCard} id="break-even">
      <h2>
        <Translate id="breakeven.title">Break-Even & Sensitivity</Translate>
      </h2>
      <p className="text--secondary margin-bottom--md">
        <Translate id="breakeven.description">
          Quickly estimate Luxembourg SME cost structures. Enter monthly values to understand the unit economics behind new
          products or services.
        </Translate>
      </p>

      <div className={styles.inlineFields}>
        <label>
          <span className="text--bold">
            <Translate id="breakeven.fixedCosts">Fixed Costs (€)</Translate>
          </span>
          <input type="number" min="0" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="breakeven.pricePerUnit">Selling Price / Unit (€)</Translate>
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            className="margin-top--xs"
          />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="breakeven.variableCostPerUnit">Variable Cost / Unit (€)</Translate>
          </span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={variableCostPerUnit}
            onChange={(e) => setVariableCostPerUnit(e.target.value)}
            className="margin-top--xs"
          />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="breakeven.targetProfit">Target Profit (€)</Translate>
          </span>
          <input type="number" min="0" value={targetProfit} onChange={(e) => setTargetProfit(e.target.value)} className="margin-top--xs" />
        </label>
        <label>
          <span className="text--bold">
            <Translate id="breakeven.expectedUnits">Expected Sales Units</Translate>
          </span>
          <input
            type="number"
            min="0"
            value={expectedUnits}
            onChange={(e) => setExpectedUnits(e.target.value)}
            className="margin-top--xs"
          />
        </label>
      </div>

      {!analysis ? (
        <div className="alert alert--danger margin-top--md">
          <Translate id="breakeven.errorMessage">
            Selling price must be higher than variable cost to compute a contribution margin.
          </Translate>
        </div>
      ) : (
        <div className={styles.toolGrid}>
          <div>
            <h3>
              <Translate id="breakeven.snapshotTitle">Break-Even Snapshot</Translate>
            </h3>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.contributionMargin">Contribution Margin / Unit</Translate>
              </span>
              <strong>{formatCurrency(analysis.contributionMargin)}</strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.contributionRatio">Contribution Ratio</Translate>
              </span>
              <strong>{(analysis.contributionRatio * 100).toFixed(1)}%</strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.breakEvenUnits">Break-Even Units</Translate>
              </span>
              <strong>
                {analysis.breakEvenUnits.toFixed(0)} {translate({id: 'breakeven.units', message: 'units'})}
              </strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.breakEvenRevenue">Break-Even Revenue</Translate>
              </span>
              <strong>{formatCurrency(analysis.breakEvenRevenue)}</strong>
            </div>
          </div>

          <div>
            <h3>
              <Translate id="breakeven.targetTitle">Target & Safety</Translate>
            </h3>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.targetUnits">Units Needed for Target Profit</Translate>
              </span>
              <strong>
                {analysis.targetUnits ? `${analysis.targetUnits.toFixed(0)} ${translate({id: 'breakeven.units', message: 'units'})}` : '—'}
              </strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.targetRevenue">Revenue Needed for Target Profit</Translate>
              </span>
              <strong>{analysis.targetUnits ? formatCurrency(analysis.targetRevenue) : '—'}</strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.marginOfSafetyUnits">Margin of Safety (units)</Translate>
              </span>
              <strong>
                {analysis.marginOfSafetyUnits.toFixed(0)} {translate({id: 'breakeven.units', message: 'units'})}
              </strong>
            </div>
            <div className={styles.resultRow}>
              <span>
                <Translate id="breakeven.marginOfSafetyPct">Margin of Safety (%)</Translate>
              </span>
              <strong>{analysis.marginOfSafetyPct.toFixed(1)}%</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

