import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

function getMetadataBase() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.role}`;
const description =
  "Senior frontend engineer in San Diego focused on enterprise web platforms, performance, accessibility, CMS architecture, analytics integrations, and measurable business impact.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Jesse Wu",
    "Senior Frontend Engineer",
    "San Diego",
    "Next.js",
    "Performance",
    "Accessibility",
    "WordPress",
    "Core Web Vitals",
    "Enterprise",
    "CMS",
  ],
  authors: [{ name: siteConfig.name, url: "https://linkedin.com/in/jessewu14" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
