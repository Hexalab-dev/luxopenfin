---
id: volume1-chapter-03-section-3-7
title: "3.7 Luxembourg PCN Account Numbering System and Transaction Mapping"
description: "The PCN 2020 uses a hierarchical decimal numbering system organized into seven classes: each extra digit makes an account more specific."
sidebar_position: 8
slug: /volume1/chapter-03/section-3-7
---

# 3.7 Luxembourg PCN Account Numbering System and Transaction Mapping

### PCN Account Numbering Structure

The Plan Comptable Normalisé (PCN 2020, Règlement grand-ducal of 12 September 2019) uses a **hierarchical decimal numbering system** organized into seven classes. Account numbers have **no fixed length**: each additional digit makes the account more specific.

**Structure:**
- **First digit (1-7)**: Account class (e.g., 4 = third parties)
- **Two digits**: Account group (e.g., 40 = trade receivables)
- **Three or more digits**: Increasingly detailed accounts (e.g., 401 → 4011 Customers; 461 → 4614 → 46141 → 461411 Output VAT)
- **Rule**: post only to the most detailed official account (*compte d'imputation*); you may add your own sub-accounts below it (e.g., 40111 for one customer), never beside it
- **Example**: 5131 = Class 5 (financial accounts) → 51 (cash at bank and in hand) → 513 (banks) → 5131 (bank accounts with a debit balance)

> **Note on this textbook:** in journal entries, "Cash" means money in the business bank account and is booked to **5131**. Notes and coins in the till are account **516** (Caisse).

### Account Class Ranges

| Class | Range | Description |
|-------|-------|-------------|
| 1 | 10–19 | Capital, Provisions, Financial Debts |
| 2 | 20–29 | Fixed Assets and Establishment Costs |
| 3 | 30–39 | Inventory Accounts |
| 4 | 40–49 | Third-Party Accounts |
| 5 | 50–59 | Financial Accounts (Cash, Banks) |
| 6 | 60–69 | Expense Accounts |
| 7 | 70–79 | Revenue Accounts |

### Sub-Account Numbering

Businesses can create **sub-accounts** for detailed tracking:

**Example:**
- 4011: Accounts Receivable (general)
- 40111: Accounts Receivable - Customer A
- 40112: Accounts Receivable - Customer B
- 40113: Accounts Receivable - Customer C

### Transaction Mapping to PCN

When recording transactions, you must identify the correct PCN accounts:

#### Mapping Process

1. **Identify transaction type**
2. **Determine accounts affected**
3. **Find PCN account numbers**
4. **Verify account classification**
5. **Record with proper numbers**

### Common Transaction Mappings

#### Cash Sales

**Transaction:** Sell goods for €1,000 cash (excluding VAT), VAT 17%

**PCN Mapping:**
- Cash received: 5131 (Class 5 - Financial Accounts)
- Sales Revenue: 7061 (Class 7 - Revenue Accounts)
- VAT Payable: 461411 (Class 4 - Tax Authorities)

**Journal Entry:**
```
5131   Cash                       €1,170
7061   Sales Revenue                         €1,000
461411 VAT Payable                              €170
```

#### Credit Purchases

**Transaction:** Purchase inventory €2,000 on credit (excluding VAT), VAT 17%, recoverable

**PCN Mapping:**
- Inventory: 361 (Class 3 - Inventory)
- VAT Recoverable: 421611 (Class 4 - Tax Authorities)
- Accounts Payable: 44111 (Class 4 - Suppliers)

**Journal Entry:**
```
361    Inventory                 €2,000
421611 VAT Recoverable             €340
44111  Accounts Payable                         €2,340
```

#### Expense Payments

**Transaction:** Pay €500 utilities expense

**PCN Mapping:**
- Utilities Expense: 6184 (Class 6 - External Services)
- Cash: 5131 (Class 5 - Financial Accounts)

**Journal Entry:**
```
6184   Utilities Expense          €500
5131   Cash                                  €500
```

#### Equipment Purchase

**Transaction:** Purchase €10,000 equipment, paying €3,000 cash and €7,000 note

**PCN Mapping:**
- Equipment: 222 (Class 2 - Tangible Assets)
- Cash: 5131 (Class 5 - Financial Accounts)
- Notes Payable: 4421 (Class 4 - Debts represented by notes)

**Journal Entry:**
```
222    Equipment                 €10,000
5131   Cash                                   €3,000
4421   Notes Payable                          €7,000
```

### PCN Account Lookup

When unsure of PCN account number:

1. **Identify account class** (1-7)
2. **Determine account type** within class
3. **Consult PCN reference** (see Appendix A)
4. **Verify with accountant** or fiduciaire
5. **Document decision** for consistency

### Customizing Chart of Accounts

While PCN provides standard accounts, businesses can:

- **Add sub-accounts** for detail (e.g., 510001, 5131 for different bank accounts)
- **Use account ranges** within classes
- **Maintain consistency** across periods

**Important:** Must stay within PCN class structure and numbering system.

### Luxembourg Compliance Note

All transactions must be recorded using PCN account numbers. This ensures:
- Consistency across businesses
- Proper classification
- Compliance with regulations
- Accurate financial reporting
- Ease of audit and review

Software like Sage BOB includes PCN account numbers, making compliance easier.

### Think It Through

A Luxembourg business receives a bank loan of €25,000. Which PCN accounts are affected? What are the account numbers and classes?

---
