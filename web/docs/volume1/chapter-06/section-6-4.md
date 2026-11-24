---
id: volume1-chapter-06-section-6-4
title: "6.4 Analyze and Record Transactions for the Sale of Merchandise Using the Perpetual Inventory System"
description: "When a merchandising business sells inventory, it must record:"
sidebar_position: 5
slug: /volume1/chapter-06/section-6-4
---

# 6.4 Analyze and Record Transactions for the Sale of Merchandise Using the Perpetual Inventory System

### Selling Merchandise

When a merchandising business sells inventory, it must record:
- The sale (revenue and receivable/cash)
- The cost of goods sold (reduction in inventory)
- VAT on the sale

### Basic Sale Transaction

**Transaction:** Sell merchandise for cash

**Example:** Retail store sells €1,000 of clothing for cash (excluding VAT), VAT 17%. Cost of goods sold is €600.

**Journal Entries (Two Entries):**

**Entry 1: Record the Sale**
```
5131   Cash                       €1,170
7061   Sales Revenue (Class 7)              €1,000
461411 VAT Payable (Class 4)                    €170
To record cash sale of merchandise
```

**Entry 2: Record Cost of Goods Sold**
```
607    Cost of Goods Sold (Class 6) €600
361    Inventory (Class 3)                    €600
To record cost of merchandise sold
```

**PCN Accounts:**
- 5131: Cash (Class 5)
- 7061: Sales Revenue (Class 7)
- 461411: VAT Payable (Class 4)
- 607: Cost of Goods Sold (Class 6)
- 361: Inventory (Class 3)

**After Entries:**
- Sales Revenue: €1,000
- Cost of Goods Sold: €600
- Gross Profit: €400
- Inventory reduced by €600

### Sale on Credit

**Transaction:** Sell merchandise on credit

**Example:** Sell €2,000 merchandise on credit (excluding VAT), VAT 17%. Cost is €1,200.

**Journal Entries:**

**Entry 1: Record the Sale**
```
4011   Accounts Receivable        €2,340
7061   Sales Revenue                          €2,000
461411 VAT Payable                              €340
To record credit sale of merchandise
```

**Entry 2: Record Cost of Goods Sold**
```
607    Cost of Goods Sold         €1,200
361    Inventory                              €1,200
To record cost of merchandise sold
```

### Sales Returns and Allowances

**Sales Return:** Customer returns merchandise

**Example:** Customer returns €500 of merchandise (excluding VAT) that was sold for €500 with cost of €300.

**Journal Entries:**

**Entry 1: Reverse the Sale**
```
709    Sales Returns (or reduce Sales) €500
461411 VAT Payable                             €85
4011   Accounts Receivable (or 5131   Cash)            €585
To record return of merchandise
```

**Entry 2: Return Inventory**
```
361    Inventory                  €300
607    Cost of Goods Sold                     €300
To return merchandise to inventory
```

**PCN Note:** Sales Returns can be:
- Separate account: 709 Sales Returns (Class 7 - contra-revenue)
- Or netted against Sales Revenue

**Sales Allowance:** Price reduction for damaged goods kept by customer

**Example:** Give €100 allowance (excluding VAT) for slightly damaged goods.

**Journal Entry:**
```
709    Sales Allowances (Class 7)  €100
461411 VAT Payable                             €17
4011   Accounts Receivable (or 5131   Cash)            €117
To record sales allowance
```

**Note:** No inventory adjustment (customer keeps goods).

### Sales Discounts

**Sales Discount:** Discount for early payment by customer

**Example:** Sale of €5,000 on credit, terms 2/10, n/30. Customer pays within 10 days.

**Initial Sale:**
```
4011   Accounts Receivable        €5,850
7061   Sales Revenue                          €5,000
461411 VAT Payable                              €850
```

**Payment Within Discount Period:**
```
5131   Cash                       €5,733
709    Sales Discounts (Class 7)    €100  (2% of €5,000)
4011   Accounts Receivable                    €5,850
To record payment within discount period
(VAT already recorded on original sale)
```

**PCN Note:** Sales Discounts: 709 (Class 7 - contra-revenue)

### Luxembourg VAT on Sales

**Different VAT Rates for Different Merchandise:**

**Example: Restaurant Selling Different Items**

**Transaction:** Restaurant sells:
- Food (dine-in): €100 (excluding VAT), VAT 3%
- Wine (served with the meal): €50 (excluding VAT), VAT 17%
- Takeaway food: €30 (excluding VAT), VAT 3%

**Journal Entry:**
```
5131   Cash                       €192.40
703    Service Revenue (Food)                €100.00
703    Service Revenue (Beverage)             €50.00
703    Service Revenue (Takeaway)             €30.00
461411 VAT Payable                              €12.40
To record sales with different VAT rates
(VAT: €3.00 + €8.50 + €0.90 = €12.40)
```

**Cost Entries (if applicable):**
```
607    Cost of Goods Sold         €[cost]
361    Inventory                              €[cost]
```

### Net Sales Calculation

**Net Sales** = Gross Sales - Sales Returns - Sales Allowances - Sales Discounts

**Example:**
- Gross Sales: €50,000
- Sales Returns: €2,000
- Sales Allowances: €500
- Sales Discounts: €1,000
- Net Sales: €50,000 - €2,000 - €500 - €1,000 = €46,500

### Luxembourg Compliance Note

When selling merchandise in Luxembourg:
- Record revenue at net amount (excluding VAT)
- Record VAT Payable at correct rate
- Record cost of goods sold immediately (perpetual system)
- Use correct VAT rate for each item type
- Maintain proper documentation
- Track sales by VAT rate for VAT return preparation

### Think It Through

A Luxembourg retail store sells a children's T-shirt (3% VAT) for €20 and an adult T-shirt (17% VAT) for €30. The cost of the children's shirt was €10, and the adult shirt was €15. Record both sales with proper VAT and cost of goods sold entries.

---
