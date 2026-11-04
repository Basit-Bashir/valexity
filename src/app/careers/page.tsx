import { Mail } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections";
import { ButtonLink, CheckList, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Careers: IT, Security & Web Jobs in Hanover Park, IL",
  description:
    "Join Valexity Technologies. Build a career in managed IT, cybersecurity, telecom and web development with a team that values craft and simplicity.",
  path: "/careers",
});

const steps = [
  { title: "Submit your resume", body: "Send your resume and a short cover letter explaining why you're a great fit for Valexity." },
  { title: "AcuMax survey", body: "Check your email for a link to the quick two-question AcuMax survey, which helps us learn how you like to work." },
  { title: "Schedule an interview", body: "We'll contact you to schedule a meeting with the hiring manager at our Hanover Park office." },
  { title: "On-site interview", body: "Visit the office to discuss your AcuMax results and show the hiring managers why you're right for the role." },
  { title: "Onboarding", body: "As a tech company, we keep it simple: complete your paperwork through our online onboarding system and be ready on day one." },
  { title: "Official first day", body: "We celebrate your first day with a welcome, training on our processes, and a lunch of your choice, on us." },
];

const apply = `mailto:${site.hrEmail}?subject=${encodeURIComponent("Application: [Role name]")}`;

export default function CareersPage() {
  const crumbs = [{ name: "Careers", path: "/careers" }];
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs))} />
      <PageHero
        eyebrow="Careers"
        title="Do the best work of your career, with people who have your back"
        lede="We put people first and value craft and simplicity in our work. At Valexity, your skills solve real problems for real businesses, and your ideas shape how we work."
        crumbs={crumbs}
      >
        <ButtonLink href={apply} arrow>
          Apply now
        </ButtonLink>
        <ButtonLink href="#how-to-apply" variant="secondary">
          How hiring works
        </ButtonLink>
      </PageHero>

      <section className="bg-white py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading eyebrow="Where you belong" title="Make an impact from day one" />
            <div className="mt-6 space-y-5 text-lg leading-8 text-ink-600">
              <p>
                Our clients rely on us to keep their businesses running, secure and connected. Every ticket you close, network you
                design or website you ship makes a visible difference to the people who use it.
              </p>
              <p>
                At Valexity Technologies, your skills can shine, your ideas are valued and your career can grow, across managed IT,
                cybersecurity, cloud, telecom and web development.
              </p>
            </div>
          </div>
          <div className="rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100 sm:p-10">
            <h3 className="text-lg font-semibold text-ink-950">What we look for</h3>
            <div className="mt-6">
              <CheckList
                items={[
                  "Curiosity and a habit of finding the root cause",
                  "Clear, friendly communication with non-technical people",
                  "Ownership: you follow through until it's fixed",
                  "A security-first mindset in everything you touch",
                  "Interest in learning new platforms and certifications",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Open positions"
            title="Ready to make a difference?"
            lede="We're always glad to hear from talented help desk technicians, systems and network engineers, security analysts and web developers. Send your resume and tell us which role interests you."
          />
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink-100">
            <Mail aria-hidden className="size-6 text-brand-600" />
            <p className="mt-5 text-lg font-semibold text-ink-950">Apply by email</p>
            <p className="mt-2 text-ink-600">
              Email your resume and cover letter to{" "}
              <a href={apply} className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-4">
                {site.hrEmail}
              </a>
              .
            </p>
            <ButtonLink href={apply} className="mt-6" arrow>
              Apply
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="how-to-apply" className="scroll-mt-20 bg-white py-24 sm:py-28">
        <Container>
          <Eyebrow>Applying</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">How our hiring process works</h2>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-ink-50 p-8 ring-1 ring-ink-100">
                <span className="grid size-10 place-items-center rounded-full bg-ink-950 font-mono text-sm text-white">{i + 1}</span>
                <h3 className="mt-6 text-lg font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-7 text-ink-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
