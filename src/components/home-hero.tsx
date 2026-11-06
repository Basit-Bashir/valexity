import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partners } from "@/lib/site";
import { AiArchitecture } from "./ai-architecture";
import { Container } from "./ui";

// These files have solid backgrounds, so they can't be recolored for the dark band.
// They appear as text instead, which keeps every partner on the homepage.
const textOnly = new Set(["microsoft-partner.png", "cisco-meraki.png", "cloudflare.png", "lenovo.png"]);

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14">
      {partners.map((p) => (
        <li key={p.file} className="shrink-0">
          {textOnly.has(p.file) ? (
            <span className="text-base font-semibold whitespace-nowrap text-white/60">{p.name}</span>
          ) : (
            <Image
              src={`/partners/${p.file}`}
              alt={hidden ? "" : p.name}
              width={p.w}
              height={p.h}
              sizes="120px"
              className="h-7 w-auto max-w-28 object-contain opacity-60 brightness-0 invert"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

/** Full-height homepage hero. The header floats over it (see `overHero` in header.tsx). */
export function HomeHero() {
  return (
    <section className="relative isolate -mt-18 flex min-h-[min(100svh,58rem)] flex-col overflow-hidden bg-ink-950 pt-18">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="absolute top-[8%] right-[-6%] -z-10 h-[46rem] w-[46rem] rounded-full bg-brand-600/30 blur-[150px]" />
      <div aria-hidden className="absolute bottom-[-18%] left-[-8%] -z-10 h-[34rem] w-[34rem] rounded-full bg-ember-500/15 blur-[130px]" />

      <Container className="grid flex-1 items-center gap-6 pt-8 pb-10 lg:grid-cols-[1.02fr_1fr] lg:gap-4 lg:pt-4">
        <div className="animate-fade-up">
          <h1 className="font-display text-[3.25rem] leading-[1.02] tracking-[-0.01em] text-white sm:text-7xl xl:text-[5.5rem]">
            Redefining tech. <span className="block text-brand-200">Smarter, safer, seamless.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-pretty text-ink-200 sm:text-xl">
            Managed IT, cybersecurity, telecom and web, plus{" "}
            <Link href="/ai-automation-services" className="text-white underline decoration-brand-300/60 underline-offset-4 hover:decoration-brand-200">
              secure AI on Azure
            </Link>{" "}
            with guardrails and compliance built in from day one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/contact"
              className="group inline-flex h-13 items-center gap-2 rounded-lg bg-white px-7 font-medium text-ink-950 transition-colors hover:bg-brand-100"
            >
              Book a free assessment
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services" className="font-medium text-ink-200 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white">
              Explore services
            </Link>
          </div>
        </div>
        <AiArchitecture className="mx-auto mt-6 h-auto w-full max-w-xl lg:mt-0 lg:max-w-none" />
      </Container>

      <Container>
        <div className="flex flex-col gap-5 border-t border-white/15 py-7 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 text-xs font-medium tracking-wide text-ink-400 uppercase">Technology partners we work with</p>
          <div className="group flex min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="animate-marquee flex group-hover:[animation-play-state:paused]">
              <LogoRow />
              <LogoRow hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
