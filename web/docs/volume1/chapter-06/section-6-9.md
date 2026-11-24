---
id: volume1-chapter-06-section-6-9
title: "6.9 Luxembourg VAT on Merchandise (3%, 8%, 14%, 17% Rates)"
description: "Luxembourg has four VAT rates that apply to different types of merchandise:"
sidebar_position: 10
slug: /volume1/chapter-06/section-6-9
---

# 6.9 Luxembourg VAT on Merchandise (3%, 8%, 14%, 17% Rates)

### VAT Rates on Merchandise

Luxembourg has four VAT rates that apply to different types of merchandise:

- **3%**: Food products and non-alcoholic drinks, books, pharmaceuticals, children's clothing
- **8%**: Gas, electricity, hairdressing, small repairs
- **14%**: Certain wines (up to 13% vol.), some goods
- **17%**: Most goods and services (standard rate), including beer and spirits

### VAT on Common Merchandise Types

#### Food Products (3% VAT)

**Applies to:**
- Food products for human consumption
- Water (except mineral/aerated)
- Animal feed
- Seeds and plants for food production

**Example:** Purchase €1,000 food products

**Journal Entry:**
```
361    Inventory                   €1,000
421611 VAT Recoverable               30   (3%)
44111  Accounts Payable                        €1,030
```

#### Children's Clothing (3% VAT)

**Applies to:**
- Clothing and shoes for children
- Age limits apply (typically up to 14 years)

**Example:** Purchase €500 children's clothing

**Journal Entry:**
```
361    Inventory                   €500
421611 VAT Recoverable               15   (3%)
44111  Accounts Payable                          €515
```

#### Certain Wines (14% VAT)

**Applies to:**
- Certain wines (up to 13% vol.)
- When sold as merchandise (not in restaurant)
- Beer, spirits and other alcohol are **not** at 14%: they are taxed at the standard 17% rate (and alcoholic drinks served in restaurants are always 17%)

**Example:** Purchase €1,000 wine (12% vol.) for retail sale

**Journal Entry:**
```
361    Inventory                   €1,000
421611 VAT Recoverable              140   (14%)
44111  Accounts Payable                        €1,140
```

#### Standard Merchandise (17% VAT)

**Applies to:**
- Most goods not specifically listed
- Electronics, furniture, general clothing, etc.

**Example:** Purchase €2,000 general merchandise

**Journal Entry:**
```
361    Inventory                   €2,000
421611 VAT Recoverable              340   (17%)
44111  Accounts Payable                        €2,340
```

### VAT on Sales

**Same rates apply to sales:**

**Example: Mixed Sales**

Retail store sells:
- Children's T-shirt: €20 (3% VAT)
- Adult T-shirt: €30 (17% VAT)
- Book: €15 (3% VAT)

**Journal Entries:**

**Sale 1: Children's T-shirt**
```
5131   Cash                        €20.60
7061   Sales Revenue                           €20.00
461411 VAT Payable (3%)                           €0.60
```

**Sale 2: Adult T-shirt**
```
5131   Cash                        €35.10
7061   Sales Revenue                           €30.00
461411 VAT Payable (17%)                          €5.10
```

**Sale 3: Book**
```
5131   Cash                        €15.45
7061   Sales Revenue                           €15.00
461411 VAT Payable (3%)                           €0.45
```

### VAT Tracking for Returns

**Important:** Must track VAT by rate for proper VAT return preparation.

**Example:** Customer returns children's T-shirt (3% VAT)

**Journal Entry:**
```
709    Sales Returns               €20.00
461411 VAT Payable (3%)                           €0.60
5131   Cash (or 4011   Receivable)                €20.60
To record return of merchandise
```

### Luxembourg VAT Return Preparation

**For VAT Return (eCDF):**
- Must report sales by VAT rate
- Must report purchases by VAT rate
- Must calculate net VAT (Payable - Recoverable)
- Must file by deadline (monthly/quarterly/annual)

**Example VAT Summary:**
```
VAT Payable:
  3% VAT Sales: €500 × 3% = €15.00
  17% VAT Sales: €2,000 × 17% = €340.00
  Total VAT Payable: €355.00

VAT Recoverable:
  3% VAT Purchases: €300 × 3% = €9.00
  17% VAT Purchases: €1,500 × 17% = €255.00
  Total VAT Recoverable: €264.00

Net VAT to Pay: €355.00 - €264.00 = €91.00
```

### Luxembourg Compliance Note

For VAT on merchandise in Luxembourg:
- Must use correct VAT rate for each item
- Must track VAT by rate for VAT return
- Must record VAT separately (not in inventory cost)
- Must file VAT returns on time (eCDF)
- Must maintain proper documentation
- Different rates require careful accounting

### Common VAT Errors to Avoid

1. **Wrong Rate Application**: Using 17% instead of 3% for food
2. **Missing VAT Tracking**: Not tracking VAT by rate
3. **VAT in Inventory Cost**: Including VAT in inventory (should be separate)
4. **Incorrect Returns**: Not adjusting VAT on returns
5. **Missing Documentation**: Not supporting VAT calculations

### Think It Through

A Luxembourg retail store sells both children's clothing (3% VAT) and adult clothing (17% VAT). How should the business track these sales for VAT return preparation? What accounts and procedures are needed?

---
