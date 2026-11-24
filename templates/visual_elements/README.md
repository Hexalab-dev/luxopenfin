# Visual Elements Template Library

This directory contains templates for all visual element types used in the Luxembourg SME Accounting Textbook.

## Available Templates

1. **t_account_template.md** - T-account formats (ASCII, HTML, SVG)
2. **flowchart_template.md** - Flowchart formats (Mermaid, HTML/CSS)
3. **financial_statement_template.md** - Financial statement formats (Markdown tables, HTML)
4. **process_diagram_template.md** - Process diagram formats (Mermaid, text-based)
5. **comparison_table_template.md** - Comparison table formats (Markdown, HTML)
6. **calculation_template.md** - Calculation example formats (Markdown, HTML, LaTeX)

## Usage

1. Select the appropriate template for your visual element type
2. Copy the format that matches your output medium (markdown, web, print)
3. Replace placeholder content with your actual data
4. Ensure accessibility requirements are met (alt text, descriptions)
5. Follow the visual elements specification (`docs/visual_elements_spec.md`)

## Format Selection Guide

- **Markdown Source Files:** Use ASCII art for T-accounts, Mermaid for flowcharts, Markdown tables
- **Web Version:** Use HTML/CSS formats for better styling and interactivity
- **Print/PDF:** Use SVG for T-accounts, high-quality formats for all elements

## Accessibility

All visual elements must include:
- Descriptive alt text
- Text descriptions for complex visuals
- Proper table headers
- Screen reader compatibility

See individual template files for specific accessibility requirements.

## Luxembourg-Specific Requirements

All templates include guidance for:
- PCN account codes
- French/English account names
- VAT calculations
- Luxembourg compliance steps
- eCDF/RCS filing references

## Questions?

Refer to:
- `docs/visual_elements_spec.md` - Complete specification
- `docs/pedagogical_features.md` - Pedagogical requirements
- Individual template files - Format-specific guidance

