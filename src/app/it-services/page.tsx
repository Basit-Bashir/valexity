import { CategoryPage, categoryMetadata } from "@/components/service-templates";

export const metadata = categoryMetadata("it-services");

export default function Page() {
  return <CategoryPage slug="it-services" />;
}
