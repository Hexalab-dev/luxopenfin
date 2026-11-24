# Journal Entry Practice Tool - User Guide

## Overview

The Journal Entry Practice tool is an interactive web-based application designed to help students, instructors, and professionals practice creating journal entries according to Luxembourg PCN standards. It features real-time validation, practice mode with hints, and example problems.

## Features

### ✅ Core Functionality
- **Journal Entry Form**: Create journal entries with proper format
- **PCN Account Integration**: Search and use Luxembourg PCN 2020 account numbers
- **Real-Time Preview**: See journal entry formatted as it would appear in a journal
- **Automatic Validation**: Ensures debits equal credits (double-entry requirement)
- **Practice Mode**: Step-by-step hints and guidance
- **Example Problems**: Pre-loaded Luxembourg transaction scenarios
- **Visual Feedback**: Color-coded validation status

### 🎨 User Interface
- **Dark Mode Ready**: Modern dark theme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Live Preview**: See formatted journal entry as you type
- **Intuitive Layout**: Form on left, preview and examples on right

## Usage Instructions

### Getting Started

1. **Open the Tool**: Open `journal_entry_practice.html` in your web browser
2. **Set Date**: Choose the transaction date
3. **Enter Description**: Brief description of the transaction
4. **Add Entries**: Add debit and credit entries
5. **Validate**: Tool automatically checks if entry balances
6. **Record**: Submit when valid

### Creating a Journal Entry

#### Step 1: Basic Information
1. **Date**: Select the transaction date
2. **Description**: Enter a brief description (e.g., "To record cash sale of services")

#### Step 2: Add Journal Entries

For each account affected:

1. **Search Account**:
   - Type in the account search field
   - Search by account number (e.g., "5131") or name (e.g., "Bank")
   - Click on a result to auto-fill

2. **Select Type**:
   - Choose **Debit** or **Credit**
   - Remember: DEAD CLIC (Debit: Expenses, Assets, Drawings; Credit: Liabilities, Income, Capital)

3. **Enter Amount**:
   - Enter the amount in euros
   - Use decimal point (e.g., 100.50)

4. **Add More Entries**:
   - Click "+ Add Entry" for additional accounts
   - Minimum 2 entries required (double-entry bookkeeping)

#### Step 3: Validation

The tool automatically validates:
- **At least 2 entries**: Required for double-entry
- **Debits = Credits**: Total debits must equal total credits
- **Account completeness**: All entries must have account, type, and amount

**Validation Status**:
- ✅ **Valid**: Green indicator - ready to record
- ⚠️ **Incomplete**: Missing required information
- ✗ **Unbalanced**: Debits ≠ Credits - shows difference

#### Step 4: Review Preview

The preview shows your journal entry in traditional journal format:
- Journal header
- Date
- Account names and numbers
- Debit and credit columns
- Description
- Totals

#### Step 5: Record Entry

Click "Record Journal Entry" when validation shows valid.

**Note**: This is a practice tool. In a real accounting system, the entry would be saved to the journal.

### Practice Mode

Enable Practice Mode for learning assistance:

1. **Toggle Practice Mode**: Click the toggle switch
2. **Receive Hints**: The tool provides guidance on:
   - Account types and normal balances
   - Whether entries follow normal patterns
   - Debit/credit rules for different account types

**Example Hint**:
> "Bank (5131) is an asset with normal balance debit. Credit entry is a decrease."

### Example Problems

The tool includes five pre-loaded scenarios. Scenarios 1–3 are the same as the website's Journal Entry Practice calculator.

#### Scenario 1: Sale with Luxembourg VAT (17%)
- **Transaction**: Invoice of €1,200 net plus VAT to a local customer, paid by bank transfer
- **Model answer**:
  - Debit: Bank (5131) €1,404
  - Credit: Sales of goods (7061) €1,200 — or Services (703) if a service was sold
  - Credit: Output VAT (461411) €204
- **Learning**: Output VAT is a debt to the AED, not revenue

#### Scenario 2: Monthly payroll
- **Transaction**: Gross salaries €15,000, employee social security €1,942.50 (12.95 %), wage tax withheld €1,800, the rest paid by bank
- **Model answer**:
  - Debit: Gross salaries (6211) €15,000
  - Credit: Social security payable – CCSS (4621) €1,942.50
  - Credit: Wage tax withheld (46124) €1,800
  - Credit: Bank (5131) €11,257.50
- **Learning**: Withholdings are liabilities until paid to the CCSS and the ACD (employer contributions are booked separately: 623 / 4621)

#### Scenario 3: Asset purchase with down payment
- **Transaction**: Machine bought for €40,000 + 17% VAT; 20% of the invoice total (€46,800) paid immediately, balance due in 30 days
- **Model answer**:
  - Debit: Plant and machinery (222) €40,000
  - Debit: Input VAT (421611) €6,800
  - Credit: Bank (5131) €9,360
  - Credit: Suppliers (44111) €37,440
- **Learning**: Recoverable VAT is not part of the asset's cost

#### Scenario 4: Purchase of goods with VAT
- **Transaction**: Purchase €1,000 of goods for resale (excluding VAT), 17% VAT recoverable, paid by bank
- **Model answer**:
  - Debit: Purchases of goods for resale (6061) €1,000
  - Debit: Input VAT (421611) €170
  - Credit: Bank (5131) €1,170
- **Learning**: Luxembourg VAT handling in journal entries (periodic inventory method)

#### Scenario 5: Pay rent
- **Transaction**: Pay €800 office rent by bank transfer
- **Model answer**:
  - Debit: Rent of premises (6111) €800
  - Credit: Bank (5131) €800
- **Learning**: How expenses decrease assets and equity

**To Load an Example**: Click on any example problem card in the preview panel.

## Journal Entry Format

### Standard Format
```
GENERAL JOURNAL

Date: YYYY-MM-DD

Account                          Debit      Credit
─────────────────────────────────────────────────
5131   Bank                       €500
703    Services rendered                       €500
To record cash sale of services

Total Debits: €500    Total Credits: €500
```

### Key Elements
1. **Date**: Transaction date
2. **Account**: PCN account number and name
3. **Debit Column**: Debit amounts (left-aligned)
4. **Credit Column**: Credit amounts (right-aligned)
5. **Description**: Brief explanation of transaction
6. **Totals**: Sum of debits and credits (must be equal)

## Luxembourg Compliance

### PCN Requirements
- Companies keeping Luxembourg GAAP books use the PCN 2020 chart (sole traders and partnerships with turnover up to €100,000 are exempt)
- PCN account numbers have no fixed length (class → group → more specific accounts, e.g., 4 → 46 → 461411)
- Journal entries must be in chronological order
- All entries must balance (debits = credits)

### Double-Entry Bookkeeping
- Every transaction affects at least 2 accounts
- Total debits must equal total credits
- This is a legal requirement in Luxembourg

## Educational Use

### For Students
- Practice creating journal entries
- Understand debit/credit rules
- Learn PCN account structure
- Visualize journal format
- Prepare for exams and assignments
- Practice with real Luxembourg scenarios

### For Instructors
- Demonstrate journal entries in class
- Create practice problems
- Show proper journal format
- Explain double-entry bookkeeping
- Use example problems for teaching
- Validate student work

### For Professionals
- Quick journal entry reference
- Practice complex transactions
- Verify entry format
- Training new staff
- Review accounting procedures

## Tips and Best Practices

1. **Start with Examples**: Load example problems to see proper format
2. **Use Practice Mode**: Enable hints when learning
3. **Check Validation**: Always ensure entry balances before recording
4. **Review Preview**: Use preview to verify format
5. **PCN Accounts**: Always use proper PCN account numbers
6. **Descriptions**: Write clear, concise descriptions
7. **Verify Logic**: Ensure entries make accounting sense

## Common Scenarios

### Scenario 1: Simple Cash Sale
**Transaction**: Sell services for €1,000, paid by bank transfer

**Journal Entry**:
- Debit: Bank (5131) €1,000
- Credit: Services rendered (703) €1,000

### Scenario 2: Purchase on Credit
**Transaction**: Buy inventory for €2,000 on credit

**Journal Entry**:
- Debit: Merchandise (361) €2,000
- Credit: Suppliers (44111) €2,000

### Scenario 3: Multiple Credits
**Transaction**: Purchase €5,000 equipment, paying €2,000 by bank and €3,000 on credit

**Journal Entry**:
- Debit: Plant and machinery (222) €5,000
- Credit: Bank (5131) €2,000
- Credit: Suppliers (44111) €3,000

### Scenario 4: Expense Payment
**Transaction**: Pay €500 rent expense

**Journal Entry**:
- Debit: Rent of premises (6111) €500
- Credit: Bank (5131) €500

### Scenario 5: VAT Transaction
**Transaction**: Purchase €1,000 goods (excluding VAT), VAT 17% recoverable

**Journal Entry**:
- Debit: Merchandise (361) €1,000
- Debit: Input VAT (421611) €170
- Credit: Bank (5131) €1,170

## Troubleshooting

### Issue: "Unbalanced Entry" Error
- **Solution**: Ensure total debits equal total credits
- Check calculations carefully
- Verify all amounts are entered correctly
- Look for missing entries

### Issue: "At least 2 entries required"
- **Solution**: Double-entry bookkeeping requires at least 2 accounts
- Add the corresponding debit or credit entry

### Issue: Account Not Found
- **Solution**: Use the account search to find PCN accounts
- Or manually enter a valid PCN account number

### Issue: Preview Not Updating
- **Solution**: Ensure all required fields are filled
- Check that amounts are greater than 0
- Verify account numbers are valid

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

## Future Enhancements

Planned improvements:
- Save/load functionality (localStorage)
- Export to PDF/Excel
- More example problems
- Advanced practice scenarios
- Integration with T-Account Simulator
- Print functionality
- Journal entry history
- Multi-currency support

## Support

For issues, suggestions, or questions:
- Check the main project README
- Review Chapter 3: Analyzing and Recording Transactions
- Review Appendix A: PCN Chart of Accounts
- Open an issue on the project repository

## License

This tool is released under Creative Commons Attribution 4.0 (CC BY 4.0), same as the main textbook.

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-11-24  
**Compatible with**: PCN 2020, Luxembourg accounting standards

