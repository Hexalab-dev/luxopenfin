---
id: volume1-chapter-09-section-9-2
title: "9.2 Account for Uncollectible Accounts Using the Balance Sheet and Income Statement Approaches"
description: "There are two approaches to accounting for uncollectible accounts:"
sidebar_position: 3
slug: /volume1/chapter-09/section-9-2
---

# 9.2 Account for Uncollectible Accounts Using the Balance Sheet and Income Statement Approaches

### Uncollectible Accounts

**Uncollectible accounts** (also called bad debts) are accounts receivable that cannot be collected from customers.

**Why Accounts Become Uncollectible:**
- Customer bankruptcy
- Customer financial difficulties
- Customer disputes
- Customer disappears
- Economic conditions

### Accounting for Uncollectible Accounts

There are two approaches to accounting for uncollectible accounts:

1. **Direct Write-Off Method**: Write off accounts when they become uncollectible
2. **Allowance Method**: Estimate uncollectible accounts and create allowance

**Luxembourg Requirement:** Allowance method is preferred and often required for accurate financial reporting.

### Direct Write-Off Method

**How it Works:**
- No estimate made
- Account written off when determined uncollectible
- Bad Debt Expense recorded at that time

**Example:**
- Customer account of €500 determined uncollectible on December 15

**Journal Entry:**
```
6351   Bad Debt Expense           €500
4011   Accounts Receivable                    €500
To write off uncollectible account
```

**PCN Account:**
- 6351: Bad Debt Expense (Class 6 - Expenses)

**Disadvantages:**
- Doesn't match expense with revenue (violates matching principle)
- Receivables overstated until write-off
- Not allowed under some accounting standards

### Allowance Method

**How it Works:**
- Estimate uncollectible accounts at end of period
- Create allowance account (contra-asset)
- Write off specific accounts when uncollectible
- Matches expense with revenue

**Two Approaches:**
1. **Balance Sheet Approach** (Aging of Receivables)
2. **Income Statement Approach** (Percentage of Sales)

### Balance Sheet Approach (Aging of Receivables)

**How it Works:**
- Analyze receivables by age
- Apply different percentages to each age category
- Calculate total estimated uncollectible
- Adjust allowance to this amount

**Aging Schedule Example:**

```
Aging of Accounts Receivable
December 31, 2024

Customer        Total      Current    1-30 Days   31-60 Days   60+ Days
─────────────────────────────────────────────────────────────────────
Customer A      €2,000     €2,000
Customer B      €1,500     €1,000      €500
Customer C      €3,000     €1,500      €1,000      €500
Customer D      €1,000                              €500        €500
─────────────────────────────────────────────────────────────────────
Totals          €7,500     €4,500      €1,500      €1,000      €500

Estimated Uncollectible %:    2%        5%         10%         20%
Estimated Uncollectible:      €90       €75        €100        €100
─────────────────────────────────────────────────────────────────────
Total Estimated Uncollectible: €365
```

**Calculation:**
- Current: €4,500 × 2% = €90
- 1-30 Days: €1,500 × 5% = €75
- 31-60 Days: €1,000 × 10% = €100
- 60+ Days: €500 × 20% = €100
- **Total: €365**

**Adjusting Entry:**

**If Allowance has €100 balance:**
- Need: €365
- Have: €100
- Adjustment: €265

**Journal Entry:**
```
6351   Bad Debt Expense           €265
4019   Allowance for Doubtful Accounts          €265
To adjust allowance to estimated uncollectible
```

**If Allowance has €400 balance:**
- Need: €365
- Have: €400
- Adjustment: -€35 (reduce allowance)

**Journal Entry:**
```
4019   Allowance for Doubtful Accounts €35
6351   Bad Debt Expense                          €35
To adjust allowance to estimated uncollectible
```

**PCN Accounts:**
- 4019: Allowance for Doubtful Accounts (Class 4 - Contra-Asset)
- 6351: Bad Debt Expense (Class 6 - Expense)

### Income Statement Approach (Percentage of Sales)

**How it Works:**
- Estimate bad debt expense as percentage of credit sales
- Calculate expense for period
- Add to allowance account

**Example:**
- Credit sales for year: €100,000
- Estimated bad debt percentage: 2%
- Bad debt expense: €100,000 × 2% = €2,000

**Journal Entry:**
```
6351   Bad Debt Expense         €2,000
4019   Allowance for Doubtful Accounts          €2,000
To record estimated bad debt expense
```

**Note:** This method focuses on matching expense with revenue, regardless of existing allowance balance.

### Writing Off Specific Accounts

**When Account is Determined Uncollectible:**

**Example:**
- Customer A's account of €500 is determined uncollectible

**Journal Entry:**
```
4019   Allowance for Doubtful Accounts €500
4011   Accounts Receivable                        €500
To write off Customer A's uncollectible account
```

**Important:** Write-off doesn't affect Bad Debt Expense. Expense was already recorded when allowance was created.

### Recovery of Written-Off Account

**If Customer Later Pays:**

**Step 1: Reverse Write-Off**
```
4011   Accounts Receivable        €500
4019   Allowance for Doubtful Accounts          €500
To reinstate account
```

**Step 2: Record Collection**
```
5131   Cash                        €500
4011   Accounts Receivable                    €500
To record collection of previously written-off account
```

### Presentation on Balance Sheet

**Accounts Receivable (Net):**

```
Balance Sheet

Current Assets:
  Accounts Receivable              €7,500
  Less: Allowance for Doubtful Accounts  (365)
  Accounts Receivable (Net)        €7,135
```

**Or:**
```
Current Assets:
  Accounts Receivable (Net)        €7,135
```

### Luxembourg VAT Considerations

**VAT on Uncollectible Accounts:**

**When Account is Written Off:**
- VAT may be recoverable if account is uncollectible
- Must follow Luxembourg VAT rules
- Proper documentation required
- May need to adjust VAT Payable

**Example:**
- Account of €1,170 (€1,000 + €170 VAT) written off
- If VAT is recoverable:

**Journal Entry:**
```
4019   Allowance for Doubtful Accounts €1,000
461411 VAT Payable (output VAT regularised) €170
4011   Accounts Receivable                        €1,170
To write off account: net amount against the allowance,
output VAT originally declared regularised
```

Check: €1,000 + €170 = €1,170. The allowance covers only the net amount (VAT is not provided for); the €170 output VAT declared on the original sale is regularised (reduces VAT payable) once the debt is definitively irrecoverable. Without an allowance (direct write-off), the net amount is charged to 6451 Bad debts written off: Debit 6451 €1,000, Debit 461411 €170, Credit 4011 €1,170.

**Luxembourg Compliance Note:**

For uncollectible accounts in Luxembourg:
- Allowance method is preferred
- Must estimate based on reasonable assumptions
- VAT recovery may be possible
- Must maintain proper documentation
- Affects taxable income
- Must comply with PCN requirements

### Think It Through

Why is the allowance method preferred over the direct write-off method? How does it better match expenses with revenues?

---
