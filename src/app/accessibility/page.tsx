import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "accessibility",
  path: "/accessibility",
  title: "Accessibility Statement",
  metaTitle: "Accessibility Statement",
  description: "Valexity Technologies' commitment to WCAG 2.2 Level AA accessibility, current measures, known limitations and how to give feedback.",
  lede: "Our commitment to making this website usable for everyone, and how to tell us if something doesn't work for you.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
