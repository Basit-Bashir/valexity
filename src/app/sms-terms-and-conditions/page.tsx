import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "sms-terms-and-conditions",
  path: "/sms-terms-and-conditions",
  title: "SMS Terms & Conditions",
  metaTitle: "SMS Terms & Conditions",
  description: "Messaging terms for Valexity Technologies SMS: message types, frequency, rates, and how to opt out with STOP or get help with HELP.",
  lede: "The terms that apply when you opt in to receive SMS messages about Valexity IT support services.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
