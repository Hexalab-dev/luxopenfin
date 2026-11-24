# PCN Account Lookup Tool - User Guide

## Overview

The PCN Account Lookup tool is a searchable reference of **selected accounts** of the Luxembourg PCN 2020 chart of accounts (Règlement grand-ducal of 12 September 2019): the main accounts used by SMEs and throughout the textbook. It is not the full chart (the official PCN contains several hundred accounts). Its account list is the same as the website's PCN Lookup calculator (`web/src/components/interactive/PCNLookup.tsx`) and Appendix A.

## Features

### ✅ Core Functionality
- **Selected PCN 2020 accounts**: 140+ account groups and accounts, official French names with English and German translations
- **Search Functionality**: Search by account number or name (multilingual)
- **Browse by Class**: Filter accounts by PCN class (1-7)
- **Account Details**: Official name, account type and normal balance; account groups (two-digit) are flagged because you post to the detailed accounts below them
- **Export Functionality**: Export results to CSV/Excel
- **Multilingual Support**: Account names in French, German, and English

### 🎨 User Interface
- **Dark Mode Ready**: Modern dark theme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Quick Search**: Real-time search results
- **Visual Organization**: Color-coded account cards

## Usage Instructions

### Searching for Accounts

#### Method 1: Text Search
1. Type in the search box
2. Search by:
   - Account number (e.g., "5131")
   - Account name in English (e.g., "Bank", "Output VAT")
   - Account name in French (e.g., "Banque")
   - Account name in German (e.g., "Bank")
3. Results update in real-time

#### Method 2: Class Filter
1. Select a class from the dropdown menu
2. Or click on a class in the sidebar
3. View all accounts in that class

#### Method 3: Browse by Class
1. Click on any class in the sidebar (Class 1-7)
2. View all accounts in that class
3. Click "All Accounts" to see everything

### Understanding Account Information

Each account card displays:
- **Account Number**: PCN account number
- **Account Name**: Primary name in English
- **Class**: PCN class (1-7)
- **Type**: Account type (Asset, Liability, Equity, Revenue, Expense, or a contra type such as Contra-Asset for 4019)
- **Normal Balance**: Debit or Credit
- **Description**: Official French name and the group it belongs to

### Exporting Results

1. **Filter/Search**: Narrow down to the accounts you want
2. **Export CSV**: Click "Export CSV" to download as CSV file
3. **Export Excel**: Click "Export Excel" (currently exports CSV that Excel can open)

**Export includes**:
- Account Number
- Account Name
- Class
- Type
- Normal Balance
- Description

## PCN Account Classes

### Class 1: Equity, provisions and financial debts
- Capital and owner's accounts (10), share premium (11), reserves (13), results (14), interim dividends (15)
- Provisions (18)
- Financial debts, e.g., bank loans 1941 / 1942 (19)

### Class 2: Formation expenses and fixed assets
- Formation expenses (20)
- Intangible fixed assets (21)
- Tangible fixed assets (22)
- Financial fixed assets (23)
- Accumulated depreciation has no class of its own: the textbook opens a sub-account ending in 9 under the asset (e.g., 2229 under 222)

### Class 3: Inventories
- Raw materials and consumables (30), work in progress (31), products (32), goods for resale (36), payments on account (37)

### Class 4: Receivables and payables
- Trade receivables (40), other receivables incl. input VAT 421611 (42)
- Payments received on account (43), suppliers (44)
- Tax and social security debts (46), e.g., output VAT 461411, CCSS 4621, wage tax 46124
- Other debts (47), prepayments and deferred income (48)

### Class 5: Financial accounts
- Transferable securities (50)
- Bank and cash (51): bank 5131, overdrafts 5132, cash on hand 516, internal transfers 517

### Class 6: Expenses (charges)
- Purchases and change in stocks (60), other external charges (61), staff costs (62)
- Value adjustments / depreciation (63), other operating charges (64), financial charges (65)
- Taxes on profit (67), other taxes (68)

### Class 7: Income
- Net turnover (70), change in stocks of products (71), other operating income (74), financial income (75)

There are no extraordinary items in the Luxembourg GAAP profit and loss account since the 2015 reform.

## Common Account Searches

### Bank and Cash
- **5131**: Bank accounts (debit balance) – "Cash" in the textbook's journal entries
- **5132**: Bank overdrafts
- **516**: Cash on hand (notes and coins)

### Revenue Accounts
- **7061**: Sales of goods for resale
- **703**: Services rendered
- **742**: Rental income (ancillary)
- **7552**: Bank interest income

### Expense Accounts
- **6061**: Purchases of goods for resale
- **6111**: Rent of premises
- **6211**: Gross salaries and wages
- **623**: Employer social security contributions
- **6184**: Utilities (energy and water)

### VAT Accounts
- **461411**: Output VAT (shown in the textbook as "VAT Payable")
- **421611**: Input VAT (VAT recoverable)
- **461412** / **421612**: VAT payable to / receivable from the AED after the period settlement

### Fixed Assets
- **222**: Plant and machinery (equipment)
- **2232**: Motor vehicles
- **2213**: Buildings

## Educational Use

### For Students
- Quick reference for PCN accounts
- Learn account numbers and names
- Understand account types and normal balances
- See usage examples
- Prepare for exams and assignments

### For Instructors
- Reference tool for teaching
- Show account structure
- Explain PCN organization
- Create examples and exercises

### For Professionals
- Quick account lookup
- Verify account numbers
- Reference for journal entries
- Training new staff
- Compliance verification

## Tips and Best Practices

1. **Use Search**: Fastest way to find specific accounts
2. **Browse by Class**: Good for learning account structure
3. **Check Appendix A**: Conventions (e.g., 5131 for "Cash", 607 for cost of goods sold) are explained there
4. **Export Results**: Save filtered results for reference
5. **Multilingual**: Search works in English, French, and German

## Account Numbering Conventions

- **No fixed length**: the first digit is the class, two digits a group, and each further digit is more specific (e.g., 4 → 46 → 461 → 4614 → 46141 → 461411)
- **First digit**: Indicates class (1-7)
- **Own sub-accounts**: may be opened **below** an official account (e.g., 40111, 40112 under 4011), never beside it; for eCDF they roll up into the official account
- **Maturity in the number**: for many debts and receivables …1 = due within one year, …2 = after more than one year (e.g., 1941 / 1942)

## Normal Balances

| Account Type | Normal Balance |
|-------------|----------------|
| Assets | Debit |
| Liabilities | Credit |
| Equity | Credit |
| Revenue | Credit |
| Expenses | Debit |
| Contra-Asset | Credit |

## Troubleshooting

### Issue: Account Not Found
- **Solution**: Check spelling or try searching by account number
- Try searching in different languages (FR, DE, EN)
- Verify you're using the correct PCN 2020 account numbers

### Issue: Too Many Results
- **Solution**: Use class filter to narrow down results
- Be more specific in search terms
- Combine search with class filter

### Issue: Export Not Working
- **Solution**: Ensure you have results to export
- Check browser download settings
- Try a different browser

## Technical Details

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

### Requirements
- JavaScript enabled
- No internet connection required after initial load
- Works offline

### Data Storage
- All data stored in browser memory
- No data sent to external servers
- Selected PCN 2020 accounts included

## Future Enhancements

Planned improvements:
- Full Excel export (XLSX format)
- PDF export with formatting
- Print functionality
- Account relationships visualization
- More detailed descriptions
- Links to related accounts
- Account usage statistics

## Support

For issues, suggestions, or questions:
- Check the main project README
- Review Appendix A: PCN Chart of Accounts
- Open an issue on the project repository

## License

This tool is released under Creative Commons Attribution 4.0 (CC BY 4.0), same as the main textbook.

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-11-24  
**Compatible with**: PCN 2020, Luxembourg accounting standards

## Official Sources

For official PCN documentation:
- **Commission des Normes Comptables (CNC)**: https://cnc.lu
- **Guichet.lu**: https://guichet.public.lu

**Note**: This tool is a reference guide. Always verify current PCN requirements with official sources.

