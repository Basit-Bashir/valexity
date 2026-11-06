import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";
import type { Faq, Service } from "@/lib/services";
import type { Photo } from "@/lib/service-photos";
import { partners, site } from "@/lib/site";
import { Icon } from "./icons";
import { ButtonLink, Container, Eyebrow, SectionHeading, cx } from "./ui";

export type Crumb = { name: string; path: string };

/** Dark page header used by every inner page. Includes visible breadcrumbs (mirrored in JSON-LD). */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
  aside,
  photo,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
  /** Full-width photo banner above the heading. Pages without one keep the plain dark grid. */
  photo?: Photo;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-20 sm:pb-24">
      {photo ? (
        <div className="relative h-56 sm:h-72 lg:h-[26rem]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: photo.position ?? "center" }}
          />
          {/* Only the bottom edge fades, so the photo stays clear and blends into the heading below. */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink-950 to-transparent" />
          {photo.credit && (
            <p className="absolute right-3 bottom-2 text-[0.6875rem] text-white/70">
              Photo:{" "}
              <a href={photo.credit.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
                {photo.credit.by}
              </a>
              ,{" "}
              <a href={photo.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
                {photo.credit.license}
              </a>
            </p>
          )}
        </div>
      ) : (
        <>
          <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
          <div aria-hidden className="absolute -top-48 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-600/30 blur-[120px]" />
          <div aria-hidden className="absolute top-24 left-[-12%] -z-10 h-72 w-72 rounded-full bg-ember-500/15 blur-[110px]" />
        </>
      )}
      <Container className={photo ? "pt-6" : "pt-10 sm:pt-14"}>
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className={photo ? "mb-8" : "mb-10"}>
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  <span aria-hidden className="text-ink-600">
                    /
                  </span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink-200">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className={cx("grid gap-12", Boolean(aside) && "lg:grid-cols-[1.25fr_1fr] lg:items-end")}>
          <div className="animate-fade-up max-w-3xl">
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {title}
            </h1>
            {lede && <p className="mt-6 text-lg leading-8 text-pretty text-ink-300 sm:text-xl sm:leading-9">{lede}</p>}
            {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
}

/** Server-rendered FAQ accordion using native <details>, so answers are in the HTML for crawlers. */
export function FaqList({ faqs, title = "Frequently asked questions", lede }: { faqs: Faq[]; title?: string; lede?: string }) {
  return (
    <section className="bg-white py-24 sm:py-28" aria-labelledby="faq-heading">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-heading" className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-600">
            {lede ?? (
              <>
                Can&apos;t find your answer? Call{" "}
                <a href={site.phoneHref} className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-4">
                  {site.phone}
                </a>{" "}
                or{" "}
                <Link href="/contact" className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-4">
                  send us a message
                </Link>
                .
              </>
            )}
          </p>
        </div>
        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-medium text-ink-950">{f.q}</h3>
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-ink-50 text-ink-600 transition-all group-open:rotate-45 group-open:bg-brand-50 group-open:text-brand-700">
                  <Plus aria-hidden className="size-4" />
                </span>
              </summary>
              <p className="pr-12 pb-5 text-base leading-7 text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ServiceCard({ service, tone = "light" }: { service: Service; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link
      href={`/${service.slug}`}
      className={cx(
        "group relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300",
        dark
          ? "bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07] hover:ring-brand-400/40"
          : "bg-white ring-1 ring-ink-100 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px] hover:shadow-brand-900/25 hover:ring-brand-200",
      )}
    >
      <span
        className={cx(
          "grid size-12 place-items-center rounded-2xl",
          dark ? "bg-brand-500/15 text-brand-300" : "bg-linear-to-br from-brand-50 to-brand-100 text-brand-700",
        )}
      >
        <Icon name={service.icon} className="size-6" />
      </span>
      <h3 className={cx("mt-6 text-lg font-semibold", dark ? "text-white" : "text-ink-950")}>{service.name}</h3>
      <p className={cx("mt-2 flex-1 text-[0.9375rem] leading-7", dark ? "text-ink-400" : "text-ink-600")}>{service.summary}</p>
      <span className={cx("mt-6 inline-flex items-center gap-1.5 text-sm font-medium", dark ? "text-brand-300" : "text-brand-700")}>
        Learn more
        <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

/** Partner logos with real names as alt text (the old site used alt="logo" for all of them). */
export function PartnerStrip({ title = "Technology partners we work with" }: { title?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-6 pr-6">
      {partners.map((p) => (
        <li key={p.file} className="grid h-20 w-44 shrink-0 place-items-center rounded-2xl bg-white px-6 ring-1 ring-ink-100">
          <Image
            src={`/partners/${p.file}`}
            alt={hidden ? "" : p.name}
            width={p.w}
            height={p.h}
            sizes="140px"
            className="max-h-11 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={title} className="border-y border-ink-100 bg-ink-50 py-12">
      <Container>
        <p className="text-center font-mono text-xs tracking-[0.18em] text-ink-500 uppercase">{title}</p>
      </Container>
      <div className="group relative mt-8 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="animate-marquee flex group-hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let's talk about your IT",
  body = "Book a free, no-obligation assessment. We'll review your environment and recommend a clear plan with a fixed monthly price.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white pb-24 sm:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-14 sm:px-14 sm:py-16">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
          <div aria-hidden className="absolute -right-24 -bottom-32 -z-10 h-96 w-96 rounded-full bg-brand-600/40 blur-[100px]" />
          <div aria-hidden className="absolute -top-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-ember-500/20 blur-[90px]" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg leading-8 text-ink-300">{body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href="/contact" arrow>
                Book a consultation
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="secondary">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProcessSteps({ steps }: { steps: readonly { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl bg-ink-100 ring-1 ring-ink-100 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative bg-white p-8">
          <span className="font-mono text-sm text-brand-600">0{i + 1}</span>
          <h3 className="mt-6 text-lg font-semibold text-ink-950">{s.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-7 text-ink-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export { SectionHeading };
