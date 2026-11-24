---
id: volume2-chapter-20-section-20-7
title: "20.7 Prepare Journal Entries for a Job Order Cost System"
description: "Job order costing requires journal entries throughout the production and sale process. Here's the complete flow with journal entries."
sidebar_position: 8
slug: /volume2/chapter-20/section-20-7
---

# 20.7 Prepare Journal Entries for a Job Order Cost System

### Complete Journal Entry Flow

Job order costing requires journal entries throughout the production and sale process. Here's the complete flow with journal entries.

### 1. Purchase Raw Materials

**Transaction:** Purchase materials on account

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

### 2. Issue Materials to Production

**Transaction:** Issue materials to Job #101

**Journal Entry:**
```
311    Work in Process - Job #101     €400
   301    Raw Materials Inventory                    €400
To record materials issued to Job #101
```

**PCN Accounts:**
- 311: Work in Process (Class 3)
- 301: Raw Materials (Class 3)

### 3. Record Direct Labor

**Transaction:** Incur direct labor costs for Job #101

**Journal Entry:**
```
311    Work in Process - Job #101     €290
   4714   Salaries Payable                          €290
To record direct labor for Job #101
```

**PCN Accounts:**
- 311: Work in Process (Class 3)
- 4714: Salaries Payable (Class 4)

**When Paid:**
```
4714   Salaries Payable               €290
   5131   Cash                                      €290
To record payment of salaries
```

### 4. Incur Actual Manufacturing Overhead

**Transaction:** Pay rent (overhead cost)

**Journal Entry:**
```
MOH    Manufacturing Overhead         €500
   5131   Cash                                      €500
To record actual manufacturing overhead (rent)
```

**PCN Account:**
- MOH: Manufacturing Overhead (cost-accounting clearing account outside the PCN)

**Other Overhead Costs:**
```
MOH    Manufacturing Overhead         €200
   5131   Cash                                      €200
To record utilities (overhead)

MOH    Manufacturing Overhead         €150
   2229   Accumulated Depreciation                 €150
To record depreciation (overhead)
```

### 5. Apply Manufacturing Overhead

**Transaction:** Apply overhead to Job #101 (10 hours × €15/hour = €150)

**Journal Entry:**
```
311    Work in Process - Job #101     €150
   MOH    Manufacturing Overhead                    €150
To apply overhead to Job #101
```

**Note:** This credits Manufacturing Overhead (applied) and debits Work in Process.

### 6. Complete Job

**Transaction:** Job #101 is completed

**Journal Entry:**
```
321    Finished Goods                 €840
   311    Work in Process - Job #101                €840
To record completion of Job #101
(€400 materials + €290 labor + €150 overhead)
```

**PCN Accounts:**
- 321: Finished Goods (Class 3)
- 311: Work in Process (Class 3)

### 7. Sell Job

**Transaction:** Sell Job #101 for €1,500 (excluding VAT), VAT 17%

**Journal Entries (Two):**

**Entry 1: Record Sale**
```
4011   Accounts Receivable           €1,755
   7061   Sales Revenue (€1,500)                 €1,500
   461411 VAT Payable (17%)                         €255
To record sale of Job #101
```

**Entry 2: Record Cost of Goods Sold**
```
607    Cost of Goods Sold             €840
   321    Finished Goods                            €840
To record cost of Job #101 sold
```

**PCN Accounts:**
- 4011: Accounts Receivable (Class 4)
- 7061: Sales Revenue (Class 7)
- 461411: VAT Payable (Class 4)
- 607: Cost of Goods Sold (Class 6)
- 321: Finished Goods (Class 3)

### 8. Close Underapplied/Overapplied Overhead

**Transaction:** Close underapplied overhead of €200

**Journal Entry:**
```
607    Cost of Goods Sold             €200
   MOH    Manufacturing Overhead                    €200
To close underapplied overhead
```

### Complete Example: Multiple Transactions

**Marie's Catering - November Transactions:**

**Nov 1: Purchase materials**
```
301    Raw Materials                  €2,000
421611 VAT Recoverable                 340
   44111  Accounts Payable                        €2,340
```

**Nov 5: Issue materials to Job #101**
```
311    Work in Process - Job #101     €400
   301    Raw Materials                            €400
```

**Nov 6: Issue materials to Job #102**
```
311    Work in Process - Job #102     €1,750
   301    Raw Materials                          €1,750
```

**Nov 10: Direct labor for Job #101**
```
311    Work in Process - Job #101     €290
   4714   Salaries Payable                        €290
```

**Nov 12: Direct labor for Job #102**
```
311    Work in Process - Job #102     €910
   4714   Salaries Payable                        €910
```

**Nov 15: Apply overhead (50% of labor)**
```
311    Work in Process - Job #101     €145
311    Work in Process - Job #102      455
   MOH    Manufacturing Overhead                    €600
```

**Nov 20: Complete Job #101**
```
321    Finished Goods                 €835
   311    Work in Process - Job #101                €835
```

**Nov 25: Sell Job #101**
```
4011   Accounts Receivable           €1,755
   7061   Sales Revenue                          €1,500
   461411 VAT Payable                              €255

607    Cost of Goods Sold             €835
   321    Finished Goods                            €835
```

**Nov 30: Actual overhead costs**
```
MOH    Manufacturing Overhead         €12,000
   5131   Cash (various)                        €12,000
```

**Nov 30: Close underapplied overhead (€12,000 actual - €10,000 applied = €2,000)**
```
607    Cost of Goods Sold             €2,000
   MOH    Manufacturing Overhead                    €2,000
```

### Luxembourg Compliance Note

In Luxembourg:
- Must use proper PCN accounts
- Journal entries must be accurate
- Support all transactions with documentation
- VAT must be handled correctly
- Cost flows must be properly recorded
- Maintain job cost records

### Think It Through

Why are there two separate journal entries when a job is sold? What accounts are affected and why?

---
