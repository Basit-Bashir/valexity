import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "./json-ld";
import { CtaBand, PageHero, ServiceCard } from "./sections";
import { Container } from "./ui";
import { postBySlug } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { blogPostingJsonLd, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { serviceBySlug } from "@/lib/services";

const dateFmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export function blogPostMetadata(slug: string) {
  const p = postBySlug(slug)!;
  return pageMetadata({
    title: p.metaTitle,
    description: p.description,
    path: `/blogs/${p.slug}`,
    type: "article",
    publishedTime: p.datePublished,
    modifiedTime: p.dateModified,
  });
}

export function BlogPostPage({ slug }: { slug: string }) {
  const p = postBySlug(slug)!;
  const { html } = renderMarkdown(p.body);
  const crumbs = [
    { name: "Blog", path: "/blogs" },
    { name: p.title, path: `/blogs/${p.slug}` },
  ];
  const related = p.related.map((r) => serviceBySlug(r)!).filter(Boolean);

  return (
    <>
      <JsonLd data={graph(blogPostingJsonLd(p), breadcrumbJsonLd(crumbs))} />
      <PageHero eyebrow={p.category} title={p.title} lede={p.excerpt} crumbs={crumbs}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-400">
          <span className="font-medium text-ink-200">By {p.author.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={p.datePublished}>{dateFmt.format(new Date(p.datePublished))}</time>
          {p.dateModified !== p.datePublished && (
            <>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={p.dateModified}>{dateFmt.format(new Date(p.dateModified))}</time>
              </span>
            </>
          )}
          <span aria-hidden>·</span>
          <span>{p.readingMinutes} min read</span>
        </p>
      </PageHero>

      <article className="bg-white py-20 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1fr_18rem]">
          <div className="prose-vx max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">Related services</p>
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </aside>
        </Container>
        <Container className="mt-16">
          <Link href="/blogs" className="inline-flex items-center gap-2 font-medium text-brand-700 hover:text-brand-600">
            <ArrowLeft aria-hidden className="size-4" /> All articles
          </Link>
        </Container>
      </article>
      <CtaBand />
    </>
  );
}
