import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EdgePredict",
  description:
    "Talk to an engineer about motor condition monitoring or maintenance management software. No sales deck, no queue. Direct conversation with the people who built it.",
  alternates: {
    canonical: "https://www.edgepredict.io/contact",
  },
  openGraph: {
    title: "Contact — EdgePredict",
    description:
      "Talk to an engineer about motor monitoring or CMMS. No sales deck. Direct conversation with the people who built it.",
    url: "https://www.edgepredict.io/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
