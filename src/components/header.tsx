"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cx } from "./ui";

export type NavGroup = {
  name: string;
  href: string;
  summary: string;
  items: { name: string; href: string }[];
};

type Props = {
  groups: NavGroup[];
  links: readonly { label: string; href: string }[];
  portals: { clientPortal: string; shop: string; payBill: string };
  phone: { label: string; href: string };
};

/**
 * Site header with a keyboard-accessible Services mega menu.
 * The old site's accessibility statement noted its hover-only menu lacked keyboard support;
 * this one opens on click, Enter or Space, closes on Escape or outside click, and also opens on hover.
 */
export function Header({ groups, links, portals, phone }: Props) {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const wrapRef = useRef<HTMLLIElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // On the homepage the header floats over the full-height hero until the visitor scrolls.
  const overHero = pathname === "/" && !scrolled && !megaOpen && !mobileOpen;

  const servicesActive =
    pathname === "/services" || groups.some((g) => g.href === pathname || g.items.some((i) => i.href === pathname));

  const hoverOpen = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setMegaOpen(true);
  };
  const hoverClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        overHero
          ? "border-transparent bg-transparent"
          : scrolled || megaOpen
            ? "border-white/10 bg-ink-950/85 backdrop-blur-xl"
            : "border-transparent bg-ink-950",
      )}
    >
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-white px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Valexity Technologies home">
          <Image src="/brand/logo.png" alt="Valexity Technologies" width={516} height={149} priority className="h-9 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li ref={wrapRef} onMouseEnter={hoverOpen} onMouseLeave={hoverClose}>
              <button
                type="button"
                aria-expanded={megaOpen}
                aria-controls={panelId}
                onClick={() => setMegaOpen((v) => !v)}
                className={cx(
                  "inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors",
                  servicesActive || megaOpen ? "text-white" : "text-ink-300 hover:text-white",
                )}
              >
                Services
                <ChevronDown aria-hidden className={cx("size-4 transition-transform", megaOpen && "rotate-180")} />
              </button>

              <div
                id={panelId}
                hidden={!megaOpen}
                className="absolute inset-x-0 top-full border-b border-white/10 bg-ink-950/95 backdrop-blur-xl"
              >
                <div className="mx-auto grid max-w-7xl grid-cols-[1fr_1fr_1fr_0.9fr] gap-8 px-8 py-10">
                  {groups.map((g) => (
                    <div key={g.href}>
                      <Link href={g.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        {g.name}
                        <ArrowUpRight aria-hidden className="size-3.5 text-brand-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                      <p className="mt-1.5 text-sm leading-6 text-ink-400">{g.summary}</p>
                      <ul className="mt-4 space-y-1">
                        {g.items.map((i) => (
                          <li key={i.href}>
                            <Link
                              href={i.href}
                              aria-current={pathname === i.href ? "page" : undefined}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm text-ink-200 transition-colors hover:bg-white/5 hover:text-white aria-[current=page]:text-brand-300"
                            >
                              {i.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-white/10 bg-linear-to-br from-brand-700/40 via-ink-900 to-ink-900 p-6">
                    <p className="text-sm font-semibold text-white">Not sure where to start?</p>
                    <p className="mt-2 text-sm leading-6 text-ink-300">
                      Book a free assessment and we&apos;ll recommend the right mix of services.
                    </p>
                    <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 hover:text-brand-200">
                      Talk to an engineer <ArrowUpRight aria-hidden className="size-4" />
                    </Link>
                    <Link href="/services" className="mt-3 block text-sm text-ink-400 hover:text-white">
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                  className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-ink-300 transition-colors hover:text-white aria-[current=page]:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={portals.clientPortal} className="px-3 text-sm font-medium text-ink-300 transition-colors hover:text-white">
            Client portal
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-medium text-ink-950 transition-colors hover:bg-brand-100"
          >
            Contact us
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pt-4 pb-12 sm:px-8">
          {groups.map((g) => (
            <details key={g.href} className="group border-b border-white/10 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                {g.name}
                <ChevronDown aria-hidden className="size-5 text-ink-400 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="pb-3">
                <li>
                  <Link href={g.href} className="block py-2 pl-3 text-sm font-medium text-brand-300">
                    {g.name} overview
                  </Link>
                </li>
                {g.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="block py-2 pl-3 text-sm text-ink-300">
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <ul className="mt-2">
            {[{ label: "All services", href: "/services" }, ...links, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block border-b border-white/10 py-4 text-base font-medium text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-2 text-center text-sm">
            <a href={portals.clientPortal} className="rounded-xl bg-white/5 px-2 py-3 text-ink-200">Client portal</a>
            <a href={portals.shop} className="rounded-xl bg-white/5 px-2 py-3 text-ink-200">Shop</a>
            <a href={portals.payBill} className="rounded-xl bg-white/5 px-2 py-3 text-ink-200">Pay bill</a>
          </div>
          <a href={phone.href} className="mt-4 flex h-12 items-center justify-center rounded-full bg-brand-600 font-medium text-white">
            Call {phone.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
