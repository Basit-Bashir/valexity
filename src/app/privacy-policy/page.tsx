import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "privacy-policy",
  path: "/privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy",
  description: "How Valexity Technologies collects, uses and protects personal information, your U.S. privacy rights, and how to make a privacy request.",
  lede: "What we collect when you visit our website or contact us, how we use it, and the choices you have.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
