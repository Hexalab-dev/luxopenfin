---
id: volume3-chapter-26-section-26-4
title: "26.4 PCN Account Mapping for Common SME Transactions"
description: "Mapping business transactions to PCN accounts is a fundamental accounting skill. Every transaction affects at least two accounts (double-entry..."
sidebar_position: 5
slug: /volume3/chapter-26/section-26-4
---

# 26.4 PCN Account Mapping for Common SME Transactions

### Introduction to Transaction Mapping

Mapping business transactions to PCN accounts is a fundamental accounting skill. Every transaction affects at least two accounts (double-entry bookkeeping), and each account must be classified according to PCN standards.

### Purchase Transactions

#### Purchasing Inventory (Goods for Resale)

**Transaction**: Purchase €500 of inventory on credit from a supplier

**PCN Mapping:**
- **Debit**: Account 6061 (Purchases of goods for resale) - €500
- **Credit**: Account 44111 (Suppliers) - €500

**With VAT (17%):**
- **Debit**: Account 6061 (Purchases of goods for resale) - €427.35
- **Debit**: Account 421611 (Input VAT recoverable) - €72.65
- **Credit**: Account 44111 (Suppliers) - €500.00

#### Purchasing Fixed Assets

**Transaction**: Purchase €5,000 equipment, paid by bank transfer

**PCN Mapping:**
- **Debit**: Account 222 (Plant and machinery) - €5,000
- **Credit**: Account 5131 (Bank account) - €5,000

**With VAT:**
- **Debit**: Account 222 (Equipment) - €4,273.50
- **Debit**: Account 421611 (Input VAT) - €726.50
- **Credit**: Account 5131 (Bank) - €5,000.00

### Sales Transactions

#### Cash Sales

**Transaction**: Sell goods for €200 cash, VAT 17% included

**PCN Mapping:**
- **Debit**: Account 516 (Cash on hand) - €200.00
- **Credit**: Account 7061 (Sales of goods for resale) - €170.94
- **Credit**: Account 461411 (Output VAT) - €29.06

#### Credit Sales

**Transaction**: Sell €1,000 of services on credit (VAT 17%)

**PCN Mapping:**
- **Debit**: Account 4011 (Customers) - €1,170.00
- **Credit**: Account 703 (Services rendered) - €1,000.00
- **Credit**: Account 461411 (Output VAT) - €170.00

### Payment Transactions

#### Paying Suppliers

**Transaction**: Pay €800 to supplier (including €136 VAT)

**PCN Mapping:**
- **Debit**: Account 44111 (Suppliers) - €800.00
- **Credit**: Account 5131 (Bank account) - €800.00

#### Receiving Customer Payments

**Transaction**: Receive €1,170 from customer (payment for invoice)

**PCN Mapping:**
- **Debit**: Account 5131 (Bank account) - €1,170.00
- **Credit**: Account 4011 (Customers) - €1,170.00

### Payroll Transactions

#### Paying Salaries

**Transaction**: Pay €3,000 gross salary (employee portion: €600 social charges, employer portion: €900)

**PCN Mapping:**
- **Debit**: Account 6211 (Gross salaries) - €3,000.00
- **Debit**: Account 623 (Employer social security contributions) - €900.00
- **Credit**: Account 4621 (Social security payable – CCSS) - €1,500.00
- **Credit**: Account 5131 (Bank account) - €2,400.00

### Expense Transactions

#### Paying Rent

**Transaction**: Pay €1,200 monthly rent

**PCN Mapping:**
- **Debit**: Account 6111 (Rent of premises) - €1,200.00
- **Credit**: Account 5131 (Bank account) - €1,200.00

#### Paying Utilities

**Transaction**: Pay €150 electricity bill (VAT 17%)

**PCN Mapping:**
- **Debit**: Account 61845 (Electricity) - €128.21
- **Debit**: Account 421611 (Input VAT) - €21.79
- **Credit**: Account 5131 (Bank account) - €150.00

### Depreciation Transactions

#### Recording Depreciation

**Transaction**: Record €200 monthly depreciation on equipment

**PCN Mapping:**
- **Debit**: Account 6332 (Depreciation of plant and machinery) - €200.00
- **Credit**: Account 2229 (Accumulated depreciation - equipment) - €200.00

### VAT Transactions

#### VAT Return Filing

**Transaction**: File VAT return (VAT collected: €1,000, VAT paid: €600, net payable: €400)

**PCN Mapping:**
- **Debit**: Account 461411 (Output VAT) - €1,000.00
- **Credit**: Account 421611 (Input VAT recoverable) - €600.00
- **Credit**: Account 461412 (VAT payable to the AED) - €400.00

**When paying VAT:**
- **Debit**: Account 461412 (VAT payable to the AED) - €400.00
- **Credit**: Account 5131 (Bank account) - €400.00

### Common Transaction Mapping Table

| Transaction Type | Debit Account | Credit Account | Notes |
|-----------------|---------------|----------------|-------|
| Purchase goods for resale (cash) | 6061 (Purchases) | 5131 (Bank) | Add 421611 for VAT |
| Purchase goods for resale (credit) | 6061 (Purchases) | 44111 (Suppliers) | Add 421611 for VAT |
| Cash sale | 516 (Cash) | 7061 (Sales of goods) | Add 461411 for VAT |
| Credit sale | 4011 (Customers) | 7061 / 703 (Sales / Services) | Add 461411 for VAT |
| Pay supplier | 44111 (Suppliers) | 5131 (Bank) | |
| Receive payment | 5131 (Bank) | 4011 (Customers) | |
| Pay salary | 6211 (Salaries) | 5131 (Bank) | Include 623 and 4621 for social charges |
| Pay rent | 6111 (Rent) | 5131 (Bank) | |
| Record depreciation | 6332 / 6333 (Depreciation) | 2229 (Accum. depreciation – sub-account of the asset) | |
| Pay VAT | 461412 (VAT payable) | 5131 (Bank) | |

### Luxembourg Compliance Note

All transactions must be mapped to PCN accounts. When using accounting software, ensure it's configured with PCN 2020 account structure. Manual journal entries should always reference PCN account numbers, not just account names.

### Think It Through

Marie's restaurant receives a €500 invoice for kitchen equipment maintenance. The invoice includes €85 VAT (17%). How would you map this transaction to PCN accounts? What if she pays immediately vs. on credit terms?

### Concepts in Practice

**Restaurant Daily Operations**

*Le Petit Bistro* processes these transactions daily:

1. **Morning**: Purchase €200 food inventory (cash, VAT 17%)
   - Debit 601, Debit 421611, Credit 516

2. **Lunch Service**: €500 cash sales (VAT 17%)
   - Debit 516, Credit 703, Credit 461411

3. **Afternoon**: Pay €150 utility bill (VAT 17%)
   - Debit 61845, Debit 421611, Credit 5131

4. **End of Day**: Record €50 depreciation on equipment
   - Debit 6332, Credit 2229

All transactions are properly mapped to PCN accounts, ensuring compliance and accurate reporting.

---

