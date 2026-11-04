import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("broadband-services");

export default function Page() {
  return <ServicePage slug="broadband-services" />;
}
