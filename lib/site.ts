export const bookingUrl = "https://calendar.app.google/gN5dqSemjJaRcWRg7";
export const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aiaccountingagency.com"
).replace(/\/$/, "");

export const services = [
  {
    slug: "sales-accounting",
    title: "Sales & Accounting Operations",
    description:
      "Connect sales activity to your books, with less manual entry and clearer control over every transaction.",
    items: [
      {
        title: "Sales reconciliation",
        text: "Match POS and eCommerce payouts with recorded revenue, including fees, refunds, and chargebacks.",
      },
      {
        title: "Inventory & COGS tracking",
        text: "Connect inventory movements with sales data and your selected cost valuation method.",
      },
      {
        title: "Accounts payable & receivable",
        text: "Organize invoice approvals, payment controls, and visibility into outstanding balances.",
      },
      {
        title: "Bank reconciliation",
        text: "Match bank transactions to accounting records and surface unmatched or unusual items for review.",
      },
    ],
  },
  {
    slug: "financial-reporting",
    title: "Financial Reporting & Analytics",
    description:
      "Turn disconnected numbers into useful visibility across cash flow, performance, and planning.",
    items: [
      {
        title: "KPI & performance monitoring",
        text: "Bring revenue, profitability, and operating metrics into dashboards built around your business.",
      },
      {
        title: "Custom financial reports",
        text: "Create repeatable reporting templates for management, investors, and other stakeholders.",
      },
      {
        title: "Cash flow & risk alerts",
        text: "Model cash inflows and outflows, explore scenarios, and identify potential liquidity gaps.",
      },
      {
        title: "Budgeting & forecasting",
        text: "Compare actual results with plans and maintain forecasts as new information arrives.",
      },
    ],
  },
  {
    slug: "payroll-business",
    title: "Payroll & Business Processes",
    description:
      "Build dependable workflows for the recurring work that keeps your business moving.",
    items: [
      {
        title: "Payroll workflows",
        text: "Connect timesheet collection, validation, payroll preparation, and review steps.",
      },
      {
        title: "Employee onboarding",
        text: "Coordinate document collection, account setup, assignments, and reminders.",
      },
      {
        title: "Document processing",
        text: "Extract and organize information from invoices, receipts, purchase orders, and statements.",
      },
      {
        title: "Process & approval workflows",
        text: "Connect your existing tools with task tracking, approvals, and exception notifications.",
      },
    ],
  },
];

export const faqs = [
  {
    q: "What does Sales Commission help us manage?",
    a: "It brings contract details, commission calculations, payout schedules, and reporting into a connected workflow. We review your compensation rules and current systems to determine the right setup for your team.",
  },
  {
    q: "Can it work with our existing tools?",
    a: "We start with the tools and data you already use. The implementation is scoped around your contract sources, commission rules, and reporting needs; specific integrations are confirmed during discovery.",
  },
  {
    q: "Can we see a demonstration?",
    a: "Yes. Book a consultation and we can walk through the commission workflow, reporting views, and how a setup could reflect your business.",
  },
  {
    q: "Does automation replace financial oversight?",
    a: "Accounting judgment remains essential. Sales Commission organizes contract information, earnings, and payout dates so your team can review amounts and control payout decisions.",
  },
  {
    q: "Do you offer services beyond commissions?",
    a: "Yes. We also help with sales and accounting operations, financial reporting and analytics, payroll workflows, and document processing.",
  },
  {
    q: "How much does it cost?",
    a: "Scope depends on your commission structure, data sources, and workflow requirements. We discuss these during the first conversation before recommending an implementation.",
  },
];
