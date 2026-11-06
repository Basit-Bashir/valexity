import type { Metadata } from "next";
import { site, serviceAreas } from "./site";
import type { Faq, Service, Category } from "./services";
import type { Post } from "./blog";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given, without the " | Valexity Technologies" suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

/**
 * Per-page metadata. Every page gets a self-referencing canonical (the audit found two that
 * pointed elsewhere), its own og:title and a description kept under 160 characters.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
  // Page-level openGraph replaces the inherited object, so the share image is set explicitly.
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: managed IT, cybersecurity, telecom and web services` }];
  if (process.env.NODE_ENV !== "production" && description.length > 160) {
    console.warn(`[seo] Meta description for ${path} is ${description.length} chars (max 160).`);
  }
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      images,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// ───────────────────────────── JSON-LD ─────────────────────────────

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

/**
 * Organization + ProfessionalService in one node: the audit asked for a LocalBusiness-type
 * entity with geo and opening hours alongside the Organization.
 * Add Google Business Profile, Wikidata and Clutch URLs to `sameAs` once they exist.
 */
export function organizationJsonLd() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: [site.shortName, "Valexity"],
    url: site.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/brand/logo.png"), width: 516, height: 149 },
    image: absoluteUrl("/opengraph-image"),
    description: site.summary,
    foundingDate: site.foundingYear,
    email: site.email,
    telephone: site.phoneE164,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: serviceAreas.map((a) => ({ "@type": "State", name: a.name })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: site.phoneE164,
        email: site.email,
        areaServed: "US",
        availableLanguage: "English",
      },
      { "@type": "ContactPoint", contactType: "sales", telephone: site.phoneE164, email: site.email, areaServed: "US" },
    ],
    knowsAbout: [
      "Managed IT services",
      "Cybersecurity",
      "Managed security services (MSSP)",
      "Co-managed IT",
      "Microsoft 365",
      "Microsoft Azure",
      "Google Workspace",
      "Amazon Web Services",
      "Backup and disaster recovery",
      "Business VoIP",
      "SIP trunking",
      "Broadband internet",
      "Mobile device management",
      "Website design",
      "Web development",
      "API integration",
      "AI automation",
      "AI guardrails",
      "Model Context Protocol (MCP)",
      "Azure AI",
    ],
    sameAs: [site.social.linkedin, site.social.facebook, site.social.instagram],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(s: Service | Category, path: string, children?: Service[]) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: s.name,
    serviceType: s.name,
    description: "lede" in s ? s.lede : "",
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: serviceAreas.map((a) => ({ "@type": "State", name: a.name })),
    ...("items" in s
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: s.itemsTitle,
            itemListElement: s.items.map((i) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: i.title, description: i.body },
            })),
          },
        }
      : {}),
    ...(children
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: s.name,
            itemListElement: children.map((c) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: c.name, url: absoluteUrl(`/${c.slug}`) },
            })),
          },
        }
      : {}),
  };
}

export function blogPostingJsonLd(p: Post) {
  const url = absoluteUrl(`/blogs/${p.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: p.title,
    description: p.description,
    url,
    mainEntityOfPage: url,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    articleSection: p.category,
    inLanguage: "en-US",
    image: absoluteUrl("/opengraph-image"),
    author: p.author.url
      ? { "@type": "Person", name: p.author.name, jobTitle: p.author.role, url: p.author.url }
      : { "@type": "Organization", name: p.author.name, url: site.url },
    publisher: { "@id": ORG_ID },
  };
}

/** Wraps nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
