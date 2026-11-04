import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("co-managed-it-services");

export default function Page() {
  return <ServicePage slug="co-managed-it-services" />;
}
