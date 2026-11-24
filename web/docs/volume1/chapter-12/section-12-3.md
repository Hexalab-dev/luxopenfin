---
id: volume1-chapter-12-section-12-3
title: "12.3 Account for Short-Term Debt"
description: "5131 Cash                       €10,000"
sidebar_position: 4
slug: /volume1/chapter-12/section-12-3
---

# 12.3 Account for Short-Term Debt

### Short-Term Notes Payable

**Short-Term Notes Payable** are written promises to pay within one year.

**Example:**
- Borrow €10,000 for 6 months at 6% interest

**Borrowing:**
```
5131   Cash                       €10,000
4421   Notes Payable                          €10,000
To record short-term note
```

**Interest Accrual (Monthly):**
- Interest: €10,000 × 0.06 × (1/12) = €50

```
6552   Interest Expense           €50
4718   Interest Payable                        €50
To accrue interest
```

**Payment at Maturity:**
- Principal: €10,000
- Interest: €300 (6 months)

```
4421   Notes Payable             €10,000
4718   Interest Payable                        €300
5131   Cash                                   €10,300
To record note payment
```

**PCN Accounts:**
- **4421**: Notes Payable (Effets à payer)
- **4718**: Interest Payable (Intérêts à Payer)

### Current Portion of Long-Term Debt

**Current Portion:**
- Portion of long-term debt due within one year
- Reclassified from long-term to current

**Example:**
- Long-term loan: €100,000
- Payment due next year: €20,000

**Reclassification:**
```
1942   Long-Term Debt             €20,000
1941   Current Portion of Long-Term Debt      €20,000
To reclassify current portion
```

### Luxembourg Compliance Note

Short-term debt in Luxembourg:
- Must be properly classified
- Must accrue interest
- Must be disclosed
- Must comply with PCN
- Must maintain records

### Think It Through

What is the difference between a short-term note payable and accounts payable? When might each be used?

---
