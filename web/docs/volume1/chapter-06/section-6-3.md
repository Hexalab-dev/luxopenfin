---
id: volume1-chapter-06-section-6-3
title: "6.3 Analyze and Record Transactions for Merchandise Purchases Using the Perpetual Inventory System"
description: "When a merchandising business purchases inventory, it must record:"
sidebar_position: 4
slug: /volume1/chapter-06/section-6-3
---

# 6.3 Analyze and Record Transactions for Merchandise Purchases Using the Perpetual Inventory System

### Purchasing Merchandise

When a merchandising business purchases inventory, it must record:
- The cost of the merchandise
- Any freight costs
- VAT (if recoverable)
- Payment terms

### Basic Purchase Transaction

**Transaction:** Purchase merchandise on credit

**Example:** Retail store purchases €5,000 of clothing on credit from supplier (excluding VAT), VAT 17%, recoverable.

**Journal Entry:**
```
361    Inventory (Class 3)         €5,000
421611 VAT Recoverable (Class 4)    850
44111  Accounts Payable (Class 4)            €5,850
To record purchase of merchandise on credit
```

**PCN Accounts:**
- 361: Merchandise (Class 3 - Asset)
- 421611: VAT Recoverable (Class 4 - Asset)
- 44111: Accounts Payable (Class 4 - Liability)

### Purchase with Cash Payment

**Transaction:** Purchase merchandise, paying cash

**Example:** Purchase €2,000 merchandise, paying cash (excluding VAT), VAT 17%, recoverable.

**Journal Entry:**
```
361    Inventory                   €2,000
421611 VAT Recoverable              340
5131   Cash (Class 5)                          €2,340
To record purchase of merchandise for cash
```

### Purchase Returns and Allowances

**Purchase Return:** Returning merchandise to supplier

**Example:** Return €500 of defective merchandise (excluding VAT) from previous purchase.

**Journal Entry:**
```
44111  Accounts Payable            €585
361    Inventory                               €500
421611 VAT Recoverable                          €85
To record return of merchandise to supplier
```

**Note:** Reduces inventory and accounts payable. VAT recoverable is also reduced.

**Purchase Allowance:** Price reduction for damaged goods kept

**Example:** Receive €200 allowance for slightly damaged goods (excluding VAT).

**Journal Entry:**
```
44111  Accounts Payable            €234
361    Inventory                               €200
421611 VAT Recoverable                          €34
To record purchase allowance
```

### Purchase Discounts

**Purchase Discount:** Discount for early payment

**Example:** Purchase €10,000 merchandise, terms 2/10, n/30 (2% discount if paid within 10 days, net 30 days).

**Initial Purchase:**
```
361    Inventory                  €10,000
421611 VAT Recoverable             1,700
44111  Accounts Payable                       €11,700
```

**If Paid Within 10 Days (Taking Discount):**
```
44111  Accounts Payable           €11,700
361    Inventory                                  €200  (2% of €10,000)
421611 VAT Recoverable                             €34  (VAT on discount)
5131   Cash                                       €11,466
To record payment within discount period
```

**Note:** Discount reduces inventory cost (not a separate revenue account).

**If Paid After 10 Days (No Discount):**
```
44111  Accounts Payable           €11,700
5131   Cash                                       €11,700
To record payment after discount period
```

### Luxembourg VAT Considerations

**Different VAT Rates:**
- Standard rate: 17%
- Reduced rates: 14%, 8%, 3%

**Example: Restaurant Purchasing Different Items**

**Transaction:** Restaurant purchases:
- Food ingredients: €1,000 (excluding VAT), VAT 3%
- Wine (up to 13% vol.): €500 (excluding VAT), VAT 14%
- Equipment: €2,000 (excluding VAT), VAT 17%

**Journal Entry:**
```
361    Inventory - Food            €1,000
361    Inventory - Beverages         500
222    Equipment                   2,000
421611 VAT Recoverable               440  (€30 + €70 + €340)
44111  Accounts Payable                         €3,940
To record purchases with different VAT rates
```

**VAT Calculation:**
- Food: €1,000 × 3% = €30
- Wine: €500 × 14% = €70
- Equipment: €2,000 × 17% = €340
- Total VAT: €440

**PCN Note:** May use sub-accounts for different inventory types:
- 3611: Food Inventory
- 3612: Beverage Inventory
- Or track separately for VAT purposes

### Luxembourg Compliance Note

When purchasing merchandise in Luxembourg:
- Record net cost (excluding VAT) in inventory
- Record VAT Recoverable separately (421611)
- Use correct VAT rate for each item
- Maintain proper documentation
- Ensure VAT can be recovered (business use)
- Track different inventory types if different VAT rates apply

### Think It Through

A Luxembourg retail store purchases children's clothing (3% VAT) and adult clothing (17% VAT) in the same transaction. How should this be recorded? What PCN accounts are involved?

---
