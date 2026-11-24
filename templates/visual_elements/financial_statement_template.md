# Financial Statement Template

## Markdown Table Format

### Balance Sheet (Bilan) - Simplified

```markdown
**Balance Sheet (Bilan)**
**Le Petit Bistro**
**As of December 31, 2024**

| Assets (Actif) | PCN | Amount (€) |
|----------------|-----|------------|
| **Current Assets** | | |
| Cash | 510000 | 15,000.00 |
| Accounts Receivable | 410000 | 5,000.00 |
| Inventory | 321000 | 3,000.00 |
| **Total Current Assets** | | **23,000.00** |
| **Non-Current Assets** | | |
| Equipment | 223000 | 20,000.00 |
| Less: Accumulated Depreciation | 283000 | (2,000.00) |
| **Total Non-Current Assets** | | **18,000.00** |
| **TOTAL ASSETS** | | **41,000.00** |

| Liabilities and Equity (Passif et Capitaux) | PCN | Amount (€) |
|---------------------------------------------|-----|------------|
| **Current Liabilities** | | |
| Accounts Payable | 400000 | 4,000.00 |
| VAT Payable | 430000 | 1,500.00 |
| **Total Current Liabilities** | | **5,500.00** |
| **Equity** | | |
| Share Capital | 101000 | 30,000.00 |
| Retained Earnings | 104000 | 5,500.00 |
| **Total Equity** | | **35,500.00** |
| **TOTAL LIABILITIES AND EQUITY** | | **41,000.00** |
```

### Income Statement (Compte de Résultat) - Simplified

```markdown
**Income Statement (Compte de Résultat)**
**Le Petit Bistro**
**For the Year Ended December 31, 2024**

| Revenue (Produits) | PCN | Amount (€) |
|---------------------|-----|------------|
| Sales Revenue | 701000 | 120,000.00 |
| **Total Revenue** | | **120,000.00** |

| Expenses (Charges) | PCN | Amount (€) |
|---------------------|-----|------------|
| Cost of Goods Sold | 601000 | 45,000.00 |
| Salaries and Wages | 641000 | 30,000.00 |
| Rent Expense | 612000 | 9,600.00 |
| Utilities | 613000 | 2,400.00 |
| Depreciation Expense | 681000 | 2,000.00 |
| **Total Expenses** | | **89,000.00** |

| **Net Income** | | **31,000.00** |
```

## HTML Table Format (Web)

For better styling and responsiveness:

```html
<div class="financial-statement">
  <h3>Balance Sheet (Bilan)</h3>
  <h4>Le Petit Bistro</h4>
  <p class="statement-date">As of December 31, 2024</p>
  
  <table class="financial-table">
    <thead>
      <tr>
        <th>Assets (Actif)</th>
        <th class="pcn-code">PCN</th>
        <th class="amount">Amount (€)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="section-header">
        <td colspan="3">Current Assets</td>
      </tr>
      <tr>
        <td class="indent">Cash</td>
        <td class="pcn-code">510000</td>
        <td class="amount">15,000.00</td>
      </tr>
      <!-- More rows -->
      <tr class="subtotal">
        <td><strong>Total Current Assets</strong></td>
        <td></td>
        <td class="amount"><strong>23,000.00</strong></td>
      </tr>
      <!-- More sections -->
      <tr class="total">
        <td><strong>TOTAL ASSETS</strong></td>
        <td></td>
        <td class="amount"><strong>41,000.00</strong></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Accessibility Requirements

- **Table Headers:** Use proper `<th>` elements
- **Alt Text:** "Balance sheet showing assets of €41,000.00 and liabilities plus equity of €41,000.00 as of December 31, 2024"
- **Summary:** Provide text summary of key figures
- **Screen Reader:** Ensure logical reading order

## Usage Guidelines

1. Always include PCN account codes
2. Show French and English account names
3. Use proper euro formatting (€X,XXX.XX)
4. Include company name and date
5. Show all required sections
6. Ensure totals balance (for balance sheet)
7. Follow PCN structure exactly

## Luxembourg-Specific Requirements

- Use PCN 2020 account classifications
- Include all required PCN sections
- Show VAT separately in liabilities
- Follow Luxembourg formatting conventions
- Include notes reference when applicable
- Use French account names with English translations

## Complete Statement Examples

For full examples, see:
- `appendices/appendix_d_sample_financial_statements.md`

