import { CategoryPage, categoryMetadata } from "@/components/service-templates";

export const metadata = categoryMetadata("telecom-services");

export default function Page() {
  return <CategoryPage slug="telecom-services" />;
}
