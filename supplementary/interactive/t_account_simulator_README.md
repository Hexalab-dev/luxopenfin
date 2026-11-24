# T-Account Simulator Tool - User Guide

## Overview

The T-Account Simulator is an interactive web-based tool designed to help students, instructors, and professionals practice recording transactions in T-accounts. It features PCN (Plan Comptable Normalisé) account integration, automatic balance calculations, and practice mode with hints.

## Features

### ✅ Core Functionality
- **Visual T-Account Interface**: See accounts in traditional T-account format
- **PCN Account Integration**: Search and use Luxembourg PCN 2020 account numbers
- **Double-Entry Validation**: Ensures debits equal credits
- **Automatic Balance Calculation**: Real-time balance updates
- **Transaction History**: Chronological record of all transactions
- **Practice Mode**: Hints and guidance for learning
- **Example Problems**: Pre-loaded scenarios for practice

### 🎨 User Interface
- **Dark Mode Ready**: Modern dark theme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Visual Indicators**: Color-coded debits (green) and credits (blue)
- **Intuitive Layout**: Sidebar for controls, main area for accounts

## Usage Instructions

### Getting Started

1. **Open the Tool**: Open `t_account_simulator.html` in your web browser
2. **Add Accounts**: Start by adding accounts you'll use in transactions
3. **Record Transactions**: Enter transactions with proper debit/credit entries
4. **View Results**: See T-accounts update automatically with balances

### Adding Accounts

#### Method 1: Search PCN Accounts
1. Type in the "Search PCN Account" field
2. Search by account number (e.g., "5131") or name (e.g., "Cash")
3. Click on a result to auto-fill the form
4. Click "Add Account"

#### Method 2: Manual Entry
1. Enter the PCN account number (e.g., 5131)
2. Enter the account name (e.g., Cash)
3. Click "Add Account"

**Note**: The tool recognizes common PCN accounts and will set the correct account type (asset, liability, equity, revenue, expense) and normal balance automatically.

### Recording Transactions

1. **Set Date**: Choose the transaction date
2. **Enter Description**: Brief description of the transaction
3. **Add Entries**:
   - Select an account from the dropdown
   - Choose Debit or Credit
   - Enter the amount in euros
4. **Add More Entries**: Click "+ Add Entry" for additional accounts
5. **Validate**: The tool ensures:
   - At least 2 entries (double-entry requirement)
   - Total debits = Total credits
6. **Record**: Click "Record Transaction"

**Example Transaction:**
- **Description**: Cash sale of services
- **Entry 1**: Cash (5131) - Debit - €500
- **Entry 2**: Service Revenue (703) - Credit - €500

### Understanding T-Accounts

#### T-Account Structure
```
Account Name (Account Number)
─────────────────────────────
        Debit        Credit
─────────────────────────────
[Entries]    │    [Entries]
─────────────────────────────
Balance      │    Balance
```

#### Debit and Credit Rules

**DEAD CLIC Memory Aid:**
- **DE**bit: **E**xpenses, **A**ssets, **D**rawings
- **CR**edit: **L**iabilities, **I**ncome (Revenue), **C**apital (Equity)

#### Normal Balances

| Account Type | Normal Balance | Increases | Decreases |
|-------------|----------------|-----------|-----------|
| Assets | Debit | Debit | Credit |
| Liabilities | Credit | Credit | Debit |
| Equity | Credit | Credit | Debit |
| Revenue | Credit | Credit | Debit |
| Expenses | Debit | Debit | Credit |

### Practice Mode

Enable Practice Mode to receive hints and guidance:

1. **Toggle Practice Mode**: Click the toggle switch in the sidebar
2. **Receive Hints**: The tool will provide guidance on:
   - Account types and normal balances
   - Whether entries follow normal patterns
   - Double-entry bookkeeping rules

### Example Problems

The tool includes three pre-loaded example problems:

#### Example 1: Cash Sale
- **Scenario**: Record a €500 cash sale
- **Accounts**: Cash (5131), Service Revenue (703)
- **Learning**: How revenue increases assets

#### Example 2: Purchase Equipment
- **Scenario**: Buy €5,000 equipment on credit
- **Accounts**: Equipment (222), Accounts Payable (44111)
- **Learning**: How purchases affect assets and liabilities

#### Example 3: Pay Expense
- **Scenario**: Pay €800 rent expense
- **Accounts**: Rent Expense (6111), Cash (5131)
- **Learning**: How expenses decrease assets

**To Load an Example**: Click on any example problem card in the sidebar.

### Transaction History

View all recorded transactions in chronological order:
- **Description**: Transaction description
- **Date**: Transaction date
- **Entries**: All debit and credit entries with amounts
- **Color Coding**: Green for debits, blue for credits

### Managing Accounts

- **Remove Account**: Click "Remove" on any T-account
  - **Warning**: This will remove all related transactions
- **Clear All Transactions**: Click "Clear All" in Transaction History
  - **Warning**: This resets all account balances

## PCN Account Reference

### Common Accounts Used

#### Assets (Normal Balance: Debit)
- **5131**: Bank ("Cash" in this textbook's examples)
- **516**: Cash on hand
- **4011**: Customers (accounts receivable)
- **421611**: Input VAT (VAT recoverable)
- **222**: Plant and machinery (equipment)
- **361**: Merchandise (goods for resale)

#### Liabilities (Normal Balance: Credit)
- **44111**: Suppliers (accounts payable)
- **461411**: Output VAT ("VAT Payable")
- **1942**: Bank loans due after more than one year

#### Equity (Normal Balance: Credit)
- **101**: Subscribed capital
- **141**: Results brought forward

#### Revenue (Normal Balance: Credit)
- **7061**: Sales of goods for resale
- **703**: Services rendered

#### Expenses (Normal Balance: Debit)
- **6061**: Purchases of goods for resale
- **6111**: Rent of premises
- **6211**: Gross salaries and wages

### Account Numbering
- **Hierarchical format, no fixed length**: class → group → detailed account (e.g., 5 → 51 → 513 → 5131; 4 → 46 → 461 → 4614 → 46141 → 461411)
- **Class 1**: Capital, Provisions, Financial Debts (10–19)
- **Class 2**: Fixed Assets (20–29)
- **Class 3**: Inventory (30–39)
- **Class 4**: Third Parties (40–49)
- **Class 5**: Financial Accounts (50–59)
- **Class 6**: Expenses (60–69)
- **Class 7**: Revenue (70–79)

## Educational Use

### For Students
- Practice recording transactions
- Understand debit/credit rules
- Learn PCN account structure
- Visualize account balances
- Prepare for exams and assignments

### For Instructors
- Demonstrate T-accounts in class
- Create practice problems
- Show real-time transaction effects
- Explain double-entry bookkeeping
- Use example problems for teaching

### For Professionals
- Quick transaction visualization
- Verify account balances
- Practice complex transactions
- Reference PCN accounts
- Training new staff

## Tips and Best Practices

1. **Start Simple**: Begin with basic transactions (cash sales, purchases)
2. **Use Practice Mode**: Enable hints when learning
3. **Check Balances**: Verify that balances make sense
4. **Review History**: Use transaction history to trace entries
5. **Try Examples**: Load example problems to see proper formatting
6. **Validate Always**: The tool ensures debits = credits, but verify logic

## Common Scenarios

### Scenario 1: Cash Sale
**Transaction**: Sell services for €1,000 cash

**Entries**:
- Debit: Cash (5131) €1,000
- Credit: Service Revenue (703) €1,000

**Result**: Cash increases (asset), Revenue increases (equity via revenue)

### Scenario 2: Purchase on Credit
**Transaction**: Buy inventory for €2,000 on credit

**Entries**:
- Debit: Merchandise (361) €2,000
- Credit: Accounts Payable (44111) €2,000

**Result**: Inventory increases (asset), Accounts Payable increases (liability)

### Scenario 3: Pay Expense
**Transaction**: Pay €500 rent expense

**Entries**:
- Debit: Rent Expense (6111) €500
- Credit: Cash (5131) €500

**Result**: Expense increases (decreases equity), Cash decreases (asset)

### Scenario 4: Purchase with VAT
**Transaction**: Buy equipment for €5,000 (excluding VAT), VAT 17% recoverable

**Entries**:
- Debit: Equipment (222) €5,000
- Debit: VAT Recoverable (421611) €850
- Credit: Cash (5131) €5,850

**Result**: Equipment and VAT asset increase, Cash decreases

## Troubleshooting

### Issue: "Debits must equal Credits" Error
- **Solution**: Ensure total debit amounts equal total credit amounts
- Check that you haven't made a calculation error
- Verify all amounts are entered correctly

### Issue: Account Not Found
- **Solution**: Add the account first using "Add Account"
- Or search for it in the PCN account search

### Issue: Balance Seems Wrong
- **Solution**: Check that entries are on the correct side (debit/credit)
- Verify account type and normal balance
- Review transaction history to trace entries

### Issue: Can't Remove Account
- **Solution**: Remove all transactions involving that account first
- Or use "Clear All Transactions" to reset everything

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
- Multi-currency support
- Print functionality
- Account grouping and filtering

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

