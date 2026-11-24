---
id: volume1-chapter-06-section-6-7
title: "6.7 Appendix: Analyze and Record Transactions for Merchandise Purchases and Sales Using the Periodic Inventory System"
description: "The periodic inventory system updates inventory records only at period end. During the period, purchases are recorded in a Purchases account, and cost of..."
sidebar_position: 8
slug: /volume1/chapter-06/section-6-7
---

# 6.7 Appendix: Analyze and Record Transactions for Merchandise Purchases and Sales Using the Periodic Inventory System

### Periodic Inventory System Overview

The **periodic inventory system** updates inventory records only at period end. During the period, purchases are recorded in a Purchases account, and cost of goods sold is calculated at period end.

### Key Differences from Perpetual

**Perpetual System:**
- Inventory updated with each purchase
- Cost of goods sold recorded at each sale
- Inventory balance always current

**Periodic System:**
- Purchases recorded in Purchases account
- No cost of goods sold at sale time
- Cost of goods sold calculated at period end
- Requires physical inventory count

### Recording Purchases (Periodic System)

**Transaction:** Purchase merchandise on credit

**Example:** Purchase €5,000 merchandise (excluding VAT), VAT 17%, recoverable.

**Journal Entry:**
```
6061   Purchases (Class 6)         €5,000
421611 VAT Recoverable              850
44111  Accounts Payable                        €5,850
To record purchase of merchandise (periodic system)
```

**Key Difference:** Uses "Purchases" account (6061) instead of "Inventory" account.

**PCN Account:**
- 6061: Purchases of Merchandise (Class 6 - Expense account in periodic system)

### Recording Sales (Periodic System)

**Transaction:** Sell merchandise

**Example:** Sell €1,000 merchandise for cash (excluding VAT), VAT 17%.

**Journal Entry:**
```
5131   Cash                       €1,170
7061   Sales Revenue                          €1,000
461411 VAT Payable                              €170
To record sale of merchandise (periodic system)
```

**Key Difference:** No cost of goods sold entry at sale time. Cost is calculated at period end.

### Calculating Cost of Goods Sold (Periodic System)

**Formula:**
**Cost of Goods Sold = Beginning Inventory + Purchases - Ending Inventory**

**Steps:**
1. Take beginning inventory (from previous period)
2. Add purchases during period
3. Subtract ending inventory (from physical count)
4. Result is cost of goods sold

**Example:**
- Beginning Inventory: €10,000
- Purchases: €30,000
- Ending Inventory (physical count): €12,000
- Cost of Goods Sold: €10,000 + €30,000 - €12,000 = €28,000

**Adjusting Entry at Period End:**
```
607    Cost of Goods Sold          €28,000
361    Inventory (beginning)                   €10,000
6061   Purchases                                 €30,000
361    Inventory (ending)                        €12,000
To calculate and record cost of goods sold
```

**Or, simpler approach:**
```
607    Cost of Goods Sold          €28,000
361    Inventory (beginning)                   €10,000
6061   Purchases                                 €30,000
361    Inventory (ending)                        €12,000
```

Actually, the proper periodic closing entries are:

**Step 1: Transfer Beginning Inventory and Purchases to COGS**
```
607    Cost of Goods Sold          €40,000
361    Inventory (beginning)                   €10,000
6061   Purchases                                 €30,000
```

**Step 2: Record Ending Inventory**
```
361    Inventory (ending)          €12,000
607    Cost of Goods Sold                      €12,000
```

**Result:** Cost of Goods Sold = €40,000 - €12,000 = €28,000

### Physical Inventory Count

**Required for Periodic System:**
- Must count all inventory at period end
- Count determines ending inventory value
- Used to calculate cost of goods sold
- Must be accurate

**Process:**
1. Count all inventory items
2. Value each item (at cost)
3. Calculate total ending inventory
4. Use in cost of goods sold calculation

### Advantages and Disadvantages

**Periodic System Advantages:**
- Simpler during the period
- Less detailed record-keeping
- Suitable for small businesses
- Lower cost

**Periodic System Disadvantages:**
- Don't know inventory levels during period
- Cost of goods sold only at period end
- Requires physical count
- Less inventory control
- Harder to detect theft

### Luxembourg Context

**Use of Periodic System:**
- Less common in Luxembourg
- Mainly very small businesses
- Businesses with simple operations
- Manual accounting systems

**Luxembourg Recommendation:** Use perpetual system for most businesses due to:
- VAT compliance needs
- Better inventory control
- Multiple VAT rates
- Modern accounting systems

### Luxembourg Compliance Note

If using periodic system in Luxembourg:
- Must still follow PCN classifications
- Must properly value inventory
- Must calculate cost of goods sold accurately
- Physical counts must be documented
- Must comply with VAT requirements
- Must file accurate financial statements

---
