import { CategoryPage, categoryMetadata } from "@/components/service-templates";

export const metadata = categoryMetadata("digital-services");

export default function Page() {
  return <CategoryPage slug="digital-services" />;
}
