import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downtime Cost Calculator — EdgePredict",
  description:
    "Calculate what reactive motor maintenance is costing your facility. Free interactive tool with instant results.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
