---
id: volume3-chapter-31-section-31-3
title: "31.3 Digital Invoice Formats (UBL, Peppol)"
description: "1. Choose UBL-compliant software"
sidebar_position: 4
slug: /volume3/chapter-31/section-31-3
---

# 31.3 Digital Invoice Formats (UBL, Peppol)

## Overview

**Digital invoice formats** provide standardized structures for electronic invoices. Luxembourg supports multiple formats, with **UBL (Universal Business Language)** and **Peppol** being the most important European standards. Understanding these formats is essential for e-invoicing implementation.

## UBL (Universal Business Language)

### What is UBL?

**UBL** is an XML-based standard for business documents, including invoices. It provides a standardized structure that ensures interoperability between different systems and countries.

### UBL Structure

**UBL Invoice Contains:**
- **Header information**: Invoice number, date, parties
- **Line items**: Product/service details, quantities, prices
- **Tax information**: VAT calculations, tax totals
- **Payment information**: Payment terms, methods
- **Additional information**: Notes, references

### UBL Benefits

**Advantages:**
- **Standardization**: Consistent structure across systems
- **Interoperability**: Works with different software
- **Compliance**: Meets EU e-invoicing requirements
- **Automation**: Enables automated processing
- **International**: Used across Europe

## Peppol

### What is Peppol?

**Peppol (Pan-European Public Procurement On-Line)** is a European network for e-invoicing, originally developed for public procurement but now used for B2B and B2G invoicing.

### Peppol Network

**Peppol Provides:**
- **Network infrastructure**: Secure network for e-invoice exchange
- **Standard format**: Peppol BIS (Business Interoperability Specifications)
- **Access points**: Service providers for network access
- **Validation**: Automatic validation of invoices
- **Delivery**: Secure delivery confirmation

### Peppol Benefits

**Advantages:**
- **Network-based**: Secure, reliable delivery
- **Standardized**: Consistent format across Europe
- **Validated**: Automatic validation
- **Tracked**: Delivery confirmation
- **European**: Widely used in Europe

## Format Comparison

### UBL vs. Peppol

| Aspect | UBL | Peppol |
|--------|-----|--------|
| **Type** | Format standard | Network + format |
| **Structure** | XML-based | XML-based (Peppol BIS) |
| **Delivery** | Various methods | Network-based |
| **Validation** | Manual/software | Automatic |
| **Scope** | Format only | Format + network |
| **Use Case** | General e-invoicing | B2B/B2G e-invoicing |

### Choosing a Format

**Considerations:**
- **Recipient requirements**: What format does recipient accept?
- **Software support**: What formats does your software support?
- **Network access**: Do you need Peppol network access?
- **Automation needs**: How much automation do you need?
- **Cost**: What are the costs for each option?

## Implementation

### UBL Implementation

**Steps:**
1. Choose UBL-compliant software
2. Configure invoice templates
3. Generate UBL XML invoices
4. Validate UBL format
5. Transmit to recipients

### Peppol Implementation

**Steps:**
1. Choose Peppol access point provider
2. Register with Peppol network
3. Configure Peppol BIS format
4. Generate Peppol invoices
5. Send through Peppol network

## Software Support

### Accounting Software

**Most accounting software supports:**
- **UBL export**: Export invoices in UBL format
- **Peppol integration**: Connect to Peppol network
- **Format conversion**: Convert between formats
- **Validation**: Validate invoice formats

### Popular Software

**Software with E-Invoicing Support:**
- **Sage BOB**: UBL and Peppol support
- **Odoo**: E-invoicing modules
- **SAP**: Enterprise e-invoicing
- **Other software**: Check for e-invoicing capabilities

## Luxembourg Compliance Note

**Important Requirements:**
- **Format compliance**: E-invoices must be in supported format
- **Recipient acceptance**: Recipient must accept chosen format
- **Software support**: Software must support chosen format
- **Validation**: Invoices must be validated before sending
- **Storage**: E-invoices must be stored in accessible format

**Common Issues:**
- **Format errors**: Invoices not in correct format
- **Software limitations**: Software doesn't support chosen format
- **Recipient compatibility**: Recipient doesn't accept format
- **Validation failures**: Invoices not passing validation
- **Network issues**: Peppol network access problems

## Think It Through

*TechLux Solutions* wants to implement e-invoicing. They have customers in multiple European countries. Should they use UBL or Peppol? What factors should they consider?

## Concepts in Practice

**E-Invoicing Format Selection**

*Artisan Boulangerie* e-invoicing implementation:

**Requirements:**
- Send e-invoices to business customers
- Integrate with existing accounting software
- Support Luxembourg and EU customers
- Ensure compliance

**Solution:**
- **Format**: UBL (supported by accounting software)
- **Software**: Sage BOB with UBL export
- **Transmission**: Email with UBL XML attachment
- **Storage**: UBL files stored for 10 years

**Result**: Compliant e-invoicing system, customers receive UBL invoices, automated processing possible.

**Alternative (if needed):**
- **Format**: Peppol BIS
- **Network**: Peppol access point
- **Transmission**: Through Peppol network
- **Benefits**: Automatic validation, delivery confirmation

---

