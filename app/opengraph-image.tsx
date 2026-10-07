import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt =
  "Sales commissions, from contract to payout. AI Accounting Agency.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        color: "#102b3c",
        padding: "60px 72px",
        fontFamily: "sans-serif",
        borderBottom: "8px solid #087b7c",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          paddingBottom: 26,
          borderBottom: "1px solid #d9e2e4",
        }}
      >
        <span>AI Accounting Agency</span>
        <span style={{ color: "#087b7c" }}>Sales Commission</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 60,
          fontSize: 72,
          lineHeight: 1.13,
          letterSpacing: "-3px",
        }}
      >
        <span>Sales commissions,</span>
        <span>from contract</span>
        <span style={{ color: "#087b7c" }}>to payout.</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 35,
          fontSize: 21,
          color: "#586c75",
        }}
      >
        Contracts, earnings, and payout schedules in one connected workflow.
      </div>
    </div>,
    size,
  );
}
