# Visual Elements and Cross-References Translation Status

## Overview

This document tracks the translation status of visual elements (figures, diagrams, alt text) and cross-references that were added to Volume 1 and Volume 2 chapters as part of the OpenStax quality enhancement.

## Translation Requirements

For each chapter, the following need to be translated from English to French and German:

1. **Visual Elements:**
   - Figure titles (e.g., "Figure 1.1:" → "Figure 1.1 :" / "Abbildung 1.1:")
   - Diagram content (ASCII art, flowcharts, tables)
   - Alt text descriptions

2. **Cross-References:**
   - "As discussed in Chapter X" → "Comme discuté dans le Chapitre X" / "Wie besprochen in Kapitel X"
   - "See Appendix A" → "Voir l'Annexe A" / "Siehe Anhang A"
   - "We will explore" → "Nous explorerons" / "Wir werden untersuchen"
   - Other cross-reference phrases

## Volume 1: Financial Accounting

### Chapter 1: Role of Accounting in Society
- **Figures:** 3 (1.1, 1.2, 1.3)
- **Status:** 
  - French: Figure 1.2 ✅, Figure 1.3 ✅, Figure 1.1 ⚠️ (needs addition)
  - German: Figure 1.2 ✅, Figure 1.3 ✅, Figure 1.1 ⚠️ (needs addition)

### Chapter 2: Introduction to Financial Statements
- **Figures:** 3 (2.1, 2.2, 2.3)
- **Status:** Needs translation

### Chapter 3: Analyzing and Recording Transactions
- **Figures:** 2 (3.1, 3.2)
- **Status:** Needs translation

### Chapters 4-17
- **Figures:** 1-2 per chapter
- **Status:** Needs translation

## Volume 2: Managerial Accounting

### Chapters 18-25
- **Figures:** 1-3 per chapter
- **Status:** Needs translation

## Translation Approach

1. Extract visual elements from English source files (`volumes/volume*/chapter_*/chapter_*.md`)
2. Translate figure titles, content, and alt text
3. Add translated elements to French files (`web/i18n/fr/docusaurus-plugin-content-docs/current/volume*/chapter-*/section-*.md`)
4. Add translated elements to German files (`web/i18n/de/docusaurus-plugin-content-docs/current/volume*/chapter-*/section-*.md`)
5. Translate cross-references throughout the content

## Notes

- Visual elements are typically placed after the relevant explanatory text
- Alt text should be translated to maintain accessibility
- Cross-references should maintain chapter/section numbering consistency
- Some technical terms may remain in English (e.g., PCN, IFRS, RCS)

