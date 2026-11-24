# Solutions Manual - Chapter 8: Fraud, Internal Controls, and Cash

## Questions - Solutions

### Question 1: Fraud Triangle

**Answer:**

**The Fraud Triangle** consists of three factors that must be present for fraud to occur:

**1. Opportunity:**
- **Definition:** The ability to commit fraud without being caught
- **Examples:** Weak internal controls, lack of supervision, access to assets
- **How to Address:**
  - Implement strong internal controls
  - Separate duties
  - Regular audits and reviews
  - Limit access to assets
  - Monitor transactions

**2. Pressure (Motivation):**
- **Definition:** Financial or personal pressure that motivates fraud
- **Examples:** Financial difficulties, gambling debts, lifestyle expenses
- **How to Address:**
  - Employee assistance programs
  - Fair compensation
  - Open communication
  - Support for employees in need
  - Regular performance reviews

**3. Rationalization:**
- **Definition:** Justification for committing fraud
- **Examples:** "I deserve it," "I'll pay it back," "Everyone does it"
- **How to Address:**
  - Strong ethical culture
  - Clear policies and procedures
  - Training on ethics
  - "Tone at the top" - management sets example
  - Consequences for violations

**Prevention Strategy:**
- Address all three factors
- Strong controls reduce opportunity
- Support reduces pressure
- Ethics training reduces rationalization

---

### Question 2: Internal Controls

**Answer:**

**Definition:**
Internal controls are policies and procedures designed to:
- Prevent fraud and theft
- Ensure accurate financial records
- Promote operational efficiency
- Ensure compliance with laws and regulations
- Safeguard assets

**Three Types of Internal Controls:**

**1. Preventive Controls:**
- **Purpose:** Prevent errors and fraud before they occur
- **Examples:**
  - Separation of duties
  - Authorization requirements
  - Physical controls (locks, safes)
  - Access controls (passwords, keys)
  - Training and supervision

**2. Detective Controls:**
- **Purpose:** Detect errors and fraud after they occur
- **Examples:**
  - Bank reconciliation
  - Physical inventory counts
  - Internal audits
  - Review of reports
  - Exception reports

**3. Corrective Controls:**
- **Purpose:** Correct errors and prevent recurrence
- **Examples:**
  - Error correction procedures
  - Disciplinary actions
  - System improvements
  - Training updates
  - Policy revisions

**Example for Each Type:**
- **Preventive:** Requiring two signatures on checks over €1,000
- **Detective:** Monthly bank reconciliation to find discrepancies
- **Corrective:** Updating procedures after finding an error

---

### Question 3: Separation of Duties

**Answer:**

**Why Important:**
Separation of duties prevents fraud by ensuring no single person has complete control over a transaction from start to finish.

**How It Prevents Fraud:**
- One person cannot both commit fraud and cover it up
- Requires collusion (multiple people) to commit fraud
- Creates checks and balances
- Provides independent verification

**Example:**
**Without Separation of Duties:**
- Same person receives cash, records sale, and deposits cash
- Can steal cash and cover it up by not recording sale
- No one else sees the transaction

**With Separation of Duties:**
- Person A receives cash and records sale
- Person B counts cash and prepares deposit
- Person C makes deposit and reconciles bank
- If Person A steals cash, Person B or C will detect it

**Key Separations:**
- **Authorization:** Who approves transactions
- **Recording:** Who records transactions
- **Custody:** Who handles assets
- **Reconciliation:** Who verifies accuracy

**Luxembourg Application:**
- Even small businesses should separate duties as much as possible
- Owner can perform multiple roles but should have checks
- Use technology to create separation
- Regular reviews by independent party

---

### Question 4: Petty Cash

**Answer:**

**Purpose:**
Petty cash is a small amount of cash kept on hand for minor expenses that are impractical to pay by check.

**Establishing Petty Cash Fund:**

**Step 1: Determine Amount:**
- Based on typical small expenses
- Usually €100-€500 for small businesses
- Should cover 2-4 weeks of expenses

**Step 2: Establish Fund:**
```
516    Petty Cash                  €300
5131   Cash (Bank)                             €300
To establish petty cash fund
```

**Replenishing Petty Cash Fund:**

**When to Replenish:**
- When fund is low (typically when 75% used)
- At regular intervals (monthly)
- When requested by custodian

**Process:**
1. Custodian submits receipts and remaining cash
2. Total receipts + remaining cash should equal fund amount
3. Replenish to original amount
4. Record expenses

**Replenishment Entry:**
```
6185   Office Supplies Expense     €45
6153   Postage Expense              €25
6152   Travel Expense (taxi)        €30
6188   Miscellaneous Expense (coffee) €15
5131   Cash (Bank)                             €115
To replenish petty cash fund
(€45 + €25 + €30 + €15 = €115 expenses, replenish to €300)
```

**Note:** Petty Cash account balance doesn't change (stays at €300), only Cash account changes.

---

### Question 5: Bank Reconciliation

**Answer:**

**Definition:**
A bank reconciliation is the process of comparing the bank statement balance to the company's cash records and identifying and explaining differences.

**Why Important:**
1. **Accuracy:** Ensures cash records are accurate
2. **Error Detection:** Finds recording errors
3. **Fraud Detection:** Identifies unauthorized transactions
4. **Completeness:** Ensures all transactions are recorded
5. **Compliance:** Required for accurate financial statements

**How Often:**
- **Recommended:** Monthly (at minimum)
- **Best Practice:** Weekly or daily for high-volume businesses
- **Required:** Before preparing financial statements
- **Luxembourg:** Should be done monthly for compliance

**Process:**
1. Compare bank statement to cash records
2. Identify differences
3. Adjust records for bank items (service charges, interest)
4. Adjust bank balance for timing differences (deposits in transit, outstanding checks)
5. Verify balances match

---

### Question 6: Bank Reconciliation Differences

**Answer:**

**Common Items Causing Differences:**

**1. Deposits in Transit:**
- **What:** Deposits made but not yet on bank statement
- **How Handled:** Add to bank balance
- **Example:** Deposit made on last day of month appears on next month's statement

**2. Outstanding Checks:**
- **What:** Checks written but not yet cleared by bank
- **How Handled:** Subtract from bank balance
- **Example:** Check written but recipient hasn't cashed it yet

**3. Bank Service Charges:**
- **What:** Fees charged by bank
- **How Handled:** Subtract from book balance, record as expense
- **Example:** Monthly maintenance fee, transaction fees

**4. Interest Earned:**
- **What:** Interest paid by bank on account
- **How Handled:** Add to book balance, record as revenue
- **Example:** Interest on checking account balance

**5. NSF (Non-Sufficient Funds) Checks:**
- **What:** Customer check that bounced
- **How Handled:** Subtract from book balance, reverse receivable
- **Example:** Customer check returned for insufficient funds

**6. Electronic Payments:**
- **What:** Automatic payments or transfers
- **How Handled:** Adjust book balance, record transaction
- **Example:** Automatic loan payment, SEPA transfer

**7. Errors:**
- **What:** Mistakes in recording or bank processing
- **How Handled:** Correct the error
- **Example:** Check recorded as €200 but bank shows €180

**Reconciliation Format:**
```
Bank Reconciliation
[Date]

Bank Statement Balance                    €X,XXX
Add: Deposits in Transit                      XXX
Less: Outstanding Checks                     (XXX)
                                          ───────
Adjusted Bank Balance                      €X,XXX

Book Balance                                €X,XXX
Add: Interest Earned                           XX
Less: Service Charges                         (XX)
Less: NSF Checks                              (XX)
                                          ───────
Adjusted Book Balance                       €X,XXX
```

---

### Question 7: Management Responsibilities

**Answer:**

**Management's Responsibilities:**

1. **Design and Implement Controls:**
   - Establish appropriate controls
   - Ensure controls are effective
   - Update controls as needed

2. **Monitor Controls:**
   - Regularly review control effectiveness
   - Test controls
   - Identify weaknesses
   - Take corrective action

3. **Set "Tone at the Top":**
   - Demonstrate ethical behavior
   - Enforce policies consistently
   - Lead by example
   - Communicate expectations

4. **Provide Resources:**
   - Allocate resources for controls
   - Provide training
   - Support control activities

5. **Respond to Issues:**
   - Investigate problems
   - Take corrective action
   - Improve controls
   - Disciplinary action when needed

**Why "Tone at the Top" is Important:**

1. **Sets Example:**
   - Employees follow management's lead
   - Ethical behavior is expected
   - Unethical behavior is not tolerated

2. **Creates Culture:**
   - Establishes ethical culture
   - Influences employee behavior
   - Reduces fraud risk

3. **Enforces Policies:**
   - Policies are taken seriously
   - Consistent enforcement
   - Consequences are real

4. **Builds Trust:**
   - Stakeholders trust the business
   - Employees trust management
   - Better business relationships

**Example:**
- If management ignores policies, employees will too
- If management is ethical, employees are more likely to be ethical
- Management's behavior sets the standard

---

### Question 8: SEPA

**Answer:**

**SEPA (Single Euro Payments Area):**
- European payment system for euro transactions
- Standardizes electronic payments across Europe
- Includes EU countries plus some others

**How It Affects Luxembourg:**

1. **Standardized Payments:**
   - Uniform payment processing
   - Faster payments
   - Lower costs

2. **SEPA Credit Transfer:**
   - Electronic transfers between accounts
   - Usually same-day or next-day
   - Standard format

3. **SEPA Direct Debit:**
   - Automatic payment collection
   - Recurring payments
   - Customer authorization required

**Benefits:**

1. **Efficiency:**
   - Faster payment processing
   - Automated processing
   - Reduced manual work

2. **Cost:**
   - Lower transaction costs
   - Reduced processing fees
   - More efficient

3. **Convenience:**
   - Easy to use
   - Standardized process
   - Works across Europe

4. **Integration:**
   - Integrates with accounting systems
   - Automatic recording
   - Better cash management

**Accounting Impact:**
- Payments recorded automatically
- Faster cash receipt
- Better cash flow management
- Reduced processing time

---

### Question 9: Fiscal Cash Registers

**Answer:**

**Requirements:**

**Who Must Use:**
- Restaurants and cafes
- Retail stores
- Businesses with significant cash sales
- Specific sectors as required by law

**Features Required:**

1. **Certification:**
   - Must be certified/approved
   - Meets technical standards
   - Tamper-proof

2. **Transaction Recording:**
   - Records all transactions
   - Cannot be deleted
   - Complete audit trail

3. **Receipt Printing:**
   - Issues receipts
   - Required information included
   - Customer copy and internal copy

4. **VAT Calculation:**
   - Calculates VAT automatically
   - Tracks VAT by rate
   - Supports VAT returns

5. **Daily Summaries:**
   - Generates daily reports
   - Total sales
   - VAT totals
   - Transaction counts

6. **Data Export:**
   - Exports data to accounting systems
   - Integration capability
   - FAIA export

7. **Security:**
   - Tamper-proof
   - Secure data storage
   - Access controls

**Compliance:**
- Mandatory for applicable businesses
- Regular inspections
- Penalties for non-compliance
- Must be maintained properly

---

### Question 10: Cash Shortage Investigation

**Answer:**

**Steps to Investigate:**

1. **Document the Shortage:**
   - Record exact amount
   - Note date and time
   - Document circumstances
   - Keep records

2. **Review Procedures:**
   - Check cash handling procedures
   - Review recent transactions
   - Check for errors
   - Review controls

3. **Investigate Possible Causes:**
   - Counting errors
   - Recording errors
   - Theft
   - Missing transactions
   - System errors

4. **Review Records:**
   - Check sales records
   - Review receipts
   - Compare to bank deposits
   - Check for patterns

5. **Interview Staff:**
   - Talk to employees
   - Ask about procedures
   - Check for issues
   - Document findings

**Steps to Prevent:**

1. **Improve Controls:**
   - Separate duties
   - Require receipts
   - Regular counts
   - Supervision

2. **Implement Procedures:**
   - Daily cash counts
   - Shift change procedures
   - Deposit procedures
   - Documentation requirements

3. **Monitor Regularly:**
   - Daily reconciliation
   - Review reports
   - Track patterns
   - Investigate discrepancies

4. **Train Staff:**
   - Cash handling procedures
   - Importance of accuracy
   - Consequences of errors
   - Fraud prevention

5. **Use Technology:**
   - Fiscal cash registers
   - Automated systems
   - Security cameras
   - Access controls

---

## Problems Set A - Solutions

### Problem A-1: Petty Cash

**Solution:**

**Given:**
- Fund amount: €300
- Expenses: Office supplies €45, Postage €25, Coffee €15, Taxi €30
- Remaining cash: €185

**a) Entry to Establish Fund:**
```
516    Petty Cash                  €300
5131   Cash (Bank)                             €300
To establish petty cash fund
```

**b) Entry to Replenish Fund:**

**Calculation:**
- Total expenses: €45 + €25 + €15 + €30 = €115
- Remaining cash: €185
- Total: €115 + €185 = €300 ✓ (fund is complete, no shortage)

**Replenishment Entry:**
```
6185   Office Supplies Expense     €45
6153   Postage Expense              €25
6152   Travel Expense (taxi)        €30
6188   Miscellaneous Expense (coffee) €15
5131   Cash (Bank)                             €115
To replenish petty cash fund
(Office supplies €45, Postage €25, Coffee €15, Taxi €30)
```

**Note:** Petty Cash account (516) remains at €300; only the bank account (5131) changes.

---

### Problem A-2: Bank Reconciliation

**Solution:**

**Bank Reconciliation:**

```
Bank Reconciliation
[Date]

Bank Statement Balance                    €5,000
Add: Deposits in Transit                     500
Less: Outstanding Checks                     (300)
                                          ───────
Adjusted Bank Balance                      €5,200

Book Balance                                €5,205
Add: Interest Earned                           10
Less: Service Charges                         (15)
                                          ───────
Adjusted Book Balance                       €5,200
```

**Check:** €5,000 + €500 − €300 = €5,200 = €5,205 + €10 − €15 ✓. The adjusted balances agree. Only the items known to the bank but not to the books are journalised:

**Journal Entries Needed:**
```
5131   Cash                          €10
7552   Interest Income                           €10
To record interest earned

6133   Bank Service Charges          €15
5131   Cash                                      €15
To record bank service charges
```

---

### Problem A-3: Internal Controls for Cash

**Solution:**

**Five Internal Controls:**

1. **Separation of Duties:**
   - Different people handle cash receipts, recording, and deposits
   - Prevents one person from controlling entire cash process
   - **How It Prevents:** Requires collusion to commit fraud

2. **Daily Cash Reconciliation:**
   - Count cash daily and compare to records
   - Investigate discrepancies immediately
   - **How It Prevents:** Detects errors and theft quickly

3. **Use of Fiscal Cash Registers:**
   - All sales recorded on register
   - Receipts issued for all sales
   - **How It Prevents:** Creates audit trail, prevents unrecorded sales

4. **Regular Bank Reconciliation:**
   - Reconcile bank account monthly
   - Compare deposits to sales records
   - **How It Prevents:** Detects missing deposits, unauthorized transactions

5. **Limited Cash on Hand:**
   - Daily deposits to bank
   - Don't keep excessive cash
   - **How It Prevents:** Reduces theft risk, limits potential loss

**Additional Controls:**
- Secure storage (safes, locked drawers)
- Access controls (limited keys, passwords)
- Supervision and monitoring
- Documentation requirements

---

### Problem A-4: Fraud Red Flags

**Answer:**

**Red Flags Indicating Fraud:**

1. **Cash Shortages:**
   - Regular shortages
   - Unexplained differences
   - Pattern of shortages

2. **Lifestyle Changes:**
   - Employee living beyond means
   - Unexplained wealth
   - Financial difficulties

3. **Behavioral Changes:**
   - Defensive when questioned
   - Working unusual hours
   - Reluctant to take vacation
   - Refuses to share duties

4. **Accounting Irregularities:**
   - Missing documents
   - Altered records
   - Unexplained transactions
   - Discrepancies in records

5. **Control Weaknesses:**
   - Lack of separation of duties
   - Missing documentation
   - No supervision
   - Weak controls

**Steps to Take:**

1. **Investigate:**
   - Review records
   - Check transactions
   - Look for patterns
   - Document findings

2. **Strengthen Controls:**
   - Implement missing controls
   - Separate duties
   - Increase supervision
   - Improve documentation

3. **Confront (if evidence):**
   - Present evidence
   - Allow explanation
   - Take appropriate action
   - Document everything

4. **Legal Action (if needed):**
   - Consult legal counsel
   - Report to authorities
   - Pursue recovery
   - Terminate employment

5. **Prevent Future:**
   - Improve controls
   - Train staff
   - Monitor regularly
   - Review procedures

---

### Problem A-5: Payment Methods

**Solution:**

**a) Receive €1,000 payment via SEPA transfer**
```
5131   Bank Account                €1,000
4011   Accounts Receivable                    €1,000
To record SEPA payment received
```

**b) Receive €500 payment via card (Cetrel)**
```
517    Card Settlements in Transit  €500
4011   Accounts Receivable                      €500
To record customer payment of €500 by card (Cetrel/Worldline); on settlement:
Dr 5131 Bank (net of fees), Dr 6133 Bank charges, Cr 517
```

**c) Pay €200 expense via bank transfer**
```
6188   Expense Account            €200
5131   Bank Account                            €200
To record bank transfer payment
```

**d) Pay €50 expense from petty cash**
```
6188   Expense Account             €50
516    Petty Cash                               €50
To record petty cash payment
```

**PCN Accounts:**
- 5131: Bank Account (Class 5)
- 517: Card settlements in transit (Class 5)
- 516: Petty Cash / cash on hand (Class 5)
- 4011: Accounts Receivable (Class 4)
- 6188: Expense Account (Class 6)

---

## Problems Set B - Solutions

### Problem B-1: Complete Bank Reconciliation

**Solution:**

**Bank Reconciliation:**

**Step 1: Adjust Bank Balance**
- Bank Statement Balance: €12,500
- Add: Deposit in transit (Nov 30): €1,500
- Less: Outstanding checks: €500 + €300 = €800
- **Adjusted Bank Balance: €13,200**

**Step 2: Adjust Book Balance**
- Book Balance: €13,290
- Add: Interest earned: €15
- Less: Service charge: €25
- Less: Electronic payment: €100
- Add: Error correction (check recorded as €200, bank paid €180, so the books over-recorded the payment by €20): €20
- **Adjusted Book Balance: €13,200**

**Reconciliation:**
```
Bank Reconciliation
November 30, 2024

Bank Statement Balance                    €12,500
Add: Deposits in Transit                     1,500
Less: Outstanding Checks (€500 + €300)        (800)
                                          ───────
Adjusted Bank Balance                      €13,200

Book Balance                                €13,290
Add: Interest Earned                           15
Add: Check Recording Error                     20
Less: Service Charges                         (25)
Less: Electronic Payment                     (100)
                                          ───────
Adjusted Book Balance                       €13,200
```

**Check:** €12,500 + €1,500 − €800 = €13,200 = €13,290 + €15 + €20 − €25 − €100 ✓. The adjusted balances agree.

**Journal Entries:**

**Interest Earned:**
```
5131   Cash                               €15
7552   Interest Income                               €15
To record interest earned
```

**Service Charge:**
```
6133   Bank Service Charges              €25
5131   Cash                                          €25
To record bank service charges
```

**Electronic Payment:**
```
6188   Other External Charges (or relevant expense)  €100
5131   Cash                                          €100
To record electronic payment
```

**Error Correction:**
```
5131   Cash                               €20
44111  Accounts Payable (or the expense originally debited)  €20
To correct check recorded as €200 instead of €180
```

---

### Problem B-2: Petty Cash with Shortage

**Solution:**

**Given:**
- Fund: €200
- Expenses: €150
- Remaining cash: €45
- Shortage: €5

**Calculation:**
- Expected remaining: €200 - €150 = €50
- Actual remaining: €45
- Shortage: €50 - €45 = €5

**Replenishment Entry:**
```
6188   Miscellaneous Expense            €150
6188   Cash Shortage Expense              €5
5131   Cash (or Bank)                              €155
To replenish petty cash fund
(€150 expenses + €5 shortage = €155 to restore fund to €200)
```

**Note:** Cash Shortage Expense is recorded to account for the missing €5. The fund is restored to €200.

---

### Problem B-3: Internal Control Design

**Solution:**

**Internal Controls for Luxembourg Restaurant:**

**Cash Controls:**

1. **Fiscal Cash Register:**
   - Use certified fiscal cash register
   - All sales recorded
   - Receipts issued
   - Daily summaries

2. **Daily Cash Reconciliation:**
   - Count cash at shift start and end
   - Compare to register totals
   - Investigate discrepancies
   - Document differences

3. **Separation of Duties:**
   - Server takes order and payment
   - Cashier handles cash
   - Manager reviews and deposits
   - Owner reviews reports

4. **Daily Deposits:**
   - Deposit cash daily
   - Don't keep excessive cash
   - Secure transportation
   - Document deposits

5. **Access Controls:**
   - Limited access to cash register
   - Password protection
   - Key control
   - Supervision

**Card Payment Controls:**

1. **Cetrel Integration:**
   - Integrated with POS system
   - Automatic recording
   - Daily settlement
   - Reconciliation

2. **Settlement Reconciliation:**
   - Reconcile card receipts to bank deposits
   - Account for processing fees
   - Verify amounts
   - Document differences

**Inventory Controls:**

1. **Physical Controls:**
   - Secure storage
   - Limited access
   - Regular counts
   - Documentation

2. **Recording:**
   - Record all purchases
   - Track usage
   - Monitor levels
   - Investigate variances

**Payment Controls:**

1. **Authorization:**
   - Require approval for payments
   - Two signatures for large amounts
   - Owner review

2. **Documentation:**
   - Require invoices
   - Verify before payment
   - Maintain records
   - Regular review

---

### Problem B-4: Payment Method Accounting

**Solution:**

**Transaction 1: Cash Payment**
```
516    Cash on Hand               €2,340
7061   Sales Revenue                        €2,000
461411 VAT Payable                            €340
To record cash sale (€2,000 + 17% VAT = €2,340)
```

**Transaction 2: Card Payment (Cetrel)**
```
517    Card Settlements in Transit  €3,510
7061   Sales Revenue                          €3,000
461411 VAT Payable                              €510
To record card sale (€3,000 + 17% VAT = €3,510)
Note: Settles to the bank account (5131) next day, net of fees (6133)
```

**Transaction 3: SEPA Transfer**
```
5131   Bank Account                €1,170
7061   Sales Revenue                          €1,000
461411 VAT Payable                              €170
To record SEPA payment (€1,000 + 17% VAT = €1,170)
```

**How Each Payment Method Affects Accounting:**

**Cash:**
- Immediate cash receipt
- Recorded in cash on hand (516) until deposited in the bank (5131)
- Available immediately
- Requires physical handling and security

**Card (Cetrel):**
- Recorded in a transit account (517) until settled to the bank (5131)
- Settles to bank account next day
- Processing fees deducted
- Requires reconciliation
- More secure than cash

**SEPA Transfer:**
- Electronic transfer to bank
- Usually same-day or next-day
- Recorded in Bank Account (5131)
- Automated processing
- Secure and efficient

**PCN Accounts:**
- 516: Cash on hand (Class 5)
- 517: Card settlements in transit (Class 5)
- 5131: Bank account (Class 5)
- 7061: Sales Revenue (Class 7)
- 461411: VAT Payable (Class 4)

---

## Comprehensive Problem - Solution

### Comprehensive Problem 8: Complete Cash Management and Controls

**Solution:**

#### 1. Internal Controls Design

**a) Cash Receipt Controls:**

1. **Fiscal Cash Register:**
   - Use certified fiscal cash register
   - All sales recorded
   - Receipts issued for all sales
   - Daily summaries generated

2. **Daily Cash Count:**
   - Count cash at opening and closing
   - Compare to register totals
   - Document discrepancies
   - Investigate differences

3. **Separation of Duties:**
   - Server takes order
   - Cashier handles payment
   - Manager reviews
   - Owner deposits

4. **Receipt Requirements:**
   - Issue receipt for all sales
   - Customer copy and internal copy
   - Numbered receipts
   - Track all receipts

**b) Cash Disbursement Controls:**

1. **Authorization:**
   - Require approval for payments
   - Owner approval for large amounts
   - Verify invoices before payment

2. **Documentation:**
   - Require invoices/receipts
   - Verify amounts
   - Maintain records
   - Regular review

3. **Payment Methods:**
   - Use checks for large amounts
   - Use bank transfers when possible
   - Limit cash payments
   - Document all payments

**c) Petty Cash Controls:**

1. **Establish Fund:**
   - Determine appropriate amount (€200-€300)
   - Assign custodian
   - Secure storage

2. **Procedures:**
   - Require receipts for all payments
   - Maintain petty cash log
   - Regular replenishment
   - Surprise counts

3. **Replenishment:**
   - Submit receipts and remaining cash
   - Verify totals
   - Replenish to original amount
   - Record expenses

**d) Bank Reconciliation Procedures:**

1. **Frequency:**
   - Monthly minimum
   - Weekly recommended
   - Before financial statements

2. **Process:**
   - Compare bank statement to records
   - Identify differences
   - Adjust for timing differences
   - Record bank items
   - Verify balances

3. **Documentation:**
   - Prepare reconciliation statement
   - Document all items
   - Keep records
   - Review with owner

**e) Payment Method Controls:**

1. **Cash:**
   - Daily counts
   - Daily deposits
   - Secure storage
   - Documentation

2. **Card (Cetrel):**
   - Automatic recording
   - Daily settlement reconciliation
   - Fee tracking
   - Integration with accounting

3. **Bank Transfers:**
   - Automatic recording
   - Reconciliation
   - Documentation
   - Verification

#### 2. Petty Cash Fund Establishment

**a) Appropriate Amount:**
- Based on estimated expenses: €200/month
- Recommend: €250-€300
- Covers 3-4 weeks of expenses

**b) Establishment Entry:**
```
516    Petty Cash                  €300
5131   Cash (Bank)                             €300
To establish petty cash fund
```

**c) Procedures:**

1. **Custodian:**
   - Assign responsible person
   - Train on procedures
   - Provide secure storage

2. **Payment Process:**
   - Require receipt for all payments
   - Record in petty cash log
   - Verify amount
   - Get approval if needed

3. **Replenishment:**
   - When fund is low (€50-€75 remaining)
   - Submit receipts and remaining cash
   - Verify totals
   - Replenish to €300

**d) Petty Cash Log Format:**

```
Petty Cash Log
Fund: €300

Date    Description    Receipt #    Amount    Balance
─────────────────────────────────────────────────────
Nov 1   Beginning                    €300      €300
Nov 5   Office Supplies  R-001       €45       €255
Nov 8   Postage         R-002       €25       €230
Nov 12  Coffee          R-003       €15       €215
Nov 18  Taxi            R-004       €30       €185
─────────────────────────────────────────────────────
```

#### 3. Bank Reconciliation

**Bank Reconciliation for November 30:**

**Given:**
- Beginning balance: €10,000
- Deposits: €45,000
- Checks: €35,000
- Service charges: €50
- Interest: €25

**Bank Statement Balance (calculated):**
- Beginning: €10,000
- Add: Deposits: €45,000
- Less: Checks: €35,000
- Less: Service charges: €50
- Add: Interest: €25
- **Bank Statement Balance: €19,975**

**Book Balance:**
- Need to calculate from transactions
- Assuming book balance needs adjustment

**Bank Reconciliation:**
```
Le Petit Bistro
Bank Reconciliation
November 30, 2024

Bank Statement Balance                    €19,975
Add: Deposits in Transit                      [X]
Less: Outstanding Checks                     [X]
                                          ───────
Adjusted Bank Balance                      €[X]

Book Balance                                €[X]
Add: Interest Earned                           25
Less: Service Charges                         (50)
                                          ───────
Adjusted Book Balance                       €[X]
```

**Journal Entries:**

**Interest Earned:**
```
5131   Cash                               €25
7552   Interest Income                               €25
To record interest earned
```

**Service Charges:**
```
6133   Bank Service Charges              €50
5131   Cash                                          €50
To record bank service charges
```

#### 4. Payment Method Analysis

Le Petit Bistro is a restaurant: meals and non-alcoholic drinks consumed on the premises are taxed at **3%**; alcoholic drinks served are taxed at **17%** and must be split out by the POS. For illustration, the daily averages are treated as meal sales excluding VAT.

**a) Cash Sales Recording (daily average €1,500):**
```
516    Cash on Hand (till)        €1,545
703    Restaurant Sales (meals)             €1,500
461411 VAT Payable (3%)                        €45
To record daily cash sales (€1,500 + 3% VAT = €1,545)
```

**b) Card Payments Recording (daily average €2,000):**
```
517    Card Settlements in Transit €2,060
703    Restaurant Sales (meals)             €2,000
461411 VAT Payable (3%)                        €60
To record daily card sales (€2,000 + 3% VAT = €2,060)
```

**c) Card Settlement:**
- Next day, card receipts settle to bank
- Processing fees deducted (1.5% × €2,060 = €30.90)
```
5131   Bank Account             €2,029.10
6133   Card Processing Fees        €30.90
517    Card Settlements in Transit          €2,060.00
To record card settlement (€2,060 − €30.90 fees)
```

**d) PCN Accounts:**
- 516: Cash on hand (till) (Class 5)
- 517: Card settlements in transit (Class 5)
- 5131: Bank account (Class 5)
- 703: Restaurant sales – meals (Class 7)
- 461411: VAT Payable (Class 4)
- 6133: Bank and card processing charges (Class 6)

#### 5. Fraud Prevention

**a) Controls to Prevent Cash Theft:**

1. **Separation of Duties:**
   - Different people handle different functions
   - No one person controls entire process

2. **Daily Reconciliation:**
   - Count cash daily
   - Compare to records
   - Investigate immediately

3. **Fiscal Cash Register:**
   - All sales recorded
   - Cannot be deleted
   - Complete audit trail

4. **Supervision:**
   - Manager oversight
   - Owner review
   - Regular monitoring

5. **Secure Storage:**
   - Safes, locked drawers
   - Limited access
   - Key control

**b) Detecting and Preventing Shortages:**

1. **Daily Counts:**
   - Count at shift changes
   - Compare to register
   - Document differences

2. **Pattern Analysis:**
   - Track shortages by day/employee
   - Identify patterns
   - Investigate trends

3. **Receipt Verification:**
   - Require receipts
   - Verify all sales recorded
   - Check for missing transactions

4. **Surprise Audits:**
   - Unannounced counts
   - Review procedures
   - Check compliance

**c) Procedures:**

1. **Opening Procedures:**
   - Count starting cash
   - Verify amount
   - Record in log

2. **During Day:**
   - Record all transactions
   - Issue receipts
   - Secure cash
   - Monitor balances

3. **Closing Procedures:**
   - Count ending cash
   - Compare to register
   - Investigate differences
   - Prepare deposit
   - Secure cash

**d) Handling Discrepancies:**

1. **Document:**
   - Record exact amount
   - Note circumstances
   - Keep records

2. **Investigate:**
   - Review transactions
   - Check for errors
   - Look for patterns

3. **Correct:**
   - Adjust records
   - Take corrective action
   - Improve procedures

4. **Prevent:**
   - Strengthen controls
   - Train staff
   - Monitor regularly

#### 6. Luxembourg Compliance

**a) Fiscal Cash Register Requirements:**

**Who Must Use:**
- Restaurants (like Le Petit Bistro)
- Retail stores
- Businesses with cash sales

**Requirements:**
- Must be certified
- Must record all transactions
- Must issue receipts
- Must be tamper-proof
- Must integrate with accounting

**b) Cash Handling Regulations:**

1. **Daily Procedures:**
   - Count cash daily
   - Reconcile to records
   - Document discrepancies

2. **Storage:**
   - Secure storage required
   - Limited access
   - Insurance recommended

3. **Deposits:**
   - Regular deposits
   - Don't keep excessive cash
   - Secure transportation

4. **Documentation:**
   - Maintain records
   - Keep receipts
   - Document procedures

**c) Required Documentation:**

1. **Daily Records:**
   - Cash count sheets
   - Reconciliation statements
   - Deposit slips
   - Receipts

2. **Monthly Records:**
   - Bank reconciliations
   - Cash reports
   - Variance analysis

3. **Retention:**
   - Keep for 10 years
   - Accessible for audit
   - Proper storage

**d) How Controls Support Compliance:**

1. **Accurate Records:**
   - Controls ensure accurate recording
   - Required for compliance

2. **Audit Trail:**
   - Controls create audit trail
   - Required for audits

3. **Fraud Prevention:**
   - Controls prevent fraud
   - Required for compliance

4. **Documentation:**
   - Controls require documentation
   - Required for compliance

---

## Cases - Solutions

### Case 8-1: The Missing Cash

**Solution:**

#### 1. Possible Causes

**Potential Causes:**

1. **Theft:**
   - Employee stealing cash
   - Customer theft
   - Unauthorized access

2. **Errors:**
   - Counting errors
   - Recording errors
   - Change errors

3. **Missing Transactions:**
   - Sales not recorded
   - Receipts not issued
   - Transactions missed

4. **Procedural Issues:**
   - No shift change count
   - No daily reconciliation
   - Poor documentation

5. **System Issues:**
   - Register errors
   - System malfunctions
   - Integration problems

#### 2. Missing Internal Controls

**Controls That Are Missing:**

1. **Daily Cash Reconciliation:**
   - No daily count
   - No comparison to records
   - No investigation

2. **Shift Change Procedures:**
   - No count at shift change
   - No verification
   - No documentation

3. **Receipt Requirements:**
   - Receipts not always issued
   - No tracking
   - Missing transactions

4. **Separation of Duties:**
   - Limited separation
   - Same person does multiple functions
   - No independent verification

5. **Supervision:**
   - Limited supervision
   - No regular review
   - No monitoring

#### 3. Investigation Steps

**Investigation Process:**

1. **Review Records:**
   - Check sales records
   - Review receipts
   - Compare to deposits
   - Look for patterns

2. **Analyze Patterns:**
   - Which days have shortages?
   - Which employees working?
   - What amounts?
   - Any trends?

3. **Check Procedures:**
   - Review cash handling
   - Check for errors
   - Verify transactions
   - Test controls

4. **Interview Staff:**
   - Talk to employees
   - Ask about procedures
   - Check for issues
   - Document findings

5. **Physical Review:**
   - Count cash
   - Verify register
   - Check security
   - Review access

#### 4. Prevention Procedures

**Procedures to Implement:**

1. **Daily Cash Count:**
   - Count at opening
   - Count at closing
   - Compare to register
   - Document differences

2. **Shift Change Procedures:**
   - Count cash at shift change
   - Verify amount
   - Document transfer
   - Both employees sign

3. **Receipt Requirements:**
   - Issue receipt for all sales
   - Track all receipts
   - Verify sales recorded
   - Check for missing

4. **Separation of Duties:**
   - Different people for different functions
   - Manager reviews
   - Owner deposits
   - Independent verification

5. **Regular Reconciliation:**
   - Daily reconciliation
   - Weekly review
   - Monthly analysis
   - Investigate all differences

#### 5. Employee Handling

**How to Handle:**

1. **Don't Accuse:**
   - Investigate first
   - Gather evidence
   - Avoid assumptions

2. **Implement Controls:**
   - Strengthen controls
   - Monitor closely
   - Document everything

3. **If Evidence Found:**
   - Present evidence
   - Allow explanation
   - Take appropriate action
   - Document everything

4. **If No Evidence:**
   - Improve controls
   - Monitor closely
   - Train staff
   - Review regularly

5. **Communication:**
   - Explain new procedures
   - Train on importance
   - Set expectations
   - Enforce consistently

#### 6. Luxembourg Regulations

**Relevant Regulations:**

1. **Fiscal Cash Register:**
   - Must use certified register
   - Must record all sales
   - Must issue receipts
   - Required for restaurants

2. **Cash Handling:**
   - Secure storage
   - Daily procedures
   - Documentation
   - Compliance required

3. **Anti-Money Laundering:**
   - Report large transactions
   - Verify customers
   - Maintain records
   - Comply with regulations

4. **Tax Compliance:**
   - Accurate records required
   - All sales must be recorded
   - VAT compliance
   - Tax reporting

---

### Case 8-2: Choosing Payment Methods

**Solution:**

#### 1. Recommended Payment Methods

**Recommendation: Accept All Common Methods**

1. **Cash:**
   - Customer preference
   - No processing fees
   - Immediate receipt
   - Requires security

2. **Card (Cetrel):**
   - Customer convenience
   - More secure
   - Processing fees (1-2%)
   - Automatic recording

3. **SEPA Transfer:**
   - For larger purchases
   - B2B transactions
   - Secure
   - Automated

**Why:**
- Customer convenience
- Competitive advantage
- Better cash flow
- Compliance support

#### 2. Impact Analysis

**a) Accounting Procedures:**

**Cash:**
- Record in Cash account
- Daily reconciliation
- Manual recording
- Physical handling

**Card:**
- Record in Card Receipts account
- Automatic recording
- Settlement reconciliation
- Fee tracking

**SEPA:**
- Record in Bank Account
- Automatic recording
- Electronic processing
- Easy reconciliation

**b) Cash Management:**

**Cash:**
- Immediate availability
- Requires security
- Daily deposits
- Physical handling

**Card:**
- Next-day settlement
- Processing fees
- Automatic deposit
- Less security risk

**SEPA:**
- Same-day or next-day
- No fees (usually)
- Automatic
- Secure

**c) Internal Controls:**

**Cash:**
- Daily counts
- Secure storage
- Documentation
- Supervision

**Card:**
- Automatic recording
- Settlement reconciliation
- Less manual handling
- Better audit trail

**SEPA:**
- Automatic recording
- Electronic trail
- Less manual handling
- Better control

**d) Compliance:**

**Cash:**
- Fiscal cash register
- Daily procedures
- Documentation
- Security

**Card:**
- Automatic VAT tracking
- Better records
- Easier compliance
- Integration

**SEPA:**
- Electronic records
- Automatic tracking
- Easy compliance
- Better audit trail

#### 3. Costs and Benefits

**Cash:**
- **Costs:** Security, handling, risk
- **Benefits:** No fees, immediate, customer preference

**Card:**
- **Costs:** Processing fees (1-2%), equipment
- **Benefits:** Convenience, security, automatic recording

**SEPA:**
- **Costs:** Minimal
- **Benefits:** Secure, automated, efficient

#### 4. Card Payment Integration

**Integration with Accounting:**

1. **POS System:**
   - Integrated with accounting
   - Automatic recording
   - VAT tracking
   - Sales recording

2. **Settlement:**
   - Daily settlement to bank
   - Automatic recording
   - Fee deduction
   - Reconciliation

3. **Accounting Entries:**
   - Sale: Debit Card Receipts, Credit Sales Revenue
   - Settlement: Debit Bank, Credit Card Receipts, Debit Fees

4. **VAT Handling:**
   - VAT tracked automatically
   - By rate (3%, 17%)
   - Ready for VAT return
   - eCDF integration

---

*End of Chapter 8 Solutions*

