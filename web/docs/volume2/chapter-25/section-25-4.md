---
id: volume2-chapter-25-section-25-4
title: "25.4 Use Discounted Cash Flow Models to Make Capital Investment Decisions"
description: "As previously described, discounted payback accounts for time value of money. Useful for risk but still ignores late cash flows."
sidebar_position: 5
slug: /volume2/chapter-25/section-25-4
---

# 25.4 Use Discounted Cash Flow Models to Make Capital Investment Decisions

### Net Present Value (NPV)

**NPV** is the sum of present values of all cash inflows and outflows. It measures the value added by the project.

**Formula:**
**NPV = Σ [Ct ÷ (1 + r)^t] - C0**
- Ct = cash flow at time t
- r = discount rate
- C0 = initial investment

**Decision Rule:**
- NPV > 0: Accept project
- NPV < 0: Reject project

**Example:**
- Initial investment: €250,000
- Cash inflows: €70k, €80k, €90k, €100k, €110k
- Discount rate: 8%
- NPV = -250,000 + Σ (Ct / 1.08^t) = €36,670 (positive → accept)

### Internal Rate of Return (IRR)

**IRR** is the discount rate that makes NPV = 0.

**Decision Rule:**
- IRR > required rate of return: Accept
- IRR < required rate of return: Reject

**Example:**
- Use Excel IRR function or financial calculator

**Advantages:**
- Considers time value of money
- Provides rate of return

**Disadvantages:**
- Can have multiple IRRs (non-conventional cash flows)
- Assumes reinvestment at IRR (NPV assumes reinvestment at cost of capital)

### Profitability Index (PI)

**PI = PV of Future Cash Inflows ÷ Initial Investment**
- PI > 1: Accept
- Useful when capital rationing (relative measure)

### Discounted Payback

As previously described, discounted payback accounts for time value of money. Useful for risk but still ignores late cash flows.

### Comparing NPV vs. IRR

- NPV measures absolute value added
- IRR provides rate of return
- When projects are independent (not mutually exclusive), both methods typically agree
- When projects are mutually exclusive, rely on NPV as it measures actual value added

### Mutually Exclusive Projects

When choosing between mutually exclusive projects (only one can be selected), use NPV to select the project with highest value. IRR may be misleading if project sizes differ.

### Example: Mutually Exclusive

**Project A:**
- Initial: €200k
- NPV: €40k
- IRR: 16%

**Project B:**
- Initial: €500k
- NPV: €60k
- IRR: 14%

**Decision:** Choose Project B (higher NPV)

### Sensitivity Analysis

Vary assumptions (cash flows, discount rates, costs) to see impact on NPV and IRR.

### Scenario Analysis

Evaluate base, best, worst case scenarios. Supports risk assessment.

### Monte Carlo Simulation

Advanced technique to model uncertain variables and assess probability distribution of NPV.

### Luxembourg Compliance Note

Banks and investors in Luxembourg expect discounted cash flow analysis (NPV, IRR) for financing proposals. Projects supported by state aid (e.g., investment subsidies) require detailed cash flow forecasts and DCF analysis.

### Think It Through

Why might two projects with similar IRRs have different NPVs? Which measure better reflects shareholder value?

---
