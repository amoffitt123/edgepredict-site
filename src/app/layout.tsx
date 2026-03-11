import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EdgePredict — Maintenance Management & Motor Monitoring",
  description:
    "The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors. PM scheduling, work orders, asset tracking, ESA monitoring.",
  keywords:
    "CMMS, maintenance management, motor monitoring, predictive maintenance, preventive maintenance software, work order management, PM scheduling, electrical signature analysis, free CMMS, MaintainX alternative",
  authors: [{ name: "EdgePredict" }],
  creator: "EdgePredict",
  publisher: "EdgePredict",
  metadataBase: new URL("https://www.edgepredict.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EdgePredict — Maintenance Management & Motor Monitoring",
    description:
      "The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors. PM scheduling, work orders, asset tracking, ESA monitoring.",
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
    title: "EdgePredict — Maintenance Management & Motor Monitoring",
    description:
      "The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors.",
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
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased ${inter.className}`}>
        <ClientBody>
          <Nav />
          {children}
          <Footer />
          <Analytics />
        </ClientBody>
      </body>
    </html>
  );
}
