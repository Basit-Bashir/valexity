import { ServicePage, serviceMetadata } from "@/components/service-templates";

export const metadata = serviceMetadata("cyber-security");

export default function Page() {
  return <ServicePage slug="cyber-security" />;
}
