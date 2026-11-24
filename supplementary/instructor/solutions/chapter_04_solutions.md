# Solutions Manual - Chapter 4: The Adjustment Process

## Questions - Solutions

### Question 1: Why Adjusting Entries Are Necessary

**Answer:**

Adjusting entries are necessary even when all cash transactions have been properly recorded because:

1. **Accrual Basis Accounting Requirement:**
   - Luxembourg requires accrual basis accounting (PCN requirement)
   - Revenues must be recorded when **earned**, not when cash is received
   - Expenses must be recorded when **incurred**, not when cash is paid
   - Cash transactions don't capture these timing differences

2. **Time Period Matching:**
   - Financial statements cover specific periods (month, quarter, year)
   - Revenues and expenses must be matched to the correct period
   - Cash receipts/payments may occur in different periods than when revenues are earned or expenses are incurred

3. **Examples Requiring Adjustments:**
   - **Prepaid Expenses:** Insurance paid in January for the year - need to allocate expense to each month
   - **Accrued Expenses:** Salaries earned in November but paid in December - need to record expense in November
   - **Unearned Revenue:** Cash received in advance for services - need to recognize revenue when services are provided
   - **Depreciation:** Equipment cost allocated over its useful life - no cash transaction, but expense must be recorded
   - **Accrued Revenue:** Services provided but not yet billed - revenue earned but no cash received yet

4. **Compliance Requirements:**
   - PCN requires accrual basis accounting
   - Financial statements must accurately reflect period performance
   - Tax calculations depend on proper period matching
   - RCS filings must be accurate

**Example:** Marie pays €1,200 for annual insurance on January 1. All cash transactions are recorded correctly. However, at the end of each month, an adjusting entry is needed to record €100 of insurance expense (€1,200 ÷ 12 months), even though no cash changed hands in that month.

---

### Question 2: Four Main Types of Adjusting Entries

**Answer:**

The four main types of adjusting entries are:

**1. Prepaid Expenses (Deferred Expenses)**
- **Definition:** Expenses paid in advance that benefit future periods
- **Example:** Prepaid insurance, prepaid rent, supplies on hand
- **Adjusting Entry:** Debit Expense, Credit Prepaid Asset
- **Example Entry:**
```
614    Insurance Expense          €100
481    Prepaid Insurance                    €100
To record insurance expense for the month
```

**2. Unearned Revenues (Deferred Revenues)**
- **Definition:** Cash received in advance for services to be provided in the future
- **Example:** Advance payments for consulting services, subscriptions
- **Adjusting Entry:** Debit Unearned Revenue, Credit Revenue
- **Example Entry:**
```
482    Unearned Revenue          €1,000
703    Service Revenue                      €1,000
To record revenue earned from advance payment
```

**3. Accrued Expenses (Accrued Liabilities)**
- **Definition:** Expenses incurred but not yet paid
- **Example:** Accrued salaries, accrued interest, accrued utilities
- **Adjusting Entry:** Debit Expense, Credit Liability
- **Example Entry:**
```
6211   Salaries Expense          €2,500
4714   Salaries Payable                      €2,500
To record accrued salaries for the period
```

**4. Accrued Revenues (Accrued Assets)**
- **Definition:** Revenues earned but not yet received or billed
- **Example:** Services provided but not yet invoiced, interest earned but not received
- **Adjusting Entry:** Debit Asset (Accounts Receivable), Credit Revenue
- **Example Entry:**
```
4011   Accounts Receivable       €3,000
703    Service Revenue                      €3,000
To record revenue earned but not yet billed
```

**Additional Types:**
- **Depreciation:** Allocation of asset cost over useful life
- **Bad Debts:** Allowance for uncollectible accounts

---

### Question 3: Prepaid Expense vs. Accrued Expense

**Answer:**

**Prepaid Expense:**
- **Definition:** Expense paid in advance before it is incurred
- **Initial Recording:** Recorded as an **asset** (Prepaid Insurance, Prepaid Rent)
- **Adjusting Entry:** Transfer portion used/expired from asset to expense
- **Example:** Insurance paid for 12 months on January 1, recorded as Prepaid Insurance (asset). Each month, adjust to record Insurance Expense.

**Recording:**
- **Initial:** Debit Prepaid Insurance (Asset), Credit Cash
- **Adjusting:** Debit Insurance Expense, Credit Prepaid Insurance

**Accrued Expense:**
- **Definition:** Expense incurred but not yet paid
- **Initial Recording:** No initial recording (expense hasn't been paid yet)
- **Adjusting Entry:** Record expense and create liability
- **Example:** Salaries earned in November but paid in December. Adjusting entry records Salaries Expense and Salaries Payable.

**Recording:**
- **Initial:** No entry (expense not yet paid)
- **Adjusting:** Debit Salaries Expense, Credit Salaries Payable

**Key Differences:**
- **Prepaid:** Cash paid first, expense recognized later (asset → expense)
- **Accrued:** Expense recognized first, cash paid later (expense + liability)
- **Prepaid:** Asset account decreases, expense account increases
- **Accrued:** Expense account increases, liability account increases

---

### Question 4: Depreciation

**Answer:**

**Definition:**
Depreciation is the systematic allocation of the cost of a long-term asset over its useful life. It recognizes that assets lose value over time through use, wear, and obsolescence.

**Why Recorded as Adjusting Entry:**
1. **No Cash Transaction:** Depreciation doesn't involve cash - it's an allocation of cost already paid
2. **Time-Based:** Depreciation occurs as time passes, requiring periodic adjustment
3. **Period Matching:** Matches asset cost to periods of use (matching principle)
4. **Accrual Basis:** Required for accrual basis accounting

**How It Affects Balance Sheet:**
1. **Asset Value:** Original cost remains in asset account (e.g., Equipment €30,000)
2. **Contra-Asset:** Accumulated Depreciation account shows total depreciation to date (e.g., Accumulated Depreciation - Equipment €6,000)
3. **Net Book Value:** Balance Sheet shows net book value = Cost - Accumulated Depreciation (€30,000 - €6,000 = €24,000)

**Example:**
- Equipment cost: €30,000
- Useful life: 5 years
- Annual depreciation: €6,000 (€30,000 ÷ 5)
- Monthly depreciation: €500 (€6,000 ÷ 12)

**Adjusting Entry:**
```
633    Depreciation Expense      €500
2229   Accumulated Depreciation - Equipment    €500
To record monthly depreciation
```

**Balance Sheet Presentation:**
```
Equipment (222)                          €30,000
Less: Accumulated Depreciation (2229)     (6,000)
Net Equipment                               €24,000
```

**Impact:**
- Assets decrease (through contra-asset)
- Expenses increase (reduces net income)
- Equity decreases (through reduced net income)

---

### Question 5: Adjusted Trial Balance

**Answer:**

**Definition:**
An adjusted trial balance is a list of all accounts and their balances after adjusting entries have been posted to the ledger.

**How It Differs from Unadjusted Trial Balance:**

| Aspect | Unadjusted Trial Balance | Adjusted Trial Balance |
|--------|-------------------------|------------------------|
| **Timing** | Prepared before adjusting entries | Prepared after adjusting entries |
| **Account Balances** | Shows balances before adjustments | Shows balances after adjustments |
| **Completeness** | May not reflect all revenues/expenses | Reflects all revenues/expenses for period |
| **Accuracy** | May not match period performance | Accurately reflects period performance |
| **Purpose** | Verify posting accuracy | Prepare financial statements |

**Why It's Important:**
1. **Verification:** Confirms debits still equal credits after adjustments
2. **Financial Statement Preparation:** Provides accurate balances for Income Statement, Balance Sheet, Statement of Owner's Equity
3. **Period Accuracy:** Ensures revenues and expenses are in correct period
4. **Compliance:** Required for accurate financial statements (PCN requirement)
5. **Error Detection:** Helps identify errors in adjusting entries

**Example:**
- Unadjusted Trial Balance shows Prepaid Insurance €1,200
- After adjusting entry (€100 expense), Adjusted Trial Balance shows:
  - Prepaid Insurance: €1,100
  - Insurance Expense: €100

**Process:**
1. Prepare unadjusted trial balance
2. Make adjusting entries
3. Post adjusting entries to ledger
4. Prepare adjusted trial balance
5. Use adjusted trial balance to prepare financial statements

---

### Question 6: Adjusting Entries and Accounting Principles

**Answer:**

Adjusting entries ensure compliance with the matching principle and revenue recognition principle:

**Matching Principle:**
- **Requirement:** Expenses must be recorded in the same period as the revenues they helped generate
- **How Adjusting Entries Help:**
  - **Prepaid Expenses:** Allocate expense to period when benefit is received (e.g., rent expense matched to period of use)
  - **Accrued Expenses:** Record expenses in period incurred, even if not yet paid (e.g., salaries expense matched to period worked)
  - **Depreciation:** Allocate asset cost to periods of use (e.g., equipment depreciation matched to period equipment is used)

**Example:** Marie's restaurant uses €500 of supplies in November to generate November revenue. Adjusting entry records Supplies Expense in November, matching it with November revenue.

**Revenue Recognition Principle:**
- **Requirement:** Revenue must be recorded when earned, not when cash is received
- **How Adjusting Entries Help:**
  - **Unearned Revenue:** Recognize revenue when services are provided, not when cash is received (e.g., advance payment recognized as revenue when services delivered)
  - **Accrued Revenue:** Record revenue when earned, even if not yet received (e.g., services provided but not yet billed)

**Example:** Marie receives €3,000 advance payment for catering in October, but provides services in November. Adjusting entry in November recognizes revenue when services are provided, not when cash was received.

**Together:**
- Adjusting entries ensure revenues and expenses are in the correct period
- This provides accurate measure of profitability for each period
- Required for accrual basis accounting (Luxembourg requirement)
- Essential for accurate financial statements

---

### Question 7: Luxembourg VAT Adjustments

**Answer:**

**Why VAT Adjustments Are Necessary:**
1. **Period Matching:** VAT must be recorded in the period when the underlying transaction occurred
2. **Accrual Basis:** VAT on sales (VAT Payable) and VAT on purchases (VAT Recoverable) must be recorded when transactions occur, not when paid
3. **eCDF Filing:** VAT returns must be accurate for the period being reported
4. **Compliance:** Luxembourg tax authorities require accurate VAT reporting

**Types of VAT Adjustments:**

**1. Accrued VAT on Sales:**
- Sales made but VAT not yet recorded
- **Adjusting Entry:**
```
4011   Accounts Receivable       €1,170
7061   Sales Revenue                        €1,000
461411 VAT Payable                            €170
To record accrued revenue and VAT (€1,000 + 17% VAT)
```

**2. VAT Recoverable on Purchases:**
- Purchases made but VAT Recoverable not yet recorded
- **Adjusting Entry:**
```
361    Inventory                 €1,000
421611 VAT Recoverable            €170
44111  Accounts Payable                      €1,170
To record purchase and VAT Recoverable
```

**3. Net VAT Position:**
- Calculate net VAT: VAT Payable - VAT Recoverable
- If VAT Payable > VAT Recoverable: Net amount owed to tax authorities
- If VAT Recoverable > VAT Payable: Net amount recoverable from tax authorities

**Example:**
- VAT Payable: €3,400
- VAT Recoverable: €2,000
- Net VAT Payable: €1,400 (owed to tax authorities)

**PCN Accounts:**
- 461411: VAT Payable (Class 4: Third-Party Accounts)
- 421611: VAT Recoverable (Class 4: Third-Party Accounts)

**Compliance:**
- Must be adjusted before eCDF filing
- Must use correct VAT rates (3%, 8%, 14%, 17%)
- Must be supported by documentation
- Must be retained for 10 years

---

### Question 8: Social Charges Accruals in Luxembourg

**Answer:**

**What Are Social Charges:**
Social charges in Luxembourg include employee and employer contributions for:
- Health insurance
- Pension
- Dependency insurance
- Other social security benefits

**Rates (CCSS, as of 1 January 2026 — check ccss.lu each year):**
- Employee: 12.95% of gross salary (health 2.80% + 0.25%, pension 8.50%, dependency 1.40% — dependency strictly on gross minus 1/4 of the social minimum wage, simplified here to full gross)
- Employer: 12.57% of gross salary (health 2.80% + 0.25%, pension 8.50%, accident 0.65%, health at work 0.14%, Mutualité class 1 0.23%)

**How They Are Accrued:**

**1. Employee Social Charges:**
- Deducted from employee's gross salary
- Recorded when salaries are earned
- **Adjusting Entry:**
```
6211   Salaries Expense          €5,000
4714   Salaries Payable                      €4,352.50
4621   Social Charges Payable                  €647.50
To record salaries and employee social charges (€5,000 × 12.95% = €647.50)
```

**2. Employer Social Charges:**
- Additional cost to employer
- Recorded when salaries are earned
- **Adjusting Entry:**
```
623    Social Charges Expense    €628.50
4621   Social Charges Payable                  €628.50
To record employer social charges (€5,000 × 12.57% = €628.50)
```

**Accounts Involved:**
- 6211: Salaries Expense (Class 6: Expenses)
- 623: Social Charges Expense (Class 6: Expenses)
- 4621: Social Charges Payable (Class 4: Third-Party Accounts)
- 4714: Salaries Payable (Class 4: Third-Party Accounts)

**When Adjustments Are Made:**
- At period end (monthly, quarterly, or annually)
- When salaries are earned but not yet paid
- Before preparing financial statements
- Before filing tax returns

**Compliance:**
- Must be accrued in period earned
- Must use correct rates
- Must be paid by required deadlines
- Must be reported to social security authorities
- Must be retained for 10 years

---

### Question 9: Provisions

**Answer:**

**Definition:**
Provisions are estimated liabilities for future obligations that are probable and can be reasonably estimated. They represent expenses or losses that are likely to occur but the exact amount or timing is uncertain.

**PCN Classification:**
- Class 1: Provisions (18)
- Examples: 181 Provisions for Pensions, 182 Tax Provisions, 188 Other Provisions (e.g., warranties)

**Example for Luxembourg Business:**

**Provision for Warranty Costs:**
- A business sells products with warranty coverage
- Estimates that 2% of sales will require warranty repairs
- Sales for the period: €50,000
- Estimated warranty provision: €1,000 (€50,000 × 2%)

**Adjusting Entry:**
```
649    Warranty Expense          €1,000
188    Provisions for Warranty               €1,000
To record provision for estimated warranty costs
```

**Other Examples:**
- **Provision for Bad Debts:** Estimated uncollectible accounts receivable
- **Provision for Legal Claims:** Estimated costs of pending lawsuits
- **Provision for Restructuring:** Estimated costs of business restructuring
- **Provision for Environmental Cleanup:** Estimated environmental remediation costs

**Characteristics:**
- Based on reasonable estimates
- Recorded when obligation is probable
- Amount can be reasonably estimated
- Reviewed and adjusted regularly
- Disclosed in notes to financial statements

**Compliance:**
- Must follow PCN requirements
- Must be based on reasonable estimates
- Must be reviewed annually
- Must be disclosed in financial statements
- Must be retained for 10 years

---

### Question 10: Prepaid Rent Adjusting Entry

**Answer:**

**Transaction:** Business pays €6,000 for six months of rent in advance on October 1.

**Analysis:**
- Total prepaid: €6,000
- Period: 6 months
- Monthly rent: €1,000 (€6,000 ÷ 6)
- At end of October: 1 month has expired

**Initial Entry (October 1):**
```
481    Prepaid Rent              €6,000
5131   Cash                                  €6,000
To record prepayment of 6 months rent
```

**Adjusting Entry (End of October):**
```
6111   Rent Expense              €1,000
481    Prepaid Rent                          €1,000
To record rent expense for October (€6,000 ÷ 6 months = €1,000)
```

**PCN Account Numbers:**
- 481: Prepaid Rent (Class 4: Third-Party Accounts - Prepayments)
- 6111: Rent Expense (Class 6: Expenses)
- 5131: Cash (Class 5: Financial Accounts)

**After Adjustment:**
- Prepaid Rent balance: €5,000 (€6,000 - €1,000)
- Rent Expense for October: €1,000
- Remaining prepaid: 5 months (€5,000)

**Subsequent Months:**
- End of November: Debit Rent Expense €1,000, Credit Prepaid Rent €1,000
- End of December: Debit Rent Expense €1,000, Credit Prepaid Rent €1,000
- Continue until all 6 months are expensed

---

## Problems Set A - Solutions

### Problem A-1: Identifying Adjusting Entry Types

**Solution:**

a) **Insurance paid in advance, one month has expired**
- **Type:** Prepaid Expense
- **Adjusting Entry:** Debit Insurance Expense, Credit Prepaid Insurance
- **Reason:** Expense paid in advance, portion has expired

b) **Services provided but not yet billed to customer**
- **Type:** Accrued Revenue
- **Adjusting Entry:** Debit Accounts Receivable, Credit Service Revenue
- **Reason:** Revenue earned but not yet recorded

c) **Salaries earned by employees but not yet paid**
- **Type:** Accrued Expense
- **Adjusting Entry:** Debit Salaries Expense, Credit Salaries Payable
- **Reason:** Expense incurred but not yet paid

d) **Cash received in advance for services to be provided next month**
- **Type:** Unearned Revenue (if services not yet provided)
- **Adjusting Entry:** None needed until services are provided
- **Reason:** Cash received but services not yet provided (no revenue earned yet)
- **Note:** If question means services were provided, then: Debit Unearned Revenue, Credit Service Revenue

e) **Equipment depreciation for the month**
- **Type:** Depreciation (special type of prepaid expense)
- **Adjusting Entry:** Debit Depreciation Expense, Credit Accumulated Depreciation
- **Reason:** Allocation of asset cost over useful life

---

### Problem A-2: Prepaid Expenses

**Solution:**

**Situation:** Business pays €2,400 for 12 months of rent on January 1.

**a) Initial Entry (January 1):**
```
481    Prepaid Rent              €2,400
5131   Cash                                  €2,400
To record prepayment of 12 months rent (€2,400 ÷ 12 = €200/month)
```

**b) Adjusting Entry (End of January):**
```
6111   Rent Expense              €200
481    Prepaid Rent                          €200
To record rent expense for January (€2,400 ÷ 12 months = €200)
```

**After January adjustment:**
- Prepaid Rent: €2,200 (€2,400 - €200)
- Rent Expense: €200

**c) Adjusting Entry (End of February):**
```
6111   Rent Expense              €200
481    Prepaid Rent                          €200
To record rent expense for February
```

**After February adjustment:**
- Prepaid Rent: €2,000 (€2,200 - €200)
- Rent Expense: €400 (€200 + €200)

**PCN Account Numbers:**
- 481: Prepaid Rent (Class 4: Third-Party Accounts)
- 6111: Rent Expense (Class 6: Expenses)
- 5131: Cash (Class 5: Financial Accounts)

---

### Problem A-3: Accrued Expenses

**Solution:**

**Situation:** €10,000 loan at 8% annual interest, interest paid quarterly.

**Calculation:**
- Annual interest: €10,000 × 8% = €800
- Monthly interest: €800 ÷ 12 = €66.67 (or €800 ÷ 12 = €66.67)

**Adjusting Entry (End of Month):**
```
6552   Interest Expense          €66.67
4718   Interest Payable                      €66.67
To record accrued interest for one month (€10,000 × 8% ÷ 12 = €66.67)
```

**PCN Account Numbers:**
- 6552: Interest Expense (Class 6: Expenses)
- 4718: Interest Payable (Class 4: Third-Party Accounts)

**Note:** When interest is paid quarterly, the adjusting entries accumulate the liability, and the payment reduces both Interest Payable and Cash.

---

### Problem A-4: Unearned Revenue

**Solution:**

**Situation:** Business receives €9,000 on September 1 for services to be provided over 3 months.

**Calculation:**
- Total received: €9,000
- Period: 3 months
- Monthly revenue: €3,000 (€9,000 ÷ 3)

**a) Initial Entry (September 1):**
```
5131   Cash                       €9,000
482    Unearned Revenue                      €9,000
To record advance payment for 3 months of services
```

**b) Adjusting Entry (End of September):**
```
482    Unearned Revenue          €3,000
703    Service Revenue                      €3,000
To record revenue earned for September (€9,000 ÷ 3 months = €3,000)
```

**After September adjustment:**
- Unearned Revenue: €6,000 (€9,000 - €3,000)
- Service Revenue: €3,000

**PCN Account Numbers:**
- 482: Unearned Revenue (Class 4: Third-Party Accounts)
- 703: Service Revenue (Class 7: Revenue)
- 5131: Cash (Class 5: Financial Accounts)

**Subsequent Months:**
- End of October: Debit Unearned Revenue €3,000, Credit Service Revenue €3,000
- End of November: Debit Unearned Revenue €3,000, Credit Service Revenue €3,000

---

### Problem A-5: Depreciation

**Solution:**

**Situation:** Equipment costing €24,000, 4-year useful life, straight-line depreciation.

**Calculation:**
- Cost: €24,000
- Useful life: 4 years
- Annual depreciation: €24,000 ÷ 4 = €6,000
- Monthly depreciation: €6,000 ÷ 12 = €500

**Adjusting Entry (Monthly):**
```
633    Depreciation Expense      €500
2229   Accumulated Depreciation - Equipment    €500
To record monthly depreciation (€24,000 ÷ 4 years ÷ 12 months = €500)
```

**PCN Account Numbers:**
- 633: Depreciation Expense (Class 6: Expenses)
- 2229: Accumulated Depreciation - Equipment (Class 2: Fixed Assets - Contra-Asset)

**After 1 month:**
- Equipment (cost): €24,000
- Accumulated Depreciation: €500
- Net Book Value: €23,500

**After 1 year:**
- Equipment (cost): €24,000
- Accumulated Depreciation: €6,000
- Net Book Value: €18,000

---

## Problems Set B - Solutions

### Problem B-1: Complete Adjustment Process

**Solution:**

**Given Information:**
1. Prepaid Insurance: €1,800 paid for 12 months on November 1
2. Equipment: €36,000 cost, 5-year useful life, straight-line depreciation
3. Unearned Revenue: €6,000 received for 6 months of services on November 1
4. Accrued Salaries: €2,000 earned but not yet paid
5. Accrued Interest: €15,000 loan at 6% annual interest
6. Supplies: €3,000 on hand, €500 used during November

**Adjusting Entries:**

**1. Prepaid Insurance:**
- Monthly expense: €1,800 ÷ 12 = €150 (November is the first month of cover)
- Remaining prepaid: €1,800 - €150 = €1,650 (11 months, December–October)
```
614    Insurance Expense         €150
481    Prepaid Insurance                     €150
To record insurance expense for November
```

**2. Equipment Depreciation:**
- Annual depreciation: €36,000 ÷ 5 = €7,200
- Monthly depreciation: €7,200 ÷ 12 = €600
```
633    Depreciation Expense      €600
2229   Accumulated Depreciation - Equipment    €600
To record monthly depreciation (€36,000 ÷ 5 years ÷ 12 months = €600)
```

**3. Unearned Revenue:**
- Monthly revenue: €6,000 ÷ 6 = €1,000
- November is the first month of service: €1,000 earned
- Remaining unearned: €6,000 - €1,000 = €5,000
```
482    Unearned Revenue          €1,000
703    Service Revenue                      €1,000
To record revenue earned for November (€6,000 ÷ 6 months = €1,000)
```

**4. Accrued Salaries:**
```
6211   Salaries Expense          €2,000
4714   Salaries Payable                      €2,000
To record accrued salaries for November
```

**5. Accrued Interest:**
- Annual interest: €15,000 × 6% = €900
- Monthly interest: €900 ÷ 12 = €75
```
6552   Interest Expense          €75
4718   Interest Payable                      €75
To record accrued interest for November (€15,000 × 6% ÷ 12 = €75)
```

**6. Supplies Used:**
```
6185   Supplies Expense          €500
303    Supplies (or Inventory)                €500
To record supplies used during November
```

**PCN Account Numbers Summary:**
- 614: Insurance Expense (Class 6)
- 481: Prepaid Insurance (Class 4)
- 633: Depreciation Expense (Class 6)
- 2229: Accumulated Depreciation (Class 2)
- 482: Unearned Revenue (Class 4)
- 703: Service Revenue (Class 7)
- 6211: Salaries Expense (Class 6)
- 4714: Salaries Payable (Class 4)
- 6552: Interest Expense (Class 6)
- 4718: Interest Payable (Class 4)
- 6185: Supplies Expense (Class 6)
- 303: Supplies/Inventory (Class 3)

---

### Problem B-2: Adjusted Trial Balance

**Solution:**

**Unadjusted Trial Balance:**
- Prepaid Insurance: €1,800 (debit)
- Equipment: €36,000 (debit)
- Unearned Revenue: €6,000 (credit)
- Supplies: €3,000 (debit)
- Cash: €30,200 (debit)
- Bank Loan (1942): €15,000 (credit)
- Owner's Capital: €50,000 (credit)
- Check: debits 1,800 + 36,000 + 3,000 + 30,200 = €71,000 = credits 6,000 + 15,000 + 50,000 = €71,000 ✓

**Adjustments Made:**
1. Insurance Expense: +€150, Prepaid Insurance: -€150
2. Depreciation Expense: +€600, Accumulated Depreciation: +€600
3. Service Revenue: +€1,000, Unearned Revenue: -€1,000
4. Salaries Expense: +€2,000, Salaries Payable: +€2,000
5. Interest Expense: +€75, Interest Payable: +€75
6. Supplies Expense: +€500, Supplies: -€500

**Adjusted Trial Balance:**

```
Adjusted Trial Balance
November 30, 2024

Account                          Debit        Credit
─────────────────────────────────────────────────────
5131   Cash                       30,200
481    Prepaid Insurance           1,650
222    Equipment                  36,000
2229   Accumulated Depreciation - Equipment           600
303    Supplies                    2,500
482    Unearned Revenue                             5,000
4714   Salaries Payable                             2,000
4718   Interest Payable                                75
1942   Bank Loan                                   15,000
101    Owner's Capital                             50,000
614    Insurance Expense             150
633    Depreciation Expense          600
703    Service Revenue                             1,000
6211   Salaries Expense            2,000
6552   Interest Expense               75
6185   Supplies Expense              500
─────────────────────────────────────────────────────
Totals                          €73,675      €73,675
```

**Verification:** Debits 30,200 + 1,650 + 36,000 + 2,500 + 150 + 600 + 2,000 + 75 + 500 = €73,675; Credits 600 + 5,000 + 2,000 + 75 + 15,000 + 50,000 + 1,000 = €73,675 ✓

---

### Problem B-3: Financial Statements from Adjusted Trial Balance

**Solution:**

**a) Income Statement:**

```
Income Statement
For the Month Ended November 30, 2024

Revenue:
  Service Revenue (703)                    €1,000

Operating Expenses:
  Salaries Expense (6211)                    2,000
  Insurance Expense (614)                     150
  Depreciation Expense (633)                  600
  Interest Expense (6552)                       75
  Supplies Expense (6185)                      500
                                              ───────
Total Operating Expenses                        3,325

Net Loss                                       (€2,325)
```

**b) Statement of Owner's Equity:**

```
Statement of Owner's Equity
For the Month Ended November 30, 2024

Beginning Equity, November 1, 2024            €50,000
Less: Net Loss                                  2,325
                                              ───────
Ending Equity, November 30, 2024              €47,675
```

**c) Balance Sheet:**

```
Balance Sheet
As of November 30, 2024

ASSETS
Current Assets:
  Cash (5131)                             €30,200
  Prepaid Insurance (481)                   1,650
  Supplies (303)                            2,500
                                              ───────
Total Current Assets                           34,350

Noncurrent Assets:
  Equipment (222)                          36,000
  Less: Accumulated Depreciation (2229)        (600)
                                              ───────
Net Equipment                                  35,400

Total Assets                                  €69,750

LIABILITIES
Current Liabilities:
  Unearned Revenue (482)                   €5,000
  Salaries Payable (4714)                    2,000
  Interest Payable (4718)                       75
                                              ───────
Total Current Liabilities                       7,075

Noncurrent Liabilities:
  Bank Loan (1942)                         15,000
                                              ───────
Total Liabilities                              22,075

EQUITY
  Owner's Capital                             47,675
                                              ───────
Total Equity                                   47,675

Total Liabilities and Equity                  €69,750
```

**Check:** Total Assets €69,750 (34,350 + 35,400) = Liabilities €22,075 + Equity €47,675 = €69,750 ✓

---

### Problem B-4: Luxembourg-Specific Adjustments

**Solution:**

**Given Information:**
1. VAT Payable: €3,400 collected on sales
2. VAT Recoverable: €1,200 on purchases
3. Employee social charges: €1,500 (deducted from salaries)
4. Employer social charges: €1,600
5. Provision for warranty: €800 estimated

**Adjusting Entries:**

**1. VAT Settlement at Period End:**
Output VAT (€3,400) and input VAT (€1,200) were recorded when the sales and purchases occurred. At the end of the VAT period both accounts are cleared to the amount payable to the AED:
```
461411 VAT Payable (output VAT) €3,400
421611 VAT Recoverable (input VAT)           €1,200
461412 VAT Payable to AED                    €2,200
To clear output and input VAT for the period
```

**2. Employee Social Charges:**
Gross salaries are already charged to 6211; the employee share is withheld from the net pay owed to staff:
```
4714   Salaries Payable         €1,500
4621   Social Charges Payable                €1,500
To record employee social charges withheld from salaries
```

**3. Employer Social Charges:**
```
623    Social Charges Expense   €1,600
4621   Social Charges Payable                €1,600
To record employer social charges
```

**4. Provision for Warranty:**
```
649    Warranty Expense         €800
188    Provisions for Warranty               €800
To record provision for estimated warranty costs
```

**PCN Account Numbers:**
- 461411: VAT Payable (output VAT) (Class 4)
- 421611: VAT Recoverable (input VAT) (Class 4)
- 461412: VAT Payable to AED (Class 4)
- 4714: Salaries Payable (Class 4)
- 4621: Social Charges Payable (Class 4)
- 6211: Salaries Expense (Class 6)
- 623: Social Charges Expense (Class 6)
- 649: Warranty Expense (Class 6)
- 188: Other Provisions (Class 1)

**Net VAT Position:**
- VAT Payable: €3,400
- VAT Recoverable: €1,200
- Net VAT Payable: €2,200 (owed to tax authorities)

---

## Comprehensive Problem - Solution

### Comprehensive Problem 4: Complete Adjustment and Financial Statement Process

**Solution:**

#### 1. Adjusting Entries

**Adjustment 1: Prepaid Insurance**
- Paid: €2,400 for 12 months on November 1
- Months expired (November): 1 month
- Monthly expense: €2,400 ÷ 12 = €200
- November expense: €200
- Remaining: €2,400 - €200 = €2,200
```
614    Insurance Expense         €200
481    Prepaid Insurance                     €200
To record insurance expense for November
```

**Adjustment 2: Prepaid Rent**
- Paid: €3,600 for 6 months on November 1
- Months expired (November): 1 month
- Monthly expense: €3,600 ÷ 6 = €600
- November expense: €600
- Remaining: €3,600 - €600 = €3,000
```
6111   Rent Expense             €600
481    Prepaid Rent                          €600
To record rent expense for November
```

**Adjustment 3: Equipment Depreciation**
- Cost: €40,000
- Useful life: 5 years
- Annual depreciation: €40,000 ÷ 5 = €8,000
- Monthly depreciation: €8,000 ÷ 12 = €666.67
```
633    Depreciation Expense      €666.67
2229   Accumulated Depreciation - Equipment    €666.67
To record monthly depreciation
```

**Adjustment 4: Unearned Revenue**
- Received: €6,000 for 3 months on November 1
- Monthly revenue: €6,000 ÷ 3 = €2,000
- November revenue: €2,000
- Remaining: €6,000 - €2,000 = €4,000
```
482    Unearned Revenue          €2,000
703    Service Revenue                      €2,000
To record revenue earned for November
```

**Adjustment 5: Accrued Salaries**
```
6211   Salaries Expense          €2,500
4714   Salaries Payable                      €2,500
To record accrued salaries for last week of November
```

**Adjustment 6: Accrued Interest**
- Loan: €20,000
- Rate: 6% annual
- Annual interest: €20,000 × 6% = €1,200
- Monthly interest: €1,200 ÷ 12 = €100
```
6552   Interest Expense          €100
4718   Interest Payable                      €100
To record accrued interest for November
```

**Adjustment 7: Supplies Used**
```
6185   Supplies Expense          €800
361    Inventory                              €800
To record supplies used during November (supplies were held in inventory)
```

**Adjustment 8: VAT Adjustment**
```
4011   Accounts Receivable      €500
461411 VAT Payable                            €500
To record VAT invoiced on November sales but not yet recorded
```

**Adjustment 9: Social Charges**
```
623    Social Charges Expense   €2,000
4621   Social Charges Payable                €2,000
To record employer social charges for November
```

#### 2. T-Accounts (Selected Key Accounts)

**Prepaid Insurance:**
```
481    Prepaid Insurance
─────────────────────────
Unadj.  €2,400    Adj. 1   €200
─────────────────────────
Bal.    €2,200
```

**Prepaid Rent:**
```
481    Prepaid Rent
─────────────────────────
Unadj.  €3,600    Adj. 2   €600
─────────────────────────
Bal.    €3,000
```

**Equipment and Accumulated Depreciation:**
```
222    Equipment
─────────────────────────
Unadj.  €40,000
─────────────────────────
Bal.    €40,000

2229   Accumulated Depreciation - Equipment
─────────────────────────
            Adj. 3   €666.67
─────────────────────────
            Bal.     €666.67
```

**Unearned Revenue:**
```
482    Unearned Revenue
─────────────────────────
Adj. 4   €2,000    Unadj.  €6,000
─────────────────────────
            Bal.     €4,000
```

**Expense Accounts:**
```
614    Insurance Expense
─────────────────────────
Adj. 1   €200
─────────────────────────
Bal.     €200

6111   Rent Expense
─────────────────────────
Unadj.  €1,200
Adj. 2     €600
─────────────────────────
Bal.     €1,800

6211   Salaries Expense
─────────────────────────
Unadj.  €15,000
Adj. 5     €2,500
─────────────────────────
Bal.     €17,500
```

#### 3. Adjusted Trial Balance

```
Tech Solutions SARL
Adjusted Trial Balance
November 30, 2024

Account                          Debit        Credit
─────────────────────────────────────────────────────
5131   Cash                       €25,000
4011   Accounts Receivable         8,500    (8,000 + 500)
361    Inventory                   4,200    (5,000 - 800)
481    Prepaid Insurance           2,200    (2,400 - 200)
481    Prepaid Rent                3,000    (3,600 - 600)
222    Equipment                  40,000
2229   Accumulated Depreciation - Equipment            €666.67
44111  Accounts Payable                             12,000
461411 VAT Payable                                  2,000    (1,500 + 500)
4621   Social Charges Payable                       2,000
4714   Salaries Payable                             2,500
4718   Interest Payable                               100
482    Unearned Revenue                             4,000    (6,000 - 2,000)
1942   Bank Loan                                   20,000
101    Share Capital                               30,000
141    Retained Earnings                           10,700
703    Service Revenue                             27,000   (25,000 + 2,000)
6211   Salaries Expense            17,500   (15,000 + 2,500)
6111   Rent Expense                 1,800    (1,200 + 600)
6184   Utilities Expense            2,000
614    Insurance Expense              200
6188   Other Expenses               3,000
6185   Supplies Expense               800
633    Depreciation Expense           666.67
623    Social Charges Expense       2,000
6552   Interest Expense               100
─────────────────────────────────────────────────────
Totals                         €110,966.67  €110,966.67
```

**Check:** Unadjusted trial balance €105,200 = €105,200; the nine adjusting entries add €5,766.67 to each side, so the adjusted trial balance totals €110,966.67 on both sides.

#### 4. Financial Statements

**a) Income Statement:**

```
Tech Solutions SARL
Income Statement
For the Month Ended November 30, 2024

Revenue:
  Service Revenue (703)                   €27,000

Operating Expenses:
  Salaries Expense (6211)                  17,500
  Rent Expense (6111)                       1,800
  Utilities Expense (6184)                  2,000
  Insurance Expense (614)                    200
  Other Expenses (6188)                     3,000
  Supplies Expense (6185)                     800
  Depreciation Expense (633)                 666.67
  Social Charges Expense (623)             2,000
  Interest Expense (6552)                     100
                                              ───────
Total Operating Expenses                      28,066.67

Net Loss                                     (€1,066.67)
```

**b) Statement of Owner's Equity:**

```
Tech Solutions SARL
Statement of Owner's Equity
For the Month Ended November 30, 2024

Share Capital (101)                        €30,000

Retained Earnings:
  Beginning Balance, November 1, 2024         10,700
  Less: Net Loss                               1,066.67
                                              ───────
  Ending Balance, November 30, 2024            9,633.33

Total Equity                                  €39,633.33
```

**c) Balance Sheet:**

```
Tech Solutions SARL
Balance Sheet
As of November 30, 2024

ASSETS
Current Assets:
  Cash (5131)                               €25,000
  Accounts Receivable (4011)                 8,500
  Inventory (361)                           4,200
  Prepaid Insurance (481)                   2,200
  Prepaid Rent (481)                        3,000
                                              ───────
Total Current Assets                           42,900

Noncurrent Assets:
  Equipment (222)                          40,000
  Less: Accumulated Depreciation (2229)        (666.67)
                                              ───────
Net Equipment                                  39,333.33

Total Assets                                  €82,233.33

LIABILITIES
Current Liabilities:
  Accounts Payable (44111)                   €12,000
  VAT Payable (461411)                         2,000
  Social Charges Payable (4621)              2,000
  Salaries Payable (4714)                    2,500
  Interest Payable (4718)                      100
  Unearned Revenue (482)                    4,000
                                              ───────
Total Current Liabilities                      22,600

Noncurrent Liabilities:
  Bank Loan (1942)                          20,000
                                              ───────
Total Noncurrent Liabilities                  20,000

Total Liabilities                            €42,600

EQUITY
  Share Capital (101)                      €30,000
  Retained Earnings (141)                   9,633.33
                                              ───────
Total Equity                                   39,633.33

Total Liabilities and Equity                  €82,233.33
```

**Check:** Total Assets €82,233.33 = Liabilities €42,600 + Equity €39,633.33 ✓

#### 5. Verification

**a) Adjusted Trial Balance Balances:**
- Total Debits: €110,966.67
- Total Credits: €110,966.67
- ✓ Debits = Credits (every adjusting entry balances)

**b) Accounting Equation:**
- Assets: €82,233.33
- Liabilities: €42,600
- Equity: €39,633.33
- Liabilities + Equity: €82,233.33
- ✓ Assets = Liabilities + Equity

**c) Net Loss Flows to Statement of Owner's Equity:**
- Net Loss (€1,066.67) from Income Statement
- Reduces Retained Earnings in Statement of Owner's Equity
- ✓ Flows correctly

**d) Ending Equity Flows to Balance Sheet:**
- Ending Equity (€39,633.33) from Statement of Owner's Equity
- Appears in Balance Sheet Equity section
- ✓ Flows correctly

#### 6. Luxembourg Compliance

**How Adjustments Ensure Compliance:**

1. **Accrual Basis Accounting:**
   - All adjustments ensure revenues and expenses are in correct period
   - Required by PCN and Luxembourg Commercial Code

2. **PCN Compliance:**
   - All accounts use proper PCN classifications
   - Account numbers follow PCN structure
   - Financial statements follow PCN format

3. **VAT Compliance:**
   - VAT adjustments ensure VAT recorded in correct period
   - Required for accurate eCDF filing
   - Net VAT position accurately calculated

4. **Social Charges Compliance:**
   - Employer social charges properly accrued
   - Required for social security reporting
   - Must be paid by required deadlines

5. **Financial Statement Accuracy:**
   - Adjusted trial balance ensures accurate financial statements
   - Required for RCS filing
   - Must be accurate for tax reporting

6. **Documentation:**
   - All adjustments supported by calculations
   - Must be retained for 10 years
   - Subject to audit by tax authorities

---

## Cases - Solutions

### Case 4-1: The Forgotten Adjustments

**Solution:**

#### 1. Impact on Financial Statements

**Missing Adjustments Impact:**

**Prepaid Insurance:**
- **Impact:** Insurance expense understated, prepaid asset overstated
- **Income Statement:** Expenses too low, net income overstated
- **Balance Sheet:** Assets too high, equity too high

**Equipment Depreciation:**
- **Impact:** Depreciation expense missing, assets overstated
- **Income Statement:** Expenses too low, net income overstated
- **Balance Sheet:** Assets too high (no accumulated depreciation), equity too high

**Accrued Revenue:**
- **Impact:** Revenue understated, assets understated
- **Income Statement:** Revenue too low, net income understated
- **Balance Sheet:** Assets too low, equity too low

**Accrued Salaries:**
- **Impact:** Salaries expense understated, liabilities understated
- **Income Statement:** Expenses too low, net income overstated
- **Balance Sheet:** Liabilities too low, equity too high

**VAT Calculations:**
- **Impact:** VAT may be incorrect, affecting tax liability
- **Income Statement:** May affect net income if VAT on sales not recorded
- **Balance Sheet:** VAT Payable may be incorrect

**Overall Impact:**
- **Income Statement:** Likely shows higher net income than actual (expenses understated)
- **Balance Sheet:** Assets likely overstated, liabilities likely understated, equity overstated

#### 2. Income Statement Impact

**If Adjustments Not Made:**
- **Expenses Understated:** Insurance, depreciation, salaries not recorded
- **Revenue May Be Understated:** Accrued revenue not recorded
- **Net Income:** Likely overstated (expenses missing)
- **Misleading Performance:** Shows better performance than actual

**Example:**
- Actual expenses: €10,000
- Recorded expenses: €7,000 (missing €3,000)
- Net income overstated by €3,000

#### 3. Balance Sheet Impact

**If Adjustments Not Made:**
- **Assets Overstated:** Prepaid insurance not reduced, no accumulated depreciation, accrued revenue not recorded
- **Liabilities Understated:** Accrued salaries not recorded, VAT may be incorrect
- **Equity Overstated:** Due to overstated net income and overstated assets

**Example:**
- Prepaid Insurance: Shows €1,200, should show €1,100 (€100 expired)
- Equipment: Shows €30,000, should show €29,500 (after depreciation)
- Accrued Salaries: Not shown, should show €2,500 liability

#### 4. Compliance Implications

**Luxembourg Compliance Issues:**

1. **PCN Non-Compliance:**
   - Financial statements don't follow accrual basis
   - Accounts not properly adjusted
   - May violate PCN requirements

2. **RCS Filing Issues:**
   - Annual accounts may be inaccurate
   - RCS may reject filings
   - Potential fines (€250-€25,000, depending on the violation)

3. **Tax Implications:**
   - Income tax calculations incorrect
   - VAT returns may be inaccurate
   - Potential tax penalties and interest

4. **Legal Consequences:**
   - Violation of Commercial Code
   - Potential criminal charges for serious violations
   - Business reputation damage

5. **Audit Issues:**
   - Tax authorities may audit
   - Adjustments must be made retroactively
   - Additional penalties possible

#### 5. Setting Up Adjustment System

**Monthly Adjustment Checklist:**

1. **Review Prepaid Accounts:**
   - Calculate expired portion
   - Record adjusting entries

2. **Calculate Depreciation:**
   - Monthly depreciation for all fixed assets
   - Record adjusting entries

3. **Review Unearned Revenue:**
   - Identify services provided
   - Record revenue earned

4. **Accrue Expenses:**
   - Salaries earned but not paid
   - Interest accrued
   - Other accrued expenses

5. **VAT Review:**
   - Verify VAT on sales recorded
   - Verify VAT Recoverable recorded
   - Calculate net VAT position

6. **Social Charges:**
   - Accrue employer social charges
   - Verify employee social charges

7. **Provisions:**
   - Review and update provisions
   - Record new provisions if needed

**System Recommendations:**
- Use accounting software with adjustment reminders
- Create monthly checklist
- Set calendar reminders
- Review with accountant monthly
- Document all adjustments

#### 6. Tax Implications

**If Financial Statements Incorrect:**

1. **Income Tax:**
   - Net income overstated → tax overpaid (if corrected later, may get refund)
   - Net income understated → tax underpaid → penalties and interest

2. **VAT:**
   - Incorrect VAT calculations → incorrect VAT returns
   - Potential penalties for late/incorrect filing
   - Interest on unpaid VAT

3. **Social Charges:**
   - Incorrect social charges → incorrect reporting
   - Potential penalties from social security authorities

4. **Retroactive Corrections:**
   - Must file amended returns
   - May trigger audits
   - Additional penalties possible

5. **Best Practice:**
   - Make adjustments monthly
   - Ensure accuracy before filing
   - Consult with accountant
   - Maintain proper documentation

---

### Case 4-2: VAT and Social Charges Complexity

**Solution:**

#### 1. Tracking VAT by Rate
- Set up a separate tax code per rate in the software (17 % standard, 14 % intermediate, 8 % reduced, 3 % super-reduced) and, if useful, sub-accounts under 461411 (e.g., 4614111 for 17 %, 4614113 for 3 %)
- Post output VAT to 461411 and input VAT to 421611 when each invoice is recorded (accrual basis), not when cash moves
- At the end of each VAT period reconcile the VAT accounts with the VAT return boxes; the period is set by annual turnover (up to €112,000 annual return only; €112,000–€620,000 quarterly; above €620,000 monthly, due by the 15th of the following month)

#### 2. Social Charges Adjustments
- Each month, accrue gross salaries (Dr 6211, Cr 4714), withhold employee contributions (Dr 4714, Cr 4621) and wage tax (Dr 4714, Cr 46124), and accrue employer contributions (Dr 623, Cr 4621)
- Rates at 1 January 2026: employee 12.95 % (health 2.80 % + 0.25 %, pension 8.50 %, dependency 1.40 %); employer about 12.57 % for Mutualité class 1 (health 2.80 % + 0.25 %, pension 8.50 %, accident 0.65 %, health at work 0.14 %, Mutualité 0.23 %); the employer rate varies with the Mutualité class (0.23 % to 2.66 %)
- Make the adjustment at every month end, before the CCSS statement is paid

#### 3. EU vs. Non-EU Transactions
- **Services received from EU and non-EU suppliers (B2B):** the reverse charge applies: the Luxembourg business self-assesses Luxembourg VAT (Dr 421611, Cr 461411 for the same amount), which is neutral if the VAT is fully deductible
- **Goods bought from other EU countries:** intra-Community acquisitions, also self-assessed in the VAT return
- **Goods imported from outside the EU:** import VAT is due on importation and is deductible as input VAT
- **Sales to EU business customers:** usually exempt intra-Community supplies or reverse-charge services, reported in the recapitulative statement (EC sales list) by the 25th of the following month

#### 4. PCN Accounts Involved
- 461411 Output VAT, 421611 Input VAT, 461412 VAT payable to the AED, 421612 VAT receivable
- 6211 Gross salaries, 623 Employer social charges, 4621 CCSS payable, 46124 Wage tax withheld, 4714 Salaries payable

#### 5. Compliance Risks
- Wrong rates or missing reverse-charge entries → incorrect VAT returns, AED assessments, interest and penalties
- Unaccrued social charges → understated liabilities and expenses; late CCSS payments trigger interest
- Misstated annual accounts filed with the RCS and an incorrect tax return

#### 6. Systems and Processes
- Accounting software with VAT codes per rate and automatic reverse-charge postings
- Payroll software or a fiduciaire updated each January with the new CCSS rates
- Monthly close checklist: reconcile VAT and CCSS accounts to returns and statements
- Segregation of duties and review by an accountant before eCDF filing

---

*End of Chapter 4 Solutions*

