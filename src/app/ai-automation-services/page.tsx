import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("ai-automation-services");

export default function Page() {
  return <ServicePage slug="ai-automation-services" />;
}
