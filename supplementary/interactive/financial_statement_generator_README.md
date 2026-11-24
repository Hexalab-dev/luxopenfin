# Financial Statement Generator Tool - User Guide

## Overview

The Financial Statement Generator is an interactive web-based tool that generates financial statements (Balance Sheet, Income Statement, and Cash Flow Statement) from trial balance data. It follows Luxembourg PCN 2020 format and automatically categorizes accounts.

## Features

### ✅ Core Functionality
- **Trial Balance Input**: Enter account numbers, names, and balances
- **Automatic Categorization**: Accounts automatically categorized by PCN class
- **Balance Sheet Generation**: Assets, Liabilities, and Equity properly formatted
- **Income Statement Generation**: Income (class 7) and charges (class 6) with profit or loss for the year
- **Cash Flow Statement**: Basic cash flow statement structure
- **PCN Format Compliance**: Follows Luxembourg PCN 2020 standards
- **Example Data**: Pre-loaded example trial balance
- **Export/Print**: Print-friendly format and export options

### 🎨 User Interface
- **Tabbed Interface**: Easy navigation between input and statements
- **Dark Mode Ready**: Modern dark theme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Validation**: Trial balance validation before generation

## Usage Instructions

### Step 1: Enter Company Information

1. **Company Name**: Enter your company name
2. **Period End Date**: Select the end date for the reporting period

### Step 2: Input Trial Balance

For each account in your trial balance:

1. **Account Number**: Enter PCN account number (e.g., 5131)
2. **Account Name**: Enter account name (e.g., Bank)
3. **Debit Balance**: Enter debit balance (or 0 if credit balance)
4. **Credit Balance**: Enter credit balance (or 0 if debit balance)

**Tips**:
- Click "+ Add Account" to add more accounts
- Click "Remove" to delete an account row
- Click "Load Example" to see a sample trial balance

### Step 3: Validate Trial Balance

The tool automatically validates:
- **At least one account**: Must have data
- **Debits = Credits**: Total debits must equal total credits
- **Balanced**: Shows validation status

**If unbalanced**: The tool shows the difference. Adjust amounts until balanced.

### Step 4: Generate Statements

1. Click "Generate Financial Statements"
2. Switch to the appropriate tab to view:
   - **Balance Sheet**: Assets, Liabilities, Equity
   - **Income Statement**: Revenue, Expenses, Net Income
   - **Cash Flow Statement**: Operating, Investing, Financing activities

### Step 5: Export or Print

- **Print**: Click "Print" button (uses browser print function)
- **Export to Excel**: Click "Export to Excel" (coming soon)

## Understanding the Generated Statements

### Balance Sheet

**Structure**:
- **Assets**: Formation expenses and fixed assets (Class 2) and current assets (Classes 3, 4, 5)
- **Capital, reserves and liabilities**: Capital and reserves (10–15), provisions (18), creditors (19, 43–47, 482, overdrafts 5132)
- **Result for the year**: while class 6 and 7 accounts are still open (before closing), the tool adds their net result to equity as 142 "Result for the financial year"
- **Contra accounts** (e.g., accumulated depreciation 2229, allowance for doubtful customers 4019) are netted and shown as negative amounts
- **Totals**: Must balance (Assets = Capital, reserves and liabilities); the tool shows a check line

**PCN Format**:
- Accounts grouped by PCN class
- Fixed assets listed first
- Current assets listed second
- Equity and liabilities properly categorized

### Income Statement

**Structure**:
- **Revenue**: All revenue accounts (Class 7)
- **Expenses**: All expense accounts (Class 6)
- **Net Income/Loss**: Revenue - Expenses

**Format**:
- Revenue section with subtotal
- Expense section with subtotal
- Net Income (or Net Loss) at bottom

### Cash Flow Statement

**Structure**:
- **Operating Activities**: Profit or loss for the year and depreciation add-back (63) as the indirect-method starting point
- **Investing / Financing Activities**: Outline only
- **Closing cash**: Cash at bank and in hand (class 5, net of overdrafts 5132)

**Note**: A trial balance at a single date cannot produce cash flows (movements need opening balances), so this tab is an outline, not a complete statement.

## Account Classification

The tool automatically classifies accounts based on PCN account numbers:

PCN 2020 account numbers have no fixed length: the first digit is the class, two digits the group, and each further digit is more specific (e.g., 4 → 46 → 461411). The tool classifies by class and group:

### Assets (Normal Debit Balance)
- **Class 2**: Formation expenses and fixed assets (20–23)
- **Class 3**: Inventories (30–37)
- **Class 4**: Receivables (40 trade receivables, 42 other receivables incl. input VAT 421611) and prepaid expenses (481)
- **Class 5**: Transferable securities, bank and cash (50–51, except overdrafts 5132)

### Provisions and Liabilities (Normal Credit Balance)
- **Class 1**: Provisions (18) and financial debts, e.g., bank loans 1941 / 1942 (19)
- **Class 4**: Payments received on account (43), suppliers (44, e.g., 44111), tax and social security debts (46, e.g., output VAT 461411, CCSS 4621), other debts (47), deferred income (482)
- **Class 5**: Bank overdrafts (5132)

### Equity (Normal Credit Balance)
- **Class 1**: Capital, share premium, reserves, results brought forward, result for the year, interim dividends (10–15, e.g., 101, 111, 131, 141, 142)

### Revenue (Normal Credit Balance)
- **Class 7**: All revenue accounts (70–79)

### Expenses (Normal Debit Balance)
- **Class 6**: All expense accounts (60–69)

## Example Trial Balance

The tool includes a sample trial balance with:
- Bank (5131), customers (4011), merchandise (361)
- Plant and machinery (222) with accumulated depreciation (2229, textbook sub-account convention)
- Suppliers (44111), output VAT (461411), long-term bank loan (1942)
- Subscribed capital (101), legal reserve (131), results brought forward (141)
- Sales (7061) and charges (6061, 6211, 623, 6111, 6184, 633, 6552)

It balances at €128,700 and produces a profit of €11,600 and a balance sheet total of €55,300.

**To load**: Click "Load Example" button

## Tips and Best Practices

1. **Start with Example**: Load the example to see proper format
2. **Verify Balances**: Ensure trial balance balances before generating
3. **Use PCN Numbers**: Always use proper PCN account numbers
4. **Check Totals**: Verify that statement totals make sense
5. **Review Format**: Check that statements follow PCN format
6. **Print for Records**: Use print function to save PDF copies

## Common Issues

### Issue: Trial Balance Won't Balance
- **Solution**: Check all amounts carefully
- Verify debits and credits are on correct sides
- Look for missing accounts
- Check for calculation errors

### Issue: Accounts Not Appearing Correctly
- **Solution**: Verify PCN account numbers are correct
- Check that account types match PCN classification
- Ensure balances are entered correctly

### Issue: Statements Look Wrong
- **Solution**: Review account classifications
- Verify trial balance data is complete
- Check that all accounts are included

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
- Data lost on page refresh (intentional for privacy)

## Limitations

### Current Limitations
- **Simplified Cash Flow**: Basic structure only, not complete analysis
- **No Adjusting Entries**: Use adjusted trial balance as input
- **Single Period**: One period at a time
- **No Comparative Statements**: Current period only

### Future Enhancements
- Complete cash flow statement with detailed analysis
- Comparative statements (current vs. prior period)
- Statement of Owner's Equity
- Adjusting entries support
- Full Excel export (XLSX format)
- PDF export with formatting
- Multiple period support
- Notes to financial statements

## Educational Use

### For Students
- Practice preparing financial statements
- Understand statement relationships
- Learn PCN format requirements
- Verify trial balance accuracy
- Prepare for exams and assignments

### For Instructors
- Demonstrate statement preparation
- Show PCN format compliance
- Create practice problems
- Validate student work
- Explain statement interrelationships

### For Professionals
- Quick statement generation
- Format reference
- Practice and training
- Client demonstrations
- Compliance verification

## Luxembourg Compliance

### PCN Requirements
- Companies keeping Luxembourg GAAP books use the PCN 2020 chart of accounts and file the balance of every PCN account on eCDF with the annual accounts (sole traders and partnerships with turnover up to €100,000 excl. VAT are exempt)
- The legal balance sheet and profit and loss account follow prescribed layouts (captions); this tool's grouping by PCN class is a simplified teaching layout
- No extraordinary items in the Luxembourg GAAP P&L since the 2015 reform

### Legal Requirements
- Annual accounts are approved within 6 months of the financial year-end and filed with the RCS (via the LBR) within 1 month of approval, i.e., at most 7 months after year-end
- Books and supporting documents are kept for 10 years

## Support

For issues, suggestions, or questions:
- Check the main project README
- Review Chapter 2: Introduction to Financial Statements
- Review Appendix D: Sample Financial Statements
- Open an issue on the project repository

## License

This tool is released under Creative Commons Attribution 4.0 (CC BY 4.0), same as the main textbook.

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-11-24  
**Compatible with**: PCN 2020, Luxembourg accounting standards

## Important Notes

- This tool is for educational and practice purposes
- Always verify statements with a qualified accountant
- Actual financial statements may require additional disclosures
- Consult official PCN documentation for complete requirements
- This tool generates statements but does not replace professional accounting services

