# Solutions Manual - Chapter 6: Merchandising Transactions

## Questions - Solutions

### Question 1: Merchandising vs. Service Business

**Answer:**

**Merchandising Business:**
- Buys finished goods (inventory) and resells them
- Primary revenue: Sales of merchandise
- Must track inventory (goods on hand)
- Must calculate cost of goods sold
- Examples: Retail stores, wholesale businesses, e-commerce

**Service Business:**
- Provides services to customers
- Primary revenue: Service revenue
- No inventory of goods for sale
- No cost of goods sold
- Examples: Consulting, accounting, legal services

**Income Statement Differences:**

**Service Business Income Statement:**
```
Revenue:
  Service Revenue                    €50,000

Operating Expenses:
  Salaries Expense                   20,000
  Rent Expense                        5,000
  Other Expenses                      3,000
                                      ───────
Total Operating Expenses             28,000

Net Income                           €22,000
```

**Merchandising Business Income Statement:**
```
Revenue:
  Sales Revenue                       €100,000

Cost of Goods Sold:
  Cost of Goods Sold                  60,000
                                      ───────
Gross Profit                          40,000

Operating Expenses:
  Salaries Expense                    15,000
  Rent Expense                         8,000
  Other Expenses                       5,000
                                      ───────
Total Operating Expenses              28,000

Net Income                            €12,000
```

**Key Difference:** Merchandising businesses show Cost of Goods Sold and Gross Profit, while service businesses do not.

---

### Question 2: Perpetual vs. Periodic Inventory Systems

**Answer:**

**Perpetual Inventory System:**
- **Definition:** Inventory and cost of goods sold are updated continuously with each purchase and sale
- **Tracking:** Inventory account updated immediately when goods are purchased or sold
- **Cost of Goods Sold:** Recorded at time of sale
- **Inventory Balance:** Always shows current inventory balance
- **Advantages:** Real-time inventory tracking, better control, accurate cost of goods sold
- **Disadvantages:** More complex, requires computerized systems
- **Best For:** Most modern businesses, especially with POS systems

**Periodic Inventory System:**
- **Definition:** Inventory and cost of goods sold are determined only at period end through physical count
- **Tracking:** Purchases recorded in Purchases account, not Inventory
- **Cost of Goods Sold:** Calculated at period end: Beginning Inventory + Purchases - Ending Inventory
- **Inventory Balance:** Only known after physical count
- **Advantages:** Simpler, less record-keeping
- **Disadvantages:** Less control, no real-time inventory, cost of goods sold less accurate
- **Best For:** Small businesses, businesses with low inventory turnover

**Key Differences:**

| Aspect | Perpetual | Periodic |
|--------|-----------|----------|
| **Inventory Tracking** | Continuous | Period end only |
| **Cost of Goods Sold** | Recorded at sale | Calculated at period end |
| **Inventory Account** | Updated continuously | Only at period end |
| **Control** | Better | Less |
| **Complexity** | More complex | Simpler |
| **Technology** | Usually requires | Can be manual |

**Luxembourg Practice:** Most businesses use perpetual systems, especially with modern accounting software.

---

### Question 3: Recording Merchandise Purchases

**Answer:**

**Perpetual Inventory System:**

**Purchase on Credit (excluding VAT), VAT 17%, recoverable:**
```
361    Inventory                   €10,000
421611 VAT Recoverable              €1,700
44111  Accounts Payable                        €11,700
To record credit purchase of merchandise
```

**Purchase for Cash:**
```
361    Inventory                   €10,000
421611 VAT Recoverable              €1,700
5131   Cash                                    €11,700
To record cash purchase of merchandise
```

**With Purchase Discount (2/10, n/30):**
- If paid within discount period:
```
44111  Accounts Payable            €11,700
361    Inventory                               €200
5131   Cash                                    €11,500
To record payment within discount period (2% discount)
```

**With Freight Costs:**
```
361    Inventory                   €10,000
421611 VAT Recoverable              €1,700
44111  Accounts Payable                        €11,700
To record purchase

361    Inventory                     €300
421611 VAT Recoverable                 €51
5131   Cash                                      €351
To record freight costs (added to inventory cost)
```

**PCN Accounts:**
- 361: Inventory (Class 3: Inventory Accounts)
- 421611: VAT Recoverable (Class 4: Third-Party Accounts)
- 44111: Accounts Payable (Class 4: Third-Party Accounts)
- 5131: Cash (Class 5: Financial Accounts)

---

### Question 4: Recording Merchandise Sales

**Answer:**

**Perpetual Inventory System:**

**Cash Sale (excluding VAT), VAT 17%, Cost €5,000:**
```
5131   Cash                       €11,700
7061   Sales Revenue                        €10,000
461411 VAT Payable                            €1,700
To record cash sale

607    Cost of Goods Sold         €5,000
361    Inventory                              €5,000
To record cost of goods sold
```

**Credit Sale:**
```
4011   Accounts Receivable        €11,700
7061   Sales Revenue                        €10,000
461411 VAT Payable                            €1,700
To record credit sale

607    Cost of Goods Sold         €5,000
361    Inventory                              €5,000
To record cost of goods sold
```

**Sales Return:**
```
709    Sales Returns               €500
461411 VAT Payable                             €85
5131   Cash (or 4011   A/R)                    €585
To record sales return

361    Inventory                     €300
607    Cost of Goods Sold                      €300
To restore inventory and reverse cost of goods sold
```

**PCN Accounts:**
- 7061: Sales Revenue (Class 7: Revenue)
- 607: Cost of Goods Sold (Class 6: Expenses)
- 361: Inventory (Class 3: Inventory Accounts)
- 461411: VAT Payable (Class 4: Third-Party Accounts)
- 4011: Accounts Receivable (Class 4: Third-Party Accounts)
- 5131: Cash (Class 5: Financial Accounts)
- 709: Sales Returns, rebates and discounts granted (Class 7: Revenue - contra account)

---

### Question 5: Gross Profit and Gross Profit Margin

**Answer:**

**Gross Profit:**
- **Formula:** Gross Profit = Net Sales - Cost of Goods Sold
- **Definition:** Profit from selling merchandise before operating expenses
- **Purpose:** Measures profitability of sales operations

**Gross Profit Margin:**
- **Formula:** Gross Profit Margin = (Gross Profit ÷ Net Sales) × 100
- **Definition:** Percentage of sales that is gross profit
- **Purpose:** Measures efficiency of sales operations

**Example:**
- Net Sales: €100,000
- Cost of Goods Sold: €60,000
- Gross Profit: €100,000 - €60,000 = €40,000
- Gross Profit Margin: (€40,000 ÷ €100,000) × 100 = 40%

**Interpretation:**
- Gross Profit Margin of 40% means 40% of sales is gross profit
- Higher margin = more profitable sales
- Used to evaluate pricing and cost control

---

### Question 6: Freight-In vs. Freight-Out

**Answer:**

**Method 1: Freight Added to Inventory Cost (Preferred)**
- Freight is part of inventory cost
- Added to Inventory account
- **Journal Entry:**
```
361    Inventory                   €300
421611 VAT Recoverable               €51
5131   Cash (or 44111  A/P)                    €351
To record freight as part of inventory cost
```

**Method 2: Freight as Separate Expense**
- Freight recorded as expense
- Not added to inventory
- **Journal Entry:**
```
6161   Freight-In Expense          €300
421611 VAT Recoverable               €51
5131   Cash (or 44111  A/P)                    €351
To record freight as expense
```

**Which Method to Use:**
- **Method 1 (Preferred):** Freight is part of cost to acquire inventory, should be included in inventory cost
- **Method 2:** Less common, treats freight as period expense

**Luxembourg Practice:** Method 1 is preferred and aligns with PCN requirements for inventory valuation.

**Freight-Out (delivery to customers):**
- Cost of delivering goods sold to customers; a selling (period) expense, never part of inventory cost
- **Journal Entry:**
```
6162   Freight-Out (carriage outward)  €200
421611 VAT Recoverable                  €34
5131   Cash (or 44111  A/P)                       €234
To record delivery costs on sales
```
- PCN: 6161 carriage of goods inward (if expensed), 6162 carriage outward

---

### Question 7: Multi-Step vs. Simple Income Statement

**Answer:**

**Simple Income Statement:**
- Single-step format
- Lists all revenues, then all expenses
- Net income = Total Revenues - Total Expenses
- Less detailed

**Example:**
```
Revenue:
  Sales Revenue                    €100,000

Expenses:
  Cost of Goods Sold               60,000
  Operating Expenses               25,000
                                   ───────
Total Expenses                     85,000

Net Income                         €15,000
```

**Multi-Step Income Statement:**
- Multiple sections showing detailed calculations
- Shows Gross Profit, Operating Income, Net Income
- More informative
- Preferred for merchandising businesses

**Example:**
```
Sales Revenue                      €100,000
Less: Sales Returns                  (2,000)
Less: Sales Discounts                (1,000)
                                   ───────
Net Sales                           97,000

Cost of Goods Sold                  60,000
                                   ───────
Gross Profit                        37,000

Operating Expenses:
  Salaries Expense                  15,000
  Rent Expense                       5,000
  Other Expenses                     5,000
                                   ───────
Total Operating Expenses            25,000
                                   ───────
Operating Income                    12,000

Other Expenses:
  Interest Expense                     500
                                   ───────
Net Income                         €11,500
```

**Advantages of Multi-Step:**
- Shows Gross Profit (important for merchandising)
- Shows Operating Income separately
- More detailed analysis possible
- Better for decision-making

**Luxembourg Practice:** Multi-step format is preferred and often required for larger businesses.

---

### Question 8: Luxembourg VAT on Merchandise

**Answer:**

**VAT Rates for Merchandise:**

1. **3% VAT:**
   - Basic food products
   - Children's clothing
   - Books, newspapers
   - Medicines

2. **8% VAT:**
   - Gas and electricity
   - Certain services (e.g., hairdressing, small repairs of bicycles, shoes and clothing)

3. **14% VAT:**
   - Certain wines (up to 13% vol.)
   - Note: beer, spirits and other alcoholic drinks are taxed at 17%

4. **17% VAT:**
   - General merchandise
   - Adult clothing
   - Electronics
   - Most retail goods

**Recording VAT:**

**On Sales:**
```
5131   Cash                       €11,700
7061   Sales Revenue                        €10,000
461411 VAT Payable                            €1,700
To record sale with 17% VAT
```

**On Purchases:**
```
361    Inventory                   €10,000
421611 VAT Recoverable              €1,700
44111  Accounts Payable                        €11,700
To record purchase with 17% VAT recoverable
```

**VAT Return:**
- VAT Payable (on sales) - VAT Recoverable (on purchases) = Net VAT to pay
- Must track by rate for VAT return
- Filed through eCDF system

**Compliance:**
- Must charge correct VAT rate
- Must track VAT by rate
- Must file VAT returns on time
- Must maintain proper records

---

### Question 9: Periodic Inventory System

**Answer:**

**How it works:**
- Purchases are debited to **6061 Purchases of goods** (not to Inventory)
- No cost-of-goods-sold entry is made at the time of each sale
- Inventory (361) is updated only at period end after a physical count

**Cost of Goods Sold (periodic):**
```
Beginning Inventory (361)
+ Net Purchases (6061, less 609 discounts/returns, plus freight-in)
= Cost of Goods Available for Sale
- Ending Inventory (physical count)
= Cost of Goods Sold
```

**Example:** Beginning €20,000 + net purchases €30,000 − ending €22,000 = COGS €28,000.

**PCN period-end entry:** the change in stocks is booked to **607** (Debit 607 / Credit 361 for a decrease; the reverse for an increase), so cost of sales = 6061 ± 607.

---

### Question 10: Children's (3%) and Adult (17%) Clothing Sales

**Answer:**

**Recording:** split every sale by VAT rate, either with separate revenue sub-accounts under 7061 (e.g., 70611 sales at 3%, 70612 sales at 17%) or with VAT codes in the POS/accounting software.

**Example (one day's till):** children's clothing €1,000 + adult clothing €2,000, both excluding VAT:
```
5131   Cash                         €3,370
7061   Sales – children's (3%)                €1,000
7061   Sales – adult (17%)                    €2,000
461411 VAT Payable (3%: €30; 17%: €340)         €370
To record mixed-rate clothing sales
```

**For the VAT return:**
- Report taxable turnover and output VAT separately for each rate (3% and 17% boxes on the eCDF return)
- Reconcile 461411 by rate to the sales sub-accounts before filing
- Keep invoices/till reports showing the rate applied to each item

---

## Supplementary Discussion (instructor use)

### S1: Luxembourg Inventory Accounting (PCN Class 3)

**Answer:**

**PCN Class 3: Inventory Accounts (30–39)**

**Key Accounts:**
- 361: Merchandise Inventory
- 301: Raw Materials
- 303: Consumables and Supplies
- 311: Work in Progress
- 321: Finished Goods

**For Retail Businesses:**
- Primarily use 361: Merchandise Inventory
- Track goods held for sale

**Inventory Valuation:**
- Must be valued at cost (cost principle)
- Can use FIFO, Weighted Average or LIFO for fungible items under Luxembourg GAAP (LIFO is prohibited only under IFRS)
- Must be consistent from period to period

**Compliance Requirements:**
- Must use PCN account numbers
- Must value at cost
- Must conduct physical counts
- Must reconcile with records
- Must be disclosed in financial statements

**Example:**
- Purchase merchandise: Debit 361 Inventory
- Sell merchandise: Credit 361 Inventory, Debit 607 Cost of Goods Sold

---

### S2: Inventory System Choice

**Answer:**

**Factors to Consider:**

1. **Business Size:**
   - Small business: Periodic may be sufficient
   - Larger business: Perpetual recommended

2. **Inventory Volume:**
   - High volume: Perpetual necessary
   - Low volume: Periodic may work

3. **Technology:**
   - POS system: Perpetual possible
   - Manual system: Periodic easier

4. **Control Needs:**
   - Need real-time tracking: Perpetual
   - Less control needed: Periodic

5. **Cost:**
   - Perpetual: Higher setup cost, better control
   - Periodic: Lower cost, less control

**Recommendation for Most Businesses:**
- **Perpetual system** is recommended
- Better control and accuracy
- Required for modern business operations
- Luxembourg businesses typically use perpetual

---

## Problems Set A - Solutions

### Problem A-1: Recording Purchases

**Solution:**

**a) Purchase €5,000 merchandise on credit (excluding VAT), VAT 17%, recoverable**
```
361    Inventory                   €5,000
421611 VAT Recoverable              €850
44111  Accounts Payable                        €5,850
To record credit purchase of merchandise
```

**b) Purchase €2,000 children's clothing on credit (excluding VAT), VAT 3%, recoverable**
```
361    Inventory                   €2,000
421611 VAT Recoverable               €60
44111  Accounts Payable                        €2,060
To record purchase of children's clothing (3% VAT)
```

**c) Purchase €1,000 wine for retail sale on credit (excluding VAT), VAT 14%, recoverable**
```
361    Inventory                   €1,000
421611 VAT Recoverable              €140
44111  Accounts Payable                        €1,140
To record purchase of wine (14% VAT applies only to certain wines up to 13% vol.; beer, spirits and other alcohol are 17%)
```

**d) Pay €500 freight on purchase (a), VAT 17% on freight**
```
361    Inventory                     €500
421611 VAT Recoverable                €85
5131   Cash                                      €585
To record freight-in (added to inventory cost)
```

---

### Problem A-2: Recording Sales

**Solution:**

**a) Sell €3,000 merchandise for cash (excluding VAT), VAT 17%, Cost €1,800**
```
5131   Cash                       €3,510
7061   Sales Revenue                        €3,000
461411 VAT Payable                              €510
To record cash sale

607    Cost of Goods Sold         €1,800
361    Inventory                              €1,800
To record cost of goods sold
```

**b) Sell €500 children's clothing on credit (excluding VAT), VAT 3%, Cost €300**
```
4011   Accounts Receivable          €515
7061   Sales Revenue                          €500
461411 VAT Payable                               €15
To record credit sale (3% VAT)

607    Cost of Goods Sold           €300
361    Inventory                                €300
To record cost of goods sold
```

**c) Customer returns €200 of merchandise from sale (a), Cost €120**
```
709    Sales Returns                €200
461411 VAT Payable                   €34
5131   Cash                                     €234
To record sales return (cash refund) and reverse output VAT

361    Inventory                    €120
607    Cost of Goods Sold                       €120
To restore inventory and reverse cost of goods sold
```

---

### Problem A-3: Gross Profit Calculation

**Solution:**

**Given:**
- Net Sales: €100,000
- Cost of Goods Sold: €60,000

**Gross Profit:**
- Gross Profit = Net Sales - Cost of Goods Sold
- Gross Profit = €100,000 - €60,000
- **Gross Profit = €40,000**

**Gross Profit Margin:**
- Gross Profit Margin = (Gross Profit ÷ Net Sales) × 100
- Gross Profit Margin = (€40,000 ÷ €100,000) × 100
- **Gross Profit Margin = 40%**

**Interpretation:**
- 40% of sales revenue is gross profit
- For every €1.00 of sales, €0.40 is gross profit
- Indicates good profitability on sales

---

### Problem A-4: Income Statement Preparation

**Solution:**

**Given:**
- Sales Revenue: €80,000
- Sales Returns: €2,000
- Cost of Goods Sold: €45,000
- Operating Expenses: €20,000

**Simple Income Statement:**

```
Income Statement
For the Period Ended [Date]

Revenue:
  Sales Revenue                    €80,000
  Less: Sales Returns                (2,000)
                                      ───────
  Net Sales                         78,000

Cost of Goods Sold                  45,000
                                      ───────
Gross Profit                        33,000

Operating Expenses                  20,000
                                      ───────
Net Income                         €13,000
```

**Verification:**
- Net Sales: €80,000 - €2,000 = €78,000
- Gross Profit: €78,000 - €45,000 = €33,000
- Net Income: €33,000 - €20,000 = €13,000

---

### Problem A-5: VAT on Mixed Merchandise

**Solution:**

**Given:**
- Food products: €1,000 (3% VAT)
- Wine: €500 (14% VAT)
- General merchandise: €2,000 (17% VAT)

**Calculations:**

**Food Products:**
- Sales: €1,000
- VAT: €1,000 × 3% = €30
- Total: €1,030

**Wine:**
- Sales: €500
- VAT: €500 × 14% = €70
- Total: €570

**General Merchandise:**
- Sales: €2,000
- VAT: €2,000 × 17% = €340
- Total: €2,340

**Totals:**
- Total Sales: €1,000 + €500 + €2,000 = €3,500
- Total VAT: €30 + €70 + €340 = €440
- Total Cash Received: €1,030 + €570 + €2,340 = €3,940

**Journal Entry:**
```
5131   Cash                       €3,940
7061   Sales Revenue                        €3,500
461411 VAT Payable                            €440
To record mixed merchandise sales
(€1,000 @ 3%, €500 @ 14%, €2,000 @ 17%)
```

**VAT Breakdown:**
- VAT Payable (3%): €30
- VAT Payable (14%): €70
- VAT Payable (17%): €340
- Total VAT Payable: €440

---

## Problems Set B - Solutions

### Problem B-1: Complete Merchandising Cycle

**Solution:**

**Transaction 1: Purchase €10,000 merchandise on credit (excluding VAT), VAT 17%**
```
361    Inventory                  €10,000
421611 VAT Recoverable             €1,700
44111  Accounts Payable                       €11,700
To record credit purchase of merchandise
```

**Transaction 2: Pay €300 freight (VAT 17% on freight)**
```
361    Inventory                     €300
421611 VAT Recoverable                €51
5131   Cash                                      €351
To record freight costs
```

**Transaction 3: Sell €8,000 merchandise for cash (excluding VAT), VAT 17%, Cost €5,000**
```
5131   Cash                       €9,360
7061   Sales Revenue                        €8,000
461411 VAT Payable                            €1,360
To record cash sale

607    Cost of Goods Sold         €5,000
361    Inventory                              €5,000
To record cost of goods sold
```

**Transaction 4: Customer returns €500 merchandise, Cost €300**
```
709    Sales Returns               €500
461411 VAT Payable                             €85
5131   Cash                                      €585
To record sales return

361    Inventory                     €300
607    Cost of Goods Sold                      €300
To restore inventory and reverse cost of goods sold
```

**Transaction 5: Purchase €2,000 children's clothing (excluding VAT), VAT 3%**
```
361    Inventory                   €2,000
421611 VAT Recoverable               €60
44111  Accounts Payable                        €2,060
To record purchase of children's clothing (3% VAT)
```

**Transaction 6: Sell €1,000 children's clothing for cash (excluding VAT), VAT 3%, Cost €600**
```
5131   Cash                       €1,030
7061   Sales Revenue                        €1,000
461411 VAT Payable                              €30
To record cash sale of children's clothing

607    Cost of Goods Sold           €600
361    Inventory                              €600
To record cost of goods sold
```

**Summary:**
- Inventory: €10,000 + €300 + €2,000 - €5,000 + €300 - €600 = €7,000
- Sales Revenue: €8,000 - €500 + €1,000 = €8,500
- Cost of Goods Sold: €5,000 - €300 + €600 = €5,300
- VAT Payable: €1,360 - €85 + €30 = €1,305
- VAT Recoverable: €1,700 + €51 + €60 = €1,811

---

### Problem B-2: Multi-Step Income Statement

**Solution:**

**Given:**
- Sales Revenue: €150,000
- Sales Returns: €3,000
- Sales Allowances: €1,000
- Sales Discounts: €2,000
- Cost of Goods Sold: €80,000
- Salaries Expense: €25,000
- Rent Expense: €8,000
- Utilities Expense: €2,500
- Depreciation Expense: €3,000
- Interest Expense: €500
- Income Tax Expense: €4,000

**Multi-Step Income Statement:**

```
Income Statement
For the Year Ended [Date]

Sales Revenue                      €150,000
Less: Sales Returns                  (3,000)
Less: Sales Allowances                (1,000)
Less: Sales Discounts                 (2,000)
                                   ───────
Net Sales                           144,000

Cost of Goods Sold                   80,000
                                   ───────
Gross Profit                         64,000

Operating Expenses:
  Salaries Expense                   25,000
  Rent Expense                        8,000
  Utilities Expense                   2,500
  Depreciation Expense                3,000
                                   ───────
Total Operating Expenses             38,500
                                   ───────
Operating Income                     25,500

Other Expenses:
  Interest Expense                      500
                                   ───────
Income Before Taxes                  25,000

Income Tax Expense                    4,000
                                   ───────
Net Income                          €21,000
```

**Verification:**
- Net Sales: €150,000 - €3,000 - €1,000 - €2,000 = €144,000
- Gross Profit: €144,000 - €80,000 = €64,000
- Operating Income: €64,000 - €38,500 = €25,500
- Income Before Taxes: €25,500 - €500 = €25,000
- Net Income: €25,000 - €4,000 = €21,000

---

### Problem B-3: VAT Tracking and Return

**Solution:**

**Sales VAT Calculation:**

**Food Products (3% VAT):**
- Sales: €5,000
- VAT: €5,000 × 3% = €150

**Wine (14% VAT):**
- Sales: €2,000
- VAT: €2,000 × 14% = €280

**General Merchandise (17% VAT):**
- Sales: €10,000
- VAT: €10,000 × 17% = €1,700

**Total VAT Payable:**
- €150 + €280 + €1,700 = €2,130

**Purchases VAT Calculation:**

**Food (3% VAT):**
- Purchases: €3,000
- VAT Recoverable: €3,000 × 3% = €90

**Wine (14% VAT):**
- Purchases: €1,500
- VAT Recoverable: €1,500 × 14% = €210

**General Merchandise (17% VAT):**
- Purchases: €6,000
- VAT Recoverable: €6,000 × 17% = €1,020

**Total VAT Recoverable:**
- €90 + €210 + €1,020 = €1,320

**a) Total VAT Payable: €2,130**

**b) Total VAT Recoverable: €1,320**

**c) Net VAT to Pay:**
- Net VAT = VAT Payable - VAT Recoverable
- Net VAT = €2,130 - €1,320
- **Net VAT to Pay: €810**

**d) VAT Return Summary:**

```
VAT Return Summary
For the Period Ended [Date]

VAT Payable:
  3% VAT on Sales (€5,000)              €150
  14% VAT on Sales (€2,000)              280
  17% VAT on Sales (€10,000)           1,700
                                      ───────
Total VAT Payable                       2,130

VAT Recoverable:
  3% VAT on Purchases (€3,000)           90
  14% VAT on Purchases (€1,500)         210
  17% VAT on Purchases (€6,000)       1,020
                                      ───────
Total VAT Recoverable                   1,320

Net VAT to Pay                          €810
```

---

### Problem B-4: Perpetual vs. Periodic Comparison

**Solution:**

**Transaction: Purchase €5,000 merchandise (excluding VAT), VAT 17%, on credit**

**Perpetual System:**
```
361    Inventory                   €5,000
421611 VAT Recoverable              €850
44111  Accounts Payable                        €5,850
To record purchase
```

**Periodic System:**
```
6061   Purchases                   €5,000
421611 VAT Recoverable              €850
44111  Accounts Payable                        €5,850
To record purchase
```

**Transaction: Sell €2,000 of that merchandise for €3,000 cash (excluding VAT), VAT 17%. Cost is €2,000.**

**Perpetual System:**
```
5131   Cash                       €3,510
7061   Sales Revenue                        €3,000
461411 VAT Payable                              €510
To record sale

607    Cost of Goods Sold         €2,000
361    Inventory                              €2,000
To record cost of goods sold
```

**Periodic System:**
```
5131   Cash                       €3,510
7061   Sales Revenue                        €3,000
461411 VAT Payable                              €510
To record sale

[No cost of goods sold entry - calculated at period end]
```

**Key Differences:**
- **Perpetual:** Inventory and Cost of Goods Sold updated immediately
- **Periodic:** Purchases recorded separately, Cost of Goods Sold calculated at period end

---

## Comprehensive Problem - Solution

### Comprehensive Problem 6: Complete Merchandising Operations

**Solution:**

#### 1. Journal Entries

**November 3: Purchase €15,000 adult clothing on credit (excluding VAT), VAT 17%, Terms 2/10, n/30**
```
361    Inventory                  €15,000
421611 VAT Recoverable             €2,550
44111  Accounts Payable                       €17,550
To record credit purchase, terms 2/10, n/30
```

**November 5: Purchase €5,000 children's clothing on credit (excluding VAT), VAT 3%**
```
361    Inventory                   €5,000
421611 VAT Recoverable               €150
44111  Accounts Payable                        €5,150
To record purchase of children's clothing (3% VAT)
```

**November 8: Pay €400 freight on November 3 purchase (VAT 17% on freight)**
```
361    Inventory                     €400
421611 VAT Recoverable                €68
5131   Cash                                      €468
To record freight costs
```

**November 10: Pay for November 3 purchase within discount period**
- Invoice: €17,550
- Discount: €17,550 × 2% = €351 (on total including VAT, or €300 on merchandise)
- Payment: €17,550 - €351 = €17,199
```
44111  Accounts Payable            €17,550
361    Inventory                               €300
5131   Cash                                   €17,199
421611 VAT Recoverable                            €51
To record payment within discount period (2% discount)
```

**November 12: Sell €8,000 adult clothing for cash (excluding VAT), VAT 17%, Cost €5,000**
```
5131   Cash                       €9,360
7061   Sales Revenue                        €8,000
461411 VAT Payable                            €1,360
To record cash sale

607    Cost of Goods Sold         €5,000
361    Inventory                              €5,000
To record cost of goods sold
```

**November 15: Sell €2,000 children's clothing on credit (excluding VAT), VAT 3%, Cost €1,200**
```
4011   Accounts Receivable        €2,060
7061   Sales Revenue                        €2,000
461411 VAT Payable                              €60
To record credit sale

607    Cost of Goods Sold         €1,200
361    Inventory                              €1,200
To record cost of goods sold
```

**November 18: Customer returns €500 adult clothing from November 12 sale, Cost €300**
```
709    Sales Returns               €500
461411 VAT Payable                             €85
5131   Cash                                      €585
To record sales return

361    Inventory                     €300
607    Cost of Goods Sold                      €300
To restore inventory and reverse cost of goods sold
```

**November 20: Purchase €10,000 general merchandise on credit (excluding VAT), VAT 17%**
```
361    Inventory                  €10,000
421611 VAT Recoverable             €1,700
44111  Accounts Payable                       €11,700
To record credit purchase
```

**November 22: Receive payment from November 15 sale**
```
5131   Cash                       €2,060
4011   Accounts Receivable                    €2,060
To record collection from customer
```

**November 25: Sell €6,000 merchandise for cash (excluding VAT), VAT 17%, Cost €3,500**
```
5131   Cash                       €7,020
7061   Sales Revenue                        €6,000
461411 VAT Payable                            €1,020
To record cash sale

607    Cost of Goods Sold         €3,500
361    Inventory                              €3,500
To record cost of goods sold
```

**November 28: Pay salaries €3,000**
```
6211   Salaries Expense          €3,000
5131   Cash                                  €3,000
To record payment of salaries
```

#### 2. Multi-Step Income Statement

**Calculations:**
- Beginning Inventory: €20,000
- Purchases: €15,000 + €5,000 + €10,000 = €30,000
- Purchase Discounts: €300
- Freight: €400
- Net Purchases: €30,000 - €300 + €400 = €30,100
- Cost of Goods Sold: €5,000 + €1,200 - €300 + €3,500 = €9,400
- Sales: €8,000 + €2,000 + €6,000 = €16,000
- Sales Returns: €500
- Net Sales: €16,000 - €500 = €15,500

```
Fashion Boutique Luxembourg SARL
Income Statement
For the Month Ended November 30, 2024

Sales Revenue                      €16,000
Less: Sales Returns                  (500)
                                   ───────
Net Sales                           15,500

Cost of Goods Sold                   9,400
                                   ───────
Gross Profit                         6,100

Operating Expenses:
  Salaries Expense                   3,000
                                   ───────
Total Operating Expenses             3,000
                                   ───────
Net Income                          €3,100
```

#### 3. Calculations

**a) Net Sales:**
- Net Sales = Sales Revenue - Sales Returns
- Net Sales = €16,000 - €500 = **€15,500**

**b) Gross Profit:**
- Gross Profit = Net Sales - Cost of Goods Sold
- Gross Profit = €15,500 - €9,400 = **€6,100**

**c) Gross Profit Margin:**
- Gross Profit Margin = (Gross Profit ÷ Net Sales) × 100
- Gross Profit Margin = (€6,100 ÷ €15,500) × 100 = **39.35%**

**d) Cost of Goods Sold Verification:**
- Beginning Inventory: €20,000
- Net Purchases: €30,100
- Cost of Goods Available: €50,100
- Ending Inventory (from transactions): €20,000 + €30,100 - €9,400 = €40,700
- Cost of Goods Sold: €50,100 - €40,700 = €9,400 ✓

#### 4. VAT Summary

**VAT Payable:**
- 17% VAT on Sales: €1,360 + €1,020 - €85 = €2,295
- 3% VAT on Sales: €60
- **Total VAT Payable: €2,355**

**VAT Recoverable:**
- 17% VAT on Purchases: €2,550 + €68 - €51 + €1,700 = €4,267
- 3% VAT on Purchases: €150
- **Total VAT Recoverable: €4,417**

**Net VAT Position:**
- Net VAT = €2,355 - €4,417 = **-€1,062 (VAT Recoverable)**

**VAT Return Summary:**
```
VAT Return Summary
November 2024

VAT Payable:
  17% VAT on Sales                  €2,295
  3% VAT on Sales                     60
                                   ───────
Total VAT Payable                   2,355

VAT Recoverable:
  17% VAT on Purchases              4,267
  3% VAT on Purchases                 150
                                   ───────
Total VAT Recoverable               4,417

Net VAT Recoverable                 €1,062
```

#### 5. Inventory Comparison

**Calculated Ending Inventory:**
- Beginning: €20,000
- Purchases: €30,100 (net)
- Cost of Goods Sold: €9,400
- **Calculated Ending: €40,700**

**Physical Count:**
- **Ending Inventory: €22,000**

**Difference:**
- Difference: €40,700 - €22,000 = €18,700
- This is a significant difference indicating potential issues

**Possible Causes:**
- Theft or loss
- Recording errors
- Inventory shrinkage
- Missing transactions

**How to Handle:**
1. Investigate the difference
2. Adjust inventory to physical count
3. Record inventory shrinkage as expense
4. Improve inventory controls

**Adjusting Entry:**
```
6188   Inventory Shrinkage Expense €18,700
361    Inventory                              €18,700
To adjust inventory to physical count
```

#### 6. Luxembourg Compliance

**PCN Compliance:**
- All accounts use proper PCN classifications
- Inventory (361) properly used
- Cost of Goods Sold (607) properly recorded
- VAT accounts (461411, 421611) properly used

**VAT Compliance:**
- Different VAT rates properly tracked
- VAT Payable and Recoverable properly recorded
- Ready for eCDF filing

**Inventory Valuation:**
- Inventory valued at cost
- Physical count conducted
- Adjustments made for discrepancies

**Financial Statement Compliance:**
- Income Statement shows proper format
- Gross Profit properly calculated
- Ready for RCS filing

---

## Cases - Solutions

### Case 6-1: Mixed Business Accounting

**Solution:**

#### 1. Service Revenue vs. Merchandise Sales

**Service Revenue (Meals):**
- Recorded when service is provided
- No inventory involved
- No cost of goods sold
- VAT 3% on meals and non-alcoholic drinks consumed on the premises (alcoholic drinks served: 17%)

**Merchandise Sales (Wine, Coffee, Merchandise):**
- Recorded when goods are sold
- Inventory involved
- Cost of goods sold recorded
- Different VAT rates may apply

**Accounting Difference:**
- Service: Debit Cash/AR, Credit Service Revenue
- Merchandise: Debit Cash/AR, Credit Sales Revenue; Debit COGS, Credit Inventory

#### 2. PCN Accounts

**a) Food Ingredients (to be cooked):**
- 6061: Purchases (Class 6: Expenses); food and drink stock on hand at period end in 361, with the change in stocks booked to 607
- Consumed in preparing meals rather than resold as such

**b) Wine Inventory (to be sold):**
- 361: Merchandise Inventory (Class 3: Inventory Accounts)
- Treated as inventory asset

**c) Coffee Beans (to be sold):**
- 361: Merchandise Inventory (Class 3: Inventory Accounts)
- Treated as inventory asset

**d) Merchandise Inventory:**
- 361: Merchandise Inventory (Class 3: Inventory Accounts)
- All merchandise uses same account

#### 3. Cost of Goods Sold Calculation

**For Merchandise Sales:**
- Record cost when merchandise is sold
- Debit Cost of Goods Sold, Credit Inventory
- Use perpetual inventory system

**Example:**
- Sell wine for €20, cost €10
- Debit Cash €20, Credit Sales Revenue €20
- Debit Cost of Goods Sold €10, Credit Inventory €10

#### 4. VAT Rates

**Service Revenue (Meals):**
- 3% VAT on meals and non-alcoholic drinks consumed on the premises
- 17% VAT on alcoholic drinks served (wine by the glass, beer, spirits)

**Merchandise:**
- Wine bottles sold to take away: 14% for certain wines (up to 13% vol.), otherwise 17%
- Coffee beans (food product): 3% VAT
- General merchandise (T-shirts, mugs): 17% VAT

**Tracking:**
- Must track VAT by rate
- Separate accounts or sub-accounts
- Required for VAT return

#### 5. Income Statement Structure

**Multi-Step Format:**

```
Revenue:
  Service Revenue (meals)                    €80,000
  Sales Revenue (merchandise)                20,000
                                            ───────
Total Revenue                               100,000

Cost of Goods Sold:
  Cost of Goods Sold (merchandise)           12,000
                                            ───────
Gross Profit                                 88,000

Operating Expenses:
  Cost of Goods Sold (food ingredients)      40,000
  Salaries Expense                           25,000
  Other Expenses                             10,000
                                            ───────
Total Operating Expenses                     75,000
                                            ───────
Net Income                                  €13,000
```

#### 6. Luxembourg Compliance Requirements

**PCN Requirements:**
- Use proper PCN accounts
- Separate service and merchandise revenue
- Proper inventory accounting

**VAT Requirements:**
- Track VAT by rate
- File VAT returns correctly
- Maintain proper records

**Inventory Requirements:**
- Value inventory at cost
- Conduct physical counts
- Reconcile with records

---

### Case 6-2: Inventory System Decision

**Solution:**

#### 1. Recommended System

**Recommendation: Perpetual Inventory System**

**Reasons:**
- Computerized POS system available
- Multiple VAT rates need tracking
- Real-time inventory control needed
- Better for modern retail operations

#### 2. Advantages

**For This Business:**
- Real-time inventory tracking
- Accurate cost of goods sold
- Better control over stock
- Easier VAT tracking by rate
- Supports multiple product categories

#### 3. VAT Rates Impact

**Different VAT Rates:**
- Children's clothing: 3%
- Adult clothing: 17%
- Accessories: 17%

**System Must:**
- Track inventory by VAT rate
- Record sales with correct VAT
- Calculate VAT by rate for returns
- Support VAT return preparation

**Perpetual System Advantages:**
- Can track inventory by category/VAT rate
- Real-time VAT calculations
- Easier VAT return preparation

#### 4. PCN Accounts Needed

**Inventory Accounts:**
- 361: Merchandise Inventory (main account)
- Sub-accounts for different categories if needed

**Revenue Accounts:**
- 7061: Sales Revenue
- Sub-accounts by VAT rate if needed

**Expense Accounts:**
- 607: Cost of Goods Sold

**VAT Accounts:**
- 461411: VAT Payable
- 421611: VAT Recoverable
- Sub-accounts by rate if needed

#### 5. Inventory Management Procedures

**Procedures:**
1. Record all purchases immediately
2. Record all sales with cost
3. Conduct regular physical counts
4. Reconcile physical to records
5. Investigate discrepancies
6. Adjust for shrinkage

#### 6. Handling Special Situations

**a) Purchase Returns:**
- Reverse purchase entry
- Reduce inventory
- Adjust VAT Recoverable

**b) Sales Returns:**
- Reverse sale entry
- Restore inventory
- Reverse cost of goods sold
- Adjust VAT Payable

**c) Physical Inventory Counts:**
- Conduct regularly (monthly/quarterly)
- Compare to records
- Adjust for differences
- Record shrinkage expense

**d) VAT Tracking:**
- Track by rate on all transactions
- Maintain VAT summary
- Prepare VAT return by rate
- File through eCDF

---

*End of Chapter 6 Solutions*

