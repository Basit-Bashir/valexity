import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, PageHero, PartnerStrip, ServiceCard } from "@/components/sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { absoluteUrl, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { categories, services, servicesIn } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services: Managed IT, Cybersecurity, Telecom & Web",
  description:
    "Explore Valexity services: managed IT, cybersecurity, cloud, co-managed IT, print, procurement, VoIP, broadband, cellular and web development.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ name: "Services", path: "/services" }];
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "ItemList",
          name: "Valexity Technologies services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: absoluteUrl(`/${s.slug}`),
          })),
        })}
      />
      <PageHero
        eyebrow="Services"
        title="Reliable, secure, scalable services to drive your business forward"
        lede="Valexity provides IT, digital and telecom services for businesses that want technology to just work. Choose a single service, or let one accountable team manage everything from your help desk to your website."
        crumbs={crumbs}
      >
        <ButtonLink href="/contact" arrow>
          Book a free assessment
        </ButtonLink>
        <ButtonLink href="#it-services" variant="secondary">
          Browse services
        </ButtonLink>
      </PageHero>

      {categories.map((c, idx) => (
        <section
          key={c.slug}
          id={c.slug}
          aria-labelledby={`${c.slug}-heading`}
          className={`scroll-mt-20 py-24 sm:py-28 ${idx % 2 === 1 ? "bg-ink-50" : "bg-white"}`}
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>{`0${idx + 1} · ${c.name}`}</Eyebrow>
                <h2 id={`${c.slug}-heading`} className="mt-4 flex items-center gap-4 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  {c.name}
                </h2>
              </div>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-lg leading-8 text-ink-600">{c.lede}</p>
                <Link href={`/${c.slug}`} className="inline-flex shrink-0 items-center gap-1.5 font-medium text-brand-700 hover:text-brand-600">
                  Overview <ArrowUpRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicesIn(c.key).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <PartnerStrip />
      <div className="pt-24 sm:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
