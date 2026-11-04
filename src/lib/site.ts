/**
 * Single source of truth for Valexity's identity (name, address, phone).
 *
 * The GEO audit flagged conflicting addresses across the old site and directories.
 * Every page, the footer, the contact page and all JSON-LD read from this object,
 * so the address can only ever appear one way. Update it here and nowhere else.
 */
export const site = {
  name: "Valexity Technologies",
  legalName: "Valexity LLC",
  shortName: "Valexity",
  url: "https://www.valexity.com",
  locale: "en_US",
  foundingYear: "2024",
  tagline: "Redefining tech. Smarter, safer, seamless.",
  description:
    "Valexity Technologies is a managed IT and cybersecurity provider in Hanover Park, IL, delivering managed IT, cloud, telecom and web services to businesses.",
  /** A self-contained, quotable description used on the homepage, /about and in llms.txt. */
  summary:
    "Valexity Technologies is a managed IT and managed security service provider (MSSP) headquartered in Hanover Park, Illinois. We run day-to-day IT for small and mid-sized businesses, including help desk support, cybersecurity, Microsoft 365 and Azure, backup and disaster recovery, and IT procurement. We also deliver business VoIP, broadband, cellular, website design and development, and API integration, so one accountable partner covers your technology, connectivity and online presence.",
  email: "info@valexity.com",
  hrEmail: "hr@valexity.com",
  privacyEmail: "privacy@valexity.com",
  phone: "(312) 300-4207",
  phoneE164: "+13123004207",
  phoneHref: "tel:+13123004207",
  address: {
    street: "3855 County Farm Road",
    city: "Hanover Park",
    region: "IL",
    regionName: "Illinois",
    postalCode: "60133",
    country: "US",
    mapUrl: "https://maps.app.goo.gl/qAKEUZfhkqXEAcmB9",
  },
  /** Approximate coordinates for Hanover Park, IL. Replace with the exact office pin from Google Business Profile. */
  geo: { latitude: 41.9995, longitude: -88.1451 },
  /** Standard business day, as defined in the Valexity Terms & Conditions. */
  hours: { days: "Monday to Friday", opens: "09:00", closes: "17:30", label: "Mon–Fri, 9:00 AM – 5:30 PM CT" },
  social: {
    linkedin: "https://www.linkedin.com/company/valexitytechnologies",
    facebook: "https://www.facebook.com/ValexityTechnologies/",
    instagram: "https://www.instagram.com/valexity_technologies/",
  },
  portals: {
    clientPortal: "https://acanthus.itclientportal.com/ClientPortal/Login.aspx",
    shop: "https://shop.valexity.com/",
    payBill: "https://valexitytech.flexpmts.com/",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/**
 * States Valexity serves. The audit noted the old site claimed "offices" in all six states without
 * addresses, so these are presented as service areas. If a state has a staffed office, add its
 * address here and it can be promoted to a LocalBusiness location.
 */
export const serviceAreas = [
  { name: "Illinois", code: "IL", hq: true, note: "Headquarters in Hanover Park, serving Chicago and the surrounding suburbs" },
  { name: "Indiana", code: "IN", hq: false, note: "Service area" },
  { name: "Minnesota", code: "MN", hq: false, note: "Service area" },
  { name: "Texas", code: "TX", hq: false, note: "Service area" },
  { name: "Florida", code: "FL", hq: false, note: "Service area" },
  { name: "California", code: "CA", hq: false, note: "Service area" },
] as const;

export const partners = [
  { name: "Microsoft Silver Partner", file: "microsoft-partner.png", w: 1005, h: 396 },
  { name: "Microsoft Azure", file: "azure.png", w: 386, h: 155 },
  { name: "Microsoft Office 365", file: "office-365.png", w: 477, h: 167 },
  { name: "Google Workspace (G Suite)", file: "g-suite.png", w: 413, h: 105 },
  { name: "Cisco Meraki", file: "cisco-meraki.png", w: 290, h: 132 },
  { name: "Cloudflare", file: "cloudflare.png", w: 219, h: 125 },
  { name: "Datto", file: "datto.png", w: 239, h: 79 },
  { name: "Wasabi", file: "wasabi.png", w: 387, h: 223 },
  { name: "Dell Technologies", file: "dell.png", w: 207, h: 207 },
  { name: "HP", file: "hp.png", w: 225, h: 225 },
  { name: "Lenovo", file: "lenovo.png", w: 515, h: 173 },
  { name: "T-Mobile for Business", file: "t-mobile.png", w: 390, h: 79 },
  { name: "Allied Telesis", file: "allied-telesis.png", w: 659, h: 169 },
  { name: "Kove", file: "kove.png", w: 601, h: 171 },
] as const;

export const values = [
  {
    title: "Security first",
    body: "Every recommendation starts with the question “does this keep the business safe?” Security is built into how we configure, patch and support your systems, not added at the end.",
    icon: "shield",
  },
  {
    title: "Friendly, effective support",
    body: "You get people who explain things in plain English, fix the root cause and follow up. Support should feel like help, not a ticket queue.",
    icon: "headset",
  },
  {
    title: "Proactive, strategic IT",
    body: "We monitor, patch and plan ahead so problems are solved before your team notices them, and your technology roadmap tracks your business goals.",
    icon: "compass",
  },
  {
    title: "Fast, guaranteed response",
    body: "Response commitments are written into your service agreement, so you know exactly how quickly we act when something goes wrong.",
    icon: "zap",
  },
] as const;

export const process = [
  {
    title: "Assess",
    body: "We review your devices, network, accounts, backups and security controls, and document what you have and where the risks are.",
  },
  {
    title: "Plan",
    body: "You get a prioritized plan covering what to fix now, what to budget for and which services fit, with a clear monthly cost.",
  },
  {
    title: "Onboard",
    body: "We deploy monitoring and security tools, tidy up accounts and access, and set up your help desk so your team knows how to reach us.",
  },
  {
    title: "Manage and improve",
    body: "Day-to-day support, patching and monitoring, plus regular reviews where we report on what we did and what comes next.",
  },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Master Service Agreement", href: "/master-service-agreement" },
  { label: "SMS Privacy Policy", href: "/sms-privacy-policy" },
  { label: "SMS Terms & Conditions", href: "/sms-terms-and-conditions" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blogs" },
  { label: "Referral program", href: "/referral" },
  { label: "Contact", href: "/contact" },
] as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blogs" },
] as const;

/**
 * Leadership and team. The GEO audit's top E-E-A-T gap is that the site names nobody.
 * Add real people here (name, role, credentials, LinkedIn). The /about page shows a Leadership
 * section and emits Person schema automatically as soon as this list is not empty.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  credentials?: string[];
  linkedin?: string;
  photo?: string;
};

export const team: TeamMember[] = [];
