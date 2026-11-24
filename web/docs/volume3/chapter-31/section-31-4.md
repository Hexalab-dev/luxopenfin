---
id: volume3-chapter-31-section-31-4
title: "31.4 FAIA File Format (XML, OECD SAF-T Based)"
description: "The FAIA (Fichier d'Audit Informatisé AED) file format is Luxembourg's standardized format for tax audit data. Based on OECD SAF-T (Standard Audit File..."
sidebar_position: 5
slug: /volume3/chapter-31/section-31-4
---

# 31.4 FAIA File Format (XML, OECD SAF-T Based)

## Overview

The **FAIA (Fichier d'Audit Informatisé AED)** file format is Luxembourg's standardized format for tax audit data. Based on **OECD SAF-T (Standard Audit File for Tax)**, FAIA provides a comprehensive, structured format for exporting accounting data to tax authorities.

## FAIA and OECD SAF-T

### OECD SAF-T Standard

**SAF-T (Standard Audit File for Tax)** is an international standard developed by the OECD for tax audit purposes. It provides a standardized format for exporting accounting data.

### Luxembourg Implementation

**FAIA is:**
- Based on OECD SAF-T standard
- Adapted for Luxembourg requirements
- XML-based format
- Comprehensive data structure
- Required for tax audits

## FAIA File Structure

### XML Format

**FAIA Files Are:**
- XML (eXtensible Markup Language) format
- Structured data with tags
- Validated against schema
- Human-readable (with proper tools)
- Machine-processable

### File Components

**FAIA File Contains:**
- **Header**: Company information, period covered
- **Chart of Accounts**: Complete PCN chart of accounts
- **General Ledger**: All accounting entries
- **Journal Entries**: Detailed transaction records
- **Account Balances**: Opening and closing balances
- **Supporting Data**: Additional information as required

## Data Requirements

### Required Information

**Must Include:**
- All accounting transactions for period
- Complete chart of accounts (PCN)
- Account balances (opening and closing)
- Transaction dates and amounts
- Account references (PCN account numbers)
- Transaction descriptions
- Supporting document references
- VAT information (if applicable)

### Period Coverage

**Coverage:**
- Typically covers fiscal year
- May cover specific audit period
- Must be complete for period
- Must include all transactions

## Generating FAIA Files

### From Accounting Software

**Most accounting software** can export to FAIA:
- **Sage BOB**: FAIA export functionality
- **Odoo**: FAIA export module
- **Other software**: Check for FAIA export capability

**Export Process:**
1. Select period to export
2. Choose FAIA export option
3. Configure export settings
4. Generate FAIA file
5. Validate file format
6. Save file for submission

### Manual Generation

**If software doesn't support FAIA:**
- May need conversion tools
- Use FAIA conversion software
- Consult with IT specialist
- Consider software upgrade

## FAIA Validation

### Schema Validation

**FAIA Files Must:**
- Follow FAIA XML schema
- Include all required elements
- Have proper structure
- Pass schema validation
- Be properly formatted

### Data Validation

**Data Must Be:**
- Complete for period
- Accurate and correct
- Consistent across sections
- Properly referenced
- Validated before submission

## Submission Requirements

### When Required

**FAIA Files May Be Required:**
- During tax audits
- For specific tax procedures
- Upon request by tax authorities (AED)
- For compliance verification
- For tax return support

### Submission Process

**Submission:**
1. Generate FAIA file for requested period
2. Validate file format and content
3. Review data for accuracy
4. Submit to tax authorities (AED)
5. Keep copy for records
6. Confirm receipt

## Luxembourg Compliance Note

**Critical Requirements:**
- **FAIA capability**: Software must support FAIA export
- **Data completeness**: Files must include all required data
- **Format compliance**: Files must follow FAIA schema
- **Validation**: Files must be validated before submission
- **Timeliness**: Must be able to generate files when requested

**Common Issues:**
- **Software limitations**: Software doesn't support FAIA export
- **Format errors**: Files not following FAIA schema
- **Incomplete data**: Missing required information
- **Validation failures**: Files not passing validation
- **Timing issues**: Unable to generate files quickly when requested

## Think It Through

*TechLux Solutions* uses accounting software that doesn't have built-in FAIA export. What steps should they take to ensure FAIA compliance? What are their options?

## Concepts in Practice

**FAIA File Generation**

*Artisan Boulangerie* FAIA preparation:

**Software**: Sage BOB (with FAIA export capability)

**Preparation:**
- All accounting data maintained in Sage BOB
- PCN accounts properly configured
- All transactions properly recorded
- Software configured for FAIA export

**FAIA Generation (if requested by tax authorities):**
1. **Select period**: Fiscal year 2024
2. **Export to FAIA**: Use Sage BOB FAIA export function
3. **Validate file**: Check file format and content
4. **Review data**: Verify completeness and accuracy
5. **Save file**: Keep for submission if requested

**File Contents:**
- Header with company information
- Complete PCN chart of accounts
- All journal entries for 2024
- Account balances (opening and closing)
- VAT information
- Supporting references

**Result**: FAIA file ready for submission, compliant with requirements, validated and accurate.

---

