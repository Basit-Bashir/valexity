import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Icon } from "./icons";
import { JsonLd } from "./json-ld";
import { CtaBand, FaqList, PageHero, ProcessSteps, ServiceCard } from "./sections";
import { ButtonLink, CheckList, Container, Eyebrow, SectionHeading } from "./ui";
import { breadcrumbJsonLd, faqJsonLd, graph, pageMetadata, serviceJsonLd } from "@/lib/seo";
import {
  categories,
  categoryByKey,
  categoryBySlug,
  serviceBySlug,
  servicesIn,
  type Category,
  type Service,
} from "@/lib/services";
import { process, site } from "@/lib/site";

/** "Managed IT Services" -> "managed IT services" (keeps acronyms such as IT, API and VoIP). */
export const inSentence = (name: string) =>
  name
    .split(" ")
    .map((w) => (w === w.toUpperCase() || w === "VoIP" ? w : w.toLowerCase()))
    .join(" ");

export const formOptions = categories.map((c) => ({ group: c.name, items: servicesIn(c.key).map((s) => s.name) }));

// ───────────────────────────── Individual service page ─────────────────────────────

export function serviceMetadata(slug: string) {
  const s = serviceBySlug(slug)!;
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}` });
}

export function ServicePage({ slug }: { slug: string }) {
  const s = serviceBySlug(slug)!;
  const cat = categoryByKey(s.category);
  const path = `/${s.slug}`;
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: cat.name, path: `/${cat.slug}` },
    { name: s.name, path },
  ];
  const related = s.related.map((r) => serviceBySlug(r)!).filter(Boolean);

  return (
    <>
      <JsonLd data={graph(serviceJsonLd(s, path), faqJsonLd(s.faqs), breadcrumbJsonLd(crumbs))} />

      <PageHero
        eyebrow={cat.name}
        title={s.headline}
        lede={s.lede}
        crumbs={crumbs}
        aside={
          <div className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur lg:mb-2">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-500/20 text-brand-200">
                <Icon name={s.icon} className="size-5" />
              </span>
              <p className="text-lg font-semibold text-white">{s.name}</p>
            </div>
            <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.16em] text-ink-500 uppercase">What you get</p>
            <div className="mt-4">
              <CheckList items={s.outcomes} tone="dark" />
            </div>
          </div>
        }
      >
        <ButtonLink href="/contact" arrow>
          Book a consultation
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="secondary">
          {site.phone}
        </ButtonLink>
      </PageHero>

      {/* Items */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow={s.name} title={s.itemsTitle} />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item, i) => (
              <li key={item.title} className="relative rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100">
                <span className="font-mono text-sm text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-7 text-ink-600">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="bg-ink-50 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for businesses like yours"
            lede={`${s.name} from Valexity is a good fit if any of these sound familiar.`}
          />
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink-100 sm:p-10">
            <CheckList items={s.forWho} />
            <div className="mt-8 border-t border-ink-100 pt-6">
              <Link href="/contact" className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:text-brand-600">
                Talk to us about {inSentence(s.name)}
                <ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white pt-24 sm:pt-28">
        <Container>
          <SectionHeading eyebrow="How we work" title="A clear path from first call to fully supported" />
          <div className="mt-12">
            <ProcessSteps steps={process} />
          </div>
        </Container>
      </section>

      <FaqList faqs={s.faqs} title={`${s.name}: frequently asked questions`} />

      {/* Related */}
      <section className="bg-ink-50 py-24 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Related services" title="Often combined with" />
            <ButtonLink href={`/${cat.slug}`} variant="ghost" arrow>
              All {inSentence(cat.name)}
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-24 sm:pt-28">
        <CtaBand title={`Let's talk about ${inSentence(s.name)}`} />
      </div>
    </>
  );
}

// ───────────────────────────── Category hub page ─────────────────────────────

export function categoryMetadata(slug: string) {
  const c = categoryBySlug(slug)!;
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/${c.slug}` });
}

export function CategoryPage({ slug }: { slug: string }) {
  const c = categoryBySlug(slug) as Category;
  const path = `/${c.slug}`;
  const list: Service[] = servicesIn(c.key);
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: c.name, path },
  ];

  return (
    <>
      <JsonLd data={graph(serviceJsonLd(c, path, list), faqJsonLd(c.faqs), breadcrumbJsonLd(crumbs))} />

      <PageHero eyebrow={c.eyebrow} title={c.headline} lede={c.lede} crumbs={crumbs}>
        <ButtonLink href="#get-started" arrow>
          Get started
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="secondary">
          {site.phone}
        </ButtonLink>
      </PageHero>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <SectionHeading eyebrow={c.name} title={`${list.length} services, one accountable team`} />
            <div className="space-y-5 text-lg leading-8 text-ink-600">
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How we work" title="From assessment to ongoing support" />
          <div className="mt-12">
            <ProcessSteps steps={process} />
          </div>
        </Container>
      </section>

      <FaqList faqs={c.faqs} title={`${c.name}: frequently asked questions`} />

      <section id="get-started" className="scroll-mt-24 bg-ink-950 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow tone="dark">Get started</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Tell us what you need and we&apos;ll be in touch
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-300">
              Share a few details about your business. A Valexity specialist will follow up to understand your goals and recommend
              the right {inSentence(c.name)} for you.
            </p>
            <p className="mt-8 text-ink-400">
              Prefer to talk? Call{" "}
              <a href={site.phoneHref} className="font-medium text-white underline decoration-brand-400 underline-offset-4">
                {site.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="font-medium text-white underline decoration-brand-400 underline-offset-4">
                see all contact options
              </Link>
              .
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8">
            <ContactForm options={formOptions} email={site.email} phone={site.phone} tone="dark" />
          </div>
        </Container>
      </section>
    </>
  );
}
