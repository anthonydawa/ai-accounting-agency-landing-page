"use client";
import { useRef, useState } from "react";
const views = [
  {
    label: "Earnings",
    title: "Explain the earned amount",
    text: "Connect the commission amount to its source contract and agreed rate.",
    columns: ["Source contract", "Value", "Rate", "Commission"],
    values: ["Annual service agreement", "$12,000", "8%", "$960"],
    note: "Simplified calculation: $12,000 × 8% = $960. Actual earning components depend on the agreement.",
    status: "Recorded activity",
  },
  {
    label: "Payout summary",
    title: "Review the payment schedule",
    text: "A selected pay date gives finance a commission summary to review and share.",
    columns: ["Commission", "Pay date", "Basis", "Review"],
    values: ["$960", "Per agreement", "Commission only", "Confirm terms"],
    note: "Commission amounts are separate from base salary. Payment timing must be confirmed against the agreement.",
    status: "Scheduled payment",
  },
  {
    label: "Forecast",
    title: "Explore a sales scenario",
    text: "Use assumptions to explore projected commissions before those deals exist.",
    columns: [
      "Assumed deal value",
      "Assumed rate",
      "Deal volume",
      "Projection",
    ],
    values: ["$12,000", "8%", "1 deal", "$960"],
    note: "This projection uses assumed values. It is not an earned commission or a payment instruction.",
    status: "Planning assumptions",
  },
];
export function ReportExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  return (
    <section
      className="report-explorer"
      aria-label="Commission report examples"
    >
      <div className="report-explorer-top">
        <strong>Explore a report example</strong>
        <span className="sample-tag">Illustrative data</span>
      </div>
      <div className="report-tabs" role="tablist" aria-label="Report type">
        {views.map((view, index) => (
          <button
            ref={(node) => {
              tabs.current[index] = node;
            }}
            key={view.label}
            id={`report-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={selected === index}
            aria-controls={`report-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % views.length;
              else if (event.key === "ArrowLeft")
                next = (index + views.length - 1) % views.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = views.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              tabs.current[next]?.focus();
            }}
          >
            {view.label}
          </button>
        ))}
      </div>
      {views.map((view, index) => (
        <div
          key={view.label}
          id={`report-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`report-tab-${index}`}
          tabIndex={0}
          hidden={selected !== index}
          className="report-panel"
        >
          <div className="report-panel-heading">
            <div>
              <h2>{view.title}</h2>
              <p>{view.text}</p>
            </div>
            <span className="report-status">{view.status}</span>
          </div>
          <div className="report-table-wrap">
            <table>
              <caption className="sr-only">{view.label} example</caption>
              <thead>
                <tr>
                  {view.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {view.values.map((value, i) => (
                    <td key={view.columns[i]}>{value}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <dl className="report-mobile-data">
            {view.columns.map((column, index) => (
              <div key={column}>
                <dt>{column}</dt>
                <dd>{view.values[index]}</dd>
              </div>
            ))}
          </dl>
          <p className="report-note">{view.note}</p>
        </div>
      ))}
    </section>
  );
}
