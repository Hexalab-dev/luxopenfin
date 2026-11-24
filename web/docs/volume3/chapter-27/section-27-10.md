---
id: volume3-chapter-27-section-27-10
title: "27.10 VAT Accounting in PCN (Class 4 Accounts)"
description: "VAT accounts are part of PCN Class 4 (Third-Party Accounts). All VAT transactions must be recorded using PCN Class 4 VAT accounts to ensure compliance and..."
sidebar_position: 11
slug: /volume3/chapter-27/section-27-10
---

# 27.10 VAT Accounting in PCN (Class 4 Accounts)

### VAT Accounts in PCN Structure

VAT accounts are part of **PCN Class 4 (Third-Party Accounts)**. All VAT transactions must be recorded using PCN Class 4 VAT accounts to ensure compliance and proper reporting.

### Main VAT Accounts

#### Account 421611: Input VAT Recoverable (TVA en amont)

**Purpose**: Records VAT paid on purchases (input VAT). It sits in group 42 (Other receivables).

**Usage:**
- **Debit**: When paying VAT on purchases
- **Credit**: When offsetting against output VAT in return
- **Balance**: Shows recoverable VAT not yet offset

**Example:**
- Purchase €117 goods for resale (€100 + €17 VAT)
- **Debit**: Account 421611 - €17.00
- **Debit**: Account 6061 (Purchases of goods for resale) - €100.00
- **Credit**: Account 44111 (Suppliers) - €117.00

#### Account 461412: VAT Payable to the AED (TVA à payer)

**Purpose**: Records net VAT payable to the tax authority (AED) after each VAT return. It sits in group 46 (Tax and social security debts). A net VAT credit goes instead to Account 421612 (VAT receivable).

**Usage:**
- **Debit**: When paying VAT to authorities
- **Credit**: When net VAT is calculated (output VAT - input VAT)
- **Balance**: Shows VAT owed to authorities

**Example (VAT Return Filing):**
- Output VAT: €1,000
- Input VAT: €600
- Net VAT: €400
- **Debit**: Account 461411 - €1,000.00
- **Credit**: Account 421611 - €600.00
- **Credit**: Account 461412 - €400.00

**When Paying VAT:**
- **Debit**: Account 461412 - €400.00
- **Credit**: Account 5131 (Bank) - €400.00

#### Account 461411: Output VAT (TVA en aval)

**Purpose**: Records VAT collected on sales (output VAT). It sits in group 46 (Tax and social security debts).

**Usage:**
- **Credit**: When collecting VAT on sales
- **Debit**: When offsetting against input VAT in return
- **Balance**: Shows VAT collected not yet remitted

**Example:**
- Sell €117 goods (€100 + €17 VAT)
- **Debit**: Account 516 (Cash on hand) - €117.00
- **Credit**: Account 7061 (Sales of goods) - €100.00
- **Credit**: Account 461411 - €17.00

### VAT Account Structure

#### Sub-Accounts for Different Rates

You can create sub-accounts below the official account to track VAT by rate:

**Structure:**
- 4614111: Output VAT at 17%
- 4614112: Output VAT at 14%
- 4614113: Output VAT at 8%
- 4614114: Output VAT at 3%

**Benefits:**
- Easier VAT return preparation
- Better tracking by rate
- Simplified reporting

### VAT Return Accounting Process

#### Step 1: Calculate Period Totals

- **Output VAT**: Sum all credits to Account 461411
- **Input VAT**: Sum all debits to Account 421611
- **Net VAT**: Output VAT - Input VAT

#### Step 2: Record VAT Return

**If Net VAT Payable:**
- **Debit**: Account 461411 (Output VAT) - Total output VAT
- **Credit**: Account 421611 (Input VAT) - Total input VAT
- **Credit**: Account 461412 (VAT Payable to the AED) - Net VAT

**If Net VAT Refundable:**
- **Debit**: Account 461411 (Output VAT) - Total output VAT
- **Credit**: Account 421611 (Input VAT) - Total input VAT
- **Debit**: Account 421612 (VAT Receivable from the AED) - Net refund

#### Step 3: Pay VAT

**When Paying VAT:**
- **Debit**: Account 461412 (VAT Payable)
- **Credit**: Account 5131 (Bank Account)

**When Receiving Refund:**
- **Debit**: Account 5131 (Bank Account)
- **Credit**: Account 421612 (VAT Receivable)

### VAT Account Reconciliations

#### Monthly Reconciliation

- **Output VAT**: Verify all sales VAT recorded
- **Input VAT**: Verify all purchase VAT recorded
- **Balances**: Check account balances match calculations
- **Discrepancies**: Investigate and correct any differences

#### Quarterly Reconciliation

- **Period Totals**: Sum all VAT transactions for quarter
- **VAT Return**: Compare to VAT return figures
- **Payments**: Verify all VAT payments recorded
- **Refunds**: Verify all VAT refunds received

### Common VAT Accounting Entries

#### Sale with VAT

**Transaction**: Sell €117 goods (€100 + €17 VAT)

**PCN Entry:**
- Debit 516 (Cash on hand): €117.00
- Credit 7061 (Sales of goods): €100.00
- Credit 461411 (Output VAT): €17.00

#### Purchase with VAT

**Transaction**: Purchase €234 equipment (€200 + €34 VAT)

**PCN Entry:**
- Debit 222 (Equipment): €200.00
- Debit 421611 (Input VAT): €34.00
- Credit 5131 (Bank): €234.00

#### VAT Return Filing

**Transaction**: File VAT return (Output: €1,000, Input: €600, Net: €400)

**PCN Entry:**
- Debit 461411 (Output VAT): €1,000.00
- Credit 421611 (Input VAT): €600.00
- Credit 461412 (VAT Payable): €400.00

#### VAT Payment

**Transaction**: Pay €400 VAT to authorities

**PCN Entry:**
- Debit 461412 (VAT Payable): €400.00
- Credit 5131 (Bank): €400.00

### VAT Account Balances

#### Normal Balances

- **Account 421611 (Input VAT)**: Debit balance (VAT paid)
- **Account 461411 (Output VAT)**: Credit balance (VAT collected)
- **Account 461412 (VAT Payable)**: Credit balance (VAT owed); a net refund is shown instead as a debit balance on Account 421612 (VAT receivable)

#### After VAT Return

- **Account 421611**: Should be zero (offset against output VAT)
- **Account 461411**: Should be zero (offset against input VAT)
- **Account 461412 / 421612**: Shows net VAT payable or refundable

### Luxembourg Compliance Note

**PCN Requirements:**
- **Use PCN Accounts**: All VAT must use Class 4 accounts
- **Proper Classification**: Use correct accounts (421611, 461411, 461412, 421612)
- **Sub-Accounts**: Can use sub-accounts for detailed tracking
- **Reconciliation**: Reconcile VAT accounts regularly
- **Documentation**: Maintain supporting documentation

**Common Errors:**
- **Wrong Accounts**: Using non-PCN accounts for VAT
- **Incorrect Entries**: Reversing debit/credit entries
- **Missing Entries**: Not recording all VAT transactions
- **Unreconciled**: Not reconciling VAT accounts

### Think It Through

At month-end, Marie's restaurant has €2,000 in Account 461411 (output VAT) and €1,200 in Account 421611 (input VAT). How should she record the VAT return? What will the account balances be after the return?

### Concepts in Practice

**Monthly VAT Accounting**

*Le Petit Bistro* monthly VAT process:

**Month-End Balances:**
- Account 461411 (Output VAT): €2,000 credit
- Account 421611 (Input VAT): €1,200 debit

**VAT Return Entry:**
- Debit 461411 (Output VAT): €2,000.00
- Credit 421611 (Input VAT): €1,200.00
- Credit 461412 (VAT Payable): €800.00

**After Entry:**
- Account 421611: €0.00
- Account 461411: €0.00
- Account 461412: €800.00 credit (VAT to pay)

**Payment Entry:**
- Debit 461412 (VAT Payable): €800.00
- Credit 5131 (Bank): €800.00

**Final Balances:**
- All VAT accounts: €0.00
- VAT return filed and paid

---

