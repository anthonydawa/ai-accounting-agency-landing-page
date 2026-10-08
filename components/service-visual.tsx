"use client";
import { useEffect, useRef } from "react";
const illustrations = {
  "sales-accounting": {
    caption: "See why a deposit differs from a sale.",
    kind: "reconciliation",
  },
  "financial-reporting": {
    caption: "Make the variance visible.",
    kind: "reporting",
  },
  "payroll-business": { caption: "Make each handoff clear.", kind: "payroll" },
} as const;
export function ServiceVisual({
  service,
  compact = false,
}: {
  service: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current?.classList.add("scene-entered");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const data = illustrations[service as keyof typeof illustrations];
  if (!data) return null;
  return (
    <figure
      ref={ref}
      className={`service-visual visual-${data.kind} ${compact ? "visual-compact" : ""}`}
    >
      <figcaption>
        <strong>{data.caption}</strong>
        <span>Illustrative process</span>
      </figcaption>
      {data.kind === "reconciliation" && (
        <div className="reconciliation-visual">
          <div className="reconciliation-inputs">
            <div>
              <span>Sale</span>
              <strong>$1,200</strong>
            </div>
            <span aria-hidden="true">−</span>
            <div>
              <span>Platform fee</span>
              <strong>$36</strong>
            </div>
          </div>
          <div className="reconciliation-link" aria-hidden="true">
            <svg viewBox="0 0 240 38">
              <path d="M36 1v12q0 8 8 8h70q8 0 8 8v8M204 1v12q0 8-8 8h-66q-8 0-8 8v8" />
            </svg>
            <span>Explained difference</span>
          </div>
          <div className="reconciled-deposit">
            <span className="match-check" aria-hidden="true">
              ✓
            </span>
            <div>
              <span>Bank deposit</span>
              <strong>$1,164</strong>
            </div>
            <span>Matched</span>
          </div>
        </div>
      )}
      {data.kind === "reporting" && (
        <div className="reporting-visual">
          <div className="report-illustration-bars">
            <div>
              <span>Plan</span>
              <div>
                <i className="plan-bar" />
              </div>
              <strong>$10,000</strong>
            </div>
            <div>
              <span>Actual</span>
              <div>
                <i className="actual-bar" />
              </div>
              <strong>$9,500</strong>
            </div>
          </div>
          <div className="report-variance">
            <span>Actual − plan</span>
            <strong>−$500</strong>
            <p>A difference for your team to review.</p>
          </div>
        </div>
      )}
      {data.kind === "payroll" && (
        <div className="payroll-visual">
          <div>
            <span className="handoff-marker" aria-hidden="true">
              ✓
            </span>
            <span>
              Collect<strong>Timesheets</strong>
            </span>
          </div>
          <span className="handoff-connector" aria-hidden="true" />
          <div>
            <span className="handoff-marker" aria-hidden="true">
              ✓
            </span>
            <span>
              Review<strong>Approvals</strong>
            </span>
          </div>
          <span className="handoff-connector" aria-hidden="true" />
          <div>
            <span className="handoff-marker" aria-hidden="true">
              →
            </span>
            <span>
              Prepare<strong>Payroll</strong>
            </span>
          </div>
        </div>
      )}
    </figure>
  );
}
