import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("voip-services");

export default function Page() {
  return <ServicePage slug="voip-services" />;
}
