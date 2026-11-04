import { BlogPostPage, blogPostMetadata } from "@/components/blog-post";

export const metadata = blogPostMetadata("it-cyber-insurance");

export default function Page() {
  return <BlogPostPage slug="it-cyber-insurance" />;
}
