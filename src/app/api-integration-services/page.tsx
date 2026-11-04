import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("api-integration-services");

export default function Page() {
  return <ServicePage slug="api-integration-services" />;
}
