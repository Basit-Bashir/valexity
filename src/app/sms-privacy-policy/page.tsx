import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "sms-privacy-policy",
  path: "/sms-privacy-policy",
  title: "SMS Privacy Policy",
  metaTitle: "SMS Privacy Policy",
  description: "How Valexity Technologies collects, uses and protects mobile numbers and consent records for SMS and MMS messaging.",
  lede: "How we handle your mobile number and consent when you opt in to SMS messages from Valexity Technologies.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
