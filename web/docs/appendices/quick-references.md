---
id: appendices-quick-references
title: "Appendix G: Quick Reference Guides"
description: "This appendix provides quick reference tools and templates for common accounting tasks in Luxembourg SMEs."
sidebar_position: 7
slug: /appendices/quick-references
---

# Appendix G: Quick Reference Guides

## Overview

This appendix provides quick reference tools and templates for common accounting tasks in Luxembourg SMEs.

## Contents

1. Journal Entry Templates
2. VAT Calculation Worksheets
3. Payroll Calculation Tools
4. Financial Ratio Formulas
5. PCN Account Quick Reference
6. Common Transaction Mappings

---

## 1. Journal Entry Templates

### Sales Transaction (with VAT)

**Cash Sale:**
```
Debit:  518    Cash                    €1,170.00
Credit: 7061   Sales Revenue          €1,000.00
Credit: 461411 VAT Payable (17%)       €170.00
```

**Credit Sale:**
```
Debit:  4011   Accounts Receivable     €1,170.00
Credit: 7061   Sales Revenue          €1,000.00
Credit: 461411 VAT Payable (17%)       €170.00
```

### Purchase Transaction (with VAT)

**Cash Purchase:**
```
Debit:  6061   Purchases              €1,000.00
Debit:  421611 VAT Recoverable (17%)  €170.00
Credit: 518    Cash                   €1,170.00
```

**Credit Purchase:**
```
Debit:  6061   Purchases              €1,000.00
Debit:  421611 VAT Recoverable (17%)  €170.00
Credit: 44111  Accounts Payable       €1,170.00
```

### Restaurant Sale (3% VAT - Dine-In)

```
Debit:  5131   Bank (Cetrel)          €103.00
Credit: 7061   Sales Revenue          €100.00
Credit: 461411 VAT Payable (3%)        €3.00
```

### Payroll Entry

```
Debit:  6211   Salaries               €5,000.00
Debit:  623    Social Charges (Emp)  €1,500.00
Credit: 4714   Salaries Payable       €4,000.00
Credit: 4621   Social Security        €2,500.00
```

### Depreciation Entry

```
Debit:  633    Depreciation Expense   €500.00
Credit: 2229   Accum. Depreciation    €500.00
```

### VAT Settlement

```
Debit:  461411 VAT Payable            €1,000.00
Credit: 421611 VAT Recoverable        €800.00
Credit: 5131   Bank Account           €200.00
```

---

## 2. VAT Calculation Worksheets

### VAT Calculation Formula

**VAT Amount = Net Amount × VAT Rate**

**Total Amount = Net Amount + VAT Amount**

**Net Amount = Total Amount ÷ (1 + VAT Rate)**

### VAT Rate Quick Reference

| Rate | Use For |
|------|---------|
| 3% | Restaurant food and non-alcoholic drinks (dine-in and takeaway), food products, books, pharmaceuticals, hotel accommodation |
| 8% | Gas, electricity, hairdressing, small repairs |
| 14% | Certain wines up to 13% vol. (retail), some goods |
| 17% | Most goods and services (standard rate), beer and spirits, alcoholic drinks served in restaurants |

### VAT Calculation Examples

**Example 1: 17% VAT**
- Net Amount: €100.00
- VAT (17%): €17.00
- Total: €117.00

**Example 2: 3% VAT (Restaurant)**
- Net Amount: €100.00
- VAT (3%): €3.00
- Total: €103.00

**Example 3: Reverse Calculation**
- Total Amount: €117.00
- VAT Rate: 17%
- Net Amount: €117.00 ÷ 1.17 = €100.00
- VAT Amount: €17.00

### VAT Return Worksheet

| Description | Output VAT | Input VAT | Net VAT |
|-------------|------------|-----------|---------|
| Sales (17%) | €1,700.00 | | |
| Sales (3%) | €300.00 | | |
| Purchases (17%) | | €850.00 | |
| **Total** | **€2,000.00** | **€850.00** | **€1,150.00** |
| **VAT to Pay** | | | **€1,150.00** |

---

## 3. Payroll Calculation Tools

### Gross to Net Salary Calculation

*CCSS rates as of 1 January 2026 — check ccss.lu each year.*

**Employee Portion:**
- Health Insurance: 2.80% (benefits in kind) + 0.25% (cash benefits) of gross
- Pension: 8.50% of gross
- Dependency Insurance: 1.40% of (gross − 1/4 of the social minimum wage)
- **Total Employee: 12.95%** (approximation applying dependency to full gross)

**Employer Portion:**
- Health Insurance: 2.80% + 0.25% of gross
- Pension: 8.50% of gross
- Accident Insurance: 0.65% of gross (× bonus-malus factor)
- Health at Work (STM): 0.14% of gross
- Mutualité des employeurs: 0.23% (class 1) to 2.66% (class 4)
- **Total Employer: 12.57%** (class 1) to 15.00% (class 4)
- No employer dependency insurance

**Contribution ceiling:** 5 × social minimum wage = €13,518.70/month (not applicable to dependency insurance)

**Total Social Charges: about 25.5% of gross salary (Mutualité class 1)**

### Payroll Calculation Example

**Gross Salary: €5,000.00** (Mutualité class 1; dependency simplified to full gross)

**Employee Deductions:**
- Health Insurance (2.80% + 0.25%): €152.50
- Pension (8.50%): €425.00
- Dependency Insurance (1.40%): €70.00
- **Total Deductions: €647.50**

**Net Salary (before income tax withholding): €4,352.50**

**Employer Costs:**
- Gross Salary: €5,000.00
- Employer Social Charges (12.57%): €628.50
- **Total Cost: €5,628.50**

### Payroll Journal Entry Template

```
Debit:  6211   Salaries               [Gross Salary]
Debit:  623    Social Charges (Emp)   [Employer Portion]
Credit: 4714   Salaries Payable       [Net Salary]
Credit: 4621   Social Security        [Total Social Charges]
```

---

## 4. Financial Ratio Formulas

### Liquidity Ratios

**Current Ratio = Current Assets ÷ Current Liabilities**
- Good: > 1.5
- Acceptable: 1.0 - 1.5
- Poor: < 1.0

**Quick Ratio = (Current Assets - Inventory) ÷ Current Liabilities**
- Good: > 1.0
- Acceptable: 0.8 - 1.0
- Poor: < 0.8

### Profitability Ratios

**Gross Profit Margin = (Revenue - COGS) ÷ Revenue × 100**
- Restaurant: 60-70%
- Retail: 40-50%
- Services: 70-80%

**Net Profit Margin = Net Income ÷ Revenue × 100**
- Good: > 10%
- Acceptable: 5-10%
- Poor: < 5%

**Return on Assets (ROA) = Net Income ÷ Total Assets × 100**
- Good: > 10%
- Acceptable: 5-10%

**Return on Equity (ROE) = Net Income ÷ Equity × 100**
- Good: > 15%
- Acceptable: 10-15%

### Efficiency Ratios

**Inventory Turnover = COGS ÷ Average Inventory**
- Higher is better
- Restaurant: 50-100 times/year
- Retail: 4-8 times/year

**Accounts Receivable Turnover = Revenue ÷ Average Accounts Receivable**
- Higher is better
- Good: > 12 times/year

**Days Sales Outstanding (DSO) = (Accounts Receivable ÷ Revenue) × 365**
- Lower is better
- Good: < 30 days
- Acceptable: 30-45 days

### Solvency Ratios

**Debt to Equity = Total Liabilities ÷ Equity**
- Lower is better
- Good: < 1.0
- Acceptable: 1.0 - 2.0

**Debt to Assets = Total Liabilities ÷ Total Assets**
- Lower is better
- Good: < 0.5
- Acceptable: 0.5 - 0.7

---

## 5. PCN Account Quick Reference

### Common Accounts by Category

**Assets:**
- 20–29: Fixed Assets
- 30–39: Inventory
- 40: Accounts Receivable
- 516: Cash
- 513: Bank Accounts

**Liabilities:**
- 44: Accounts Payable
- 462: Social Security
- 421 / 461: Taxes (VAT, Income Tax)
- 4621 / 4714: Payroll

**Equity:**
- 10–13: Share Capital and Reserves
- 142: Current Year Profit/Loss

**Expenses:**
- 60: Purchases
- 61: External Services
- 62: Personnel
- 64 / 67: Taxes
- 63: Depreciation

**Revenue:**
- 70: Sales
- 703: Sales of Services
- 75: Financial Revenue

**VAT:**
- 461411: VAT Payable
- 421611: VAT Recoverable

---

## 6. Common Transaction Mappings

### Restaurant Transactions

| Transaction | Debit | Credit | VAT Account |
|------------|-------|--------|-------------|
| Cash Sale (Dine-In) | 5131 Bank | 7061 Sales | 461411 (3%) |
| Cash Sale (Takeaway) | 5131 Bank | 7061 Sales | 461411 (8%) |
| Cash Sale (Wine ≤13% vol.) | 5131 Bank | 7061 Sales | 461411 (14%) |
| Purchase Food | 6061 Purchases | 44111 Payables | 421611 (3%) |
| Purchase Wine (≤13% vol.) | 6061 Purchases | 44111 Payables | 421611 (14%) |

### Retail Transactions

| Transaction | Debit | Credit | VAT Account |
|------------|-------|--------|-------------|
| Cash Sale | 518 Cash | 7061 Sales | 461411 (17%) |
| Credit Sale | 4011 Receivables | 7061 Sales | 461411 (17%) |
| Purchase Merchandise | 6061 Purchases | 44111 Payables | 421611 (17%) |
| Inventory Adjustment | 361 Inventory | 6061 Purchases | - |

### Service Business Transactions

| Transaction | Debit | Credit | VAT Account |
|------------|-------|--------|-------------|
| Service Revenue | 4011 Receivables | 703 Sales | 461411 (17%) |
| Professional Fees | 6134 Services | 44111 Payables | 421611 (17%) |
| Office Supplies | 6185 Other Services | 44111 Payables | 421611 (17%) |

### Common Adjusting Entries

| Adjustment | Debit | Credit |
|------------|-------|--------|
| Accrued Salaries | 6211 Salaries | 4714 Salaries Payable |
| Prepaid Insurance | 481 Insurance | 481 Prepaid Expenses |
| Depreciation | 633 Depreciation | 2229 Accum. Depreciation |
| Bad Debt | 6351 Bad Debts | 4011 Receivables |
| VAT Accrual | 461411 VAT Payable | 421611 VAT Recoverable |

---

## Quick Calculation Tools

### Break-Even Point

**Break-Even Units = Fixed Costs ÷ (Selling Price - Variable Cost per Unit)**

**Break-Even Sales = Fixed Costs ÷ Contribution Margin Ratio**

**Contribution Margin = Selling Price - Variable Cost**

**Contribution Margin Ratio = Contribution Margin ÷ Selling Price**

### Markup vs. Margin

**Markup % = (Selling Price - Cost) ÷ Cost × 100**

**Margin % = (Selling Price - Cost) ÷ Selling Price × 100**

### Example:
- Cost: €80
- Selling Price: €100
- Markup: (€100 - €80) ÷ €80 = 25%
- Margin: (€100 - €80) ÷ €100 = 20%

---

## Resources

### Online Calculators
- VAT Calculator: Available on Guichet.lu
- Payroll Calculator: Available from social security administration
- Financial Ratio Calculators: Various online tools

### Software Tools
- Excel templates available in supplementary materials
- Accounting software typically includes built-in calculators

---

## Notes

- All templates are examples; adapt to your specific needs
- Verify calculations with official sources
- Consult professional advisors for complex situations
- Keep these references handy for daily accounting tasks

