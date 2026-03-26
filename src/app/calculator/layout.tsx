import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motor Downtime Cost Calculator — EdgePredict",
  description:
    "Calculate the true cost of unplanned motor failures. Enter your production rate, labor, and repair costs to see how condition monitoring pays for itself. Free tool.",
  alternates: {
    canonical: "https://www.edgepredict.io/calculator",
  },
  openGraph: {
    title: "Motor Downtime Cost Calculator — EdgePredict",
    description:
      "See the real cost of unplanned motor failures and how monitoring pays for itself. Free interactive calculator.",
    url: "https://www.edgepredict.io/calculator",
    type: "website",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
