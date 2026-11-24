---
id: volume1-chapter-05-section-5-1
title: "5.1 Describe and Prepare Closing Entries for a Business"
description: "1. Reset Temporary Accounts: Revenue and expense accounts are reset to zero for the next period"
sidebar_position: 2
slug: /volume1/chapter-05/section-5-1
---

# 5.1 Describe and Prepare Closing Entries for a Business

### What are Closing Entries?

**Closing entries** are journal entries made at the end of an accounting period to transfer balances from temporary accounts (revenues and expenses) to permanent accounts (equity/retained earnings).

### Purpose of Closing Entries

**Why Close Accounts?**

1. **Reset Temporary Accounts**: Revenue and expense accounts are reset to zero for the next period
2. **Update Retained Earnings**: Net income or loss is transferred to retained earnings
3. **Prepare for Next Period**: Accounts are ready to accumulate new period's transactions
4. **Complete the Accounting Cycle**: Closing is the final step before starting a new period

### Temporary vs. Permanent Accounts

**Temporary Accounts** (Closed at Period End):
- **Revenue Accounts** (Class 7): Reset to zero
- **Expense Accounts** (Class 6): Reset to zero
- **Income Summary** (temporary account used in closing process)

**Permanent Accounts** (Not Closed):
- **Asset Accounts** (Classes 2, 3, 4, 5): Balances carry forward
- **Liability Accounts** (Classes 1, 4): Balances carry forward
- **Equity Accounts** (Class 1): Updated but not reset

### The Closing Process

The closing process involves four steps:

1. **Close Revenue Accounts** → Income Summary
2. **Close Expense Accounts** → Income Summary
3. **Close Income Summary** → Retained Earnings
4. **Close Withdrawals/Distributions** → Retained Earnings (if applicable)

### Step 1: Close Revenue Accounts

**Purpose:** Transfer all revenue account balances to Income Summary

**Process:**
- Debit each revenue account for its balance
- Credit Income Summary for total revenues

**Example:**

From adjusted trial balance:
- Service Revenue (703): €13,000 credit balance

**Closing Entry:**
```
Date: 2024-11-30

703    Service Revenue              €13,000
142    Income Summary                           €13,000
To close revenue accounts to Income Summary
```

**PCN Note:** Income Summary is typically account 142 or a temporary account. Some businesses use a direct closing method.

**After Closing:**
- Service Revenue: €0
- Income Summary: €13,000 credit balance

### Step 2: Close Expense Accounts

**Purpose:** Transfer all expense account balances to Income Summary

**Process:**
- Credit each expense account for its balance
- Debit Income Summary for total expenses

**Example:**

From adjusted trial balance:
- Salaries Expense (6211): €9,500 debit balance
- Rent Expense (6111): €2,400 debit balance
- Utilities Expense (6184): €1,500 debit balance
- Insurance Expense (614): €100 debit balance
- Depreciation Expense (633): €500 debit balance
- Interest Expense (6552): €100 debit balance
- Supplies Expense (6185): €1,000 debit balance

**Total Expenses:** €15,100

**Closing Entry:**
```
Date: 2024-11-30

142    Income Summary               €15,100
6211   Salaries Expense                         €9,500
6111   Rent Expense                             2,400
6184   Utilities Expense                        1,500
6185   Supplies Expense                         1,000
614    Insurance Expense                          100
633    Depreciation Expense                       500
6552   Interest Expense                           100
To close expense accounts to Income Summary
```

**After Closing:**
- All expense accounts: €0
- Income Summary: €15,100 debit, €13,000 credit = €2,100 debit balance (Net Loss)

### Step 3: Close Income Summary

**Purpose:** Transfer net income or net loss to Retained Earnings

**Process:**
- If Net Income: Debit Income Summary, Credit Retained Earnings
- If Net Loss: Credit Income Summary, Debit Retained Earnings

**Example (Net Loss):**

Income Summary has €2,100 debit balance (Net Loss)

**Closing Entry:**
```
Date: 2024-11-30

141    Retained Earnings            €2,100
142    Income Summary                           €2,100
To close Income Summary (net loss) to Retained Earnings
```

**After Closing:**
- Income Summary: €0
- Retained Earnings: Decreased by €2,100 (net loss)

**If Net Income (Alternative Example):**

If Income Summary had €2,000 credit balance (Net Income):

**Closing Entry:**
```
Date: 2024-11-30

142    Income Summary               €2,000
141    Retained Earnings                        €2,000
To close Income Summary (net income) to Retained Earnings
```

### Step 4: Close Withdrawals/Distributions (If Applicable)

**Purpose:** Transfer owner withdrawals or distributions to Retained Earnings

**Note:** This step applies if the business has a withdrawals account (common in sole proprietorships) or makes distributions (in corporations).

**Example (Withdrawals):**

If owner withdrew €500 during the period:

**Closing Entry:**
```
Date: 2024-11-30

141    Retained Earnings            €500
10611  Owner's Withdrawals                      €500
To close withdrawals to Retained Earnings
```

**PCN Note:** Withdrawals are typically in Class 3 or handled through equity accounts, depending on entity type.

### Alternative: Direct Closing Method

Some businesses close directly to Retained Earnings without using Income Summary:

**Step 1: Close Revenues**
```
703    Service Revenue              €13,000
141    Retained Earnings                        €13,000
```

**Step 2: Close Expenses**
```
141    Retained Earnings            €15,100
6211   Salaries Expense                         €9,500
6111   Rent Expense                             2,400
[Other expenses...]
```

**Result:** Same as using Income Summary, but fewer entries.

### Complete Closing Example

Let's close the books for Le Petit Bistro using the Income Summary method:

**From Adjusted Trial Balance:**
- Service Revenue: €13,000 credit
- Total Expenses: €15,100 debit
- Net Loss: €2,100

**Closing Entries:**

**Entry 1: Close Revenues**
```
703    Service Revenue              €13,000
142    Income Summary                           €13,000
To close revenue accounts
```

**Entry 2: Close Expenses**
```
142    Income Summary               €15,100
6211   Salaries Expense                         €9,500
6111   Rent Expense                             2,400
6184   Utilities Expense                        1,500
6185   Supplies Expense                         1,000
614    Insurance Expense                          100
633    Depreciation Expense                       500
6552   Interest Expense                           100
To close expense accounts
```

**Entry 3: Close Income Summary**
```
141    Retained Earnings            €2,100
142    Income Summary                           €2,100
To close Income Summary (net loss) to Retained Earnings
```

### Posting Closing Entries to T-Accounts

**Service Revenue:**
```
Service Revenue (703)
─────────────────────────────
Nov 30  Close    €13,000 │  Nov 01-30  Revenue  €13,000
─────────────────────────────
Balance  €0
```

**Income Summary:**
```
Income Summary (142)
─────────────────────────────
Nov 30  Expenses  €15,100 │  Nov 30  Revenues   €13,000
                          │  Nov 30  Close       €2,100
─────────────────────────────
Balance  €0
```

**Retained Earnings:**
```
Retained Earnings (141)
─────────────────────────────
Nov 30  Net Loss  €2,100  │  Nov 01  Balance    €2,600
─────────────────────────────
        │  Balance  €500
```

### Luxembourg Compliance Note

In Luxembourg, closing entries must:
- Be made at period end (monthly, quarterly, or annually)
- Use proper PCN account classifications
- Be documented and retained for 10 years
- Be completed before filing financial statements
- Follow PCN standards for account treatment

### Think It Through

Why is it important to close revenue and expense accounts at the end of each period? What would happen if these accounts weren't closed?

---
