import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("it-procurement");

export default function Page() {
  return <ServicePage slug="it-procurement" />;
}
