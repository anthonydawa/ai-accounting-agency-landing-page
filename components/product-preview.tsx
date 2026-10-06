export function ProductPreview() {
  return (
    <div
      className="product-preview"
      aria-label="Illustrative Sales Commission dashboard"
    >
      <div className="preview-chrome">
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span>Sales Commission</span>
        <small>Illustrative preview</small>
      </div>
      <div className="preview-body">
        <div className="preview-heading">
          <div>
            <p className="eyebrow">Your commission workspace</p>
            <h2>Clarity, every pay cycle.</h2>
          </div>
          <span className="status-pill">● Review ready</span>
        </div>
        <div className="preview-stats">
          <div>
            <small>Know what’s earned</small>
            <strong>Earnings</strong>
            <span>Upfront + recurring</span>
          </div>
          <div>
            <small>Know what’s next</small>
            <strong>Payouts</strong>
            <span>Scheduled by date</span>
          </div>
          <div>
            <small>Know what’s possible</small>
            <strong>Forecasts</strong>
            <span>Explore your scenarios</span>
          </div>
        </div>
        <div className="preview-chart">
          <div>
            <strong>A clearer view of what’s ahead</strong>
            <span>Illustrative commission schedule</span>
          </div>
          <div className="chart-bars" aria-hidden="true">
            {[38, 57, 46, 72, 62, 83, 69, 92].map((height, i) => (
              <div key={i}>
                <i style={{ height: `${height}%` }} />
                <small>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"][i]}
                </small>
              </div>
            ))}
          </div>
        </div>
        <div className="preview-register">
          <div>
            <strong>Contract activity</strong>
            <span>One connected view</span>
          </div>
          {[
            ["Contract details", "Organized"],
            ["Commission rules", "Applied"],
            ["Payout schedule", "Visible"],
          ].map(([label, status]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>✓ {status}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="preview-floating">
        <span>✓</span>
        <div>
          <strong>From contract to commission.</strong>
          <small>Connected. Reviewable. Clear.</small>
        </div>
      </div>
    </div>
  );
}
