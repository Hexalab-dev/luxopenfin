# Comparison Table Template

## Markdown Table Format

### Basic Comparison Table

```markdown
| Feature | Method A | Method B | Luxembourg Context |
|---------|----------|----------|-------------------|
| Description | Value A | Value B | PCN requirement |
| Accuracy | High | Medium | Both acceptable |
| Complexity | Low | High | Choose based on size |
```

### Perpetual vs. Periodic Inventory Comparison

```markdown
| Aspect | Perpetual Inventory | Periodic Inventory | Luxembourg Context |
|--------|---------------------|-------------------|-------------------|
| **Record Keeping** | Continuous | End of period | Both acceptable under PCN |
| **Cost** | Higher (software needed) | Lower (manual) | Small businesses may prefer periodic |
| **Accuracy** | Real-time | Calculated | Perpetual preferred for larger businesses |
| **PCN Accounts** | 321000 (Inventory)<br/>601000 (COGS) | 321000 (Inventory)<br/>601000 (COGS) | Same accounts, different timing |
| **VAT Impact** | Immediate | End of period | No difference for VAT |
| **Best For** | Larger businesses<br/>High volume | Small businesses<br/>Low volume | Choose based on business size |
```

### Cash vs. Accrual Accounting Comparison

```markdown
| Aspect | Cash Basis | Accrual Basis | Luxembourg Requirement |
|--------|------------|--------------|----------------------|
| **Revenue Recognition** | When cash received | When earned | Accrual required for most businesses |
| **Expense Recognition** | When cash paid | When incurred | Accrual required |
| **Complexity** | Simple | More complex | Accrual mandatory |
| **Financial Statements** | Simplified | Complete | Accrual required for RCS filing |
| **Tax Reporting** | Cash basis allowed for some | Accrual required | Depends on business type |
| **PCN Compliance** | Not fully compliant | Fully compliant | Accrual required |
| **Best For** | Very small businesses<br/>(limited cases) | All businesses | Accrual is standard |
```

## HTML Table Format (Web)

For better styling:

```html
<table class="comparison-table">
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Method A</th>
      <th>Method B</th>
      <th>Luxembourg Context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Feature 1</strong></td>
      <td>Value A</td>
      <td>Value B</td>
      <td>PCN requirement</td>
    </tr>
    <tr>
      <td><strong>Feature 2</strong></td>
      <td>Value A</td>
      <td>Value B</td>
      <td>Both acceptable</td>
    </tr>
  </tbody>
</table>
```

## Accessibility Requirements

- **Table Headers:** Use proper `<th>` elements
- **Summary:** Provide text summary of key differences
- **Alt Text:** "Comparison table showing differences between Method A and Method B, with Luxembourg-specific context"
- **Screen Reader:** Ensure logical reading order

## Usage Guidelines

1. Use for comparing two or more concepts/methods
2. Include Luxembourg-specific column
3. Highlight key differences
4. Use consistent formatting
5. Include summary row if helpful
6. Keep tables readable (not too wide)

## Common Comparison Tables Needed

- Perpetual vs. Periodic Inventory
- Cash vs. Accrual Accounting
- Different depreciation methods
- Different inventory costing methods (FIFO, LIFO, Weighted Average)
- Different business entity types (SARL, SA, etc.)
- Different accounting software options
- Different VAT rates and applications

## Luxembourg-Specific Considerations

- Always include PCN compliance column
- Reference Luxembourg regulations
- Include eCDF/RCS filing implications
- Consider multilingual requirements
- Reference Luxembourg business context

