# Calculation Example Template

## Markdown Format

### Basic Calculation with Steps

```markdown
**Example: Calculate Net Income**

**Given:**
- Revenue: €120,000
- Expenses: €89,000

**Calculation:**
```
Net Income = Revenue - Expenses
Net Income = €120,000 - €89,000
Net Income = €31,000
```

**Answer:** The net income is €31,000.
```

### VAT Calculation Example

```markdown
**Example: Calculate VAT on a Sale**

**Given:**
- Sale amount (excluding VAT): €1,000
- VAT rate: 17% (standard rate in Luxembourg)

**Calculation:**
```
Step 1: Calculate VAT amount
VAT = Sale Amount × VAT Rate
VAT = €1,000 × 0.17
VAT = €170

Step 2: Calculate Total Amount (including VAT)
Total = Sale Amount + VAT
Total = €1,000 + €170
Total = €1,170
```

**Answer:** 
- VAT amount: €170
- Total amount (including VAT): €1,170
```

### Depreciation Calculation Example

```markdown
**Example: Calculate Straight-Line Depreciation**

**Given:**
- Cost of equipment: €20,000
- Useful life: 5 years
- Residual value: €2,000

**Calculation:**
```
Step 1: Calculate Depreciable Cost
Depreciable Cost = Cost - Residual Value
Depreciable Cost = €20,000 - €2,000
Depreciable Cost = €18,000

Step 2: Calculate Annual Depreciation
Annual Depreciation = Depreciable Cost ÷ Useful Life
Annual Depreciation = €18,000 ÷ 5
Annual Depreciation = €3,600 per year
```

**Answer:** The annual depreciation expense is €3,600.
```

## HTML Format (Web with Math Rendering)

For better formatting and math rendering:

```html
<div class="calculation-example">
  <h4>Example: Calculate Net Income</h4>
  
  <div class="calculation-given">
    <strong>Given:</strong>
    <ul>
      <li>Revenue: €120,000</li>
      <li>Expenses: €89,000</li>
    </ul>
  </div>
  
  <div class="calculation-steps">
    <strong>Calculation:</strong>
    <div class="calculation-formula">
      Net Income = Revenue - Expenses
    </div>
    <div class="calculation-step">
      Net Income = €120,000 - €89,000
    </div>
    <div class="calculation-result">
      Net Income = <strong>€31,000</strong>
    </div>
  </div>
  
  <div class="calculation-answer">
    <strong>Answer:</strong> The net income is €31,000.
  </div>
</div>
```

## LaTeX Format (For Complex Formulas)

For PDF generation with proper math formatting:

```latex
\begin{align}
\text{Net Income} &= \text{Revenue} - \text{Expenses} \\
&= €120,000 - €89,000 \\
&= €31,000
\end{align}
```

## Accessibility Requirements

- **Text Description:** Describe calculation steps in words
- **Screen Reader:** Ensure formulas are readable
- **Structure:** Use clear step numbering
- **Result:** Highlight final answer clearly

## Usage Guidelines

1. Show all calculation steps
2. Label each step clearly
3. Use proper euro formatting (€X,XXX.XX)
4. Show formulas before calculations
5. Highlight final answer
6. Include units (€, %, years, etc.)
7. Show work for multi-step calculations

## Luxembourg-Specific Calculations

### VAT Calculations
- Standard rate: 17%
- Reduced rates: 3%, 8%, 14%
- Show both VAT-inclusive and VAT-exclusive amounts

### PCN Account Calculations
- Reference PCN account codes
- Show account relationships
- Include Luxembourg-specific adjustments

### Tax Calculations
- Reference Luxembourg tax rates
- Show eCDF filing implications
- Include compliance requirements

## Common Calculation Examples Needed

- Basic arithmetic (addition, subtraction)
- Percentage calculations (VAT, discounts, markups)
- Depreciation calculations (straight-line, declining balance)
- Inventory calculations (FIFO, LIFO, weighted average)
- Financial ratios
- Break-even calculations
- Interest calculations
- Currency conversions (if applicable)

