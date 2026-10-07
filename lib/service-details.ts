export const serviceDetails: Record<
  string,
  {
    introduction: string;
    inputs: string;
    review: string;
    output: string;
    context: string;
    capabilities: string[][];
    connection: string;
  }
> = {
  "sales-accounting": {
    introduction:
      "Sales data often arrives in several forms: platform activity, bank deposits, invoices, and stock movements. We help connect those records so your team can work through the differences with context.",
    inputs: "Sales records, platform payouts, invoices, and bank feeds",
    review: "Fees, refunds, duplicates, and unmatched transactions",
    output: "Reconciled records and a clear list of items needing attention",
    context:
      "A bank deposit can differ from the sales recorded that day. Fees, refunds, and payout timing are part of the explanation. The workflow should preserve that explanation rather than hide the difference.",
    capabilities: [
      [
        "Platform and channel sales summaries",
        "Payout matching with fee and refund context",
        "Chargebacks and adjustments surfaced for review",
      ],
      [
        "Inventory movement connected to sales",
        "Cost valuation aligned with your selected method",
        "A consistent basis for reviewing product costs",
      ],
      [
        "Invoice and payment approval steps",
        "Outstanding balance visibility",
        "Payment controls shaped around your process",
      ],
      [
        "Bank transactions matched with the books",
        "Duplicate or unusual activity highlighted",
        "Unmatched items kept visible for follow-up",
      ],
    ],
    connection:
      "Sales reconciliation and commission calculations answer different questions. Connecting the source records can help finance understand the transaction behind a commission without confusing sales revenue with the amount owed to a salesperson.",
  },
  "financial-reporting": {
    introduction:
      "Reports are most useful when the people reviewing them understand where the numbers came from. We help organize performance, cash flow, and planning information into a reporting process your team can revisit.",
    inputs: "Accounting records, operating metrics, and planning assumptions",
    review:
      "Definitions, reporting periods, variances, and cash-flow assumptions",
    output: "Management reports, performance views, and forecast scenarios",
    context:
      "A profitable period and a comfortable cash position are not the same thing. Reporting should help you see performance alongside the timing of money coming in and going out.",
    capabilities: [
      [
        "Revenue and profitability indicators",
        "Performance by product or business segment",
        "Metric definitions agreed with your team",
      ],
      [
        "Financial statement and management templates",
        "Reports shaped around stakeholder needs",
        "A repeatable structure for each reporting period",
      ],
      [
        "Cash inflow and outflow forecasts",
        "Best- and worst-case assumptions",
        "Potential shortfalls brought into view",
      ],
      [
        "Actual results compared with plans",
        "Forecasts updated as information changes",
        "Assumptions visible beside projections",
      ],
    ],
    connection:
      "Sales Commission adds visibility into scheduled commission payouts and forecast scenarios. Broader financial reporting puts that view beside the other costs, cash flows, and performance measures leadership needs.",
  },
  "payroll-business": {
    introduction:
      "Payroll, onboarding, and document handling rely on several people completing the right work at the right time. We help make those handoffs, approvals, and source records easier to follow.",
    inputs: "Timesheets, employee records, and business documents",
    review: "Missing information, validations, approvals, and exceptions",
    output: "Organized payroll preparation and trackable operational handoffs",
    context:
      "A payroll cycle can stall because a timesheet is missing or an adjustment has no approval. The process should make ownership and the next action clear before the deadline arrives.",
    capabilities: [
      [
        "Timesheet collection and validation",
        "Payroll preparation and review handoffs",
        "Approved payroll information organized for processing",
      ],
      [
        "New-hire document collection",
        "Account setup and task assignments",
        "Training coordination and pending-action reminders",
      ],
      [
        "Invoices, receipts, orders, and statements organized",
        "Missing or inconsistent information highlighted",
        "Document routing through approval steps",
      ],
      [
        "Connected finance and administrative tasks",
        "Assigned owners and review points",
        "Task tracking and exception notifications",
      ],
    ],
    connection:
      "Sales Commission keeps commission amounts and payout dates visible, separate from base salary. Payroll workflows address the broader preparation, review, and processing steps around employee pay.",
  },
};
