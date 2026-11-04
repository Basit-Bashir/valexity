import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("print-services");

export default function Page() {
  return <ServicePage slug="print-services" />;
}
