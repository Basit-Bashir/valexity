import Link from "next/link";
import { ArrowUpRight, Activity, DatabaseBackup, Headset, ShieldCheck, RefreshCcw } from "lucide-react";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, FaqList, PartnerStrip, ProcessSteps } from "@/components/sections";
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
    a: "Valexity Technologies is a managed IT and managed security service provider headquartered in Hanover Park, Illinois. We run IT for small and mid-sized businesses (help desk, cybersecurity, cloud, backup and procurement), and also provide business VoIP, broadband, cellular, website design and development, and API integration.",
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

const consoleRows = [
  { icon: ShieldCheck, label: "Endpoint protection", value: "Active" },
  { icon: RefreshCcw, label: "Patch cycle", value: "On schedule" },
  { icon: DatabaseBackup, label: "Nightly backups", value: "Verified" },
  { icon: Activity, label: "Network monitoring", value: "24/7" },
  { icon: Headset, label: "Help desk", value: "Online" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqJsonLd(homeFaqs))} />

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -top-64 left-1/2 -z-10 h-[40rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[140px]" />
        <div aria-hidden className="absolute right-[-8%] bottom-[-20%] -z-10 h-96 w-96 rounded-full bg-ember-500/20 blur-[120px]" />
        <Container className="grid items-center gap-16 pt-16 pb-24 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pt-28 lg:pb-32">
          <div className="animate-fade-up">
            <Link
              href="/cyber-security"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 py-1.5 pr-3 pl-1.5 text-sm text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs font-medium text-brand-200">MSSP</span>
              Managed IT and security, under one roof
              <ArrowUpRight aria-hidden className="size-3.5" />
            </Link>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Redefining tech.{" "}
              <span className="text-gradient block pb-2">Smarter, safer, seamless.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-pretty text-ink-300 sm:text-xl sm:leading-9">
              Valexity Technologies runs IT, cybersecurity, telecom and web for growing businesses, so your team can focus on the work
              and not the technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" arrow>
                Book a free assessment
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { k: "Help desk", v: "24/7" },
                { k: "Partner", v: "Microsoft" },
                { k: "HQ", v: "Hanover Park, IL" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[0.6875rem] tracking-[0.16em] text-ink-500 uppercase">{s.k}</dt>
                  <dd className="mt-1.5 text-base font-medium text-white sm:text-lg">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Illustrative operations console (decorative). */}
          <div aria-hidden className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-500/30 via-transparent to-ember-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] bg-ink-900/80 p-2 ring-1 ring-white/10 backdrop-blur-xl">
              <div className="rounded-[1.6rem] bg-ink-950/80 p-6 ring-1 ring-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium text-white">All systems protected</span>
                  </div>
                  <span className="font-mono text-xs text-ink-500">valexity / ops</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {consoleRows.map(({ icon: I, label, value }) => (
                    <li key={label} className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3.5 ring-1 ring-white/5">
                      <span className="flex items-center gap-3 text-sm text-ink-200">
                        <span className="grid size-8 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                          <I className="size-4" strokeWidth={1.8} />
                        </span>
                        {label}
                      </span>
                      <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-xs text-emerald-300">{value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-linear-to-r from-brand-600/25 to-ember-500/15 p-4 ring-1 ring-white/10">
                  <div className="flex items-end justify-between gap-1.5" style={{ height: 56 }}>
                    {[38, 52, 44, 63, 58, 72, 66, 80, 74, 88, 82, 94].map((h, i) => (
                      <span key={i} className="w-full rounded-t bg-linear-to-t from-brand-500/50 to-brand-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[0.6875rem] tracking-wider text-ink-400 uppercase">Protection activity</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PartnerStrip />

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
              { t: "Websites", d: "Fast, secure, search-ready design and development.", href: "/website-design-services", icon: "palette" as const },
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
