# Valexity Technologies website

Redesign of valexity.com built with Next.js 16 (App Router, Cache Components) and Tailwind CSS v4. Every page is prerendered to static HTML. All original URLs are unchanged.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| Company name, address, phone, hours, social links, partners, team | `src/lib/site.ts` |
| All service and hub page copy, including FAQs | `src/lib/services.ts` |
| Blog posts (Markdown) | `src/lib/blog.ts` |
| Legal pages (Markdown, rendered on the server) | `content/legal/*.md` |
| Metadata and JSON-LD helpers | `src/lib/seo.ts` |
| Sitemap and llms.txt route list | `src/lib/routes.ts` |
| Security headers and redirects (Netlify) | `netlify.toml` |

The address appears in only one place (`site.address`). Every page, the footer and the structured data read it from there.

## Contact form

Submissions go to EmailJS, the processor named in the privacy policy. Set these environment variables in Netlify:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Until they're set, the form opens a pre-filled email to info@valexity.com instead.

## GEO audit items fixed in code

- Template leftovers and copy errors removed: "language consultants", "VIOP", "Together / We create / Brands", "OUR SERVICES IN DROP DOWN", the H1 spacing, and mismatched descriptions on the managed IT, co-managed IT, broadband, cellular and web design pages.
- One address everywhere, including the /contact meta description.
- Self-referencing canonical on every page. /referral-program now redirects to /referral.
- Terms & Conditions and the MSA are rendered on the server (previously loaded in the browser).
- Automatic sitemap that includes all pages, with lastmod dates.
- Service, FAQPage, BreadcrumbList, BlogPosting, and Organization + ProfessionalService schema with hours, geo, areaServed and knowsAbout.
- 3–5 FAQs with direct answers on every service page. Core pages are 700–900 words.
- Partner logos have real alt text. All images use next/image.
- 1200×630 share image and a unique og:title on every page.
- One H1 per page, sentence-case headings, meta descriptions under 160 characters.
- Expanded llms.txt plus a new llms-full.txt, both generated from the content files.
- Security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS with includeSubDomains) and single-hop redirects.
- Keyboard-accessible services menu.
- Both blog posts rewritten as original content (the old copies were syndicated word for word).

## Still needed from the client

These items need real information. None of it has been invented on the site.

1. **Confirm the address.** The site uses 3855 County Farm Road. Update the Elioplus listing and the Google Business Profile to match. Replace `site.geo` with the exact map pin.
2. **Team.** Add names, roles, credentials and LinkedIn URLs to `team` in `src/lib/site.ts`. A Leadership section and Person schema appear automatically.
3. **SLA response times.** Copy currently says response times are "defined in your service agreement". Add real numbers once they're confirmed.
4. **Blog author and review.** Have a named expert review both posts, then set `author` in `src/lib/blog.ts`.
5. **Acanthus Technology.** The client portal is on acanthus.itclientportal.com. If Valexity succeeded Acanthus, say so on /about and add it to `alternateName`.
6. **Service areas.** The five non-HQ states are shown as service areas, not offices. If any has a staffed office, add its address.
7. **Profiles.** Once they exist, add Google Business Profile, Wikidata and Clutch URLs to `sameAs` in `organizationJsonLd()`.
8. **Analytics and chat.** GA4, Pagesense, Apollo and Chatbase are not included because no IDs or consent manager were supplied. When adding them, include a consent banner and update the CSP in `netlify.toml`.
9. **Legal review.** The accessibility statement was updated to describe the new site (keyboard menu; no accessibility widget). Have the client approve that change.
