import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { categories, servicesIn } from "@/lib/services";
import { companyLinks, fullAddress, legalLinks, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./icons";
import { ButtonLink, Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-700/25 blur-3xl" />

      {/* Closing call to action. Replaces the old template line about "language consultants". */}
      <Container className="relative">
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Ready for IT that just works?
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-300">
              Get a quote or speak to one of our engineers about managed IT, cybersecurity, telecom or your website.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" arrow>
              Contact us
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Container>

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label="Valexity Technologies home" className="inline-block">
              <Image src="/brand/logo.png" alt="Valexity Technologies" width={516} height={149} className="h-10 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-ink-400">
              Managed IT, cybersecurity, telecom and web services for businesses, from our headquarters in {site.address.city},{" "}
              {site.address.regionName}.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <a href={site.address.mapUrl} className="flex gap-3 text-ink-300 hover:text-white">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {fullAddress}
              </a>
              <a href={site.phoneHref} className="flex gap-3 text-ink-300 hover:text-white">
                <PhoneCall aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-3 text-ink-300 hover:text-white">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {site.email}
              </a>
            </address>
            <div className="mt-6 flex gap-2">
              {[
                { href: site.social.linkedin, label: "Valexity on LinkedIn", Icon: LinkedInIcon },
                { href: site.social.facebook, label: "Valexity on Facebook", Icon: FacebookIcon },
                { href: site.social.instagram, label: "Valexity on Instagram", Icon: InstagramIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="grid size-10 place-items-center rounded-full bg-white/5 text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {categories.map((c) => (
              <div key={c.slug}>
                <p className="text-sm font-semibold text-white">
                  <Link href={`/${c.slug}`} className="hover:text-brand-300">
                    {c.name}
                  </Link>
                </p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {servicesIn(c.key).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="text-ink-400 transition-colors hover:text-white">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-sm font-semibold text-white">Company</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ink-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={site.portals.clientPortal} className="text-ink-400 transition-colors hover:text-white">
                    Client portal
                  </a>
                </li>
                <li>
                  <a href={site.portals.shop} className="text-ink-400 transition-colors hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href={site.portals.payBill} className="text-ink-400 transition-colors hover:text-white">
                    Pay bill
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-ink-500 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {site.legalName}. {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy#your-us-privacy-rights" className="hover:text-white">
                Do Not Sell or Share My Personal Info
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
