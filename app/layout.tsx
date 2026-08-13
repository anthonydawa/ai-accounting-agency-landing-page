import type { Metadata } from "next";
import "./globals.css";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aiaccountingagency.com"),
  title: "Accounting Automation for Growing Businesses | AI Accounting Agency",
  description: "CPA-led accounting automation, financial reporting, payroll workflows, and business process improvement for growing companies.",
  icons: { icon: `${assetBasePath}/brand-logo.png`, shortcut: `${assetBasePath}/brand-logo.png` },
  openGraph: {
    title: "Less Manual Work. Clearer Numbers. More Room to Grow.",
    description: "CPA-led accounting automation and smarter financial workflows for growing businesses.",
    type: "website",
    images: [{ url: `${assetBasePath}/og.png`, width: 1200, height: 630, alt: "AI Accounting Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Less Manual Work. Clearer Numbers. More Room to Grow.",
    description: "CPA-led accounting automation and smarter financial workflows for growing businesses.",
    images: [`${assetBasePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
