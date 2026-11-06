import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, FaqList, ProcessSteps } from "@/components/sections";
import { ButtonLink, CheckList, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { posts } from "@/lib/blog";
import { faqJsonLd, graph, pageMetadata } from "@/lib/seo";
import { categories, servicesIn, type Faq } from "@/lib/services";
import { process, site, values } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Valexity Technologies | Managed IT, Cybersecurity & Web Services in Illinois",
  absoluteTitle: true,
  description:
    "Managed IT, cybersecurity, cloud, VoIP and web services for businesses from Valexity Technologies, a managed IT provider in Hanover Park, IL.",
  path: "/",
});

const homeFaqs: Faq[] = [
  {
    q: "What does Valexity Technologies do?",
    a: "Valexity Technologies is a managed IT and managed security service provider headquartered in Hanover Park, Illinois. We run IT for small and mid-sized businesses (help desk, cybersecurity, cloud, backup and procurement), and also provide business VoIP, broadband, cellular, website design and development, AI and automation, and API integration.",
  },
  {
    q: "Where is Valexity located, and which areas do you serve?",
    a: `Our headquarters is at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, in the Chicago suburbs. We support businesses across Illinois and in Indiana, Minnesota, Texas, Florida and California, delivering most support remotely with on-site visits when hardware or network work requires it.`,
  },
  {
    q: "Why use one provider for IT, telecom and web?",
    a: "Your phones, internet, website and IT all depend on each other. When one provider manages them together, there's one team accountable for fixing problems, one set of documentation, and no finger-pointing between vendors. It also usually means fewer contracts and simpler billing.",
  },
  {
    q: "How do I get started with Valexity?",
    a: "Contact us for a free, no-obligation assessment. We'll review your current IT, security and connectivity, explain what we find in plain language, and recommend a plan with a clear monthly price. There's no commitment until you've seen the proposal.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqJsonLd(homeFaqs))} />

      <HomeHero />

      {/* ───────────── What we do (direct answer) ───────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title="One accountable partner for your technology, connectivity and online presence"
          />
          <div className="space-y-6 text-lg leading-8 text-ink-600">
            <p>{site.summary}</p>
            <p>
              We work as an extension of your business: monitoring systems around the clock, fixing problems before they spread, and
              planning technology that keeps up with your goals. Whether you need a complete outsourced IT department or extra support
              for your in-house team, you get a clear plan, a predictable monthly price and people who explain things in plain English.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 font-medium text-brand-700 hover:text-brand-600">
              More about Valexity <ArrowUpRight aria-hidden className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ───────────── Services ───────────── */}
      <section className="relative bg-ink-50 py-24 sm:py-32" aria-labelledby="services-heading">
        <div aria-hidden className="bg-grid-light absolute inset-0" />
        <Container className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Eyebrow>Services</Eyebrow>
              <h2 id="services-heading" className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Everything your business runs on, managed by one team
              </h2>
            </div>
            <ButtonLink href="/services" variant="ghost" arrow>
              All services
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {categories.map((c, idx) => (
              <article
                key={c.slug}
                className={
                  idx === 0
                    ? "relative flex flex-col overflow-hidden rounded-[2rem] bg-ink-950 p-8 text-white ring-1 ring-ink-900 sm:p-10"
                    : "relative flex flex-col overflow-hidden rounded-[2rem] bg-white p-8 ring-1 ring-ink-100 sm:p-10"
                }
              >
                {idx === 0 && <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-600/40 blur-[80px]" />}
                <span className={idx === 0 ? "relative grid size-12 place-items-center rounded-2xl bg-white/10 text-brand-200" : "grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700"}>
                  <Icon name={c.icon} className="size-6" />
                </span>
                <h3 className={idx === 0 ? "relative mt-8 text-2xl font-semibold" : "mt-8 text-2xl font-semibold text-ink-950"}>
                  <Link href={`/${c.slug}`} className="after:absolute after:inset-0">
                    {c.name}
                  </Link>
                </h3>
                <p className={idx === 0 ? "relative mt-3 leading-7 text-ink-300" : "mt-3 leading-7 text-ink-600"}>{c.summary}</p>
                <ul className={idx === 0 ? "relative z-10 mt-8 space-y-1 border-t border-white/10 pt-6" : "relative z-10 mt-8 space-y-1 border-t border-ink-100 pt-6"}>
                  {servicesIn(c.key).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className={
                          idx === 0
                            ? "group flex items-center justify-between rounded-xl py-2 text-[0.9375rem] text-ink-200 hover:text-white"
                            : "group flex items-center justify-between rounded-xl py-2 text-[0.9375rem] text-ink-700 hover:text-brand-700"
                        }
                      >
                        {s.name}
                        <ArrowUpRight aria-hidden className="size-4 opacity-40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── Values ───────────── */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute bottom-0 left-1/2 -z-10 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-700/30 blur-[120px]" />
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Our values"
            title="Built on trust, experience and partnership"
            lede="Integrity, collaboration and continuous improvement shape how we support every client, from the first call to the hundredth ticket."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10">
                <span className="grid size-11 place-items-center rounded-2xl bg-linear-to-br from-brand-500/30 to-ember-500/20 text-white">
                  <Icon name={v.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-7 text-ink-400">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── Process ───────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="From first call to fully managed in four steps"
            lede="No long sales cycle and no surprises. You'll know what we found, what we recommend and what it costs before anything changes."
          />
          <div className="mt-14">
            <ProcessSteps steps={process} />
          </div>
        </Container>
      </section>

      {/* ───────────── Why one partner ───────────── */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Valexity"
              title="Stop juggling vendors. Get one team that owns the outcome."
              lede="When calls drop, the internet slows or a laptop is compromised, you shouldn't have to work out whose problem it is. We manage IT, security, telecom and web together, so we can find and fix the real cause."
            />
            <div className="mt-10">
              <CheckList
                items={[
                  "One number to call for IT, phones, internet and your website",
                  "Security built into every service, not sold as an add-on",
                  "Response commitments written into your service agreement",
                  "Clear monthly pricing and regular, plain-English reporting",
                  "Microsoft partner with relationships across Dell, HP, Lenovo, Cisco Meraki and more",
                ]}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Managed IT", d: "Help desk, patching, MFA and backup.", href: "/managed-it-services", icon: "monitor" as const },
              { t: "Cybersecurity", d: "24/7 monitoring, endpoint and network protection.", href: "/cyber-security", icon: "shield" as const },
              { t: "Business VoIP", d: "Modern phone systems that work anywhere.", href: "/voip-services", icon: "phone" as const },
              { t: "Websites", d: "Fast, secure, search-ready design and development.", href: "/website-development-services", icon: "palette" as const },
            ].map((x, i) => (
              <Link
                key={x.href}
                href={x.href}
                className={`group rounded-3xl bg-white p-7 ring-1 ring-ink-100 transition hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px] hover:shadow-brand-900/25 ${i % 2 === 1 ? "sm:translate-y-8 sm:hover:translate-y-7" : ""}`}
              >
                <Icon name={x.icon} className="size-6 text-brand-600" />
                <p className="mt-8 text-lg font-semibold text-ink-950">{x.t}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-6 text-ink-600">{x.d}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── Insights ───────────── */}
      <section className="bg-white pt-24 sm:pt-32">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Insights" title="Practical guidance from our engineers" />
            <ButtonLink href="/blogs" variant="ghost" arrow>
              Read the blog
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className="group flex flex-col rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100 transition hover:bg-white hover:shadow-[0_24px_48px_-24px] hover:shadow-brand-900/25"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-brand-700 uppercase">{p.category}</span>
                <h3 className="mt-4 text-xl font-semibold text-balance text-ink-950 group-hover:text-brand-700">{p.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-ink-600">{p.excerpt}</p>
                <span className="mt-6 text-sm text-ink-500">{p.readingMinutes} min read</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FaqList faqs={homeFaqs} />
      <CtaBand />
    </>
  );
}
