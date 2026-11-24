---
id: volume1-chapter-07-section-7-3
title: "7.3 Analyze and Journalize Transactions Using Special Journals"
description: "Let's work through examples of recording transactions in special journals for a Luxembourg retail business."
sidebar_position: 4
slug: /volume1/chapter-07/section-7-3
---

# 7.3 Analyze and Journalize Transactions Using Special Journals

### Using Special Journals

Let's work through examples of recording transactions in special journals for a Luxembourg retail business.

### Example Business: Mode Luxembourg SARL

A retail clothing store with the following transactions in November:

### Transaction 1: Credit Sale

**Transaction:** Sell €1,000 merchandise on credit to Customer A (excluding VAT), VAT 17%. Invoice INV-001.

**Sales Journal Entry:**
```
Sales Journal
Date       Invoice #    Customer      Amount    VAT 17%    Total
─────────────────────────────────────────────────────────────────
Nov 5      INV-001     Customer A    €1,000     €170      €1,170
```

**Posting:**
- To Customer A's account in Accounts Receivable subsidiary ledger: €1,170
- To Sales Revenue (general ledger): €1,000
- To VAT Payable (general ledger): €170
- To Accounts Receivable (general ledger): €1,170

### Transaction 2: Credit Purchase

**Transaction:** Purchase €2,000 inventory on credit from Supplier X (excluding VAT), VAT 17%, recoverable. Invoice SUP-001.

**Purchases Journal Entry:**
```
Purchases Journal
Date       Invoice #    Supplier      Amount    VAT 17%    Total
─────────────────────────────────────────────────────────────────
Nov 8      SUP-001     Supplier X    €2,000     €340      €2,340
```

**Posting:**
- To Supplier X's account in Accounts Payable subsidiary ledger: €2,340
- To Inventory (general ledger): €2,000
- To VAT Recoverable (general ledger): €340
- To Accounts Payable (general ledger): €2,340

### Transaction 3: Cash Sale

**Transaction:** Sell €500 merchandise for cash (excluding VAT), VAT 17%.

**Cash Receipts Journal Entry:**
```
Cash Receipts Journal
Date       Source        Cash      Sales    Receivables    VAT
─────────────────────────────────────────────────────────────────
Nov 10     Cash Sale    €585      €500         -          €85
```

**Posting:**
- To Cash (general ledger): €585
- To Sales Revenue (general ledger): €500
- To VAT Payable (general ledger): €85

### Transaction 4: Payment to Supplier

**Transaction:** Pay €2,340 to Supplier X for previous purchase.

**Cash Disbursements Journal Entry:**
```
Cash Disbursements Journal
Date       Payee          Cash    Purchases    Payables    Expenses
─────────────────────────────────────────────────────────────────
Nov 12     Supplier X    €2,340      -        €2,340         -
```

**Posting:**
- To Cash (general ledger): €2,340 (decrease)
- To Accounts Payable (general ledger): €2,340 (decrease)
- To Supplier X's account in Accounts Payable subsidiary ledger: €2,340

### Transaction 5: Collection from Customer

**Transaction:** Receive €1,170 payment from Customer A.

**Cash Receipts Journal Entry:**
```
Cash Receipts Journal
Date       Source          Cash      Sales    Receivables    VAT
─────────────────────────────────────────────────────────────────
Nov 15     Collection     €1,170      -      €1,170          -
```

**Posting:**
- To Cash (general ledger): €1,170
- To Accounts Receivable (general ledger): €1,170 (decrease)
- To Customer A's account in Accounts Receivable subsidiary ledger: €1,170

### Transaction 6: Expense Payment

**Transaction:** Pay €1,200 rent expense.

**Cash Disbursements Journal Entry:**
```
Cash Disbursements Journal
Date       Payee      Cash    Purchases    Payables    Expenses
─────────────────────────────────────────────────────────────────
Nov 18     Rent      €1,200      -           -        €1,200
                                                      (Rent)
```

**Posting:**
- To Cash (general ledger): €1,200 (decrease)
- To Rent Expense (general ledger): €1,200

### Luxembourg VAT Considerations

**Multiple VAT Rates:**

**Example:** Restaurant with different VAT rates

**Sales Journal Entry:**
```
Sales Journal
Date       Invoice #    Customer    Amount    VAT 3%    VAT 14%    VAT 17%    Total
─────────────────────────────────────────────────────────────────────────────────
Nov 20     INV-002     Customer B  €100      €3        -          -         €103
           (Food)
Nov 20     INV-003     Customer B  €50       -         €7         -          €57
           (Wine)
─────────────────────────────────────────────────────────────────────────────────
Totals                 €150        €3        €7         -         €160
```

**Posting:**
- Sales Revenue: €150
- VAT Payable (3%): €3
- VAT Payable (14%): €7
- Accounts Receivable: €160

### Posting from Special Journals

**Posting Rules:**

1. **Individual Line Items**: Post to subsidiary ledgers (customer/supplier accounts)
2. **Column Totals**: Post to general ledger accounts
3. **Frequency**: Can post daily, weekly, or monthly
4. **Verification**: Total of subsidiary ledger should equal general ledger control account

**Example: Posting Sales Journal Totals**

**Sales Journal Total:**
- Total Sales: €4,500
- Total VAT: €765
- Total Receivables: €5,265

**General Ledger Posting:**
```
7061   Sales Revenue
─────────────────────────────
        │  Nov 30  Sales J    €4,500

461411 VAT Payable
─────────────────────────────
        │  Nov 30  Sales J      €765

4011   Accounts Receivable
─────────────────────────────
Nov 30  Sales J    €5,265  │
```

### Luxembourg Compliance Note

When using special journals in Luxembourg:
- Must track VAT by rate
- Must include PCN account numbers
- Must maintain proper audit trail
- Must support FAIA export
- Must be exportable for eCDF
- Software often handles this automatically

### Think It Through

A business has 50 credit sales in a month. Compare the efficiency of recording these in a general journal versus a sales journal. How much time and effort would be saved?

---
