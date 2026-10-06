import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt =
  "Sales Commission by AI Accounting Agency — less commission confusion, more clarity.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#071b2e",
          display: "flex",
          flexDirection: "column",
          padding: "66px 76px",
          fontFamily: "sans-serif",
          borderBottom: "14px solid #12a6a6",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
          }}
        >
          <span style={{ fontWeight: 700 }}>AI Accounting Agency</span>
          <span style={{ color: "#087b7c" }}>Sales Commission</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 70,
            fontWeight: 700,
            fontSize: 76,
            letterSpacing: "-3px",
            lineHeight: 1.08,
          }}
        >
          <span>Less commission</span>
          <span style={{ color: "#087b7c" }}>confusion.</span>
          <span>More clarity.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            color: "#587083",
            fontSize: 23,
          }}
        >
          Contracts. Earnings. Payout schedules. One connected workflow.
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: 80,
            bottom: 110,
            width: 72,
            height: 72,
            borderRadius: 36,
            background: "#ffede8",
            color: "#b55245",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 43,
          }}
        >
          ↗
        </div>
      </div>
    ),
    size,
  );
}
