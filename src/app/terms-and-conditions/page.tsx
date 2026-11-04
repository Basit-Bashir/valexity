import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "terms-and-conditions",
  path: "/terms-and-conditions",
  title: "Terms & Conditions",
  metaTitle: "Terms & Conditions",
  description: "The terms and conditions that govern services, goods and advice provided by Valexity LLC (Valexity Technologies) to its clients.",
  lede: "The general terms that apply to services, goods and advice provided by Valexity LLC.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
