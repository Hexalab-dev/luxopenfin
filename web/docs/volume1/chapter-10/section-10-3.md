---
id: volume1-chapter-10-section-10-3
title: "10.3 Calculate the Cost of Goods Sold and Ending Inventory Using the Perpetual Method"
description: "In a perpetual inventory system, inventory records are updated continuously with each purchase and sale. Cost of goods sold is recorded at the time of..."
sidebar_position: 4
slug: /volume1/chapter-10/section-10-3
---

# 10.3 Calculate the Cost of Goods Sold and Ending Inventory Using the Perpetual Method

### Perpetual Inventory System

In a **perpetual inventory system**, inventory records are updated continuously with each purchase and sale. Cost of goods sold is recorded at the time of each sale.

### Cost of Goods Sold (Perpetual)

**How it Works:**
- Each sale triggers a cost of goods sold entry
- Cost is determined using cost flow assumption (FIFO, weighted average)
- Inventory is reduced by cost amount
- Inventory balance is always current

### Example: FIFO with Perpetual System

**Transactions:**
- Jan 1: Purchase 100 units @ €10
- Jan 10: Purchase 150 units @ €12
- Jan 15: Sell 120 units
- Jan 20: Purchase 200 units @ €14
- Jan 25: Sell 150 units

**FIFO Cost Flow:**

**Jan 1: Purchase**
```
361    Inventory                   €1,000
44111  Accounts Payable                        €1,000
Purchase 100 units @ €10
```

**Jan 10: Purchase**
```
361    Inventory                   €1,800
44111  Accounts Payable                        €1,800
Purchase 150 units @ €12
```

**Inventory Balance:**
- 100 units @ €10 = €1,000
- 150 units @ €12 = €1,800
- Total: 250 units = €2,800

**Jan 15: Sale (120 units)**
- FIFO: Sell oldest first
- 100 units @ €10 + 20 units @ €12 = €1,000 + €240 = €1,240

**Sale Entry:**
```
5131   Cash (or 4011   Receivable) €[selling price]
7061   Sales Revenue                          €[selling price]
```

**COGS Entry:**
```
607    Cost of Goods Sold          €1,240
361    Inventory                               €1,240
```

**Remaining Inventory:**
- 130 units @ €12 = €1,560

**Jan 20: Purchase**
```
361    Inventory                   €2,800
44111  Accounts Payable                        €2,800
Purchase 200 units @ €14
```

**Inventory Balance:**
- 130 units @ €12 = €1,560
- 200 units @ €14 = €2,800
- Total: 330 units = €4,360

**Jan 25: Sale (150 units)**
- FIFO: Sell oldest first
- 130 units @ €12 + 20 units @ €14 = €1,560 + €280 = €1,840

**COGS Entry:**
```
607    Cost of Goods Sold          €1,840
361    Inventory                               €1,840
```

**Ending Inventory:**
- 180 units @ €14 = €2,520

**Summary:**
- Cost of Goods Sold: €1,240 + €1,840 = €3,080
- Ending Inventory: €2,520
- Total: €5,600 ✓

### Example: Weighted Average with Perpetual System

**Same Transactions with Weighted Average:**

**Jan 1: Purchase 100 units @ €10**
- Inventory: 100 units @ €10 = €1,000
- Average: €10

**Jan 10: Purchase 150 units @ €12**
- Inventory: 250 units = €2,800
- Average: €2,800 ÷ 250 = €11.20

**Jan 15: Sell 120 units @ €11.20**
- COGS: 120 × €11.20 = €1,344
- Remaining: 130 units @ €11.20 = €1,456

**Jan 20: Purchase 200 units @ €14**
- Inventory: 330 units = €3,256
- Average: €3,256 ÷ 330 = €9.87

Wait, that doesn't seem right. Let me recalculate:

**Jan 20: Purchase 200 units @ €14**
- Previous: 130 units @ €11.20 = €1,456
- New: 200 units @ €14 = €2,800
- Total: 330 units = €4,256
- Average: €4,256 ÷ 330 = €12.90

**Jan 25: Sell 150 units @ €12.90**
- COGS: 150 × €12.90 = €1,935
- Remaining: 180 units @ €12.90 = €2,322

**Summary:**
- Cost of Goods Sold: €1,344 + €1,935 = €3,279
- Ending Inventory: €2,322
- Total: €5,601 (rounding difference)

### Perpetual vs. Periodic Comparison

**Same Data, Different Methods:**

**FIFO:**
- Periodic COGS: €3,080
- Perpetual COGS: €3,080
- **Same result** (FIFO gives same result in both systems)

**Weighted Average:**
- Periodic COGS: €3,361 (one average for period)
- Perpetual COGS: €3,279 (moving average)
- **Different result** (moving average recalculates with each purchase)

### Advantages of Perpetual System

**Benefits:**
- Always know current inventory
- Cost of goods sold recorded at sale
- Better inventory control
- Easier to detect theft
- No need to wait for physical count

### Luxembourg Considerations

**Perpetual System:**
- Most modern businesses use perpetual
- Required for better inventory control
- Supports VAT tracking
- Easier for multiple VAT rates
- Better for compliance

### Luxembourg Compliance Note

For perpetual inventory in Luxembourg:
- Must use consistent valuation method
- Must update with each transaction
- Must reconcile with physical counts
- Must comply with PCN Class 3
- Must support inventory values
- Must handle VAT correctly

### Think It Through

Why does weighted average give different results in periodic vs. perpetual systems? Which method is more accurate?

---
