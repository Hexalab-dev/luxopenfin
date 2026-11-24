# Solutions Manual - Chapter 7: Accounting Information Systems

## Questions - Solutions

### Question 1: Components of Accounting Information System

**Answer:**

An Accounting Information System (AIS) has five main components:

**1. People:**
- Users of the system (accountants, managers, employees)
- System administrators
- IT support staff
- External users (auditors, tax authorities)

**2. Procedures:**
- Methods and rules for processing transactions
- Internal controls
- Data entry procedures
- Reporting procedures
- Security procedures

**3. Data:**
- Transaction data (sales, purchases, payments)
- Master data (customers, suppliers, accounts)
- Reference data (PCN accounts, VAT rates)
- Historical data

**4. Software:**
- Accounting software (Sage BOB, Odoo, etc.)
- Database systems
- Reporting tools
- Integration tools

**5. Information Technology (IT) Infrastructure:**
- Hardware (computers, servers)
- Networks
- Security systems
- Backup systems

**How They Work Together:**
- People use procedures to enter data into software running on IT infrastructure
- Software processes data according to procedures
- System generates reports for people
- All components must work together for effective AIS

---

### Question 2: Special Journals Purpose

**Answer:**

**Purpose of Special Journals:**
Special journals are used to record similar types of transactions separately, improving efficiency and organization.

**Types of Special Journals:**

1. **Sales Journal:**
   - Records credit sales
   - Improves efficiency for high-volume sales
   - Reduces posting work

2. **Purchases Journal:**
   - Records credit purchases
   - Organizes purchase transactions
   - Simplifies posting

3. **Cash Receipts Journal:**
   - Records all cash receipts
   - Tracks cash inflows
   - Organizes cash transactions

4. **Cash Disbursements Journal:**
   - Records all cash payments
   - Tracks cash outflows
   - Organizes payments

**Importance to Stakeholders:**

1. **Efficiency:** Faster transaction recording
2. **Organization:** Similar transactions grouped together
3. **Control:** Better internal controls
4. **Reporting:** Easier to generate reports
5. **Audit:** Better audit trail
6. **Compliance:** Supports Luxembourg requirements

---

### Question 3: Sales Journal vs. General Journal

**Answer:**

**Sales Journal (Credit Sales):**
- Records credit sales only
- Posted to Accounts Receivable and Sales Revenue
- Individual items posted to subsidiary ledger

**Purchases Journal (Credit Purchases):**
- Records credit purchases only
- Posted to Accounts Payable and Inventory/Expenses
- Individual items posted to subsidiary ledger

**Cash Receipts Journal:**
- Records all cash receipts
- Posted to Cash and various accounts
- Individual items posted to subsidiary ledger

**Cash Disbursements Journal:**
- Records all cash payments
- Posted to Cash and various accounts
- Individual items posted to subsidiary ledger

**Sales Journal vs. General Journal:**
- The general journal records any transaction with full debit/credit lines and an explanation for each entry
- The sales journal records only credit sales, one line per invoice (date, invoice no., customer, net amount, VAT, total)
- Column totals are posted once a month (Dr 4011, Cr 7061, Cr 461411) instead of posting every sale individually

**Advantages of a Sales Journal:**
- Saves time: one line per sale, one summary posting per period
- Fewer posting errors; easy to post each invoice to the customer's subsidiary account
- Separate VAT column makes the VAT return easier
- Allows division of labour (one person keeps the sales journal)

**General Journal:**
- Records transactions not fitting special journals
- Adjusting entries
- Closing entries
- Unusual transactions

---

### Question 4: Subsidiary Ledgers

**Answer:**

**Definition:**
A subsidiary ledger contains detailed information about individual items that make up a general ledger control account.

**Purpose:**
- Provides detailed information
- Supports control account
- Enables individual tracking
- Improves organization

**Types:**

1. **Accounts Receivable Subsidiary Ledger:**
   - Individual customer accounts
   - Shows each customer's balance
   - Supports Accounts Receivable control account

2. **Accounts Payable Subsidiary Ledger:**
   - Individual supplier accounts
   - Shows each supplier's balance
   - Supports Accounts Payable control account

**Relationship to Control Account:**
- Subsidiary ledger total = Control account balance
- Must reconcile regularly
- Control account shows total, subsidiary shows details

---

### Question 5: Agreement of Subsidiary Ledger and Control Account

**Answer:**

**Why they must agree:**
- The control account (e.g., 4011 Customers) is posted with the same transactions, in total, as the individual customer accounts (40111, 40112, …) are posted in detail
- Every amount posted to the subsidiary ledger is also included in the control account, so the sum of the subsidiary balances must equal the control balance
- For eCDF and FAIA, sub-accounts roll up into the official PCN account, so a difference means the reported balance is unreliable

**What a difference indicates:**
- A transaction posted to the control account but not to a customer/supplier account (or vice versa)
- Posting to the wrong subsidiary account does NOT create a difference (totals still agree) but is found by customer statements
- Arithmetic or transposition errors (a difference divisible by 9 suggests a transposition)
- Unrecorded returns, discounts or write-offs in one of the two records

**Action:** prepare a schedule of subsidiary balances at each month end, compare with the control account and investigate any difference before closing.

---

### Question 6: Career Paths

**Answer:**

**Career Paths Combining Accounting and Information Systems:**

1. **Systems Accountant:**
   - Implements and maintains accounting systems
   - Bridges accounting and IT
   - High demand in Luxembourg

2. **IT Auditor:**
   - Audits information systems
   - Ensures system controls
   - Works for audit firms

3. **Business Analyst:**
   - Analyzes business processes
   - Designs system solutions
   - Works with accounting and IT

4. **ERP Consultant:**
   - Implements ERP systems
   - Trains users
   - Provides support

5. **Compliance Specialist:**
   - Ensures regulatory compliance
   - Implements compliance systems
   - Works with eCDF, FAIA requirements

**Skills Needed:**
- Accounting knowledge
- IT/Systems knowledge
- Problem-solving
- Communication
- Project management

---

### Question 7: Sage BOB vs. Odoo and Other Luxembourg Software

**Answer:**

**Popular Software in Luxembourg:**

1. **Sage BOB:**
   - PCN-compliant
   - eCDF integration
   - FAIA export
   - Widely used by SMEs

2. **Odoo:**
   - Open-source
   - PCN support
   - Customizable
   - Growing popularity

3. **QuickBooks:**
   - International software
   - May need customization for Luxembourg
   - Good for small businesses

4. **SAP Business One:**
   - Enterprise solution
   - Full ERP
   - For larger businesses

**Sage BOB vs. Odoo for a Luxembourg SME:**

| | Sage BOB | Odoo |
|---|---|---|
| Advantages | Built for Luxembourg/Belgium; PCN chart and Luxembourg VAT return/eCDF and FAIA features; widely known by fiduciaries | Open-source, modular ERP (sales, stock, POS, accounting); Luxembourg localisation available; cloud access |
| Disadvantages | Mainly accounting only; Windows/desktop-oriented; licence costs | Localisation and set-up need expertise; integration/customisation cost; quality depends on implementer |

**Key Features Needed:**
- PCN account support
- eCDF filing capability
- FAIA export
- Multi-VAT rate tracking
- Multilingual support

---

### Question 8: eCDF Requirements

**Answer:**

**eCDF (Electronic Collection of Financial Data):**
- Electronic filing system for Luxembourg businesses
- Used for VAT returns and annual accounts

**Requirements:**

1. **VAT Returns:**
   - Must file electronically through eCDF
   - Monthly (turnover > €620,000), quarterly (€112,000–€620,000) or annual (≤ €112,000) returns; periodic returns due by the 15th of the following month
   - Must include all VAT data

2. **Annual Accounts:**
   - Must file electronically
   - Within 7 months of year end
   - Must be in proper format

3. **Access:**
   - Need eCDF account
   - Digital certificate required
   - Secure login

4. **Format:**
   - Must follow specified format
   - XML or other electronic format
   - Must be validated

**Compliance:**
- Mandatory for all businesses
- Penalties for non-compliance
- Must maintain access

---

### Question 9: FAIA Requirements

**Answer:**

**FAIA (Fichier d'Audit Informatisé AED):**
- Computerized audit file format
- Required by Luxembourg tax authorities
- Standardized format for accounting data

**When Required:**
- Tax authorities may request FAIA file
- During tax audits
- For compliance verification
- Must be available on request

**Format:**
- Standardized XML format based on the OECD SAF-T standard
- Contains all accounting entries
- Includes account numbers, dates, amounts
- Must be exportable from accounting system

**Content:**
- All journal entries
- Account balances
- Transaction details
- PCN account numbers
- Dates and references

**Compliance:**
- System must be able to export FAIA
- Must be available within reasonable time
- Must be accurate and complete

---

### Question 10: Fiscal Cash Registers and Digital Invoicing

**Answer:**

**Digital Invoicing:**
- Electronic invoices required in some cases
- Must meet specific format requirements
- Must be stored electronically
- Required for B2G (business-to-government) transactions

**Requirements:**
- Specific format (XML, PDF/A)
- Digital signature may be required
- Must be stored for 10 years
- Must be accessible

**Fiscal Cash Registers:**
- Required for restaurants and retail
- Must be certified
- Must record all sales
- Must generate fiscal receipts
- Data must be stored securely

**Compliance:**
- Mandatory for certain businesses
- Must use certified equipment
- Regular inspections
- Penalties for non-compliance

**How They Support Compliance:**
- Accurate transaction recording
- Audit trail
- Tax compliance
- Prevents fraud

---

## Supplementary Discussion (instructor use)

### S1: System Selection Criteria

**Answer:**

**Criteria for Selecting Accounting Software:**

1. **PCN Compliance:**
   - Must support PCN accounts
   - Must use PCN structure
   - Essential for Luxembourg

2. **eCDF Integration:**
   - Must support eCDF filing
   - Essential for VAT returns
   - Required for annual accounts

3. **FAIA Export:**
   - Must be able to export FAIA
   - Required for audits
   - Important for compliance

4. **VAT Management:**
   - Multiple VAT rates
   - VAT tracking
   - VAT return preparation

5. **Cost:**
   - License fees
   - Implementation costs
   - Maintenance costs

6. **Ease of Use:**
   - User-friendly interface
   - Training requirements
   - Support available

7. **Support:**
   - Local support
   - Training available
   - Updates and maintenance

---

## Problems Set A - Solutions

### Problem A-1: Special Journal Entries

**Solution:**

**a) Credit sale of €1,000 (excluding VAT), VAT 17%, to Customer A**

**Sales Journal:**
```
Date        Customer    Invoice    Amount    VAT    Total
─────────────────────────────────────────────────────────
[Date]      Customer A  INV-001    €1,000    €170   €1,170
```

**General Ledger Posting:**
```
4011   Accounts Receivable        €1,170
7061   Sales Revenue                        €1,000
461411 VAT Payable                            €170
```

**b) Credit purchase of €2,000 inventory (excluding VAT), VAT 17%, from Supplier X**

**Purchases Journal:**
```
Date        Supplier    Invoice    Amount    VAT    Total
─────────────────────────────────────────────────────────
[Date]      Supplier X  PO-001     €2,000    €340   €2,340
```

**General Ledger Posting:**
```
361    Inventory                   €2,000
421611 VAT Recoverable              €340
44111  Accounts Payable                        €2,340
```

**c) Cash sale of €500 (excluding VAT), VAT 17%**

**Cash Receipts Journal:**
```
Date        Account        Reference    Amount
───────────────────────────────────────────────
[Date]      Cash           Cash Sale    €585
            Sales Revenue                €500
            VAT Payable                   €85
```

**General Ledger Posting:**
```
5131   Cash                           €585
7061   Sales Revenue                            €500
461411 VAT Payable                                €85
```

**d) Payment of €2,340 to Supplier X**

**Cash Disbursements Journal:**
```
Date        Account            Check    Amount
───────────────────────────────────────────────
[Date]      Accounts Payable   CHK-001  €2,340
```

**General Ledger Posting:**
```
44111  Accounts Payable        €2,340
5131   Cash                                €2,340
```

**e) Collection of €1,170 from Customer A**

**Cash Receipts Journal:**
```
Date        Account                Reference    Amount
─────────────────────────────────────────────────────
[Date]      Accounts Receivable    Collection   €1,170
```

**General Ledger Posting:**
```
5131   Cash                       €1,170
4011   Accounts Receivable                    €1,170
```

---

### Problem A-2: Subsidiary Ledger

**Solution:**

**Accounts Receivable Subsidiary Ledger:**

**Customer A:**
```
Date        Reference    Debit    Credit    Balance
─────────────────────────────────────────────────────
[Date]      Beginning                      €500
[Date]      Sale        €1,000              €1,500
[Date]      Collection           €800      €700
─────────────────────────────────────────────────────
Balance: €700
```

**Customer B:**
```
Date        Reference    Debit    Credit    Balance
─────────────────────────────────────────────────────
[Date]      Beginning                      €0
[Date]      Sale        €2,000              €2,000
[Date]      Collection           €1,000    €1,000
─────────────────────────────────────────────────────
Balance: €1,000
```

**Customer C:**
```
Date        Reference    Debit    Credit    Balance
─────────────────────────────────────────────────────
[Date]      Beginning                      €300
[Date]      Sale          €500              €800
─────────────────────────────────────────────────────
Balance: €800
```

**Verification:**
- Customer A: €700
- Customer B: €1,000
- Customer C: €800
- **Total: €2,500** ✓

**Control Account Balance: €2,500** ✓

**Reconciliation:** Subsidiary ledger total (€2,500) = Control account balance (€2,500) ✓

---

### Problem A-3: eCDF Filing

**Solution:**

**VAT Calculations:**

**VAT Payable:**
- 17% VAT: €3,400
- 3% VAT: €300
- **Total VAT Payable: €3,700**

**VAT Recoverable:**
- 17% VAT: €2,000
- 3% VAT: €100
- **Total VAT Recoverable: €2,100**

**Net VAT:**
- Net VAT = VAT Payable - VAT Recoverable
- Net VAT = €3,700 - €2,100
- **Net VAT to Pay: €1,600**

**eCDF Filing Process:**

1. **Prepare VAT Return:**
   - Calculate VAT by rate
   - Calculate net VAT position
   - Verify calculations

2. **Access eCDF Portal:**
   - Login with digital certificate
   - Navigate to VAT return section

3. **Enter Data:**
   - Enter VAT Payable by rate
   - Enter VAT Recoverable by rate
   - System calculates net VAT

4. **Validate:**
   - System validates data
   - Check for errors
   - Correct if needed

5. **Submit:**
   - Submit return electronically
   - Receive confirmation
   - Pay net VAT if due

6. **Record:**
   - Record payment in accounting system
   - File confirmation
   - Retain records

---

### Problem A-4: Software Selection Criteria

**Solution:**

**Criteria (Ranked by Importance):**

1. **PCN Compliance (Most Important):**
   - Must support PCN accounts
   - Essential for Luxembourg compliance
   - Cannot compromise on this

2. **eCDF Integration:**
   - Must support eCDF filing
   - Required for VAT returns
   - Essential for annual accounts

3. **FAIA Export:**
   - Must be able to export FAIA
   - Required for audits
   - Important for compliance

4. **VAT Management:**
   - Multiple VAT rates
   - VAT tracking
   - VAT return preparation

5. **Cost:**
   - License fees
   - Implementation costs
   - Maintenance costs
   - ROI consideration

6. **Ease of Use:**
   - User-friendly interface
   - Training requirements
   - Learning curve

7. **Support:**
   - Local support available
   - Training provided
   - Updates and maintenance

8. **Scalability:**
   - Can grow with business
   - Additional features available
   - Upgrade path

9. **Integration:**
   - Integrates with other systems
   - POS integration
   - Bank integration

10. **Security:**
    - Data security
    - Backup capabilities
    - Access controls

---

### Problem A-5: FAIA Preparation

**Solution:**

**FAIA File Components:**

1. **Company Information:**
   - Company name and registration
   - Fiscal year
   - Currency (EUR)

2. **Chart of Accounts:**
   - All PCN accounts used
   - Account numbers
   - Account descriptions

3. **Journal Entries:**
   - All transactions
   - Dates
   - Account numbers
   - Debit/credit amounts
   - Descriptions

4. **Account Balances:**
   - Beginning balances
   - Ending balances
   - Period balances

5. **Transaction Details:**
   - Reference numbers
   - VAT information
   - Customer/supplier information

**Why Each Component is Important:**

1. **Company Information:** Identifies the business and period
2. **Chart of Accounts:** Shows account structure and PCN compliance
3. **Journal Entries:** Complete transaction history for audit
4. **Account Balances:** Verifies accuracy and completeness
5. **Transaction Details:** Provides audit trail and verification

**Export Requirements:**
- Standardized XML format
- Must be complete and accurate
- Must be exportable on demand
- Must be retained

---

## Problems Set B - Solutions

### Problem B-1: Complete Special Journal System

**Solution:**

**Special Journals Setup:**

**1. Sales Journal (Credit Sales):**
```
Date        Customer    Invoice    Amount    VAT 17%    VAT 3%    Total
─────────────────────────────────────────────────────────────────────────
Nov 1       Customer A  INV-001    €5,000    €850                  €5,850
Nov 4       Customer B  INV-002    €1,000              €30        €1,030
```

**2. Purchases Journal (Credit Purchases):**
```
Date        Supplier    Invoice    Amount    VAT 17%    Total
───────────────────────────────────────────────────────────────
Nov 2       Supplier X  PO-001     €8,000    €1,360    €9,360
```

**3. Cash Receipts Journal:**
```
Date        Account                Reference    Amount
─────────────────────────────────────────────────────
Nov 3       Sales Revenue          Cash Sale    €2,340
Nov 6       Accounts Receivable    Collection   €5,850
```

**4. Cash Disbursements Journal:**
```
Date        Account            Check    Amount
───────────────────────────────────────────────
Nov 5       Accounts Payable   CHK-001  €8,000
Nov 7       Rent Expense       CHK-002  €1,200
Nov 8       Salaries Expense   CHK-003  €3,000
```

**Posting to General Ledger:**

**Sales Journal Totals:**
```
4011   Accounts Receivable        €6,880
7061   Sales Revenue                        €6,000
461411 VAT Payable                            €880
```

**Purchases Journal Totals:**
```
361    Inventory                   €8,000
421611 VAT Recoverable             €1,360
44111  Accounts Payable                        €9,360
```

**Cash Receipts Journal Totals:**
```
5131   Cash                       €8,190
7061   Sales Revenue                        €2,000
461411 VAT Payable                            €340
4011   Accounts Receivable                    €5,850
```

**Cash Disbursements Journal Totals:**
```
44111  Accounts Payable          €8,000
6111   Rent Expense               €1,200
6211   Salaries Expense           €3,000
5131   Cash                                 €12,200
```

**Subsidiary Ledger Postings:**
- Individual customer transactions to Accounts Receivable subsidiary ledger
- Individual supplier transactions to Accounts Payable subsidiary ledger

---

### Problem B-2: Subsidiary Ledger Reconciliation

**Solution:**

**Reconciliation:**

**Subsidiary Ledger Totals:**
- Customer A: €2,500
- Customer B: €1,800
- Customer C: €700
- Customer D: €500
- **Total: €5,500**

**General Ledger Control Account:**
- **Balance: €5,500**

**Verification:**
- Subsidiary ledger total: €5,500
- Control account balance: €5,500
- **Difference: €0** ✓

**Reconciliation Statement:**
```
Accounts Receivable Reconciliation
[Date]

Subsidiary Ledger Totals:
  Customer A                        €2,500
  Customer B                        1,800
  Customer C                          700
  Customer D                          500
                                  ───────
Total Subsidiary Ledger             5,500

General Ledger Control Account      5,500
                                  ───────
Difference                              €0
```

**Explanation:**
- No differences found
- Subsidiary ledger and control account are in balance
- All transactions properly posted
- System is working correctly

**If Differences Found:**
- Review postings
- Check for missing transactions
- Verify calculations
- Correct errors

---

### Problem B-3: eCDF and FAIA Compliance

**Solution:**

**a) eCDF Filing Requirements:**

1. **Access:**
   - Register for eCDF account
   - Obtain digital certificate
   - Maintain access credentials

2. **VAT Returns:**
   - File electronically through eCDF
   - Monthly (turnover > €620,000), quarterly (€112,000–€620,000) or annual (≤ €112,000) returns; periodic returns due by the 15th of the following month
   - Include all VAT data by rate

3. **Annual Accounts:**
   - File electronically within 7 months
   - Must be in proper format
   - Must be complete and accurate

4. **Procedures:**
   - Prepare data in system
   - Export to eCDF format
   - Validate data
   - Submit electronically
   - Retain confirmations

**b) FAIA Export Requirements:**

1. **System Capability:**
   - Must be able to export FAIA format
   - Standardized XML format
   - Complete accounting data

2. **When Required:**
   - Tax authorities may request
   - During audits
   - For compliance verification

3. **Content:**
   - All journal entries
   - Account balances
   - Transaction details
   - PCN account numbers

4. **Procedures:**
   - Export FAIA file
   - Verify completeness
   - Provide to authorities
   - Retain copy

**c) Software Support:**

**eCDF:**
- Export data in eCDF format
- Direct integration with eCDF portal
- Validation of data
- Submission capability

**FAIA:**
- FAIA export function
- Standardized format
- Complete data export
- Verification tools

**d) Consequences of Non-Compliance:**

1. **eCDF:**
   - Cannot file returns
   - Late filing penalties
   - Compliance issues

2. **FAIA:**
   - Cannot provide audit file
   - Audit complications
   - Potential penalties

3. **Overall:**
   - Compliance violations
   - Potential fines
   - Business disruption

---

### Problem B-4: System Integration

**Solution:**

**a) System Integration:**

**POS System → Accounting Software:**
- Sales data flows automatically
- Inventory updates automatically
- VAT data captured
- Reduces manual entry

**b) Data Flows:**

1. **Sales Data:**
   - POS records sale
   - Data sent to accounting system
   - Sales Revenue recorded
   - Inventory updated
   - VAT recorded

2. **Inventory Data:**
   - POS tracks inventory
   - Updates accounting system
   - Cost of goods sold calculated
   - Inventory balances updated

3. **VAT Data:**
   - VAT captured at POS
   - Flows to accounting system
   - Tracked by rate
   - Used for VAT returns

**c) Compliance Support:**

1. **Accurate Recording:**
   - All sales recorded
   - Proper VAT rates
   - Complete audit trail

2. **VAT Compliance:**
   - VAT tracked by rate
   - Ready for eCDF filing
   - Accurate VAT returns

3. **PCN Compliance:**
   - Proper account usage
   - PCN structure maintained
   - Compliance verified

**d) PCN Accounts Involved:**

- 516: Cash on hand (till); 5131: Bank; 517: Card settlements in transit
- 703: Restaurant services (meals); 7061: Sales of goods (retail items)
- 461411: VAT Payable (output VAT)
- 361: Stock of food and drinks
- 607: Cost of Goods Sold / change in stocks

**e) VAT Handling:**

- VAT captured at POS by rate: 3% on meals and non-alcoholic drinks consumed on the premises, 17% on alcoholic drinks served
- Flows to accounting system
- Tracked separately by rate
- Used for VAT return preparation
- Supports eCDF filing

---

## Comprehensive Problem - Solution

### Comprehensive Problem 7: Complete AIS Implementation

**Solution:**

#### 1. System Selection

**a) Evaluation:**

**Sage BOB:**
- **Pros:** PCN-compliant, eCDF integration, FAIA export, widely used in Luxembourg
- **Cons:** Cost, learning curve
- **Best For:** Luxembourg SMEs needing full compliance

**Odoo:**
- **Pros:** Open-source, customizable, PCN support, growing
- **Cons:** May need customization, support varies
- **Best For:** Businesses wanting flexibility

**QuickBooks:**
- **Pros:** User-friendly, international, good support
- **Cons:** May need Luxembourg customization, eCDF integration may be limited
- **Best For:** Small businesses, international focus

**b) Recommendation: Sage BOB**

**Justification:**
- Full PCN compliance
- eCDF integration built-in
- FAIA export capability
- Widely used in Luxembourg
- Local support available
- Meets all compliance requirements

**c) Implementation Requirements:**
- Software licenses (5 users)
- Server/hosting setup
- Data migration
- Staff training
- eCDF account setup
- Testing and validation

#### 2. Special Journals Setup

**a) Journals Needed:**

1. **Sales Journal:** Credit sales
2. **Purchases Journal:** Credit purchases
3. **Cash Receipts Journal:** All cash receipts
4. **Cash Disbursements Journal:** All cash payments
5. **General Journal:** Adjusting entries, closing entries

**b) Format Examples:**

**Sales Journal:**
```
Date    Customer    Invoice    Amount    VAT 17%    VAT 3%    Total
─────────────────────────────────────────────────────────────────────
```

**Purchases Journal:**
```
Date    Supplier    Invoice    Amount    VAT 17%    VAT 3%    Total
─────────────────────────────────────────────────────────────────────
```

**c) Posting Procedures:**
- Post totals to general ledger periodically
- Post individual items to subsidiary ledgers
- Reconcile regularly
- Verify accuracy

#### 3. Subsidiary Ledgers

**a) Accounts Receivable Subsidiary Ledger:**
- Individual customer accounts
- Shows balances per customer
- Supports control account
- Enables customer management

**b) Accounts Payable Subsidiary Ledger:**
- Individual supplier accounts
- Shows balances per supplier
- Supports control account
- Enables supplier management

**c) Reconciliation Process:**
- Compare subsidiary totals to control account
- Investigate differences
- Correct errors
- Document reconciliation

#### 4. eCDF Integration

**a) System Support:**
- Export data in eCDF format
- Direct integration with eCDF portal
- Validation of data
- Submission capability

**b) Data Exported:**
- VAT return data
- Annual account data
- Company information
- Period information

**c) Procedures:**
- Prepare data in system
- Export to eCDF format
- Validate data
- Submit through eCDF portal
- Retain confirmations

#### 5. FAIA Capability

**a) FAIA Export Requirements:**
- Standardized XML format
- Complete accounting data
- All journal entries
- Account balances

**b) System Generation:**
- FAIA export function
- Select period
- Export file
- Verify completeness

**c) Testing:**
- Test export function
- Verify data completeness
- Check format compliance
- Test with sample data

#### 6. Implementation Plan

**a) Steps:**
1. System selection and purchase
2. Server/hosting setup
3. Software installation
4. Chart of accounts setup (PCN)
5. Data migration
6. Staff training
7. Testing
8. Go-live
9. Support and maintenance

**b) Data Migration:**
- Export existing data
- Map to new system
- Import data
- Verify accuracy
- Test transactions

**c) Staff Training:**
- System overview
- Transaction entry
- Reporting
- eCDF filing
- FAIA export
- Troubleshooting

**d) Timeline:**
- Week 1-2: System setup
- Week 3-4: Data migration
- Week 5-6: Training
- Week 7: Testing
- Week 8: Go-live

#### 7. Compliance Verification

**a) PCN Compliance:**
- Verify all accounts use PCN numbers
- Check account classifications
- Verify financial statement format
- Test account structure

**b) VAT Tracking:**
- Verify VAT by rate
- Test VAT calculations
- Check VAT return preparation
- Verify eCDF integration

**c) eCDF Capability:**
- Test eCDF export
- Verify data format
- Test submission
- Verify confirmations

**d) FAIA Capability:**
- Test FAIA export
- Verify format
- Check completeness
- Test with sample data

---

## Cases - Solutions

### Case 7-1: Choosing the Right System

**Solution:**

#### 1. Advantages and Disadvantages

| Option | Advantages | Disadvantages |
|---|---|---|
| **Sage BOB** | Luxembourg PCN chart, VAT return and eCDF/FAIA functions built in; known by most fiduciaries (her accountant can work in the same file); stable | Accounting-only (no POS/stock modules); licence cost; less intuitive for a non-accountant |
| **Odoo** | Integrated POS, stock, invoicing and accounting; cloud access; Luxembourg localisation available | Set-up and localisation need an experienced partner; risk of mis-configured VAT codes; support cost may exceed budget |
| **Excel** | Cheapest; familiar | No PCN structure or controls; no eCDF or FAIA export; high error risk with four VAT rates and monthly returns; weak audit trail |

#### 2. Recommendation

**Sage BOB (or a similar Luxembourg-localised package) used together with her accountant.** It fits the €50–100/month budget for 2–3 users, delivers PCN, eCDF and FAIA compliance out of the box and needs little technical expertise. Odoo is a reasonable alternative only if she wants POS–stock integration and can pay an implementation partner. Excel is not adequate for a VAT-registered restaurant filing monthly returns.

#### 3. Most Important Features

- Correct VAT codes by rate and separate tracking of service vs. retail sales
- PCN chart of accounts (703 meals, 7061 retail goods, 361 stock, 5131 bank, 516 till)
- eCDF export of VAT returns and annual accounts; FAIA export on request
- Simple daily entry of till (POS) totals and bank reconciliation
- Multi-user access for Marie, staff and accountant

#### 4. Handling of Key Requirements

| | Sage BOB | Odoo | Excel |
|---|---|---|---|
| a) Multiple VAT rates | VAT codes per rate (3% meals and non-alcoholic drinks on premises; 17% alcoholic drinks served; 14% certain retail wines; 17% other goods) | Tax codes per product in POS and accounting | Manual formulas, error-prone |
| b) eCDF filing | Generates the VAT return file for eCDF | Via Luxembourg localisation / export | Manual entry on eCDF |
| c) FAIA export | Built in | Via localisation module | Not possible |
| d) PCN compliance | Standard PCN chart | PCN chart in localisation | Only if built manually |

#### 5. Implementation Challenges

- Setting up opening balances and the PCN chart correctly
- Defining VAT codes correctly (especially 3% vs. 17% on food and drinks)
- Linking or importing daily till data; card settlements in transit (517)
- Limited time and technical knowledge; resistance to change

#### 6. Training and Support

- Initial training on daily entries, VAT codes and bank reconciliation (vendor or accountant)
- Written procedures for month-end and the monthly VAT return (due by the 15th of the following month)
- Ongoing support contract and periodic review by her accountant

---

### Case 7-2: eCDF Filing Problems

**Solution:**

#### 1. Possible Causes

- VAT codes mapped to the wrong eCDF boxes, or missing codes for some rates
- Transactions posted without VAT codes, or with the wrong rate
- Period mismatch (invoices dated in one quarter, booked in another)
- Software lacks a Luxembourg eCDF export (file format/XML schema not supported)
- Manual entries on the VAT accounts (461411/421611) that bypass VAT codes
- Wrong matricule/VAT number or form version, causing rejection

#### 2. Verifying Data Before Filing

- Reconcile the VAT report by rate to the balances of 461411 (output VAT) and 421611 (input VAT)
- Recompute VAT on taxable turnover for each rate (17%, 14%, 8%, 3%)
- Check that taxable turnover agrees with revenue accounts (70x) for the quarter
- Review unusual items: EU acquisitions, reverse-charge services, exempt sales
- Compare with the previous quarter and investigate large changes

#### 3. Resolving the Issues

1. Correct the VAT-code mapping and repost mis-coded transactions
2. Reconcile and close the quarter; book the settlement to 461412 (VAT payable to AED) or 421612 (VAT credit)
3. Obtain an eCDF-compatible export (software update, module, or file converter) or enter the return manually on eCDF
4. Read the rejection message, correct identification data/form version, resubmit
5. If an earlier return was wrong, file a corrective return

#### 4. Ensuring Accurate Filing in Future

- Written quarterly closing checklist; returns are due by the 15th of the month after the quarter (quarterly regime applies to annual turnover between €112,000 and €620,000)
- Reconcile VAT accounts monthly, not only at quarter end
- Lock closed periods in the software
- Review by a second person or the accountant before submission

#### 5. Should the Business Change Software?

Yes, if the current software cannot produce a Luxembourg eCDF file or map Luxembourg VAT boxes reliably: the cost of a Luxembourg-localised package (e.g., Sage BOB) is usually lower than repeated corrections, penalties and adviser time. No, if the problems are only set-up errors that can be corrected and the vendor supports eCDF.

#### 6. Professional Help

- A fiduciary/chartered accountant (expert-comptable) to review VAT set-up and file returns
- The software vendor or implementation partner for eCDF export
- AED guidance and the eCDF helpdesk for technical filing issues

---

*End of Chapter 7 Solutions*
