---
id: volume1-chapter-03-section-3-5
title: "3.5 Use Journal Entries to Record Transactions and Post to T-Accounts"
description: "A journal entry is the formal recording of a transaction in the accounting system. In Luxembourg, journal entries must include PCN account numbers and..."
sidebar_position: 6
slug: /volume1/chapter-03/section-3-5
---

# 3.5 Use Journal Entries to Record Transactions and Post to T-Accounts

### Journal Entries

A **journal entry** is the formal recording of a transaction in the accounting system. In Luxembourg, journal entries must include PCN account numbers and proper classifications.

### Journal Entry Format

**Standard Format:**
```
Date: YYYY-MM-DD

Account Name (Account Number)        Debit      Credit
─────────────────────────────────────────────────────
Account to be Debited (PCN no.)       €X,XXX
Account to be Credited (PCN no.)                €X,XXX
Description of transaction
```

### Rules for Journal Entries

1. **Every entry must have at least one debit and one credit**
2. **Total debits must equal total credits**
3. **Debits are recorded first, then credits (indented)**
4. **Include PCN account numbers**
5. **Include clear description**

### Common Journal Entry Examples

#### Example 1: Owner Investment

**Transaction:** Owner invests €20,000 cash in the business.

**Journal Entry:**
```
Date: 2024-11-01

5131   Cash (Class 5)                €20,000
101    Share Capital (Class 1)                €20,000
To record owner investment
```

#### Example 2: Purchase Equipment for Cash

**Transaction:** Purchase €8,000 equipment, paying cash.

**Journal Entry:**
```
Date: 2024-11-05

222    Equipment (Class 2)           €8,000
5131   Cash (Class 5)                         €8,000
To record purchase of equipment
```

#### Example 3: Purchase Inventory on Credit

**Transaction:** Purchase €3,000 inventory on credit from supplier.

**Journal Entry:**
```
Date: 2024-11-10

361    Inventory (Class 3)           €3,000
44111  Accounts Payable (Class 4)             €3,000
To record purchase of inventory on credit
```

#### Example 4: Sale with VAT (Cash)

**Transaction:** Sell services for €2,000 (excluding VAT), receiving cash. VAT rate 17%.

**Journal Entry:**
```
Date: 2024-11-15

5131   Cash (Class 5)                €2,340
703    Service Revenue (Class 7)              €2,000
461411 VAT Payable (Class 4)                    €340
To record cash sale with VAT (17%)
```

#### Example 5: Sale on Credit

**Transaction:** Sell goods for €1,500 (excluding VAT) on credit. VAT rate 17%.

**Journal Entry:**
```
Date: 2024-11-18

4011   Accounts Receivable (Class 4) €1,755
7061   Sales Revenue (Class 7)                €1,500
461411 VAT Payable (Class 4)                    €255
To record credit sale with VAT (17%)
```

#### Example 6: Pay Expense

**Transaction:** Pay €1,200 rent expense.

**Journal Entry:**
```
Date: 2024-11-20

6111   Rent Expense (Class 6)        €1,200
5131   Cash (Class 5)                         €1,200
To record payment of rent
```

#### Example 7: Purchase with Recoverable VAT

**Transaction:** Purchase €5,000 equipment (excluding VAT), paying cash. VAT 17%, recoverable.

**Journal Entry:**
```
Date: 2024-11-22

222    Equipment (Class 2)           €5,000
421611 VAT Recoverable (Class 4)       €850
5131   Cash (Class 5)                         €5,850
To record purchase of equipment with recoverable VAT
```

#### Example 8: Pay Accounts Payable

**Transaction:** Pay €2,000 to supplier for previous purchase.

**Journal Entry:**
```
Date: 2024-11-25

44111  Accounts Payable (Class 4)    €2,000
5131   Cash (Class 5)                         €2,000
To record payment to supplier
```

### T-Accounts

**T-accounts** are visual representations of ledger accounts, shaped like the letter "T".

**Format:**
```
Account Name (Account Number)
─────────────────────────────
        Debit        Credit
─────────────────────────────
[Entries]    │    [Entries]
─────────────────────────────
Balance      │    Balance
```

**Rules:**
- Left side = Debit
- Right side = Credit
- Normal balance on the side that increases the account

### Posting to T-Accounts

Let's post the journal entries above to T-accounts:

#### Cash Account

```
Cash (5131)
─────────────────────────────
Nov 01  J1    €20,000  │
Nov 15  J4     €2,340  │  Nov 05  J2     €8,000
                       │  Nov 20  J6     €1,200
                       │  Nov 22  J7     €5,850
                       │  Nov 25  J8     €2,000
─────────────────────────────
Balance  €5,290
```

#### Equipment Account

```
Equipment (222)
─────────────────────────────
Nov 05  J2     €8,000  │
Nov 22  J7     €5,000  │
─────────────────────────────
Balance €13,000
```

#### Accounts Payable Account

```
Accounts Payable (44111)
─────────────────────────────
        │  Nov 10  J3     €3,000
        │
Nov 25  J8     €2,000  │
─────────────────────────────
        │  Balance  €1,000
```

#### Service Revenue Account

```
Service Revenue (703)
─────────────────────────────
        │  Nov 15  J4     €2,000
─────────────────────────────
        │  Balance  €2,000
```

### Normal Balances

Each account type has a **normal balance** (the side where increases are recorded):

| Account Type | Normal Balance | Increases | Decreases |
|-------------|----------------|-----------|-----------|
| Assets | Debit | Debit | Credit |
| Liabilities | Credit | Credit | Debit |
| Equity | Credit | Credit | Debit |
| Revenue | Credit | Credit | Debit |
| Expenses | Debit | Debit | Credit |

### Luxembourg Compliance Note

In Luxembourg, businesses must maintain:
- **General Journal (Journal Général)**: All transactions chronologically
- **General Ledger (Grand Livre)**: All accounts with balances
- **Subsidiary Ledgers**: Detailed accounts (customers, suppliers)

All must:
- Use PCN account numbers
- Be maintained for 10 years
- Be available for audit
- Support all entries with source documents

### Think It Through

Why is it important that total debits equal total credits in every journal entry? What would happen if they didn't balance?

---
