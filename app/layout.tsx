import type { Metadata } from "next";
import { Rajdhani, Sora } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/seo";
import { env } from "@/lib/env";
import { AnalyticsScripts } from "@/components/tracking/analytics-scripts";
import { AnalyticsTracker } from "@/components/tracking/analytics-tracker";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCTA } from "@/components/sections/sticky-mobile-cta";
import { StructuredData } from "@/components/shared/structured-data";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: siteMetadata.title,
    template: "%s | ONEN",
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website",
    locale: "es_PA",
    siteName: siteMetadata.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ONEN / OnenVideo",
    url: env.siteUrl,
    email: "comercial@onenvideo.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panama",
    },
    areaServed: "Panama",
    description: siteMetadata.description,
  };

  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${rajdhani.variable} min-h-screen bg-slate-50 antialiased`}
      >
        <AnalyticsScripts />
        <AnalyticsTracker />
        <StructuredData id="organization-schema" data={orgSchema} />
        <div className="relative flex min-h-screen flex-col bg-app-gradient text-slate-900">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  );
}
