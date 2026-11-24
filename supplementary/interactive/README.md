# Interactive Tools

## Overview

This directory contains interactive web-based tools to enhance learning and practice with accounting concepts specific to Luxembourg SMEs. They are standalone versions of the calculators on the LuxOpenFin website (`web/src/components/interactive/`); the website versions are the reference. All account numbers are official Luxembourg PCN 2020 codes (variable length, see Appendix A).

## Available Tools

### 1. T-Account Simulator
**Purpose:** Practice recording transactions in T-accounts
**Features:**
- Visual T-account interface
- Automatic balance calculation
- Feedback on errors
- Practice mode with hints
- Luxembourg PCN account integration

**File:** `t_account_simulator.html`

### 2. Journal Entry Practice Tool
**Purpose:** Practice creating journal entries
**Features:**
- Journal entry form
- Account lookup (PCN)
- Debit/credit validation
- Automatic equation checking
- Example problems
- Step-by-step hints
- Luxembourg transaction scenarios

**File:** `journal_entry_practice.html`

### 3. PCN Account Lookup Tool
**Purpose:** Quick reference for PCN accounts
**Features:**
- Search by account number
- Search by account name (FR, DE, EN)
- Browse by account class
- Official French names with English / German translations
- Same selected PCN 2020 accounts as the website's PCN Lookup
- Export to CSV

**File:** `pcn_lookup.html`

### 4. VAT Calculator
**Purpose:** Calculate VAT amounts
**Features:**
- All Luxembourg VAT rates (3%, 8%, 14%, 17%)
- Net to gross calculation
- Gross to net calculation
- Multiple items
- VAT return worksheet
- Export results

**File:** `vat_calculator.html`

### 5. Financial Statement Generator
**Purpose:** Generate financial statements from data
**Features:**
- Input trial balance
- Automatic statement generation
- Balance sheet
- Profit and loss account
- Cash flow statement (outline only)
- Print / save as PDF
- Accounts classified by PCN 2020 class

**File:** `financial_statement_generator.html`

### 6. Payroll Calculator
**Purpose:** Calculate Luxembourg payroll
**Features:**
- Gross to net of social security (wage tax not calculated)
- Social charges breakdown (CCSS rates at 1 January 2026)
- Employee and employer portions
- Multiple employees
- Export payroll register

**File:** `payroll_calculator.html`

### 7. Break-Even Calculator
**Purpose:** Calculate break-even point
**Features:**
- Fixed costs input
- Variable costs input
- Selling price input
- Break-even units
- Break-even sales
- Sensitivity analysis

**File:** `break_even_calculator.html`

### 8. Financial Ratio Calculator
**Purpose:** Calculate financial ratios
**Features:**
- Input financial statement data
- Automatic ratio calculation
- Liquidity ratios
- Profitability ratios
- Efficiency ratios
- Solvency ratios
- Benchmark comparisons

**File:** `ratio_calculator.html`

## Technical Requirements

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No plugins required

### Mobile Support
- Responsive design
- Touch-friendly interface
- Works on tablets and phones

### Offline Use
- Can be downloaded and used offline
- No internet connection required after initial load

## Usage

### For Students
1. Open tool in web browser
2. Follow on-screen instructions
3. Practice with provided examples
4. Create your own scenarios

### For Instructors
1. Use in classroom demonstrations
2. Assign as homework
3. Integrate into online courses
4. Use for assessments

### For Professionals
1. Use as quick reference tools
2. Calculate VAT, payroll, etc.
3. Generate financial statements
4. Analyze financial ratios

## Development

### Technology Stack
- HTML5
- CSS3
- JavaScript (vanilla, no frameworks required)
- No data persistence (data is kept in memory only)

### Future Enhancements
- [ ] Save/load functionality
- [ ] Print capabilities
- [ ] Multi-language interface
- [ ] Advanced features
- [ ] Integration with accounting software

## Contributing

Contributions welcome for:
- Bug fixes
- Feature additions
- UI/UX improvements
- Localization
- Testing

Please see CONTRIBUTING.md in the main directory.

## License

All interactive tools are released under the same Creative Commons Attribution 4.0 license as the main textbook.

## Status

- [x] T-Account Simulator (✅ **COMPLETE** - v1.0.0)
- [x] Journal Entry Practice (✅ **COMPLETE** - v1.0.0)
- [x] PCN Lookup (✅ **COMPLETE** - v1.0.0)
- [x] VAT Calculator (✅ **COMPLETE** - v1.0.0)
- [x] Financial Statement Generator (✅ **COMPLETE** - v1.0.0)
- [x] Payroll Calculator (✅ **COMPLETE** - v1.0.0)
- [x] Break-Even Calculator (✅ **COMPLETE** - v1.0.0)
- [x] Ratio Calculator (✅ **COMPLETE** - v1.0.0)

## Available Tools

### ✅ Journal Entry Practice (v1.0.0)

**File**: `journal_entry_practice.html`  
**Documentation**: `journal_entry_practice_README.md`

**Features**:
- Journal entry form with PCN account integration
- Real-time journal entry preview
- Automatic validation (debits = credits)
- Practice mode with step-by-step hints
- Example scenarios matching the website's Journal Entry Practice (VAT sale 5131 / 7061 or 703 / 461411; payroll 6211 / 4621 / 46124 / 5131; machine purchase 222 / 421611 / 5131 / 44111)
- Visual feedback and error messages
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `journal_entry_practice.html` in any modern web browser. No installation required.

### ✅ PCN Account Lookup (v1.0.0)

**File**: `pcn_lookup.html`  
**Documentation**: `pcn_lookup_README.md`

**Features**:
- Selected PCN 2020 accounts (140+ groups and accounts; same list as the website's PCN Lookup)
- Search by account number or name (multilingual: EN, FR, DE)
- Browse by account class (1-7)
- Official French names and the group each account belongs to
- Export to CSV/Excel
- Account type and normal balance information
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `pcn_lookup.html` in any modern web browser. No installation required.

### ✅ Financial Statement Generator (v1.0.0)

**File**: `financial_statement_generator.html`  
**Documentation**: `financial_statement_generator_README.md`

**Features**:
- Trial balance input with validation
- Automatic Balance Sheet generation (grouped by PCN class, contra accounts netted, result of the year added to equity)
- Profit and Loss Account generation
- Cash Flow Statement outline
- Automatic account categorization by PCN class
- Example trial balance included
- Print-friendly format
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `financial_statement_generator.html` in any modern web browser. No installation required.

### ✅ Payroll Calculator (v1.0.0)

**File**: `payroll_calculator.html`  
**Documentation**: `payroll_calculator_README.md`

**Features**:
- Gross to net of social security (before wage tax)
- Luxembourg social charges breakdown (2026 CCSS rates: employee 12.95%, employer 12.57% with Mutualité class 1; contribution ceiling 5 × social minimum wage and dependency allowance applied, as on the website)
- Multiple employees support
- Payroll register with totals
- Real-time calculation display
- Export to CSV/Excel
- Print-friendly layout
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `payroll_calculator.html` in any modern web browser. No installation required.

### ✅ Break-Even Calculator (v1.0.0)

**File**: `break_even_calculator.html`  
**Documentation**: `break_even_calculator_README.md`

**Features**:
- Break-even units and sales calculation
- Contribution margin analysis
- Target profit analysis
- Sensitivity analysis (what-if scenarios)
- Margin of safety calculation
- Real-time calculation
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `break_even_calculator.html` in any modern web browser. No installation required.

### ✅ Financial Ratio Calculator (v1.0.0)

**File**: `ratio_calculator.html`  
**Documentation**: `ratio_calculator_README.md`

**Features**:
- Liquidity ratios (current, quick, working capital)
- Profitability ratios (margins, ROA, ROE)
- Efficiency ratios (turnover, DSO)
- Solvency ratios (debt to equity, debt to assets)
- Automatic interpretation with status indicators
- Example data included
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `ratio_calculator.html` in any modern web browser. No installation required.

### ✅ T-Account Simulator (v1.0.0)

**File**: `t_account_simulator.html`  
**Documentation**: `t_account_simulator_README.md`

**Features**:
- Visual T-account interface with traditional format
- PCN account lookup and integration
- Double-entry validation (debits = credits)
- Automatic balance calculation
- Transaction history tracking
- Practice mode with hints
- Example problems included
- Color-coded debits and credits
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `t_account_simulator.html` in any modern web browser. No installation required.

### ✅ VAT Calculator (v1.0.0)

**File**: `vat_calculator.html`  
**Documentation**: `vat_calculator_README.md`

**Features**:
- All Luxembourg VAT rates (3%, 8%, 14%, 17%) with correct category notes (restaurant meals and soft drinks 3%, alcohol served 17%, only certain wines 14%)
- Net to gross and gross to net calculations
- Multiple items support
- VAT return worksheet
- Context: filing frequency by turnover (€112,000 / €620,000), franchise €50,000, OSS / IOSS since July 2021
- CSV export functionality
- Print-friendly layout
- Dark mode ready UI
- Fully responsive design

**Usage**: Open `vat_calculator.html` in any modern web browser. No installation required.

