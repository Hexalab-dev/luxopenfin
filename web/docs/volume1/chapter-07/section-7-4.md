---
id: volume1-chapter-07-section-7-4
title: "7.4 Prepare a Subsidiary Ledger"
description: "A subsidiary ledger (also called a sub-ledger) contains detailed information about individual items that make up a general ledger account balance."
sidebar_position: 5
slug: /volume1/chapter-07/section-7-4
---

# 7.4 Prepare a Subsidiary Ledger

### What is a Subsidiary Ledger?

A **subsidiary ledger** (also called a sub-ledger) contains detailed information about individual items that make up a general ledger account balance.

**Purpose:**
- Provide detail for general ledger accounts
- Track individual customers, suppliers, inventory items
- Support accounts receivable and accounts payable management
- Enable detailed reporting

### Subsidiary Ledgers vs. General Ledger

**General Ledger:**
- Contains summary accounts (control accounts)
- Shows total balances
- Example: Accounts Receivable (total of all customers)

**Subsidiary Ledger:**
- Contains individual accounts
- Shows detail for each customer, supplier, etc.
- Example: Customer A account, Customer B account, etc.

**Relationship:**
- Total of subsidiary ledger = General ledger control account
- Must reconcile (balance)

### Types of Subsidiary Ledgers

Common subsidiary ledgers include:

1. **Accounts Receivable Subsidiary Ledger**: Individual customer accounts
2. **Accounts Payable Subsidiary Ledger**: Individual supplier accounts
3. **Inventory Subsidiary Ledger**: Individual inventory item accounts
4. **Fixed Assets Subsidiary Ledger**: Individual asset accounts

### Accounts Receivable Subsidiary Ledger

**Purpose:** Track amounts owed by individual customers

**Format:**
```
Customer Account: Customer A
Account Number: 40111

Date    Reference    Debit    Credit    Balance
─────────────────────────────────────────────────
Nov 5   INV-001     €1,170              €1,170
Nov 15  Payment              €1,170        €0
─────────────────────────────────────────────────
```

**Example: Multiple Customers**

**Customer A Account (40111):**
```
Date       Reference    Debit      Credit     Balance
─────────────────────────────────────────────────────
Nov 5      INV-001      €1,170                 €1,170
Nov 15     Payment               €1,170          €0
Nov 20     INV-004      €2,340                 €2,340
─────────────────────────────────────────────────────
Balance: €2,340
```

**Customer B Account (40112):**
```
Date       Reference    Debit      Credit     Balance
─────────────────────────────────────────────────────
Nov 10     INV-002      €3,000                 €3,000
Nov 25     Payment               €1,500        €1,500
─────────────────────────────────────────────────────
Balance: €1,500
```

**General Ledger Control Account:**
```
4011   Accounts Receivable (Control)
─────────────────────────────
Nov 30  Sales J    €6,510  │  Nov 30  Cash R    €2,670
─────────────────────────────
Balance  €3,840
```

**Verification:**
- Customer A: €2,340
- Customer B: €1,500
- Total Subsidiary: €3,840
- General Ledger Control: €3,840 ✓

### Accounts Payable Subsidiary Ledger

**Purpose:** Track amounts owed to individual suppliers

**Format:**
```
Supplier Account: Supplier X
Account Number: 441111

Date    Reference    Debit    Credit    Balance
─────────────────────────────────────────────────
Nov 8   SUP-001              €2,340    €2,340
Nov 12  Payment     €2,340              €0
─────────────────────────────────────────────────
```

**Example: Multiple Suppliers**

**Supplier X Account (441111):**
```
Date       Reference    Debit      Credit     Balance
─────────────────────────────────────────────────────
Nov 8      SUP-001                 €2,340      €2,340
Nov 12     Payment      €2,340                  €0
Nov 20     SUP-003                 €1,500      €1,500
─────────────────────────────────────────────────────
Balance: €1,500
```

**Supplier Y Account (400002):**
```
Date       Reference    Debit      Credit     Balance
─────────────────────────────────────────────────────
Nov 15     SUP-002                 €3,000      €3,000
─────────────────────────────────────────────────────
Balance: €3,000
```

**General Ledger Control Account:**
```
44111  Accounts Payable (Control)
─────────────────────────────
        │  Nov 30  Purchases J  €6,840
Nov 30  Cash D     €2,340  │
─────────────────────────────
        │  Balance  €4,500
```

**Verification:**
- Supplier X: €1,500
- Supplier Y: €3,000
- Total Subsidiary: €4,500
- General Ledger Control: €4,500 ✓

### Inventory Subsidiary Ledger

**Purpose:** Track individual inventory items

**Format:**
```
Inventory Item: T-Shirt - Red - Medium
Item Code: TS-RED-M

Date    Reference    In    Out    Balance
───────────────────────────────────────────
Nov 1   Beginning            -     50 units
Nov 5   Purchase     20             70 units
Nov 10  Sale                 -5     65 units
───────────────────────────────────────────
```

**Luxembourg Considerations:**
- May need to track by VAT rate
- Must support inventory valuation
- Must integrate with point-of-sale systems

### Reconciliation

**Reconciliation Process:**
1. Total all subsidiary ledger accounts
2. Compare to general ledger control account
3. Investigate and resolve any differences
4. Document reconciliation

**Example Reconciliation:**
```
Accounts Receivable Reconciliation
November 30, 2024

Subsidiary Ledger Totals:
  Customer A:                    €2,340
  Customer B:                    €1,500
  Customer C:                      €800
  Total Subsidiary Ledger:       €4,640

General Ledger Control Account:  €4,640

Difference:                      €0 ✓
```

### Luxembourg Compliance Note

Subsidiary ledgers in Luxembourg must:
- Support PCN account structure
- Maintain proper audit trail
- Be exportable for FAIA
- Support VAT tracking
- Be retained for 10 years
- Reconcile with general ledger

### Think It Through

Why is it important that subsidiary ledger totals equal the general ledger control account? What would indicate an error if they don't match?

---
