---
id: volume3-chapter-26-section-26-3
title: "26.3 Account Numbering System and Conventions"
description: "PCN account numbers follow a logical, hierarchical structure that makes it easy to identify account types and their relationships. Each account number..."
sidebar_position: 4
slug: /volume3/chapter-26/section-26-3
---

# 26.3 Account Numbering System and Conventions

### Understanding PCN Account Numbers

PCN account numbers follow a logical, hierarchical structure that makes it easy to identify account types and their relationships. The first digit is the class, the first two digits are the group, and each further digit makes the account more specific.

### Numbering Structure

**Format**: account numbers have no fixed length (from 2 to 6 digits in the official chart)

- **First digit**: Indicates the class (1-7)
- **Second digit**: Indicates the group within the class (e.g., 46 = tax and social security debts)
- **Further digits**: Indicate ever more specific accounts: 4 → 46 → 461 → 4614 → 46141 → **461411** (output VAT)
- **Grouping vs. posting accounts**: *comptes de regroupement* only aggregate; you post to the most detailed official accounts (*comptes d'imputation*) or to your own sub-accounts below them
- **Maturity in the number**: for many debts and receivables a final …1 means due within one year and …2 due after more than one year (e.g., bank loans 1941 / 1942)

### Class 1 Numbering (Capital, Provisions, Financial Debts)

**Range**: 10-19

- **10**: Capital and owner's accounts
- **11**: Share premium and similar premiums
- **12**: Revaluation reserves
- **13**: Reserves
- **14**: Results (brought forward and for the year)
- **15**: Interim dividends
- **16**: Capital investment subsidies
- **18**: Provisions
- **19**: Financial debts

**Examples:**
- 101: Subscribed capital (Capital souscrit)
- 131: Legal reserve (Réserve légale)
- 142: Result for the financial year
- 188: Other provisions
- 1941: Bank loans due within one year (current portion)
- 1942: Bank loans due after more than one year

### Class 2 Numbering (Formation Expenses and Fixed Assets)

**Range**: 20-23

- **20**: Formation expenses
- **21**: Intangible fixed assets
- **22**: Tangible fixed assets
- **23**: Financial fixed assets

**Examples:**
- 201: Formation (incorporation) costs
- 213: Goodwill acquired for valuable consideration
- 2211: Land
- 2213: Buildings
- 222: Plant and machinery
- 22139: Accumulated depreciation of buildings (sub-account ending in 9)

The PCN has no accumulated-depreciation class (no "28" or "29"): value adjustments are recorded in a sub-account of the asset concerned, conventionally ending in 9.

### Class 3 Numbering (Inventory)

**Range**: 30-37

- **30**: Raw materials and consumables
- **31**: Work in progress and contracts in progress
- **32**: Products (finished and intermediate)
- **36**: Goods for resale
- **37**: Payments on account for inventories

**Examples:**
- 301: Raw materials
- 311: Work in progress
- 321: Finished goods
- 361: Merchandise (goods for resale)

### Class 4 Numbering (Third-Party Accounts)

**Range**: 40-48

- **40**: Trade receivables
- **41**: Receivables from affiliated undertakings and undertakings with a participating interest
- **42**: Other receivables (staff, tax authorities, input VAT)
- **43**: Payments received on account
- **44**: Trade payables and notes payable
- **45**: Debts to affiliated undertakings and undertakings with a participating interest
- **46**: Tax and social security debts
- **47**: Other debts
- **48**: Accruals and deferrals

**Examples:**
- 4011: Customers
- 44111: Suppliers
- 4621: Social security contributions payable (CCSS)
- 421611: Input VAT recoverable (TVA en amont)
- 461411: Output VAT (TVA en aval)
- 461412: VAT payable to the AED (TVA à payer)

### Class 5 Numbering (Financial Accounts)

**Range**: 50-51

- **50**: Transferable securities
- **51**: Cash at bank and in hand

**Examples:**
- 5131: Bank account (Banques – avoirs disponibles)
- 5132: Bank overdraft (Banques – découverts)
- 516: Cash on hand (Caisse)
- 517: Internal transfers (Virements internes)
- 508: Other short-term securities

### Class 6 Numbering (Expenses)

**Range**: 60-68

- **60**: Consumption of goods and of raw materials and consumables
- **61**: Other external charges
- **62**: Staff costs
- **63**: Value adjustments (depreciation, amortisation, write-downs)
- **64**: Other operating charges
- **65**: Financial charges
- **67**: Taxes on profit
- **68**: Other taxes

**Examples:**
- 6061: Purchases of goods for resale
- 6111: Rent of premises
- 6211: Gross salaries
- 6332: Depreciation of plant and machinery
- 6552: Bank interest expense
- 671: Corporate income tax (IRC)

### Class 7 Numbering (Revenues)

**Range**: 70-78

- **70**: Net turnover
- **71**: Change in stocks of products and work in progress
- **72**: Own work capitalised
- **73**: Reversals of value adjustments
- **74**: Other operating income
- **75**: Financial income
- **77/78**: Adjustments of taxes on profit / of other taxes

**Examples:**
- 7061: Sales of goods for resale
- 703: Services rendered
- 7552: Bank interest income
- 744: Gains on disposal of fixed assets

### Numbering Conventions

1. **Hierarchical Numbering**: Each extra digit narrows the account (class → group → account → sub-account)
2. **Sub-accounting**: Businesses may open their own sub-accounts **below** an official account (e.g., 40111, 40112 for different customers under 4011), never beside it
3. **Flexibility**: Custom sub-accounts can be added for specific categories (e.g., 6011 for a specific raw material under 601)
4. **Consistency**: Account numbers should be used consistently across all transactions; for eCDF, sub-accounts roll up into the official account they start with

### Sub-Accounts and Detail Accounts

Many PCN accounts support sub-accounts for detailed tracking:

**Example: Customer Accounts**
- 4011: Customers (main account)
- 40111: Customer A
- 40112: Customer B
- 40113: Customer C

**Example: Supplier Accounts**
- 44111: Suppliers (main account)
- 441111: Supplier X
- 441112: Supplier Y

**Example: Expense Categories**
- 601: Raw materials
- 6011: Food purchases
- 6012: Beverage purchases
- 6013: Packaging purchases

### Luxembourg Compliance Note

While the PCN provides a standard numbering structure, businesses can customize sub-accounts to meet their specific needs. However, the official account numbers (101, 4011, 7061, etc.) must follow the PCN, and every custom sub-account must start with the official account it belongs to. Custom accounts should be documented and explained in your accounting manual.

### Think It Through

Sophie wants to track different types of flour purchases separately (white flour, whole wheat, specialty flours). How can she use PCN account numbering to achieve this while maintaining compliance? What account numbers would she use?

### Concepts in Practice

**Bakery Account Structure**

Sophie's bakery uses the following PCN structure:

- **441111**: Flour supplier
- **441112**: Sugar supplier
- **441113**: Equipment supplier
- **40111**: Retail customer accounts
- **40112**: Wholesale customer accounts
- **6011**: Flour purchases
- **6012**: Sugar purchases
- **70211**: Bread sales
- **70212**: Pastry sales

This structure allows detailed tracking while maintaining PCN compliance.

---

