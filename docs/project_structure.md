# Project Structure Documentation

## Overview

This document describes the complete structure of the Luxembourg SME Accounting Textbook project.

## Directory Structure

```
luxopenfin/
├── README.md                          # Main project README
├── CONTRIBUTING.md                    # Contribution guidelines
├── lux.plan.md                        # Complete textbook outline (reference)
│
├── volumes/                           # Textbook volumes
│   ├── volume1/                       # Financial Accounting
│   │   ├── README.md                  # Volume 1 overview
│   │   ├── chapter_01/                # Chapter directories (to be created)
│   │   ├── chapter_02/
│   │   └── ...
│   ├── volume2/                       # Managerial Accounting
│   │   ├── README.md                  # Volume 2 overview
│   │   └── ...
│   └── volume3/                       # Luxembourg-Specific Compliance
│       ├── README.md                  # Volume 3 overview
│       └── ...
│
├── appendices/                        # Textbook appendices
│   ├── README.md                      # Appendices overview
│   ├── appendix_a_pcn_chart_of_accounts.md
│   ├── appendix_b_vat_reference.md
│   ├── appendix_c_tax_calendar.md
│   ├── appendix_d_sample_financial_statements.md
│   ├── appendix_e_software_comparison.md
│   ├── appendix_f_glossary.md
│   └── appendix_g_quick_references.md
│
├── supplementary/                     # Supplementary materials
│   ├── README.md                      # Supplementary materials overview
│   ├── instructor/                    # Instructor resources
│   │   ├── README.md
│   │   ├── slides/
│   │   ├── test_bank/
│   │   ├── rubrics/
│   │   ├── teaching_notes/
│   │   └── solutions/
│   ├── student/                       # Student resources
│   │   ├── README.md
│   │   ├── interactive/
│   │   ├── exercises/
│   │   ├── videos/
│   │   ├── templates/
│   │   └── study_guides/
│   ├── interactive/                   # Interactive web tools
│   │   ├── README.md
│   │   ├── t_account_simulator.html
│   │   ├── journal_entry_practice.html
│   │   ├── pcn_lookup.html
│   │   ├── vat_calculator.html
│   │   └── ...
│   └── multilingual/                  # Translation resources
│       ├── README.md
│       ├── fr/                        # French translations
│       ├── de/                        # German translations
│       └── en/                        # English (base)
│
├── templates/                         # Content templates
│   ├── chapter_template.md           # Standard chapter template
│   └── ...
│
└── docs/                              # Project documentation
    ├── pedagogical_features.md        # Pedagogical features specification
    ├── project_structure.md           # This file
    └── ...
```

## File Naming Conventions

### Chapters
- Format: `chapter_XX_title.md` (e.g., `chapter_01_role_of_accounting.md`)
- Use lowercase with underscores
- Include chapter number (zero-padded)

### Appendices
- Format: `appendix_X_description.md` (e.g., `appendix_a_pcn_chart_of_accounts.md`)
- Use lowercase with underscores

### Supplementary Materials
- Follow same conventions as main content
- Include type prefix if needed (e.g., `slide_chapter_01.pptx`)

## Content Organization

### Chapters
Each chapter follows the template structure:
1. Chapter Introduction
2. Learning Objectives
3. Why It Matters
4. Sections (X.1, X.2, etc.)
5. Chapter Summary
6. Key Terms
7. Multiple Choice Questions
8. Questions
9. Problems Set A
10. Problems Set B
11. Comprehensive Problem
12. Cases
13. Solutions
14. References

### Lifecycle Badges

- Use the shared `<FeatureTag state="...">` component in MDX pages to signal the Feature Lifecycle tag (DRAFT → LIVE).
- Apply badges to landing pages (e.g., `overview.md`, `volume1/index.md`, chapter introductions) once the related content meets the target state.
- When badges appear in translated files under `web/i18n/<locale>/...`, keep the markup in sync so status is consistent across languages.

### Appendices
- Standalone reference documents
- Can be used independently
- Cross-referenced from chapters

### Supplementary Materials
- Organized by audience (instructor/student)
- Organized by type (tools/exercises/videos)
- Maintained in parallel with main content

## Version Control

### Content Versions
- Main content: Versioned by release
- Appendices: Updated as regulations change
- Supplementary: Updated with main content

### Language Versions
- All languages maintained in parallel
- Updates synchronized
- Version numbers consistent across languages

## Quality Assurance

### Review Process
1. Content creation
2. Technical review
3. Peer review (Luxembourg accounting professionals)
4. Regulatory accuracy check
5. Language review (for translations)
6. Final approval

### Standards
- PCN 2020 compliance verified
- Regulatory accuracy (quarterly updates)
- Pedagogical standards (OpenStax quality)
- Accessibility (WCAG 2.1 AA)

## Maintenance

### Regular Updates
- Quarterly: Regulatory changes (VAT, tax, etc.)
- Annually: Comprehensive content review
- As needed: Error corrections, improvements

### Update Process
1. Identify need for update
2. Research changes
3. Update content
4. Review and verify
5. Publish update
6. Notify users

## Distribution

### Formats
- Markdown (source)
- PDF (for printing)
- HTML (for web)
- EPUB (for e-readers)

### Platforms
- GitHub (source code and collaboration)
- Website (hosted version)
- Print-on-demand (physical books)

## License

Creative Commons Attribution 4.0 (CC BY 4.0)

## Contact

For questions about project structure or contributions, see CONTRIBUTING.md.

