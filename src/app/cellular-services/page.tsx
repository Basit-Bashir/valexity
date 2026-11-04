import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("cellular-services");

export default function Page() {
  return <ServicePage slug="cellular-services" />;
}
