import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downtime Cost Calculator — EdgePredict",
  description:
    "Calculate the true cost of unplanned motor failures and see how monitoring pays for itself. Free interactive tool.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
