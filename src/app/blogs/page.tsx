import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { posts } from "@/lib/blog";
import { absoluteUrl, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog: IT, Cybersecurity, Telecom & Digital Insights",
  description:
    "Practical guidance on managed IT, cybersecurity, cyber insurance, telecom and digital services from the Valexity Technologies team.",
  path: "/blogs",
});

const dateFmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });

export default function BlogIndex() {
  const crumbs = [{ name: "Blog", path: "/blogs" }];
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "Blog",
          url: absoluteUrl("/blogs"),
          name: "Valexity Technologies Blog",
          publisher: { "@id": `${site.url}/#organization` },
          blogPost: posts.map((p) => ({ "@id": `${absoluteUrl(`/blogs/${p.slug}`)}#article` })),
        })}
      />
      <PageHero
        eyebrow="Blog"
        title="Insights in IT, telecom and digital solutions"
        lede="From security strategies to telecom solutions, Valexity shares practical knowledge that helps organizations adapt and thrive in today's digital world."
        crumbs={crumbs}
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blogs/${p.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] bg-ink-50 p-8 ring-1 ring-ink-100 transition hover:bg-white hover:shadow-[0_32px_64px_-32px] hover:shadow-brand-900/30 sm:p-10"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-brand-700 ring-1 ring-brand-100">{p.category}</span>
                    <time dateTime={p.datePublished} className="text-ink-500">
                      {dateFmt.format(new Date(p.datePublished))}
                    </time>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold tracking-tight text-balance text-ink-950 group-hover:text-brand-700">{p.title}</h2>
                  <p className="mt-4 flex-1 leading-7 text-ink-600">{p.excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                    Read article · {p.readingMinutes} min
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
