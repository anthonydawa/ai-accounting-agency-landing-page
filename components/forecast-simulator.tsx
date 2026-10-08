"use client";
import { useState } from "react";
const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
export function ForecastSimulator() {
  const [rate, setRate] = useState(8);
  const [deals, setDeals] = useState(5);
  const total = ((12000 * rate) / 100) * deals;
  const baseline = 4800;
  const scale = Math.max(9600, total) * 1.15;
  return (
    <section
      className="forecast-simulator"
      aria-label="Interactive commission forecast"
    >
      <div className="forecast-intro">
        <div>
          <span className="option-label">Try a scenario</span>
          <h3>What changes when your sales assumptions change?</h3>
        </div>
        <span className="sample-tag">Illustrative calculator</span>
      </div>
      <div className="forecast-workspace">
        <div className="forecast-controls">
          <p className="forecast-fixed">
            Contract value <strong>$12,000 per deal</strong>
          </p>
          <label htmlFor="forecast-rate">
            <span>
              Commission rate <strong>{rate}%</strong>
            </span>
            <input
              id="forecast-rate"
              type="range"
              min={1}
              max={20}
              step={1}
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
              aria-valuetext={`${rate} percent`}
            />
            <small>
              1% <span>20%</span>
            </small>
          </label>
          <label htmlFor="forecast-deals">
            <span>
              Number of deals <strong>{deals}</strong>
            </span>
            <input
              id="forecast-deals"
              type="range"
              min={1}
              max={12}
              step={1}
              value={deals}
              onChange={(event) => setDeals(Number(event.target.value))}
            />
            <small>
              1 deal <span>12 deals</span>
            </small>
          </label>
          <button
            type="button"
            className="text-link forecast-reset"
            onClick={() => {
              setRate(8);
              setDeals(5);
            }}
          >
            Reset assumptions ↻
          </button>
        </div>
        <div className="forecast-results">
          <div className="forecast-total" aria-live="polite" aria-atomic="true">
            <span>Projected commission</span>
            <strong>{money(total)}</strong>
            <p>
              $12,000 × {rate}% × {deals} {deals === 1 ? "deal" : "deals"}
            </p>
          </div>
          <div
            className="scenario-comparison"
            role="img"
            aria-label={`Starting example: ${money(baseline)} at 8 percent for 5 deals. Your scenario: ${money(total)} at ${rate} percent for ${deals} deals.`}
          >
            <div>
              <span>
                Starting example <b>{money(baseline)}</b>
              </span>
              <div className="comparison-track">
                <i
                  className="comparison-base"
                  style={{ width: `${(baseline / scale) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <span>
                Your scenario <b>{money(total)}</b>
              </span>
              <div className="comparison-track">
                <i
                  className="comparison-current"
                  style={{ width: `${(total / scale) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="forecast-disclaimer">
        Simplified projection using one fixed contract value and rate. This is
        not an earned commission or a payment instruction.
      </p>
    </section>
  );
}
