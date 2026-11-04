import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";
import { categories } from "@/lib/services";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-28 sm:py-36">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[120px]" />
      <Container className="text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-brand-300 uppercase">404</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">We couldn&apos;t find that page</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-ink-300">
          The page may have moved. Try one of these instead, or head back to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/${c.slug}`} className="text-ink-300 hover:text-white">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
