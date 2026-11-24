# T-Account Template

## ASCII Art Format (Markdown)

Use this format for markdown source files. This is the simplest format that works across all platforms.

### Basic T-Account

```markdown
**Account Title (PCN Code)**
─────────────────────────
Debit (DR)    │    Credit (CR)
──────────────┼──────────────
Entry 1       │    Entry 2
Entry 3       │    Entry 4
──────────────┼──────────────
Balance       │    Balance
```

### T-Account with Dates and References

```markdown
**Cash (510000)**
─────────────────────────
Debit (DR)    │    Credit (CR)
──────────────┼──────────────
Jan 1  1,000  │    Jan 5    500
Jan 3  2,000  │    Jan 8    300
──────────────┼──────────────
       3,000  │          800
──────────────┼──────────────
Balance: 2,200 (Debit)
```

### Multiple T-Accounts Side-by-Side

```markdown
**Cash (510000)**          **Accounts Payable (400000)**
─────────────────────────  ─────────────────────────
Debit (DR) │ Credit (CR)   Debit (DR) │ Credit (CR)
───────────┼────────────   ───────────┼────────────
1,000      │    500        200        │    1,000
2,000      │    300                   │    500
───────────┼────────────   ───────────┼────────────
3,000      │    800        200        │    1,500
───────────┼────────────   ───────────┼────────────
Balance: 2,200 (Debit)     Balance: 1,300 (Credit)
```

## HTML/CSS Format (Web)

Use this format for web rendering with proper styling.

```html
<div class="t-account">
  <div class="t-account-title">Cash (510000)</div>
  <table class="t-account-table">
    <thead>
      <tr>
        <th class="debit">Debit (DR)</th>
        <th class="credit">Credit (CR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="debit">1,000.00</td>
        <td class="credit">500.00</td>
      </tr>
      <tr>
        <td class="debit">2,000.00</td>
        <td class="credit">300.00</td>
      </tr>
      <tr class="totals">
        <td class="debit">3,000.00</td>
        <td class="credit">800.00</td>
      </tr>
    </tbody>
  </table>
  <div class="t-account-balance">Balance: €2,200.00 (Debit)</div>
</div>
```

## Accessibility Notes

- **Alt Text Example:** "T-account for Cash account (PCN 510000) showing two debit entries totaling €3,000.00 and two credit entries totaling €800.00, resulting in a debit balance of €2,200.00."

- **Screen Reader Description:** Provide a text description of the account activity before or after the visual.

## Usage Guidelines

1. Always include PCN account code when applicable
2. Show all entries with dates or reference numbers
3. Calculate and display final balance clearly
4. Use consistent formatting across all T-accounts in a chapter
5. Include descriptive caption explaining the transaction or concept

## Luxembourg-Specific Requirements

- Include French account name: "Caisse (510000)"
- Show VAT accounts separately when relevant
- Use euro formatting (€X,XXX.XX)
- Reference PCN account classifications

