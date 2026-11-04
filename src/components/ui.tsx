import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cx(
        "inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] uppercase",
        tone === "dark" ? "text-brand-300" : "text-brand-700",
      )}
    >
      <span aria-hidden className="h-px w-6 bg-linear-to-r from-brand-500 to-ember-500" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={cx(
          "mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          tone === "dark" ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </Tag>
      {lede && (
        <p className={cx("mt-5 text-lg leading-8 text-pretty", tone === "dark" ? "text-ink-300" : "text-ink-600")}>
          {lede}
        </p>
      )}
    </div>
  );
}

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_24px_-8px] shadow-brand-600/60 hover:bg-brand-500 focus-visible:outline-brand-400",
  secondary: "bg-white/10 text-white ring-1 ring-white/20 ring-inset backdrop-blur hover:bg-white/15",
  ghost: "text-ink-900 ring-1 ring-ink-200 ring-inset hover:bg-ink-50 hover:ring-ink-300",
  light: "bg-white text-ink-950 hover:bg-ink-100",
};

export function ButtonLink({
  href,
  variant = "primary",
  arrow,
  className,
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  const cls = cx(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-medium transition-all duration-200",
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href as string} className={cls} {...(rest as ComponentProps<"a">)}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function CheckList({ items, tone = "light" }: { items: readonly string[]; tone?: "light" | "dark" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className={cx(
              "mt-1 grid size-5 shrink-0 place-items-center rounded-full",
              tone === "dark" ? "bg-brand-500/20 text-brand-300" : "bg-brand-50 text-brand-700",
            )}
          >
            <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2.5 6.5 5 9l4.5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={tone === "dark" ? "text-ink-200" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
