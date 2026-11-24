# Solutions Manual - Chapter 9: Accounting for Receivables

## Questions - Solutions

### Question 1: Revenue Recognition Principle

**Answer:**

**Revenue Recognition Principle:**
Revenue should be recognized (recorded) when it is earned, regardless of when cash is received.

**How It Applies to Credit Sales:**

**Credit Sale Transaction:**
- Revenue is recognized when goods are delivered or services are performed
- Accounts Receivable is created (asset)
- Cash will be received later

**Example:**
- Business sells €1,000 of goods on credit (excluding VAT), VAT 17%
- Revenue recognized immediately: €1,000
- Accounts Receivable created: €1,170 (€1,000 + €170 VAT)
- Cash received later when customer pays

**Journal Entry:**
```
4011   Accounts Receivable        €1,170
7061   Sales Revenue                        €1,000
461411 VAT Payable                            €170
To record credit sale
```

**Key Points:**
- Revenue recognized when earned (sale made)
- Not when cash received
- Accounts Receivable represents future cash
- Matches revenue with period earned

---

### Question 2: Direct Write-Off vs. Allowance Method

**Answer:**

**Direct Write-Off Method:**
- Records bad debt expense only when account is determined uncollectible
- No allowance account used
- Simple but not preferred

**Allowance Method:**
- Estimates bad debts in advance
- Uses Allowance for Doubtful Accounts (contra-asset)
- Matches bad debt expense with related sales
- Preferred method

**Why Allowance Method is Preferred:**

1. **Matching Principle:**
   - Bad debt expense matched with sales in same period
   - More accurate income measurement

2. **Accurate Financial Statements:**
   - Accounts Receivable shown at estimated collectible amount
   - More realistic asset valuation

3. **GAAP/PCN Compliance:**
   - Required by accounting standards
   - Required in Luxembourg (PCN)

4. **Better Decision-Making:**
   - More accurate financial information
   - Better period comparisons

**Example:**

**Direct Write-Off:**
- 2024: Sales €100,000, no bad debt expense
- 2025: Write off €2,000, bad debt expense €2,000
- Problem: Expense in wrong period

**Allowance Method:**
- 2024: Sales €100,000, bad debt expense €2,000 (estimated)
- 2025: Write off €2,000, no additional expense
- Better: Expense matched with sales

---

### Question 3: Balance Sheet Approach (Aging Method)

**Answer:**

**Definition:**
The aging method (balance sheet approach) estimates bad debts based on the age of accounts receivable. Older accounts are less likely to be collected.

**How It's Calculated:**

1. **Age Receivables:**
   - Group by how long outstanding
   - Current, 1-30 days, 31-60 days, 60+ days

2. **Apply Percentages:**
   - Different uncollectible percentage for each age group
   - Older accounts = higher percentage

3. **Calculate Total:**
   - Multiply each group by its percentage
   - Sum to get total estimated uncollectible

4. **Adjust Allowance:**
   - Compare to current allowance balance
   - Adjust to required amount

**Example:**

**Aging Schedule:**
- Current: €10,000 × 1% = €100
- 1-30 days: €5,000 × 3% = €150
- 31-60 days: €3,000 × 10% = €300
- Over 60 days: €2,000 × 25% = €500
- **Total Estimated Uncollectible: €1,050**

**Adjusting Entry:**
- Required allowance: €1,050
- Current balance: €300
- Adjustment needed: €750
```
6351   Bad Debt Expense            €750
4019   Allowance for Doubtful Accounts          €750
To adjust allowance to required amount
```

---

### Question 4: Accounts Receivable Turnover

**Answer:**

**Definition:**
Accounts Receivable Turnover measures how many times receivables are collected during a period.

**Formula:**
- Accounts Receivable Turnover = Net Credit Sales ÷ Average Accounts Receivable
- Average Accounts Receivable = (Beginning + Ending) ÷ 2

**What It Indicates:**

**High Turnover:**
- Receivables collected quickly
- Good receivables management
- Less risk of uncollectible accounts

**Low Turnover:**
- Receivables collected slowly
- Poor receivables management
- Higher risk of uncollectible accounts

**Example:**
- Net Credit Sales: €120,000
- Beginning Receivables: €15,000
- Ending Receivables: €25,000
- Average: (€15,000 + €25,000) ÷ 2 = €20,000
- Turnover: €120,000 ÷ €20,000 = 6 times

**Average Collection Period:**
- Average Collection Period = 365 ÷ Turnover
- 365 ÷ 6 = 60.8 days
- Indicates average time to collect receivables

---

### Question 5: Notes Receivable vs. Accounts Receivable

**Answer:**

**Accounts Receivable:**
- Informal credit arrangement
- No written promise to pay
- Usually short-term (30-90 days)
- No interest (usually)
- Common for regular customers

**Notes Receivable:**
- Formal written promise to pay
- Promissory note signed
- Specific payment terms
- Usually includes interest
- Longer payment terms

**When to Use Notes Receivable:**

1. **Longer Payment Terms:**
   - Payment over several months
   - Formal agreement needed

2. **Interest Required:**
   - Business wants to earn interest
   - Longer payment period justifies interest

3. **Formal Agreement:**
   - Need legal documentation
   - Better collection rights

4. **Large Amounts:**
   - Significant amounts owed
   - Formal documentation important

**Example:**
- Customer owes €10,000
- Needs 90 days to pay
- Agrees to 6% interest
- Signs promissory note
- Recorded as Notes Receivable

---

### Question 6: VAT on Uncollectible Accounts

**Answer:**

**VAT Handling:**

**When Account Becomes Uncollectible:**
- VAT may be recoverable
- Must follow Luxembourg VAT rules
- Proper documentation required

**Process:**

1. **Write Off Account:**
   - Charge the net amount against the allowance (or to 6451 if no allowance exists)
   - Reduce Accounts Receivable by the gross amount
   - Regularise the output VAT (Debit 461411)

2. **VAT Recovery:**
   - If VAT was paid on sale, may recover VAT
   - Must have proper documentation
   - Follow Luxembourg VAT rules

3. **Documentation Required:**
   - Proof account is uncollectible
   - Collection efforts documented
   - Legal action if applicable
   - VAT return adjustment

**Journal Entries:**

**Write Off:**
```
4019   Allowance for Doubtful Accounts €1,000
4011   Accounts Receivable                        €1,000
To write off the net amount against the allowance
```

**VAT Recovery (if applicable):**
```
461411 VAT Payable                  €170
4011   Accounts Receivable                          €170
To regularise the output VAT on the irrecoverable account
```

**Impact on VAT Return:**
- Reduce VAT Payable
- Adjust VAT return
- Document adjustment
- Retain documentation

---

### Question 7: PCN Account Classifications

**Answer:**

**PCN Class 4: Third-Party Accounts (Tiers)**

**Receivables Accounts:**
- 4011: Customers / Accounts Receivable (control account)
- 40111, 40112, …: Individual customer accounts (own sub-accounts below 4011)
- 4012: Customers – Notes Receivable
- 4013: Doubtful customers
- 4019: Value adjustments (allowance for doubtful accounts)
- 42: Other receivables (e.g., 4211 staff advances, 4218 sundry receivables such as interest receivable)

**Customer Account Management:**

1. **General Ledger:**
   - 4011: Accounts Receivable (control account)
   - Shows total receivables

2. **Subsidiary Ledger:**
   - 40111, 40112, etc.: Individual customers
   - Shows balance per customer
   - Supports control account

3. **Reconciliation:**
   - Subsidiary totals = Control account
   - Must reconcile regularly
   - Verify accuracy

**Example:**
- Customer A: 40111
- Customer B: 40112
- Customer C: 40113
- Total in subsidiary = 4011 control account

---

### Question 8: Improving Receivables Management

**Answer:**

**Strategies to Improve:**

1. **Credit Policies:**
   - Establish clear credit terms
   - Check customer creditworthiness
   - Set credit limits
   - Enforce terms

2. **Collection Procedures:**
   - Send invoices promptly
   - Follow up on overdue accounts
   - Offer early payment discounts
   - Charge late fees

3. **Monitoring:**
   - Track aging of receivables
   - Monitor collection period
   - Identify problem accounts
   - Regular review

4. **Incentives:**
   - Early payment discounts
   - Reward prompt payment
   - Penalize late payment

**Reducing Average Collection Period:**

1. **Faster Invoicing:**
   - Invoice immediately
   - Electronic invoicing
   - Clear payment terms

2. **Better Collection:**
   - Follow up promptly
   - Regular reminders
   - Escalate when needed

3. **Payment Options:**
   - Multiple payment methods
   - Easy payment process
   - Online payment options

4. **Credit Management:**
   - Better credit screening
   - Limit credit to risky customers
   - Require deposits

---

### Question 9: Percentage of Completion Method

**Answer:**

**Definition:**
Percentage of completion method recognizes revenue and expenses proportionally as a long-term project progresses.

**When Used:**
- Long-term projects (construction, consulting)
- Project spans multiple periods
- Progress can be measured
- Reliable cost estimates

**How It Works:**
1. Estimate total project cost
2. Track costs incurred
3. Calculate percentage complete
4. Recognize revenue proportionally

**Example:**
- Contract: €100,000
- Total estimated cost: €80,000
- Costs incurred: €40,000
- Percentage complete: €40,000 ÷ €80,000 = 50%
- Revenue recognized: €100,000 × 50% = €50,000

---

### Question 10: Other Types of Receivables

**Answer:**

**Other Receivables:**

1. **Notes Receivable:**
   - Formal promissory notes
   - Includes interest
   - Longer terms

2. **Interest Receivable:**
   - Interest earned but not received
   - Accrued interest
   - Current asset

3. **Employee Advances:**
   - Money advanced to employees
   - Recovered from salary
   - Current asset

4. **Tax Refunds Receivable:**
   - Expected tax refunds
   - From tax authorities
   - Current asset

**Accounting:**
- Recorded as assets
- Classified as current or noncurrent
- Valued at expected collectible amount
- Shown on balance sheet

---

## Problems Set A - Solutions

### Problem A-1: Recording Credit Sales

**Solution:**

**a) Credit sale €2,000 (excluding VAT), VAT 17%, to Customer A**
```
4011   Accounts Receivable        €2,340
7061   Sales Revenue                        €2,000
461411 VAT Payable                            €340
To record credit sale to Customer A
```

**b) Credit sale €1,500 (excluding VAT), VAT 3%, to Customer B**
```
4011   Accounts Receivable        €1,545
7061   Sales Revenue                        €1,500
461411 VAT Payable                              €45
To record credit sale to Customer B (3% VAT)
```

**c) Collection of €2,340 from Customer A**
```
5131   Cash                       €2,340
4011   Accounts Receivable                    €2,340
To record collection from Customer A
```

---

### Problem A-2: Allowance Method - Income Statement Approach

**Solution:**

**Given:**
- Credit Sales: €100,000
- Estimated Bad Debts: 2% of credit sales
- Current Allowance: €500 credit

**Calculation:**
- Bad Debt Expense: €100,000 × 2% = €2,000

**Adjusting Entry:**
```
6351   Bad Debt Expense            €2,000
4019   Allowance for Doubtful Accounts          €2,000
To record estimated bad debts (2% of credit sales)
```

**Note:** Income statement approach ignores current allowance balance. New allowance balance will be €500 + €2,000 = €2,500.

---

### Problem A-3: Allowance Method - Balance Sheet Approach

**Solution:**

**Aging Schedule:**

| Age Category | Amount | % Uncollectible | Estimated Uncollectible |
|--------------|--------|-----------------|------------------------|
| Current | €10,000 | 1% | €100 |
| 1-30 days | €5,000 | 3% | €150 |
| 31-60 days | €3,000 | 10% | €300 |
| Over 60 days | €2,000 | 25% | €500 |
| **Total** | **€20,000** | | **€1,050** |

**Required Allowance: €1,050**
**Current Allowance: €300 credit**
**Adjustment Needed: €1,050 - €300 = €750**

**Adjusting Entry:**
```
6351   Bad Debt Expense            €750
4019   Allowance for Doubtful Accounts          €750
To adjust allowance to required amount (€1,050 - €300 = €750)
```

**After Adjustment:**
- Allowance balance: €300 + €750 = €1,050 ✓

---

### Problem A-4: Accounts Receivable Turnover

**Solution:**

**Given:**
- Net Credit Sales: €120,000
- Beginning Receivables: €15,000
- Ending Receivables: €25,000

**Calculation:**

**Average Accounts Receivable:**
- Average = (Beginning + Ending) ÷ 2
- Average = (€15,000 + €25,000) ÷ 2
- **Average = €20,000**

**Accounts Receivable Turnover:**
- Turnover = Net Credit Sales ÷ Average Accounts Receivable
- Turnover = €120,000 ÷ €20,000
- **Turnover = 6 times**

**Average Collection Period:**
- Collection Period = 365 ÷ Turnover
- Collection Period = 365 ÷ 6
- **Collection Period = 60.8 days**

**Interpretation:**
- Receivables collected 6 times per year
- Average collection period: 60.8 days
- Indicates moderate collection efficiency
- Could be improved

---

### Problem A-5: Writing Off and Recovering Accounts

**Solution:**

**Write Off:**
```
4019   Allowance for Doubtful Accounts €800
4011   Accounts Receivable                        €800
To write off Customer C's uncollectible account
```

**Recovery (Partial Payment):**
```
4011   Accounts Receivable          €500
4019   Allowance for Doubtful Accounts            €500
To reinstate account for recovery

5131   Cash                         €500
4011   Accounts Receivable                      €500
To record collection of recovered account
```

**Alternative (Direct Recording):**
```
5131   Cash                         €500
4019   Allowance for Doubtful Accounts            €500
To record collection of previously written-off account
```

**Note:** Both methods are acceptable. The first method reinstates the account, the second records directly to allowance.

---

## Problems Set B - Solutions

### Problem B-1: Complete Receivables Cycle

**Solution:**

**a) Record All Transactions:**

**1. Credit Sales:**
```
4011   Accounts Receivable        €58,500
7061   Sales Revenue                        €50,000
461411 VAT Payable                            €8,500
To record credit sales (€50,000 + 17% VAT = €58,500)
```

**2. Collections:**
```
5131   Cash                       €40,000
4011   Accounts Receivable                    €40,000
To record collections
```

**3. Write-offs:**
```
4019   Allowance for Doubtful Accounts €1,000
4011   Accounts Receivable                        €1,000
To write off uncollectible accounts
```

**4. Recoveries:**
```
4011   Accounts Receivable          €200
4019   Allowance for Doubtful Accounts            €200
To reinstate recovered account

5131   Cash                         €200
4011   Accounts Receivable                      €200
To record collection of recovered account
```

**b) Ending Receivables:**

**Calculation:**
- Beginning: €0 (assumed)
- Add: Credit Sales: €58,500
- Less: Collections: €40,000
- Less: Write-offs: €1,000
- Add: Recoveries: €200
- Less: Collections on recoveries: €200
- **Ending Gross Receivables: €17,500**

**c) Bad Debt Estimation (Income Statement Approach):**
- Credit Sales: €50,000
- Estimated Bad Debts: €50,000 × 2% = €1,000

**d) Adjusting Entry:**
```
6351   Bad Debt Expense            €1,000
4019   Allowance for Doubtful Accounts          €1,000
To record estimated bad debts (2% of credit sales)
```

**e) Balance Sheet Presentation:**
```
Current Assets:
  Accounts Receivable                          €17,500
  Less: Allowance for Doubtful Accounts        (1,000)
                                              ───────
  Net Accounts Receivable                      €16,500
```

---

### Problem B-2: Aging Analysis and Allowance

**Solution:**

**Aging Analysis:**

| Customer | Amount | Age | Category | % | Estimated Uncollectible |
|----------|--------|-----|----------|---|------------------------|
| A | €5,000 | Current | Current | 2% | €100 |
| B | €3,000 | 30 days | 1-30 | 5% | €150 |
| C | €2,000 | 45 days | 31-60 | 15% | €300 |
| D | €1,000 | 90 days | 60+ | 30% | €300 |
| **Total** | **€11,000** | | | | **€850** |

**a) Estimated Uncollectible: €850**

**b) Adjusting Entry:**
- Required Allowance: €850
- Current Allowance: €400
- Adjustment: €850 - €400 = €450
```
6351   Bad Debt Expense            €450
4019   Allowance for Doubtful Accounts          €450
To adjust allowance to required amount
```

**c) Balance Sheet Presentation:**
```
Current Assets:
  Accounts Receivable                          €11,000
  Less: Allowance for Doubtful Accounts          (850)
                                              ───────
  Net Accounts Receivable                      €10,150
```

---

### Problem B-3: Notes Receivable

**Solution:**

**Given:**
- Note: €10,000
- Interest: 6% annual
- Term: 90 days
- Date: November 1

**a) Record Note (November 1):**
```
4012   Notes Receivable           €10,000
4011   Accounts Receivable                    €10,000
To record note receivable from customer
```

**b) Accrue Interest (December 31):**
- Days: November 1 to December 31 = 60 days
- Interest: €10,000 × 6% × (60/365) = €98.63
```
4218   Interest Receivable          €98.63
7552   Interest Income                           €98.63
To accrue interest for 60 days
```

**c) Record Collection (January 30):**
- Total days: 90 days
- Total interest: €10,000 × 6% × (90/365) = €147.95
- Interest already accrued: €98.63
- Additional interest: €147.95 - €98.63 = €49.32
```
5131   Cash                       €10,147.95
4012   Notes Receivable                        €10,000
4218   Interest Receivable                      €98.63
7552   Interest Income                           €49.32
To record collection of note at maturity
```

**d) Total Interest:**
- **Total Interest: €147.95**

---

### Problem B-4: VAT on Bad Debts

**Solution:**

**Given:**
- Account: €1,170 (€1,000 + €170 VAT)
- VAT is recoverable

**a) Write Off:**
```
4019   Allowance for Doubtful Accounts €1,000
4011   Accounts Receivable                        €1,000
To write off the net amount against the allowance
```

**b) VAT Recovery:**
```
461411 VAT Payable                  €170
4011   Accounts Receivable                          €170
To regularise the output VAT on the irrecoverable account
```

**c) Impact on VAT Return:**
- Reduce VAT Payable by €170
- Adjust VAT return
- Document the adjustment
- Retain documentation for audit

**Net Effect:**
- Allowance used (net amount): €1,000 (no new expense; the loss was already expensed via 6351 when the allowance was built)
- Output VAT regularised: €170
- Accounts Receivable reduced: €1,000 + €170 = €1,170 ✓
- Combined entry: Debit 4019 €1,000, Debit 461411 €170, Credit 4011 €1,170 (debits €1,170 = credits €1,170)
- Without an allowance (direct write-off): Debit 6451 Bad debts written off €1,000, Debit 461411 €170, Credit 4011 €1,170

---

## Comprehensive Problem - Solution

### Comprehensive Problem 9: Complete Receivables Management

**Solution:**

#### 1. Record All Transactions

**a) Credit Sales:**
```
4011   Accounts Receivable        €234,000
7061   Sales Revenue                        €200,000
461411 VAT Payable                           €34,000
To record credit sales (€200,000 + 17% VAT = €234,000)
```

**b) Collections:**
```
5131   Cash                       €211,500
4011   Accounts Receivable                    €211,500
To record collections
```

**c) Write-offs:**
```
4019   Allowance for Doubtful Accounts €2,500
4011   Accounts Receivable                        €2,500
To write off uncollectible accounts
```

**d) Recoveries:**
```
4011   Accounts Receivable          €500
4019   Allowance for Doubtful Accounts            €500
To reinstate recovered account

5131   Cash                         €500
4011   Accounts Receivable                      €500
To record collection of recovered account
```

#### 2. Calculate Ending Receivables

**a) Gross Receivables:**
- Beginning: €20,000
- Add: Credit Sales: €234,000
- Less: Collections: €211,500
- Less: Write-offs: €2,500
- Add: Recoveries: €500
- Less: Collections on recoveries: €500
- **Gross Receivables: €20,000 + €234,000 − €211,500 − €2,500 + €500 − €500 = €40,000**

**Verification from Aging:**
- Current: €25,000
- 1-30 days: €8,000
- 31-60 days: €4,000
- Over 60 days: €3,000
- **Total: €40,000** ✓ (agrees with the roll-forward)

**b) Required Allowance (Aging Method):**

| Age Category | Amount | % | Estimated Uncollectible |
|--------------|--------|---|------------------------|
| Current | €25,000 | 2% | €500 |
| 1-30 days | €8,000 | 5% | €400 |
| 31-60 days | €4,000 | 15% | €600 |
| Over 60 days | €3,000 | 30% | €900 |
| **Total** | **€40,000** | | **€2,400** |

**Required Allowance: €2,400**

**c) Current Allowance Balance:**
- Beginning: €600 credit
- Less: Write-offs: €2,500
- Add: Recoveries: €500
- **Current Balance: €600 - €2,500 + €500 = €1,400 debit**

**d) Required Adjustment:**
- Required: €2,400 credit
- Current: €1,400 debit
- Adjustment: €2,400 + €1,400 = €3,800 credit
```
6351   Bad Debt Expense            €3,800
4019   Allowance for Doubtful Accounts          €3,800
To adjust allowance to required amount
```

#### 3. Adjusting Entry

**Adjusting Entry:**
```
6351   Bad Debt Expense            €3,800
4019   Allowance for Doubtful Accounts          €3,800
To adjust allowance to required amount (€2,400)
```

**Verification:**
- Beginning: €600
- Write-offs: -€2,500
- Recoveries: +€500
- Adjustment: +€3,800
- **Ending: €2,400** ✓

#### 4. Financial Statement Presentation

**Balance Sheet:**
```
Current Assets:
  Accounts Receivable                          €40,000
  Less: Allowance for Doubtful Accounts        (2,400)
                                              ───────
  Net Accounts Receivable                      €37,600
```

**Income Statement:**
```
Operating Expenses:
  Bad Debt Expense                             €3,800
```

#### 5. Receivables Management Analysis

**a) Accounts Receivable Turnover:**
- Net Credit Sales: €200,000
- Average Receivables: (€20,000 + €40,000) ÷ 2 = €30,000
- Turnover: €200,000 ÷ €30,000 = **6.67 times**

**b) Average Collection Period:**
- Collection Period: 365 ÷ 6.67 = **54.7 days**

**c) Interpretation:**
- Receivables collected 6.67 times per year
- Average collection period: 54.7 days
- Indicates good collection efficiency
- Could be improved to 30-45 days

**d) Recommendations:**
1. Improve credit screening
2. Faster invoicing
3. Better collection follow-up
4. Offer early payment discounts
5. Monitor aging regularly

#### 6. Luxembourg Compliance

**a) PCN Account Classifications:**
- 4011: Accounts Receivable (Class 4: Third-Party Accounts)
- 4019: Allowance for Doubtful Accounts (Class 4: Contra-Asset)
- 6351: Bad Debt Expense (value adjustments on receivables) (Class 6: Expenses)
- 7061: Sales Revenue (Class 7: Revenue)
- 461411: VAT Payable (Class 4: Third-Party Accounts)

**b) VAT Handling on Bad Debts:**
- VAT may be recoverable with proper documentation
- Must follow Luxembourg VAT rules
- Adjust VAT return
- Retain documentation

**c) Documentation Requirements:**
- Proof of uncollectibility
- Collection efforts documented
- Legal action if applicable
- VAT adjustment documentation

**d) Tax Implications:**
- Bad debt provisions may be tax-deductible for CIT/MBT if they are reasonable, supportable and documented; they may be adjusted for tax purposes
- Recoveries of amounts written off increase taxable profit in the year received
- The output VAT reduction is reported when the account is written off, with proper documentation

---

## Cases - Solutions

### Case 9-1: Managing Credit Risk

**Solution:**

#### 1. Credit Policies

- Credit application and check (RCS extract, references, payment history) before granting credit
- Written terms on every invoice (e.g., payment within 30 days) and a credit limit per customer
- Stop further credit when an account passes 60 days or exceeds its limit
- Late-payment interest as allowed by Luxembourg law on payment delays in commercial transactions

#### 2. Estimating Bad Debts

- **Allowance method** (required for matching and prudence), using the **aging (balance sheet) approach**: with 20 corporate customers and some at 60–90 days, an aging schedule shows the risk per customer
- The income statement approach (% of €15,000 monthly credit sales) can be used for interim months, with the aging review at year end
- Entry: Debit 6351 Bad Debt Expense / Credit 4019 Allowance for Doubtful Accounts

#### 3. The 120-Day Overdue Account (€2,000)

- Contact the customer, send a formal reminder and then a formal notice (mise en demeure); suspend further credit
- Consider a payment plan or collection agency/legal action (e.g., order for payment procedure)
- Transfer to doubtful customers (4013) and provide for it in full or in large part via 4019
- Write it off (Debit 4019 / Credit 4011) only when it is clearly uncollectible

#### 4. Improving Collections

- Invoice immediately after each event; offer SEPA direct debit or card payment
- Systematic reminders at 15, 30 and 45 days past due
- Monthly aging review; follow up the largest and oldest balances first
- Early payment discount if cost-effective

#### 5. Internal Controls

- Separate credit approval, invoicing, cash receipts and recording
- Customer sub-accounts (40111, 40112, …) reconciled monthly to control account 4011
- Write-offs approved by Marie (owner), documented
- Monthly customer statements

#### 6. VAT on Potentially Uncollectible Accounts

- Output VAT is due when the invoice is issued, even if the customer has not paid
- A **provision** (4019) does not reduce VAT; the output VAT is recovered only when the account is written off, with proper documentation (reminders, legal action, insolvency proceedings)
- Example for the €2,000 account if it includes 3% VAT (€1,941.75 + €58.25): on write-off, the €58.25 output VAT is recovered (Debit 461411) and the net amount is charged against the allowance
- If the customer later pays, the VAT becomes due again

---

### Case 9-2: Earnings Management Concerns

**Solution:**

#### 1. Is It Ethical?

No. With unchanged collection experience, cutting the estimate from 3% to 1% has no factual basis; it is deliberate manipulation of an accounting estimate to meet a profit target.

#### 2. Consequences of Underestimating Bad Debts

- Receivables and profit are overstated; later periods must absorb larger write-offs
- Misleads owners, banks and tax authorities; may breach loan covenants
- Higher tax paid on fictitious profit; loss of credibility once discovered

#### 3. Effect on Financial Statements

Example with €500,000 credit sales: 3% = €15,000 expense; 1% = €5,000. Profit and net receivables are overstated by €10,000 (before tax), and equity is overstated by the same amount net of tax.

#### 4. What Auditors Would Look For

- Comparison of the estimate with historical write-off rates and the aging schedule
- Subsequent collections after year end
- Unexplained changes in estimates near profit targets; documentation of the rationale
- Management representation and internal-control weaknesses

#### 5. Legal and Regulatory Implications in Luxembourg

- Annual accounts must give a true and fair view (Law of 19 December 2002); prudence requires providing for foreseeable losses
- Managers (gérants) who knowingly present inaccurate accounts can incur civil and criminal liability (Law of 10 August 1915 on commercial companies)
- Incorrect profits lead to incorrect tax returns; the statutory auditor/réviseur d'entreprises agréé (if required) must report material misstatements

#### 6. What the Owner Should Do Instead

- Keep the estimate based on evidence (aging, history) and document it
- Improve real performance: tighter credit, faster collections, cost control
- Explain shortfalls transparently to stakeholders
- Change the estimate only when experience genuinely changes, and disclose the change

---

*End of Chapter 9 Solutions*
