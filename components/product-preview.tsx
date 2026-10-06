export function ProductPreview() {
  return (
    <figure
      className="working-paper"
      aria-label="Illustrative commission calculation"
    >
      <div className="paper-heading">
        <span>Sales Commission</span>
        <span>Working example</span>
      </div>
      <div className="paper-content">
        <p className="eyebrow">The source record</p>
        <h2>
          A signed deal.
          <br />
          An explainable number.
        </h2>
        <dl className="contract-record">
          <div>
            <dt>Contract value</dt>
            <dd>$12,000.00</dd>
          </div>
          <div>
            <dt>Agreed commission rate</dt>
            <dd>8%</dd>
          </div>
          <div>
            <dt>Payout timing</dt>
            <dd>Per agreement</dd>
          </div>
        </dl>
        <div className="calculation-slip">
          <p className="eyebrow">Commission calculation</p>
          <div className="calculation-line">
            <span>$12,000 × 8%</span>
            <span>=</span>
          </div>
          <strong>
            $960<span>.00</span>
          </strong>
          <p className="review-mark">Check terms before scheduling payment.</p>
        </div>
      </div>
      <figcaption>
        Illustrative amounts. Your agreement determines the calculation and
        payment terms.
      </figcaption>
    </figure>
  );
}
