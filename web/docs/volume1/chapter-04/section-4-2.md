---
id: volume1-chapter-04-section-4-2
title: "4.2 Discuss the Adjustment Process and Illustrate Common Types of Adjusting Entries"
description: "There are four main types of adjusting entries:"
sidebar_position: 3
slug: /volume1/chapter-04/section-4-2
---

# 4.2 Discuss the Adjustment Process and Illustrate Common Types of Adjusting Entries

### Types of Adjusting Entries

There are four main types of adjusting entries:

1. **Prepaid Expenses** (Deferred Expenses)
2. **Unearned Revenues** (Deferred Revenues)
3. **Accrued Expenses** (Accrued Liabilities)
4. **Accrued Revenues** (Accrued Assets)

Additionally, there are:
5. **Depreciation** (special type of prepaid expense)
6. **Bad Debts** (allowance for doubtful accounts)

Let's examine each type in detail.

### Type 1: Prepaid Expenses (Deferred Expenses)

**Definition:** Expenses paid in advance that will benefit future periods.

**Examples:**
- Prepaid insurance
- Prepaid rent
- Supplies on hand
- Prepaid advertising

**Initial Recording:** Recorded as an **asset** when paid

**Adjusting Entry:** Transfer portion used/expired to **expense**

**Example 1: Prepaid Insurance**

**Situation:** Marie pays €1,200 for one year of insurance on January 1, 2024. The policy covers January 1 through December 31.

**Initial Entry (January 1):**
```
481    Prepaid Insurance (Asset)    €1,200
5131   Cash                                      €1,200
To record payment of annual insurance
```

**Adjusting Entry (End of each month):**
Each month, €100 (€1,200 ÷ 12 months) expires and becomes an expense.

**Adjusting Entry (End of November):**
```
614    Insurance Expense            €100
481    Prepaid Insurance            €100
To record insurance expense for November
(€1,200 ÷ 12 months = €100/month)
```

**PCN Accounts:**
- 614: Insurance Expense (Class 6)
- 481: Prepaid Expenses (Class 4) or keep as 481 with separate tracking

**After Adjustment:**
- Prepaid Insurance (Asset): €200 remaining (€1,200 - €1,000 used)
- Insurance Expense: €100 for November

**Example 2: Prepaid Rent**

**Situation:** Restaurant pays €2,400 for three months' rent in advance on November 1.

**Initial Entry (November 1):**
```
481    Prepaid Rent (Asset)         €2,400
5131   Cash                                      €2,400
To record prepayment of three months' rent
```

**Adjusting Entry (End of November):**
One month (€800) has been used.

```
6111   Rent Expense                 €800
481    Prepaid Rent                             €800
To record rent expense for November
(€2,400 ÷ 3 months = €800/month)
```

**PCN Accounts:**
- 6111: Rent Expense (Class 6)
- 481: Prepaid Expenses (Class 4)

### Type 2: Unearned Revenues (Deferred Revenues)

**Definition:** Cash received in advance for services to be provided in the future.

**Examples:**
- Advance payments for services
- Gift certificates sold
- Subscription revenue received in advance
- Deposits received

**Initial Recording:** Recorded as a **liability** when cash is received

**Adjusting Entry:** Transfer portion earned to **revenue**

**Example: Unearned Service Revenue**

**Situation:** Restaurant receives €3,000 on November 1 for catering services to be provided over three months (November, December, January).

**Initial Entry (November 1):**
```
5131   Cash                         €3,000
482    Unearned Revenue (Liability)            €3,000
To record advance payment for catering services
```

**Adjusting Entry (End of November):**
One month (€1,000) has been earned.

```
482    Unearned Revenue             €1,000
703    Service Revenue                          €1,000
To record revenue earned in November
(€3,000 ÷ 3 months = €1,000/month)
```

**PCN Accounts:**
- 482: Unearned Revenue/Deferred Income (Class 4)
- 703: Service Revenue (Class 7)

**After Adjustment:**
- Unearned Revenue (Liability): €2,000 remaining
- Service Revenue: €1,000 earned in November

### Type 3: Accrued Expenses (Accrued Liabilities)

**Definition:** Expenses incurred but not yet paid or recorded.

**Examples:**
- Accrued salaries/wages
- Accrued interest
- Accrued utilities
- Accrued taxes

**Initial Recording:** No entry made (expense not yet recorded)

**Adjusting Entry:** Record **expense** and **liability**

**Example 1: Accrued Salaries**

**Situation:** Restaurant pays employees every two weeks. The pay period ends on November 30, but employees won't be paid until December 5. Salaries for the last week of November total €1,500.

**Adjusting Entry (End of November):**
```
6211   Salaries Expense             €1,500
4714   Salaries Payable (Liability)            €1,500
To record accrued salaries for last week of November
```

**PCN Accounts:**
- 6211: Salaries Expense (Class 6)
- 4714: Salaries Payable (Class 4)

**Payment Entry (December 5):**
```
4714   Salaries Payable             €1,500
5131   Cash                                      €1,500
To record payment of accrued salaries
```

**Example 2: Accrued Interest**

**Situation:** Restaurant has a €20,000 bank loan at 6% annual interest. Interest is paid quarterly, but we need to accrue interest for November.

**Calculation:**
- Annual interest: €20,000 × 6% = €1,200
- Monthly interest: €1,200 ÷ 12 = €100

**Adjusting Entry (End of November):**
```
6552   Interest Expense             €100
4718   Interest Payable (Liability)             €100
To record accrued interest for November
```

**PCN Accounts:**
- 6552: Interest Expense (Class 6)
- 4718: Other Payables (Class 4) or specific interest payable account

### Type 4: Accrued Revenues (Accrued Assets)

**Definition:** Revenues earned but not yet received or recorded.

**Examples:**
- Services provided but not yet billed
- Interest earned but not yet received
- Rent earned but not yet collected

**Initial Recording:** No entry made (revenue not yet recorded)

**Adjusting Entry:** Record **revenue** and **asset** (receivable)

**Example: Accrued Service Revenue**

**Situation:** Restaurant provides catering services in November but won't bill the client until December. The service is worth €2,000.

**Adjusting Entry (End of November):**
```
4011   Accounts Receivable (Asset)  €2,000
703    Service Revenue                          €2,000
To record revenue earned but not yet billed
```

**PCN Accounts:**
- 4011: Accounts Receivable (Class 4)
- 703: Service Revenue (Class 7)

**Billing Entry (December):**
```
4011   Accounts Receivable          €2,000
703    Service Revenue                          €2,000
(Already recorded, or create invoice)
```

### Type 5: Depreciation

**Definition:** Systematic allocation of the cost of a long-term asset over its useful life.

**Why it's needed:** Assets like equipment lose value over time. Depreciation allocates this cost to the periods that benefit from the asset.

**Characteristics:**
- Non-cash expense
- Reduces asset value (via accumulated depreciation)
- Matches expense with revenue generated by asset

**Example: Equipment Depreciation**

**Situation:** Restaurant has equipment costing €30,000 with a useful life of 5 years (60 months). Using straight-line depreciation.

**Calculation:**
- Monthly depreciation: €30,000 ÷ 60 months = €500/month

**Adjusting Entry (End of each month):**
```
633    Depreciation Expense         €500
2229   Accumulated Depreciation - Equipment     €500
To record monthly depreciation on equipment
```

**PCN Accounts:**
- 633: Depreciation Expense (Class 6)
- 2229: Accumulated Depreciation - Equipment (Class 2)

**Note:** The equipment account (222) stays at original cost. Accumulated Depreciation is a contra-asset account that reduces the asset's book value.

**Balance Sheet Presentation:**
```
Equipment (222)                  €30,000
Less: Accumulated Depreciation      (5,500)  (11 months × €500)
Book Value                          €24,500
```

### Type 6: Bad Debts (Allowance for Doubtful Accounts)

**Definition:** Estimated amount of accounts receivable that may not be collected.

**Why it's needed:** Some customers may not pay. The allowance method estimates uncollectible accounts and matches the expense with the period of sale.

**Example: Allowance for Doubtful Accounts**

**Situation:** Restaurant has €10,000 in accounts receivable. Based on past experience, 2% may be uncollectible.

**Calculation:**
- Estimated bad debts: €10,000 × 2% = €200

**Adjusting Entry (End of period):**
```
6351   Bad Debt Expense             €200
4019   Allowance for Doubtful Accounts          €200
To record estimated uncollectible accounts
```

**PCN Accounts:**
- 6351: Bad Debt Expense (Class 6)
- 4019: Allowance for Doubtful Accounts (Class 4 - contra-asset)

**Balance Sheet Presentation:**
```
Accounts Receivable (4011)        €10,000
Less: Allowance for Doubtful Accounts (200)
Net Accounts Receivable             €9,800
```

### Summary of Adjusting Entry Types

| Type | Initial Entry | Adjusting Entry | Accounts Affected |
|------|---------------|-----------------|-------------------|
| Prepaid Expense | Asset | Asset ↓, Expense ↑ | Asset, Expense |
| Unearned Revenue | Liability | Liability ↓, Revenue ↑ | Liability, Revenue |
| Accrued Expense | None | Expense ↑, Liability ↑ | Expense, Liability |
| Accrued Revenue | None | Asset ↑, Revenue ↑ | Asset, Revenue |
| Depreciation | Asset (at cost) | Expense ↑, Contra-Asset ↑ | Expense, Accumulated Depreciation |
| Bad Debts | None | Expense ↑, Contra-Asset ↑ | Expense, Allowance |

### Luxembourg Compliance Note

All adjusting entries in Luxembourg must:
- Follow accrual basis accounting
- Use proper PCN account classifications
- Be supported by calculations
- Be documented and retained
- Be made before filing financial statements

### Think It Through

A business pays €6,000 for six months of rent in advance on October 1. What adjusting entry is needed at the end of October? What accounts are affected, and what are the PCN account numbers?

---
