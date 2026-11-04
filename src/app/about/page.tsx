import Image from "next/image";
import { Icon, LinkedInIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, PageHero, PartnerStrip, ProcessSteps } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { absoluteUrl, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { fullAddress, process, serviceAreas, site, team, values } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us: Managed IT & Security Provider in Hanover Park, IL",
  description:
    "Valexity Technologies is a managed IT and security service provider in Hanover Park, IL. Our mission, vision, values and how we work.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [{ name: "About", path: "/about" }];
  const people = team.map((p) => ({
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    worksFor: { "@id": `${site.url}/#organization` },
    ...(p.linkedin ? { sameAs: [p.linkedin] } : {}),
    ...(p.credentials?.length ? { hasCredential: p.credentials.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c })) } : {}),
  }));

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbJsonLd(crumbs),
          {
            "@type": "AboutPage",
            url: absoluteUrl("/about"),
            name: "About Valexity Technologies",
            about: { "@id": `${site.url}/#organization` },
          },
          ...people,
        )}
      />

      <PageHero
        eyebrow="About us"
        title="We manage your technology while you manage your business"
        lede="IT should be that simple. Valexity Technologies is a managed IT and managed security service provider that plans, secures and supports the technology growing businesses depend on."
        crumbs={crumbs}
      >
        <ButtonLink href="/contact" arrow>
          Work with us
        </ButtonLink>
        <ButtonLink href="/careers" variant="secondary">
          Join the team
        </ButtonLink>
      </PageHero>

      {/* At a glance */}
      <section className="border-b border-ink-100 bg-white">
        <Container>
          <dl className="grid divide-ink-100 py-4 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {[
              { k: "Headquarters", v: `${site.address.city}, ${site.address.region}` },
              { k: "Service areas", v: `${serviceAreas.length} U.S. states` },
              { k: "Help desk", v: "Available 24/7" },
              { k: "Business hours", v: site.hours.label },
            ].map((s) => (
              <div key={s.k} className="px-2 py-6 sm:px-8 first:sm:pl-0">
                <dt className="font-mono text-[0.6875rem] tracking-[0.16em] text-ink-500 uppercase">{s.k}</dt>
                <dd className="mt-2 text-lg font-semibold text-ink-950">{s.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink-950 sm:text-4xl">
              Make technology the simplest part of running a business
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-ink-600">
              <p>
                Our mission is to give every client secure, dependable technology and a team they can count on, so they can spend
                their time growing the business instead of managing IT, phones and vendors.
              </p>
              <p>{site.summary}</p>
            </div>
          </div>
          <div>
            <Eyebrow>Our vision</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink-950 sm:text-4xl">
              A true partner for traditional, remote and hybrid businesses
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-ink-600">
              <p>
                As a managed security service provider (MSSP), we plan, design, develop, monitor and support the continuous delivery
                of IT services, whether your team works in one office, from home or across several locations.
              </p>
              <p>
                By taking on the day-to-day management of your technology, we help you minimize hardware expenses, control staffing
                needs and get the expertise of a full IT department for a predictable monthly cost.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-ink-50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="Cultivating trust through experience, partnership and innovation"
            lede="We build lasting relationships by being honest about what we find, doing what we say we'll do, and continuously improving how we support you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-7 ring-1 ring-ink-100">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={v.icon} className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink-950">{v.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-7 text-ink-600">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership: renders only when real team data exists. */}
      {team.length > 0 && (
        <section className="bg-white py-24 sm:py-32">
          <Container>
            <SectionHeading eyebrow="Leadership" title="The people behind Valexity" />
            <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((p) => (
                <li key={p.name} className="rounded-3xl bg-ink-50 p-7 ring-1 ring-ink-100">
                  {p.photo && (
                    <Image src={p.photo} alt={`${p.name}, ${p.role}`} width={480} height={480} className="aspect-square w-full rounded-2xl object-cover" />
                  )}
                  <h3 className="mt-6 text-lg font-semibold text-ink-950">{p.name}</h3>
                  <p className="text-sm text-brand-700">{p.role}</p>
                  {p.bio && <p className="mt-3 text-[0.9375rem] leading-7 text-ink-600">{p.bio}</p>}
                  {p.credentials && p.credentials.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.credentials.map((c) => (
                        <li key={c} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-200">
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.linkedin && (
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-700">
                      <LinkedInIcon className="size-4" /> LinkedIn<span className="sr-only">: {p.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className={team.length > 0 ? "bg-ink-50 py-24 sm:py-32" : "bg-white py-24 sm:py-32"}>
        <Container>
          <SectionHeading eyebrow="How we work" title="A partnership that starts with listening" />
          <div className="mt-12">
            <ProcessSteps steps={process} />
          </div>
          <p className="mt-12 max-w-3xl text-ink-600">
            Visit us at <strong className="font-semibold text-ink-900">{fullAddress}</strong>, call{" "}
            <a href={site.phoneHref} className="font-medium text-brand-700">
              {site.phone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-brand-700">
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>

      <PartnerStrip title="Partners and platforms we work with" />
      <div className="pt-24 sm:pt-28">
        <CtaBand title="Ready to simplify your IT?" />
      </div>
    </>
  );
}
