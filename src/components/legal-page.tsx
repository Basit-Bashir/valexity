import { JsonLd } from "./json-ld";
import { PageHero } from "./sections";
import { Container } from "./ui";
import { readLegal, renderMarkdown } from "@/lib/markdown";
import { absoluteUrl, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export type LegalDoc = {
  file: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
};

export function legalMetadata(doc: LegalDoc) {
  return pageMetadata({ title: doc.metaTitle, description: doc.description, path: doc.path });
}

/**
 * Legal pages are rendered to HTML on the server. On the old site the Terms and the MSA were
 * fetched in the browser, so AI crawlers saw only a heading.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const { html, headings } = renderMarkdown(readLegal(doc.file));
  const crumbs = [{ name: doc.title, path: doc.path }];
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "WebPage",
          url: absoluteUrl(doc.path),
          name: doc.title,
          isPartOf: { "@id": `${site.url}/#website` },
          publisher: { "@id": `${site.url}/#organization` },
        })}
      />
      <PageHero eyebrow="Legal" title={doc.title} lede={doc.lede} crumbs={crumbs} />
      <section className="bg-white py-20 sm:py-24">
        <Container className={headings.length > 2 ? "grid gap-16 lg:grid-cols-[16rem_1fr]" : ""}>
          {headings.length > 2 && (
            <nav aria-label="On this page" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
              <p className="font-mono text-xs tracking-[0.16em] text-ink-500 uppercase">On this page</p>
              <ul className="mt-4 max-h-[70vh] space-y-2 overflow-y-auto border-l border-ink-100 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-ink-600 hover:border-brand-500 hover:text-ink-950">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="prose-vx max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </section>
    </>
  );
}
