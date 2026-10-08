"use client";
import { useEffect, useRef, useState } from "react";

const stages = [
  {
    label: "Contract",
    title: "Start with the agreement.",
    text: "A $12,000 service contract gives the commission its source.",
  },
  {
    label: "Rate",
    title: "Connect the agreed rate.",
    text: "An 8% rate defines this simplified calculation.",
  },
  {
    label: "Earnings",
    title: "Explain the $960.",
    text: "$12,000 × 8% = $960. Keep the amount connected to its basis.",
  },
  {
    label: "Payout",
    title: "Confirm when it is due.",
    text: "The agreement and your review process determine the payout date.",
  },
];

export function CommissionJourney({ trace = false }: { trace?: boolean }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const scene = useRef<HTMLElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function stopForPreference() {
      if (preference.matches) setPlaying(false);
    }
    preference.addEventListener("change", stopForPreference);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio >= 0.4 && !started.current) {
          started.current = true;
          if (!preference.matches) setPlaying(true);
        } else if (entries[0].intersectionRatio < 0.4) setPlaying(false);
      },
      { threshold: 0.4 },
    );
    if (scene.current) observer.observe(scene.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stopForPreference);
    };
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (active === stages.length - 1) setPlaying(false);
      else setActive(active + 1);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [active, playing]);
  const stage = stages[active];
  return (
    <section
      ref={scene}
      className={`commission-journey ${trace ? "journey-trace" : "journey-ledger"} ${playing ? "is-playing" : ""}`}
      data-stage={active}
      aria-label={
        trace
          ? "Interactive commission workflow"
          : "Animated commission example"
      }
    >
      <div className="journey-heading">
        <span>
          {trace ? "Follow the commission" : "A commission, explained"}
        </span>
        <span className="sample-tag">Illustrative example</span>
      </div>
      <div className="journey-visual" aria-hidden="true">
        <div
          className={`journey-document ${active === 0 ? "scene-active" : ""}`}
        >
          <div className="document-fold" />
          <span className="visual-overline">Source agreement</span>
          <strong>
            Annual service
            <br />
            contract
          </strong>
          <div className="document-rules">
            <i />
            <i />
            <i />
          </div>
          <span className="document-value">$12,000</span>
          <svg className="signature" viewBox="0 0 140 35">
            <path d="M4 28C22 2 17 1 14 18s29-18 15-8-1 21 5 12S50 2 49 12s-14 20 0 9 5 6 16 0 5-8 13-4 8 5 14 0 2 7 14 3l25-4" />
          </svg>
        </div>
        <div className={`journey-rate ${active === 1 ? "scene-active" : ""}`}>
          <span>Agreed rate</span>
          <strong>
            8<span>%</span>
          </strong>
          <small>Commission basis</small>
        </div>
        <svg
          className="journey-connector"
          viewBox="0 0 400 260"
          preserveAspectRatio="none"
        >
          <path
            className="connector-track"
            d="M90 140V186Q90 204 108 204H283Q302 204 302 223"
          />
          <path
            className="connector-travel"
            d="M90 140V186Q90 204 108 204H283Q302 204 302 223"
          />
        </svg>
        <div
          className={`journey-earning ${active === 2 ? "scene-active" : ""}`}
        >
          <span>Calculated commission</span>
          <strong>
            $960<span>.00</span>
          </strong>
          <small>$12,000 × 8%</small>
        </div>
        <div
          className={`journey-paydate ${active === 3 ? "scene-active" : ""}`}
        >
          <span className="calendar-symbol">
            <i />
            <i />
            <b>↗</b>
          </span>
          <div>
            <span>Payout timing</span>
            <strong>Per agreement</strong>
          </div>
          <svg viewBox="0 0 24 24" className="review-check">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>
      </div>
      <div className="journey-stages" aria-label="Choose a stage">
        {stages.map((item, index) => (
          <button
            type="button"
            key={item.label}
            aria-pressed={active === index}
            onClick={() => {
              setActive(index);
              setPlaying(false);
            }}
          >
            <span className="stage-progress" aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="journey-explanation">
        <div>
          <strong>{stage.title}</strong>
          <p>{stage.text}</p>
        </div>
        <button
          className="motion-control"
          type="button"
          onClick={() => {
            if (playing) setPlaying(false);
            else {
              setActive(0);
              setPlaying(true);
            }
          }}
          aria-label={playing ? "Pause animation" : "Replay animation"}
        >
          <span aria-hidden="true">{playing ? "Ⅱ" : "↻"}</span>
          <span>{playing ? "Pause" : "Replay"}</span>
        </button>
      </div>
    </section>
  );
}
