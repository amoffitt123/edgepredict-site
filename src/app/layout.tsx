import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdgePredict - AI-Powered Predictive Maintenance for Mid-Market Manufacturers",
  description: "Eliminate unexpected equipment failures with EdgePredict's AI-powered current signature analysis. Enterprise results at $149/month per equipment. 90%+ prediction accuracy, 2-hour installation.",
  keywords: "predictive maintenance, current signature analysis, industrial equipment monitoring, manufacturing, AI, equipment failure prevention",
  authors: [{ name: "EdgePredict" }],
  creator: "EdgePredict",
  publisher: "EdgePredict",
  metadataBase: new URL('https://www.edgepredict.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "EdgePredict - AI-Powered Predictive Maintenance",
    description: "Eliminate unexpected equipment failures with AI-powered monitoring. Enterprise results at mid-market prices - $149/month per equipment.",
    url: 'https://www.edgepredict.io',
    siteName: 'EdgePredict',
    images: [
      {
        url: 'https://www.edgepredict.io/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'EdgePredict - Predictive Maintenance Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgePredict - AI-Powered Predictive Maintenance',
    description: 'Eliminate unexpected equipment failures with AI-powered monitoring. Enterprise results at mid-market prices.',
    images: ['https://www.edgepredict.io/og-image.jpg'], // Same image as OG
    creator: '@edgepredict', // Add your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you set up Google Search Console, Bing, etc.
    // google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}