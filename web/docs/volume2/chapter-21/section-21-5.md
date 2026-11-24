---
id: volume2-chapter-21-section-21-5
title: "21.5 Prepare Journal Entries for a Process Costing System"
description: "Process costing requires journal entries to record costs as they flow through the production process. The entries differ from job order costing because..."
sidebar_position: 6
slug: /volume2/chapter-21/section-21-5
---

# 21.5 Prepare Journal Entries for a Process Costing System

### Journal Entry Flow

Process costing requires journal entries to record costs as they flow through the production process. The entries differ from job order costing because costs are accumulated by process rather than by job.

### 1. Purchase Raw Materials

**Transaction:** Purchase materials for production

**Journal Entry:**
```
301    Raw Materials Inventory        €5,000
421611 VAT Recoverable                 850
   44111  Accounts Payable                        €5,850
To record purchase of raw materials
```

**PCN Accounts:**
- 301: Raw Materials (Class 3)
- 421611: VAT Recoverable (Class 4)
- 44111: Accounts Payable (Class 4)

### 2. Issue Materials to Production (Process 1)

**Transaction:** Issue materials to Mixing Department

**Journal Entry:**
```
311    Work in Process - Mixing       €4,000
   301    Raw Materials Inventory                  €4,000
To record materials issued to Mixing Department
```

**PCN Account:**
- 311: Work in Process (Class 3)
- Can use sub-accounts: 310001 (Mixing), 310002 (Baking), etc.

### 3. Record Direct Labor (Process 1)

**Transaction:** Incur direct labor in Mixing Department

**Journal Entry:**
```
311    Work in Process - Mixing       €1,500
   4714   Salaries Payable                          €1,500
To record direct labor in Mixing Department
```

### 4. Incur Manufacturing Overhead

**Transaction:** Pay factory rent (overhead)

**Journal Entry:**
```
MOH    Manufacturing Overhead         €2,000
   5131   Cash                                      €2,000
To record actual manufacturing overhead
```

**PCN Account:**
- MOH: Manufacturing Overhead (cost-accounting clearing account outside the PCN)

### 5. Apply Manufacturing Overhead

**Transaction:** Apply overhead to Mixing Department (based on allocation)

**Journal Entry:**
```
311    Work in Process - Mixing       €1,200
   MOH    Manufacturing Overhead                    €1,200
To apply overhead to Mixing Department
```

### 6. Transfer from Process 1 to Process 2

**Transaction:** Transfer completed units from Mixing to Baking Department

**Journal Entry:**
```
311    Work in Process - Baking       €6,700
   311    Work in Process - Mixing                 €6,700
To transfer costs from Mixing to Baking Department
(€4,000 materials + €1,500 labor + €1,200 overhead)
```

**Note:** In practice, you might use separate accounts or sub-accounts for each department.

### 7. Add Costs in Process 2

**Transaction:** Add materials, labor, and overhead in Baking Department

**Journal Entries:**
```
311    Work in Process - Baking       €800
   301    Raw Materials Inventory                    €800
To record materials added in Baking Department

311    Work in Process - Baking       €1,000
   4714   Salaries Payable                          €1,000
To record direct labor in Baking Department

311    Work in Process - Baking       €600
   MOH    Manufacturing Overhead                    €600
To apply overhead to Baking Department
```

### 8. Transfer to Finished Goods

**Transaction:** Transfer completed units from Baking to Finished Goods

**Journal Entry:**
```
321    Finished Goods                 €9,100
   311    Work in Process - Baking                 €9,100
To transfer completed units to Finished Goods
(€6,700 transferred-in + €800 materials + €1,000 labor + €600 overhead)
```

**PCN Account:**
- 321: Finished Goods (Class 3)

### 9. Sell Finished Goods

**Transaction:** Sell 800 units for €12,000 (excluding VAT), VAT 17%

**Journal Entries (Two):**

**Entry 1: Record Sale**
```
5131   Cash (or 4011   Receivable)   €14,040
   7061   Sales Revenue                          €12,000
   461411 VAT Payable                              €2,040
To record sale of finished goods
```

**Entry 2: Record Cost of Goods Sold**
```
607    Cost of Goods Sold             €9,100
   321    Finished Goods                          €9,100
To record cost of goods sold
(800 units × €11.375 average cost)
```

**PCN Accounts:**
- 5131: Cash (Class 5)
- 4011: Accounts Receivable (Class 4)
- 7061: Sales Revenue (Class 7)
- 461411: VAT Payable (Class 4)
- 607: Cost of Finished Goods Sold (Class 6)
- 321: Finished Goods (Class 3)

### Complete Example: Month of Production

**Luxembourg Food Processing Company - November:**

**Nov 1: Purchase materials**
```
301    Raw Materials                  €10,000
421611 VAT Recoverable                 1,700
   44111  Accounts Payable                        €11,700
```

**Nov 1-30: Issue materials to Process 1**
```
311    Work in Process - Process 1    €8,000
   301    Raw Materials                            €8,000
```

**Nov 1-30: Direct labor in Process 1**
```
311    Work in Process - Process 1    €3,000
   4714   Salaries Payable                          €3,000
```

**Nov 1-30: Apply overhead to Process 1**
```
311    Work in Process - Process 1    €2,000
   MOH    Manufacturing Overhead                    €2,000
```

**Nov 30: Transfer from Process 1 to Process 2**
```
311    Work in Process - Process 2   €13,000
   311    Work in Process - Process 1              €13,000
```

**Nov 1-30: Add costs in Process 2**
```
311    Work in Process - Process 2    €1,500
   301    Raw Materials                            €1,500

311    Work in Process - Process 2    €2,000
   4714   Salaries Payable                          €2,000

311    Work in Process - Process 2    €1,200
   MOH    Manufacturing Overhead                    €1,200
```

**Nov 30: Transfer to Finished Goods**
```
321    Finished Goods                €17,700
   311    Work in Process - Process 2              €17,700
```

**Nov 30: Sell 1,000 units**
```
4011   Accounts Receivable           €20,000
   7061   Sales Revenue                          €20,000
   461411 VAT Payable                              €3,400

607    Cost of Goods Sold            €17,700
   321    Finished Goods                          €17,700
```

### Accounting for Beginning Work in Process

If there is beginning work in process, costs are combined with current costs using the weighted-average method.

**Example:**
- Beginning WIP: €2,000
- Current costs: €13,000
- Total costs: €15,000
- Equivalent units: 1,200
- Cost per unit: €15,000 ÷ 1,200 = €12.50

### Luxembourg Compliance Note

In Luxembourg:
- Must use proper PCN accounts
- Work in Process accounts for each department
- Cost flows must be properly recorded
- Support inventory valuations
- Maintain process cost records
- VAT handled correctly
- Cost of goods sold properly calculated

### Think It Through

How do journal entries in process costing differ from job order costing? Why are the entries structured differently?

---
