import { LegalPage, legalMetadata, type LegalDoc } from "@/components/legal-page";

const doc: LegalDoc = {
  file: "master-service-agreement",
  path: "/master-service-agreement",
  title: "Master Service Agreement",
  metaTitle: "Master Service Agreement (MSA)",
  description: "The Valexity LLC Master Service Agreement for IT managed services, covering term, services, fees, responsibilities and liability.",
  lede: "The agreement that governs IT managed services provided by Valexity LLC, 3855 County Farm Road, Hanover Park, IL 60133.",
};

export const metadata = legalMetadata(doc);

export default function Page() {
  return <LegalPage doc={doc} />;
}
