# Payroll Calculator Tool - User Guide

## Overview

The Luxembourg Payroll Calculator is an interactive web-based tool designed to calculate gross-to-net salary conversions with complete Luxembourg social charges breakdown. It supports multiple employees and generates payroll registers.

## Features

### ✅ Core Functionality
- **Gross-to-Net Calculation**: Calculate net salary from gross salary
- **Social Charges Breakdown**: Detailed employee and employer portions
- **Multiple Employees**: Add multiple employees to payroll register
- **Payroll Register**: Complete summary table with totals
- **Real-time Calculation**: See results as you type
- **Export Functionality**: Export to CSV/Excel
- **Print Support**: Print-friendly layout

### 🎨 User Interface
- **Dark Mode Ready**: Modern dark theme
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Visual Breakdown**: Clear display of all charges
- **Intuitive Layout**: Form on left, results on right

## Usage Instructions

### Single Employee Calculation

1. **Enter Employee Name**: Enter the employee's name
2. **Enter Gross Salary**: Enter the gross salary in euros
3. **View Results**: See real-time calculation breakdown:
   - Employee deductions (12.95%)
   - Employer charges (12.57%)
   - Net salary
   - Total cost to employer
4. **Add to Register**: Click "Add Employee" to add to payroll register

### Multiple Employees

1. **Add Employees**: Add multiple employees using the form
2. **View Register**: See all employees in the payroll register table
3. **View Totals**: See summary totals at the bottom
4. **Remove Employees**: Click "Remove" on any employee
5. **Export**: Export the entire register to CSV/Excel

## Luxembourg Social Charges

*CCSS rates as of 1 January 2026 — check ccss.lu each year.*

### Employee Portion (12.95% of Gross Salary)

| Component | Rate | Description |
|-----------|------|-------------|
| Health Insurance | 2.80% + 0.25% | Benefits in kind + cash benefits |
| Pension | 8.50% | Pension insurance contribution |
| Dependency Insurance | 1.40% | Long-term care; on gross minus 1/4 of the social minimum wage (€675.94/month), no ceiling |
| **Total** | **12.95%** | **Headline total (effective rate slightly lower because of the dependency allowance)** |

### Employer Portion (12.57% of Gross Salary, Mutualité class 1)

| Component | Rate | Description |
|-----------|------|-------------|
| Health Insurance | 2.80% + 0.25% | Benefits in kind + cash benefits |
| Pension | 8.50% | Pension insurance contribution |
| Accident Insurance | 0.65% | × bonus-malus factor 0.85–1.50 |
| Health at Work (STM) | 0.14% | Occupational health service |
| Mutualité des employeurs | 0.23% | Class 1 (classes 2–4: 0.95% / 1.56% / 2.66%) |
| **Total** | **12.57%** | **Total employer charges** |

There is no employer dependency insurance. Health, pension and employer contributions are capped at 5 × the social minimum wage (€2,703.74 × 5 = €13,518.70/month at 1 January 2026); the tool applies this ceiling, as does the website's Payroll Calculator.

### Total Social Charges: about 25.52% of Gross Salary (headline rates, below the ceiling)

## Calculation Example

### Example: Gross Salary €5,000.00

**Employee Deductions:**
- Health Insurance (2.80% + 0.25%): €152.50
- Pension (8.50%): €425.00
- Dependency Insurance (1.40% × (€5,000 − €675.94) = 1.40% × €4,324.06): €60.54
- **Total Deductions: €638.04**

**Net after social security (before wage tax withholding): €4,361.96**

**Employer Charges (12.57%):**
- Health Insurance (2.80% + 0.25%): €152.50
- Pension (8.50%): €425.00
- Accident Insurance (0.65%): €32.50
- Health at Work (0.14%): €7.00
- Mutualité class 1 (0.23%): €11.50
- **Total Employer Charges: €628.50**

**Total Cost to Employer: €5,628.50**

## Payroll Register

The payroll register shows:
- Employee name
- Gross salary
- Employee deductions
- Net salary (what employee receives)
- Employer charges
- Total cost to employer
- Summary totals

## Export Functionality

### CSV Export
1. Click "Export to CSV"
2. File downloads with all employee data
3. Includes totals row
4. Can be opened in Excel or accounting software

### Excel Export
- Currently exports as CSV (Excel-compatible)
- Full Excel format coming soon

### Print
- Click "Print" button
- Uses browser print function
- Optimized layout for printing

## PCN Accounting Entries

### Journal Entry for Payroll

**Salary Payment:**
```
Debit:  6211   Salaries Expense            €5,000.00
Credit: 4714   Salaries Payable                       €4,352.50
Credit: 4621   Social Security Payable                 €647.50
To record November salaries
```

**Employer Social Charges:**
```
Debit:  623    Social Charges Expense      €628.50
Credit: 4621   Social Security Payable                 €628.50
To record employer social charges for November
```

**Total Social Security Payable:** €647.50 + €628.50 = €1,276.00

## Educational Use

### For Students
- Practice payroll calculations
- Understand social charges structure
- Learn gross-to-net conversions
- Prepare for exams and assignments
- Understand employer vs. employee costs

### For Instructors
- Demonstrate payroll calculations
- Show social charges breakdown
- Create practice problems
- Explain Luxembourg payroll system

### For Professionals
- Quick payroll calculations
- Verify calculations
- Generate payroll registers
- Training new staff
- Client consultations

## Tips and Best Practices

1. **Verify Rates**: Social charges rates can change; always verify current rates
2. **Check Totals**: Verify that totals make sense
3. **Export Regularly**: Export payroll registers for records
4. **Review Breakdown**: Check individual charge components
5. **Use for Planning**: Calculate total costs before hiring

## Common Scenarios

### Scenario 1: Single Employee
- Enter employee name and gross salary
- View detailed breakdown
- Add to register if needed

### Scenario 2: Multiple Employees
- Add all employees
- View complete register
- Export for payroll processing

### Scenario 3: Cost Planning
- Calculate total cost for different salary levels
- Compare employee vs. employer portions
- Plan for hiring decisions

## Troubleshooting

### Issue: Calculation Seems Wrong
- **Solution**: Verify gross salary is entered correctly
- Check that rates match current Luxembourg rates
- Ensure amounts are in euros

### Issue: Export Not Working
- **Solution**: Check browser download settings
- Ensure you have employees in the register
- Try a different browser

### Issue: Print Layout Issues
- **Solution**: Use browser's print preview
- Adjust print settings
- Select "Save as PDF" for best results

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
- Full Excel export (XLSX format)
- PDF export with formatting
- Tax calculations (income tax)
- Multiple pay periods
- Historical payroll tracking
- Integration with accounting software

## Important Notes

- **Rate Verification**: Social charges rates are subject to change. Always verify current rates with official sources.
- **Minimum Wage**: Luxembourg has minimum wage requirements. Ensure gross salaries comply.
- **Professional Advice**: For actual payroll processing, consult with a qualified accountant or payroll service.
- **Legal Compliance**: This tool is for educational purposes. Actual payroll must comply with all Luxembourg labor and tax laws.

## Support

For issues, suggestions, or questions:
- Check the main project README
- Review Chapter 29: Luxembourg Payroll and Social Charges (Volume 3)
- Review Appendix G: Quick Reference Guides
- Open an issue on the project repository

## License

This tool is released under Creative Commons Attribution 4.0 (CC BY 4.0), same as the main textbook.

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-11-24  
**Compatible with**: Luxembourg social charges rates 2024-2025

## Official Sources

For official payroll and social charges information:
- **CCSS (Centre Commun de la Sécurité Sociale)**: https://www.ccss.lu
- **Guichet.lu**: https://guichet.public.lu
- **ADEM (Employment Agency)**: https://adem.public.lu

**Note**: Always verify current rates and regulations with official sources.

