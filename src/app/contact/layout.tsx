import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EdgePredict",
  description:
    "Talk to an engineer about motor monitoring and maintenance management. No sales deck. Just a direct conversation about your facility.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
