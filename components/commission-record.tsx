export function CommissionRecord({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`commission-record${compact ? " record-compact" : ""}`}>
      <figcaption>
        <span>Sales Commission</span>
        <span className="sample-tag">Illustrative example</span>
      </figcaption>
      <div className="record-source">
        <span className="document-icon" aria-hidden="true">
          ↳
        </span>
        <div>
          <p>Source contract</p>
          <strong>Annual service agreement</strong>
        </div>
      </div>
      <dl className="record-inputs">
        <div>
          <dt>Contract value</dt>
          <dd>$12,000</dd>
        </div>
        <div>
          <dt>Commission rate</dt>
          <dd>8%</dd>
        </div>
      </dl>
      <div className="record-result">
        <span>Calculated commission</span>
        <strong>
          $960<span>.00</span>
        </strong>
        <p>$12,000 × 8%</p>
      </div>
      <div className="record-timing">
        <div>
          <span className="status-dot" aria-hidden="true" />
          <strong>Payout timing</strong>
        </div>
        <span>Per agreement</span>
      </div>
      <p className="record-note">
        An earned amount and its payout date are separate. Confirm the terms
        before scheduling payment.
      </p>
    </figure>
  );
}
