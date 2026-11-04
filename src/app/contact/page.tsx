import { Clock, CreditCard, LifeBuoy, Mail, MapPin, PhoneCall, ShoppingCart } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections";
import { formOptions } from "@/components/service-templates";
import { Container } from "@/components/ui";
import { absoluteUrl, breadcrumbJsonLd, graph, pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

// The address in this description must match `site.address` (the audit found an old address here).
export const metadata = pageMetadata({
  title: "Contact Us: Managed IT Support in Hanover Park, IL",
  description: `Contact Valexity Technologies at ${site.address.street}, ${site.address.city}, ${site.address.region}. Call ${site.phone} or email ${site.email}.`,
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [{ name: "Contact", path: "/contact" }];
  return (
    <>
      <JsonLd
        data={graph(breadcrumbJsonLd(crumbs), {
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          name: "Contact Valexity Technologies",
          about: { "@id": `${site.url}/#organization` },
        })}
      />
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about what you need"
        lede="Whether you need a quote, a second opinion on your security or help right now, we're here to support you every step of the way."
        crumbs={crumbs}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="space-y-4">
            {[
              { icon: PhoneCall, title: "Call us", body: site.phone, href: site.phoneHref, note: "Speak to our team directly" },
              { icon: Mail, title: "Email", body: site.email, href: `mailto:${site.email}`, note: "We'll reply as soon as possible" },
              { icon: MapPin, title: "Visit", body: fullAddress, href: site.address.mapUrl, note: "Get directions in Google Maps" },
            ].map(({ icon: I, title, body, href, note }) => (
              <a key={title} href={href} className="group flex gap-5 rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100 transition hover:bg-white hover:ring-brand-200">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 ring-1 ring-ink-100">
                  <I aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-500">{title}</span>
                  <span className="mt-0.5 block font-semibold text-ink-950 group-hover:text-brand-700">{body}</span>
                  <span className="mt-1 block text-sm text-ink-500">{note}</span>
                </span>
              </a>
            ))}
            <div className="flex gap-5 rounded-3xl bg-ink-50 p-6 ring-1 ring-ink-100">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 ring-1 ring-ink-100">
                <Clock aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-500">Hours</span>
                <span className="mt-0.5 block font-semibold text-ink-950">{site.hours.label}</span>
                <span className="mt-1 block text-sm text-ink-500">Help desk support for clients is available 24/7.</span>
              </span>
            </div>

            <div className="rounded-3xl bg-ink-950 p-6">
              <p className="text-sm font-semibold text-white">Existing clients</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {[
                  { icon: LifeBuoy, label: "Client portal: open a ticket", href: site.portals.clientPortal },
                  { icon: CreditCard, label: "Pay a bill", href: site.portals.payBill },
                  { icon: ShoppingCart, label: "Shop IT products", href: site.portals.shop },
                ].map(({ icon: I, label, href }) => (
                  <li key={href}>
                    <a href={href} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-ink-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white">
                      <I aria-hidden className="size-4 text-brand-300" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-ink-100 sm:p-10 lg:shadow-[0_40px_80px_-40px] lg:shadow-brand-900/25">
            <h2 className="text-2xl font-semibold tracking-tight text-ink-950">Send us a message</h2>
            <p className="mt-2 text-ink-600">Tell us a little about your business and we&apos;ll get back to you shortly.</p>
            <div className="mt-8">
              <ContactForm options={formOptions} email={site.email} phone={site.phone} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
