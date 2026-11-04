import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("cloud-services");

export default function Page() {
  return <ServicePage slug="cloud-services" />;
}
