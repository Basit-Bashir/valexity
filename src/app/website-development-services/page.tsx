import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("website-development-services");

export default function Page() {
  return <ServicePage slug="website-development-services" />;
}
