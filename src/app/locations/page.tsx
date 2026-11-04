import { Clock, MapPin, PhoneCall } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, FaqList, PageHero } from "@/components/sections";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, faqJsonLd, graph, pageMetadata } from "@/lib/seo";
import type { Faq } from "@/lib/services";
import { fullAddress, serviceAreas, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Locations & Service Areas: Illinois, Indiana, Texas & More",
  description:
    "Valexity Technologies is headquartered in Hanover Park, IL, and serves businesses in Illinois, Indiana, Minnesota, Texas, Florida and California.",
  path: "/locations",
});

const faqs: Faq[] = [
  {
    q: "Do you offer on-site IT support?",
    a: "Yes. Most issues are resolved remotely, which is usually the fastest option, but we schedule on-site visits for hardware installs, network and Wi-Fi work, office moves and anything that needs hands on equipment. On-site availability depends on your location and service agreement.",
  },
  {
    q: "Can you support a business with offices in several states?",
    a: "Yes. Valexity supports multi-location businesses across our service areas with one help desk, one set of security standards and consolidated documentation, so every office gets the same level of service.",
  },
  {
    q: "My state isn't listed. Can you still help?",
    a: "Possibly. Many of our services, including cloud, cybersecurity monitoring, website development and API integration, are delivered entirely remotely. Contact us and we'll tell you honestly whether we're the right fit for your location.",
  },
];

export default function LocationsPage() {
  const crumbs = [{ name: "Locations", path: "/locations" }];
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs), faqJsonLd(faqs))} />
      <PageHero
        eyebrow="Locations"
        title="Local expertise, with reach across the U.S."
        lede={`Valexity Technologies is headquartered in ${site.address.city}, ${site.address.regionName}, in the Chicago suburbs, and supports businesses in ${serviceAreas.length} states, delivering most services remotely with on-site support when you need it.`}
        crumbs={crumbs}
      />

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 p-8 sm:p-12">
            <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
            <div aria-hidden className="absolute -right-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-brand-600/40 blur-[90px]" />
            <span className="inline-flex rounded-full bg-brand-500/20 px-3 py-1 font-mono text-xs tracking-wider text-brand-200 uppercase">
              Headquarters
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {site.address.city}, {site.address.regionName}
            </h2>
            <ul className="mt-8 space-y-4 text-ink-200">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-brand-300" />
                <span>
                  {site.name}
                  <br />
                  {fullAddress}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneCall aria-hidden className="mt-1 size-5 shrink-0 text-brand-300" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-1 size-5 shrink-0 text-brand-300" />
                <span>
                  Office: {site.hours.label}
                  <br />
                  Help desk: available 24/7
                </span>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={site.address.mapUrl} variant="light" arrow>
                Get directions
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact us
              </ButtonLink>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Service areas"
              title="Where we work"
              lede="We provide managed IT, security, telecom and web services to businesses in these states, and remote services across North America."
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((a) => (
                <li key={a.code} className="flex items-center gap-4 rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-100">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white font-mono text-sm font-semibold text-brand-700 ring-1 ring-ink-100">
                    {a.code}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-950">{a.name}</span>
                    <span className="block text-sm text-ink-500">{a.hq ? "Headquarters" : a.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FaqList faqs={faqs} title="Coverage questions" />
      <CtaBand title="Let's see how we can support your locations" />
    </>
  );
}
