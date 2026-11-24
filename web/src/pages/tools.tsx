import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import {
  BreakEvenCalculator,
  FinancialStatementGenerator,
  JournalEntryPractice,
  PCNLookup,
  PayrollCalculator,
  RatioCalculator,
  TAccountSimulator,
  VatCalculator,
} from '@site/src/components/interactive';

const TOOL_SECTIONS = [
  {id: 'vat-calculator', label: translate({id: 'tools.vat', message: 'VAT Calculator'})},
  {id: 'break-even', label: translate({id: 'tools.breakEven', message: 'Break-even Analysis'})},
  {id: 'payroll', label: translate({id: 'tools.payroll', message: 'Payroll Snapshot'})},
  {id: 'ratio-calculator', label: translate({id: 'tools.ratios', message: 'Financial Ratios'})},
  {id: 'financial-statement-generator', label: translate({id: 'tools.statements', message: 'Financial Statement Builder'})},
  {id: 'pcn-lookup', label: translate({id: 'tools.pcn', message: 'PCN Lookup'})},
  {id: 'journal-entry-practice', label: translate({id: 'tools.journal', message: 'Journal Entry Practice'})},
  {id: 't-account-simulator', label: translate({id: 'tools.taccounts', message: 'T-Account Simulator'})},
];

export default function ToolsPage(): JSX.Element {
  const pageTitle = translate({id: 'tools.title', message: 'Interactive Tools'});
  const pageDescription = translate({
    id: 'tools.subtitle',
    message: 'Browser-based accounting calculators and practice utilities tailored for Luxembourg SMEs. VAT calculator, payroll tools, financial ratio analyzer, and more.',
  });
  
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      keywords="Luxembourg accounting tools, VAT calculator, payroll calculator, financial ratios, accounting practice, PCN lookup, T-account simulator, break-even analysis">
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>
            <Translate id="tools.title">Interactive Tools for Luxembourg SMEs</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate id="tools.subtitle">
              All tools work offline inside Docusaurus, mirror the standalone HTML prototypes, and will later be embedded directly within
              relevant textbook sections.
            </Translate>
          </p>
          <div className="margin-top--md">
            <strong>
              <Translate id="tools.quickNav">Quick navigation:</Translate>
            </strong>
            <div className="margin-top--xs">
              {TOOL_SECTIONS.map((tool) => (
                <a key={tool.id} className="margin-right--md" href={`#${tool.id}`}>
                  {tool.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <VatCalculator />
        <BreakEvenCalculator />
        <PayrollCalculator />
        <RatioCalculator />
        <FinancialStatementGenerator />
        <PCNLookup />
        <JournalEntryPractice />
        <TAccountSimulator />
      </main>
    </Layout>
  );
}


