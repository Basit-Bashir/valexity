import { FileDown, Gift, Handshake } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, FaqList, PageHero } from "@/components/sections";
import { ButtonLink, Container } from "@/components/ui";
import { breadcrumbJsonLd, faqJsonLd, graph, pageMetadata } from "@/lib/seo";
import type { Faq } from "@/lib/services";

// Self-referencing canonical (the old page pointed to /referral-program, which returns 404).
export const metadata = pageMetadata({
  title: "Referral & Commission Program",
  description:
    "Refer businesses to Valexity Technologies for IT, digital or telecom services and earn a referral reward. Download the partner agreement.",
  path: "/referral",
});

const programs = [
  {
    icon: Handshake,
    title: "Referral partner program",
    body: "For businesses and professionals who want to collaborate with Valexity by referring clients who need IT, digital or telecom services. When you refer a customer who becomes a Valexity client, you earn a referral reward based on the value of the project.",
    file: "/ValexityReferralPartnerAgreementv1.3(12.10.25).pdf",
    label: "Download the referral partner agreement",
  },
  {
    icon: Gift,
    title: "Commission program",
    body: "Rewards partners who contribute directly to new business opportunities or service upgrades. It applies to team members who generate leads, close new projects or upsell additional services during client interactions. Payout is based on recurring projects or services.",
    file: "/ValexityCommissionProgramv1.3(12.10.25).pdf",
    label: "Download the commission program",
  },
];

const faqs: Faq[] = [
  {
    q: "Who can join the Valexity referral program?",
    a: "Any business or professional who works with companies that need IT, cybersecurity, telecom or web services, such as accountants, consultants, contractors and other technology vendors. Download the referral partner agreement, complete it and send it to us to get started.",
  },
  {
    q: "How is the referral reward calculated?",
    a: "Rewards are based on the value of the project or service the referred client signs up for. The full terms, including eligibility and payment timing, are set out in the referral partner agreement.",
  },
];

export default function ReferralPage() {
  const crumbs = [{ name: "Referral program", path: "/referral" }];
  return (
    <>
      <JsonLd data={graph(breadcrumbJsonLd(crumbs), faqJsonLd(faqs))} />
      <PageHero
        eyebrow="Referral program"
        title="Introduce a business. Earn a reward."
        lede="Know a business that needs better IT, security, phones or a new website? Refer them to Valexity and get rewarded when they become a client."
        crumbs={crumbs}
      />
      <section className="bg-white py-24 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          {programs.map(({ icon: I, title, body, file, label }) => (
            <div key={title} className="flex flex-col rounded-[2rem] bg-ink-50 p-8 ring-1 ring-ink-100 sm:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-white text-brand-700 ring-1 ring-ink-100">
                <I aria-hidden className="size-6" />
              </span>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-ink-950">{title}</h2>
              <p className="mt-4 flex-1 leading-7 text-ink-600">{body}</p>
              <a
                href={file}
                download
                className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-ink-950 px-5 py-3 text-sm font-medium text-white hover:bg-ink-800"
              >
                <FileDown aria-hidden className="size-4" />
                {label} <span className="text-ink-400">(PDF)</span>
              </a>
            </div>
          ))}
        </Container>
        <Container className="mt-10">
          <ButtonLink href="/contact" variant="ghost" arrow>
            Questions? Contact us
          </ButtonLink>
        </Container>
      </section>
      <FaqList faqs={faqs} title="Referral questions" />
      <CtaBand title="Have a business in mind?" body="Tell us about them, or ask us anything about the referral and commission programs." />
    </>
  );
}
