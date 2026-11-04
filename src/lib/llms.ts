import { posts } from "./blog";
import { categories, servicesIn } from "./services";
import { absoluteUrl } from "./seo";
import { fullAddress, serviceAreas, site } from "./site";

const header = () =>
  [
    `# ${site.name}`,
    "",
    `> ${site.summary}`,
    "",
    `- Headquarters: ${fullAddress}`,
    `- Phone: ${site.phone}`,
    `- Email: ${site.email}`,
    `- Business hours: ${site.hours.label}; help desk available 24/7`,
    `- Service areas: ${serviceAreas.map((a) => a.name).join(", ")}`,
    `- LinkedIn: ${site.social.linkedin}`,
    "",
  ].join("\n");

/** /llms.txt: a concise, link-first map of the site for AI assistants (llmstxt.org format). */
export function llmsTxt() {
  const lines = [header()];
  for (const c of categories) {
    lines.push(`## ${c.name}`, "", `- [${c.name} overview](${absoluteUrl(`/${c.slug}`)}): ${c.summary}`);
    for (const s of servicesIn(c.key)) lines.push(`- [${s.name}](${absoluteUrl(`/${s.slug}`)}): ${s.summary}`);
    lines.push("");
  }
  lines.push(
    "## Company",
    "",
    `- [About](${absoluteUrl("/about")}): Mission, vision, values and how Valexity works with clients.`,
    `- [Locations](${absoluteUrl("/locations")}): Hanover Park, IL headquarters and service areas.`,
    `- [Contact](${absoluteUrl("/contact")}): Phone, email, address and contact form.`,
    `- [Careers](${absoluteUrl("/careers")}): Working at Valexity and the hiring process.`,
    `- [Referral program](${absoluteUrl("/referral")}): Referral and commission programs for partners.`,
    "",
    "## Blog",
    "",
    ...posts.map((p) => `- [${p.title}](${absoluteUrl(`/blogs/${p.slug}`)}): ${p.description}`),
    "",
    "## Optional",
    "",
    `- [Full content for AI assistants](${absoluteUrl("/llms-full.txt")})`,
    `- [Privacy Policy](${absoluteUrl("/privacy-policy")})`,
    `- [Terms & Conditions](${absoluteUrl("/terms-and-conditions")})`,
    `- [Master Service Agreement](${absoluteUrl("/master-service-agreement")})`,
    `- [Accessibility Statement](${absoluteUrl("/accessibility")})`,
    "",
  );
  return lines.join("\n");
}

/** /llms-full.txt: every service page's substantive content in one plain-text document. */
export function llmsFullTxt() {
  const out = [header()];
  for (const c of categories) {
    out.push(`## ${c.name}`, "", `URL: ${absoluteUrl(`/${c.slug}`)}`, "", c.lede, "", ...c.body.flatMap((p) => [p, ""]));
    for (const f of c.faqs) out.push(`**${f.q}**`, f.a, "");
    for (const s of servicesIn(c.key)) {
      out.push(`### ${s.name}`, "", `URL: ${absoluteUrl(`/${s.slug}`)}`, "", s.lede, "", `${s.itemsTitle}:`, "");
      for (const i of s.items) out.push(`- **${i.title}:** ${i.body}`);
      out.push("", "Who it's for:", ...s.forWho.map((w) => `- ${w}`), "", "Frequently asked questions:", "");
      for (const f of s.faqs) out.push(`**${f.q}**`, f.a, "");
    }
  }
  out.push("## Blog", "");
  for (const p of posts) out.push(`### ${p.title}`, "", `URL: ${absoluteUrl(`/blogs/${p.slug}`)}`, `Published: ${p.datePublished}`, "", p.body, "");
  return out.join("\n");
}
