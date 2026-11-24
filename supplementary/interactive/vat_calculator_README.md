# VAT Calculator Tool - User Guide

## Overview

The Luxembourg VAT Calculator is an interactive web-based tool designed to help students, instructors, and professionals calculate VAT amounts for Luxembourg businesses. It supports all four Luxembourg VAT rates and provides both single calculations and multi-item worksheets.

## Features

### ✅ Core Functionality
- **All Luxembourg VAT Rates**: 3% (Super-Reduced), 8% (Reduced), 14% (Intermediate), 17% (Standard)
- **Net to Gross Calculation**: Calculate gross amount including VAT from net amount
- **Gross to Net Calculation**: Calculate net amount and VAT from gross amount
- **Multiple Items Support**: Add multiple items with different VAT rates
- **VAT Return Worksheet**: Automatic summary table for VAT return preparation
- **Export Functionality**: Export results to CSV format
- **Print Support**: Print-friendly layout for documentation

### 🎨 User Interface
- **Dark Mode Ready**: Modern dark theme optimized for extended use
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessible**: Proper labels, keyboard navigation, and screen reader support
- **Intuitive**: Clear layout with visual feedback

## Usage Instructions

### Single Calculation

1. **Select Calculation Type**:
   - **Net to Gross**: Enter the net amount (without VAT), and the tool calculates VAT and gross amount
   - **Gross to Net**: Enter the gross amount (with VAT), and the tool calculates net amount and VAT

2. **Select VAT Rate**:
   - Choose the appropriate VAT rate from the dropdown (3%, 8%, 14%, or 17%)
   - The tool includes descriptions for each rate category

3. **Enter Amount**:
   - Enter the amount in euros (use decimal point, e.g., 100.50)
   - Minimum value: 0.01

4. **Calculate**:
   - Click the "Calculate" button
   - Results appear below showing:
     - Net Amount
     - VAT Amount
     - Gross Amount

5. **Clear**:
   - Click "Clear" to reset the form

### Multiple Items

1. **Add Items**:
   - Enter a description (e.g., "Office Supplies", "Restaurant Meal")
   - Select the VAT rate
   - Enter the net amount
   - Click "Add Item"

2. **View Items**:
   - Each added item appears in a card showing:
     - Description
     - VAT Rate
     - Net Amount
     - VAT Amount
     - Gross Amount
   - Total summary shows cumulative amounts

3. **Remove Items**:
   - Click "Remove" on any individual item
   - Or click "Clear All" to remove all items (with confirmation)

### VAT Return Worksheet

The worksheet automatically updates as you add items:

- **Table View**: All items displayed in a structured table
- **Totals Row**: Summary of all net amounts, VAT amounts, and gross amounts
- **Export Options**:
  - **CSV Export**: Download data as CSV file for Excel or accounting software
  - **PDF Export**: Print-friendly format (use Print button and "Save as PDF")
  - **Print**: Direct printing with optimized layout

## Luxembourg VAT Rates Reference

### 3% - Super-Reduced Rate
- Food and non-alcoholic drinks
- Restaurant and catering: meals and non-alcoholic drinks consumed on the premises
- Books and e-books, newspapers
- Pharmaceutical products
- Children's clothing and shoes
- Water
- Passenger transport
- Accommodation (hotels)

### 8% - Reduced Rate
- Gas and electricity
- Hairdressing
- Small repairs (bicycles, shoes, clothing)
- Certain other goods and services

### 14% - Intermediate Rate
- Certain wines (up to 13% vol.)
- Certain other specified goods and services

**Note**: alcoholic beverages in general are **not** 14%: beer, spirits and other alcohol are taxed at 17%, and all alcoholic drinks served in restaurants and bars are taxed at 17%.

### 17% - Standard Rate
- Most goods and services
- Beer, spirits and other alcoholic drinks (and any alcohol served in restaurants and bars)
- Electronics and appliances
- Professional services (legal, consulting, accounting)

**Note**: Rates 17/14/8/3% apply from 2024 (in 2023 only, they were temporarily 16/13/7/3%). 17% is the lowest standard VAT rate in the European Union.

## Other Luxembourg VAT Rules (context)

- **Filing frequency** depends on annual turnover excluding VAT (not on the VAT owed); the AED assigns the regime in writing:
  - up to €112,000: annual return only (before 1 March of the following year)
  - €112,000 – €620,000: quarterly returns (by the 15th of the month after the quarter) plus an annual return (before 1 May)
  - above €620,000: monthly returns (by the 15th of the following month) plus an annual return (before 1 May)
- **Small-business franchise**: annual turnover up to €50,000 since 1 January 2025 (€35,000 before). No VAT charged and no input VAT deduction.
- **Cross-border B2C e-commerce**: since 1 July 2021 the One-Stop Shop (OSS, Union and non-Union schemes) and the Import One-Stop Shop (IOSS, consignments up to €150) apply; they replaced the former MOSS. EU-wide threshold €10,000 for cross-border B2C distance sales of goods and telecom/broadcasting/electronic services.
- **Electronic filing** via eCDF is mandatory.

## Accounting Entries (PCN 2020)

- VAT charged on sales (output VAT): **461411**
- VAT paid on purchases (input VAT, recoverable): **421611**
- At the end of each VAT period both are cleared to **461412** (VAT payable to the AED) or **421612** (VAT credit)

## Examples

### Example 1: Restaurant Invoice
- **Item**: Dinner for 2 (dine-in, food and soft drinks only; wine or beer on the bill would be a separate line at 17%)
- **VAT Rate**: 3% (restaurant meals and non-alcoholic drinks)
- **Net Amount**: €50.00
- **Result**: 
  - VAT: €1.50
  - Gross: €51.50

### Example 2: Office Supplies
- **Item**: Office stationery
- **VAT Rate**: 17% (standard rate)
- **Net Amount**: €200.00
- **Result**:
  - VAT: €34.00
  - Gross: €234.00

### Example 3: Mixed Invoice
- **Item 1**: Books (3% VAT) - Net: €30.00
- **Item 2**: Software license (17% VAT) - Net: €100.00
- **Item 3**: Hairdressing service (8% VAT) - Net: €150.00
- **Total**:
  - Total Net: €280.00
  - Total VAT: €30.90 (€0.90 + €17.00 + €12.00)
  - Total Gross: €310.90

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
- All calculations are stored in browser memory
- No data is sent to external servers
- Data is lost when page is refreshed (intentional for privacy)

## Educational Use

### For Students
- Practice calculating VAT for different scenarios
- Understand the impact of different VAT rates
- Prepare for accounting exercises
- Learn Luxembourg-specific VAT rules

### For Instructors
- Demonstrate VAT calculations in class
- Create practice problems
- Generate examples for assignments
- Show real-world Luxembourg scenarios

### For Professionals
- Quick VAT calculations
- Invoice preparation
- VAT return preparation
- Client consultations

## Tips and Best Practices

1. **Always verify VAT rates**: VAT rates can change, and some items may have exceptions
2. **Use descriptions**: Clear descriptions help when reviewing the VAT return worksheet
3. **Export regularly**: Export your worksheet before closing the browser
4. **Double-check calculations**: While the tool is accurate, always verify critical calculations
5. **Keep records**: Export and save CSV files for your records

## Troubleshooting

### Issue: Results not showing
- **Solution**: Ensure JavaScript is enabled in your browser
- Check that you've entered a valid amount (greater than 0)

### Issue: Export not working
- **Solution**: Check browser pop-up blocker settings
- Ensure you have permission to download files

### Issue: Print layout issues
- **Solution**: Use browser's "Print Preview" to adjust settings
- Select "Save as PDF" for best results

## Future Enhancements

Planned improvements:
- Save/load functionality (localStorage)
- Multi-language interface (FR, DE, EN)
- Advanced PDF export with formatting
- Historical calculation tracking
- Integration with accounting software

## Support

For issues, suggestions, or questions:
- Check the main project README
- Review the VAT reference appendix (Appendix B)
- Open an issue on the project repository

## License

This tool is released under Creative Commons Attribution 4.0 (CC BY 4.0), same as the main textbook.

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-11-24  
**Compatible with**: PCN 2020, Luxembourg VAT rates and rules as of 2026

