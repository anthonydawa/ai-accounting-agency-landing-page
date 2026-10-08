"use client";
import { useState } from "react";
const items = [
  "A sample contract or agreement",
  "Commission rates and payout terms",
  "Your current tools or spreadsheets",
  "A report your team needs",
];
export function SetupChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const count = checked.length;
  return (
    <div className="setup-checklist">
      <div className="checklist-heading">
        <svg
          className="preparation-ring"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle className="ring-track" cx="32" cy="32" r="26" />
          <circle
            className="ring-progress"
            cx="32"
            cy="32"
            r="26"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={100 - (count / 4) * 100}
          />
          <text x="32" y="37" textAnchor="middle">
            {count}/4
          </text>
        </svg>
        <div>
          <h3>Get ready for your demo.</h3>
          <p role="status">
            {count === 4
              ? "Your preparation list is complete."
              : `${count} of 4 items gathered`}
          </p>
        </div>
      </div>
      <div className="preparation-items">
        {items.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              checked={checked.includes(item)}
              onChange={(event) =>
                setChecked(
                  event.target.checked
                    ? [...checked, item]
                    : checked.filter((value) => value !== item),
                )
              }
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <p className="preparation-note">
        An optional checklist. You can book a demo at any stage.
      </p>
    </div>
  );
}
