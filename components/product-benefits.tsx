"use client";
import { useRef, useState } from "react";

const views = [
  {
    team: "Sales",
    question: "What have I earned?",
    title: "Earnings you can explain.",
    text: "See the contracts behind your upfront and recurring commissions, with scheduled payouts in the same workspace.",
    fields: [
      ["Contract value", "$12,000.00"],
      ["Agreed rate", "8%"],
      ["Calculated commission", "$960.00"],
    ],
    note: "An earnings amount is separate from its payment date.",
    link: "Contract activity + earnings",
  },
  {
    team: "Finance",
    question: "What is due, and why?",
    title: "The context for your review.",
    text: "Bring the commission basis, amounts, and payout timing together. Download a summary for the selected pay date to support your review.",
    fields: [
      ["Calculation basis", "$12,000 Ã— 8%"],
      ["Commission amount", "$960.00"],
      ["Payment timing", "Per agreement"],
    ],
    note: "Review the agreement and eligibility before scheduling payment.",
    link: "Payout schedules + reports",
  },
  {
    team: "Leadership",
    question: "What should we plan for?",
    title: "A clearer way to explore the future.",
    text: "Explore forecast scenarios using selected fees, rates, and deal-volume assumptions, alongside the commissions already scheduled.",
    fields: [
      ["Assumed deal value", "$12,000.00"],
      ["Assumed rate", "8%"],
      ["Illustrative commission", "$960.00"],
    ],
    note: "A forecast is a scenario based on assumptions, rather than an earned payout.",
    link: "Forecasts + scheduled commissions",
  },
];
export function ProductBenefits() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  return (
    <section
      className="product-benefits"
      id="product-fit"
      aria-labelledby="benefits-title"
    >
      <div className="shell">
        <div className="benefits-heading">
          <p className="eyebrow">What Sales Commission helps you see</p>
          <h2 id="benefits-title">
            One commission.
            <br />
            <em>Different questions.</em>
          </h2>
          <p>
            Choose your teamâ€™s perspective to see where the product fits.
          </p>
        </div>
        <div className="benefits-stage">
          <div
            className="team-tabs"
            role="tablist"
            aria-label="Your teamâ€™s commission view"
            aria-orientation="vertical"
          >
            {views.map((item, index) => (
              <button
                key={item.team}
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                id={`team-tab-${index}`}
                role="tab"
                type="button"
                aria-selected={selected === index}
                aria-controls={`team-panel-${index}`}
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowDown" || event.key === "ArrowRight")
                    next = (index + 1) % views.length;
                  else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                    next = (index + views.length - 1) % views.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = views.length - 1;
                  else return;
                  event.preventDefault();
                  setSelected(next);
                  buttons.current[next]?.focus();
                }}
              >
                <span>{item.team}</span>
                <strong>{item.question}</strong>
                <span className="team-tab-arrow" aria-hidden="true">
                  â†’
                </span>
              </button>
            ))}
          </div>
          {views.map((item, index) => (
            <div
              key={item.team}
              className="team-panel"
              role="tabpanel"
              id={`team-panel-${index}`}
              aria-labelledby={`team-tab-${index}`}
              hidden={selected !== index}
              tabIndex={0}
            >
              <div className="team-panel-copy">
                <p className="eyebrow">{item.link}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="team-example">
                <div className="example-heading">
                  <span>Commission record</span>
                  <span>Illustrative example</span>
                </div>
                <dl>
                  {item.fields.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <p>{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="benefits-note">
          Example amounts only. Your commission rules and data sources shape the
          setup.
        </p>
      </div>
    </section>
  );
}
