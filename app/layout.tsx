import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aiaccountingagency.com",
  ),
  title: {
    default: "Sales Commission & Accounting Automation | AI Accounting Agency",
    template: "%s | AI Accounting Agency",
  },
  description:
    "Simplify sales commissions with connected contracts, earnings, and payout schedules. CPA-led accounting automation and financial workflow services.",
  icons: {
    icon: `${assetBasePath}/brand-logo.png`,
    shortcut: `${assetBasePath}/brand-logo.png`,
  },
  openGraph: {
    title: "Sales Commission. Know what’s earned. See when it’s due.",
    description:
      "Sales Commission and CPA-led financial workflows by AI Accounting Agency.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Commission. Know what’s earned. See when it’s due.",
    description:
      "Sales Commission and CPA-led financial workflows by AI Accounting Agency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
