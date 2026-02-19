import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdgePredict — Motor Condition Monitoring for Industrial Facilities",
  description:
    "Non-invasive motor health monitoring using Electrical Signature Analysis (ESA). $200/month per motor. ~20-minute install. Free 60-day pilot. No plant network required.",
  keywords:
    "motor condition monitoring, electrical signature analysis, MCSA, ESA, predictive maintenance, motor health, phase imbalance, current unbalance, industrial motors",
  authors: [{ name: "EdgePredict" }],
  creator: "EdgePredict",
  publisher: "EdgePredict",
  metadataBase: new URL("https://www.edgepredict.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EdgePredict — Motor Condition Monitoring",
    description:
      "Non-invasive motor health monitoring using Electrical Signature Analysis (ESA). $200/month per motor. Free 60-day pilot. No plant network required.",
    url: "https://www.edgepredict.io",
    siteName: "EdgePredict",
    images: [
      {
        url: "https://www.edgepredict.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EdgePredict Motor Condition Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EdgePredict — Motor Condition Monitoring",
    description:
      "Non-invasive motor health monitoring using ESA. $200/month per motor. Free 60-day pilot. No plant network required.",
    images: ["https://www.edgepredict.io/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Nav />
          {children}
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
