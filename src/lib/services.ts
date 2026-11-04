/**
 * Service catalogue. Every service and hub page renders from this file, so copy can be
 * edited here without touching layouts. Routes match the original valexity.com URLs exactly.
 *
 * Copy rules (from the GEO audit):
 * - Open each page with a direct, self-contained answer to "what is this and who is it for".
 * - Describe what Valexity does, not just what the technology is.
 * - Never publish numbers (SLAs, prices, client counts) that the business cannot back up.
 *   Where a number belongs, the copy points to the service agreement instead.
 */

export type CategoryKey = "it" | "digital" | "telecom";

export type IconName =
  | "shield"
  | "server"
  | "cloud"
  | "printer"
  | "cart"
  | "users"
  | "palette"
  | "plug"
  | "code"
  | "phone"
  | "wifi"
  | "smartphone"
  | "monitor"
  | "globe"
  | "radio";

export type Faq = { q: string; a: string };
export type Item = { title: string; body: string };

export type Service = {
  slug: string;
  category: CategoryKey;
  name: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lede: string;
  summary: string;
  itemsTitle: string;
  items: Item[];
  forWho: string[];
  outcomes: string[];
  faqs: Faq[];
  related: string[];
};

export type Category = {
  key: CategoryKey;
  slug: string;
  name: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lede: string;
  summary: string;
  body: string[];
  faqs: Faq[];
};

export const categories: Category[] = [
  {
    key: "it",
    slug: "it-services",
    name: "IT Services",
    icon: "server",
    metaTitle: "IT Services: Managed IT, Cybersecurity & Cloud",
    metaDescription:
      "Managed IT, cybersecurity, cloud, co-managed IT, print and IT procurement for businesses, from Valexity Technologies in Hanover Park, IL.",
    eyebrow: "IT Services",
    headline: "IT that runs quietly in the background, so your team can get on with the work",
    lede: "Valexity's IT services cover everything a growing business needs from an IT department: help desk support, security, cloud platforms, backups, printers and hardware purchasing. Choose fully managed IT, or keep your in-house team and add our engineers where you need them.",
    summary: "Managed IT, cybersecurity, cloud, co-managed IT, print and procurement.",
    body: [
      "Most small and mid-sized businesses don't need a large internal IT department. They need devices that work, accounts that are secure, data that is backed up and someone who answers when something breaks. Our IT services deliver exactly that, for a predictable monthly cost.",
      "Every engagement starts with an assessment of your current environment. We then propose the right mix of services, from a fully managed IT plan to a co-managed arrangement that supports your existing staff.",
    ],
    faqs: [
      {
        q: "What is the difference between managed IT and co-managed IT?",
        a: "With managed IT, Valexity acts as your entire IT department: we handle support, security, patching, backups and planning. With co-managed IT, you keep your in-house IT staff and we fill the gaps, such as after-hours coverage, security tooling, project capacity or specialist skills. Both are billed monthly, and you can move between them as your team changes.",
      },
      {
        q: "How is managed IT priced?",
        a: "Managed IT is usually priced per user or per device each month, so cost scales with your headcount. The price depends on the number of users, the systems we support and the security controls you need. We give you a fixed monthly quote after a no-obligation assessment, with no hidden fees for routine support.",
      },
      {
        q: "Do you support businesses outside Illinois?",
        a: "Yes. Valexity is headquartered in Hanover Park, Illinois, and supports clients in Illinois, Indiana, Minnesota, Texas, Florida and California. Most support is delivered remotely through secure tools, and we arrange on-site work when hardware or network changes need hands on the equipment.",
      },
    ],
  },
  {
    key: "digital",
    slug: "digital-services",
    name: "Digital Services",
    icon: "globe",
    metaTitle: "Digital Services: Website Design, Development & API Integration",
    metaDescription:
      "Website design, full-stack web development and API integration from Valexity Technologies. Fast, secure, search-ready sites and connected systems.",
    eyebrow: "Digital Services",
    headline: "Websites and integrations built by the same team that secures your IT",
    lede: "Valexity designs and builds websites, web applications and API integrations for businesses that want a fast, secure online presence and systems that talk to each other. Because our web team works alongside our IT and security engineers, hosting, security and maintenance are handled from day one.",
    summary: "Website design, website development and API integration.",
    body: [
      "A website is often the first conversation a customer has with your business. We design sites that load quickly, read well on any device, rank in search and turn visitors into inquiries.",
      "Behind the site, we connect the tools you already use, such as CRMs, payment gateways, accounting platforms and internal databases, so data moves automatically instead of being re-typed.",
    ],
    faqs: [
      {
        q: "How long does a business website take to build?",
        a: "Timelines depend on the number of pages, the amount of custom functionality and how quickly content and feedback are ready. A brochure site is typically much quicker than an e-commerce store or custom web application. We agree a schedule with milestones in your proposal, before any work starts.",
      },
      {
        q: "Will my new website be optimized for search and AI search engines?",
        a: "Yes. We build sites with clean, server-rendered HTML, correct page titles and descriptions, structured data, an automatic sitemap and fast load times. These are the technical foundations that Google, Bing and AI assistants such as ChatGPT and Perplexity rely on to understand and cite a website.",
      },
      {
        q: "Can you work with my existing website?",
        a: "Yes. We can redesign an existing site, migrate it to a modern platform, or maintain and improve it as it is. We start by reviewing its performance, security and content, then recommend whether to improve or rebuild it.",
      },
    ],
  },
  {
    key: "telecom",
    slug: "telecom-services",
    name: "Telecom Services",
    icon: "radio",
    metaTitle: "Telecom Services: Business VoIP, Broadband & Cellular",
    metaDescription:
      "Business VoIP phone systems, broadband internet and cellular plans from Valexity Technologies, managed with your IT by one accountable team.",
    eyebrow: "Telecom Services",
    headline: "Phones, internet and mobile, managed by the people who run your IT",
    lede: "Valexity provides business VoIP phone systems, broadband internet and cellular services, and manages them together with your IT. One partner sources the right carrier, installs the service, and supports it when something goes wrong, so you're not stuck calling three providers to find out whose problem it is.",
    summary: "Business VoIP, broadband and cellular, including 5G.",
    body: [
      "Connectivity problems are IT problems. When calls drop or the internet slows down, the cause is often the network, a firewall or a misconfigured device, not the carrier. Because we manage both, we can find and fix the real cause.",
      "We compare options across providers for your locations, handle installation and porting, and keep your services documented so moves, adds and changes are simple.",
    ],
    faqs: [
      {
        q: "Can I keep my existing business phone numbers if I switch to VoIP?",
        a: "In most cases, yes. Business numbers can usually be ported to a new VoIP provider. Valexity manages the porting request, schedules the cut-over and tests inbound and outbound calling, so customers keep reaching you on the same numbers.",
      },
      {
        q: "Why buy telecom services through an IT provider?",
        a: "Phones and internet depend on your network, firewall and devices. When Valexity manages telecom and IT together, one team owns the outcome: we diagnose call quality and outage issues end to end, coordinate with carriers on your behalf, and keep a single, accurate record of every line, circuit and device.",
      },
    ],
  },
];

export const services: Service[] = [
  // ───────────────────────────── IT SERVICES ─────────────────────────────
  {
    slug: "managed-it-services",
    category: "it",
    name: "Managed IT Services",
    icon: "monitor",
    metaTitle: "Managed IT Services: Help Desk, Patching, MFA & Backup",
    metaDescription:
      "Fully managed IT for small and mid-sized businesses: 24/7 help desk, patch management, MFA, monitoring and backup and disaster recovery.",
    headline: "Your complete IT department, for a predictable monthly fee",
    lede: "Managed IT services from Valexity give your business a complete, outsourced IT department. We provide a help desk your staff can call, keep every device patched and monitored, secure accounts with multi-factor authentication, and back up your data so you can recover quickly from hardware failure, human error or ransomware.",
    summary:
      "Help desk support, patch management, MFA, monitoring and backup, so your business stays secure, efficient and ready to scale.",
    itemsTitle: "What's included",
    items: [
      {
        title: "Help desk support",
        body: "Fast, friendly help for everyday IT problems, from password resets and printer issues to software errors and network outages. Our help desk is available 24/7, with tiered support so simple requests are resolved quickly and complex issues go straight to a senior engineer.",
      },
      {
        title: "Patch management",
        body: "Unpatched software is one of the most common ways attackers get in. We test and deploy operating system, browser and application updates on a regular schedule, track which devices are up to date, and report on anything that needs attention.",
      },
      {
        title: "Multi-factor authentication (MFA)",
        body: "We roll out MFA across email, Microsoft 365 or Google Workspace, VPNs and critical business apps, so a stolen password alone isn't enough to break in. We also help your staff enroll their devices and handle lost-phone recovery.",
      },
      {
        title: "Monitoring and maintenance",
        body: "Remote monitoring watches servers, workstations and network equipment around the clock. We're alerted to failing disks, full storage, offline devices and security events, and we fix many issues before anyone notices them.",
      },
      {
        title: "Backup and disaster recovery",
        body: "Automated, regular backups of your servers, cloud data and critical files, stored securely off-site. We test restores and keep a documented recovery plan, so you can get back to work after a natural disaster, hardware malfunction or ransomware attack.",
      },
      {
        title: "Strategic IT planning",
        body: "Regular reviews cover what we've done, upcoming hardware refreshes, licensing and security improvements. You get a technology roadmap and budget that match where the business is heading.",
      },
    ],
    forWho: [
      "Small and mid-sized businesses without a full-time IT department",
      "Growing teams that have outgrown an informal “IT person”",
      "Organizations that need to meet cyber-insurance or compliance requirements",
      "Owners who want a fixed, predictable IT budget",
    ],
    outcomes: [
      "One number to call for every IT issue",
      "Devices patched and monitored automatically",
      "Accounts protected with MFA",
      "Tested backups and a written recovery plan",
    ],
    faqs: [
      {
        q: "What are managed IT services?",
        a: "Managed IT services are an outsourced IT department delivered for a monthly fee. Instead of paying for IT only when something breaks, a managed service provider (MSP) like Valexity proactively supports, secures and maintains your technology, including help desk support, patching, monitoring, security and backups, under a service agreement with defined responsibilities.",
      },
      {
        q: "How quickly will Valexity respond to a support request?",
        a: "Response times are defined in your service agreement by priority level, so a business-down emergency is handled far faster than a routine request. Our help desk is available 24/7, and critical issues such as outages or security incidents are escalated immediately to an engineer.",
      },
      {
        q: "Is managed IT cheaper than hiring an in-house IT person?",
        a: "For many small and mid-sized businesses, yes. A managed plan gives you a whole team with a range of skills, round-the-clock coverage and enterprise-grade tools for a monthly fee, without salary, benefits, training or vacation coverage. Larger organizations often combine an internal team with co-managed IT instead.",
      },
      {
        q: "What happens during onboarding?",
        a: "We document your devices, accounts and network, install monitoring and security agents, review backups and access, and fix urgent risks first. Your staff receive clear instructions for contacting the help desk. Most of this happens in the background with minimal disruption to the working day.",
      },
      {
        q: "Do you support Microsoft 365 and Google Workspace?",
        a: "Yes. We manage both, including user accounts, licensing, email security, MFA, file sharing permissions and backup. We can also migrate you from one platform to the other, or from an old on-premises email server.",
      },
    ],
    related: ["cyber-security", "co-managed-it-services", "cloud-services"],
  },
  {
    slug: "cyber-security",
    category: "it",
    name: "Cyber Security",
    icon: "shield",
    metaTitle: "Cybersecurity Services: Monitoring, Endpoint & Compliance",
    metaDescription:
      "Managed cybersecurity for businesses: 24/7 threat monitoring, network and endpoint protection, encryption, compliance audits and staff security training.",
    headline: "Practical cybersecurity that protects the business and satisfies your insurer",
    lede: "Valexity's cybersecurity services protect your business from ransomware, phishing and data theft with layered defences: 24/7 threat monitoring, secured networks and devices, encrypted data, regular risk assessments and security training for your staff. As a managed security service provider (MSSP), we run these controls day to day rather than handing you a report and leaving.",
    summary:
      "Tailored cybersecurity with expert guidance: monitoring, network and endpoint protection, encryption, compliance and training.",
    itemsTitle: "How we protect you",
    items: [
      {
        title: "Threat detection and monitoring",
        body: "Proactive 24/7 monitoring of your devices, accounts and network to detect suspicious activity, such as unusual sign-ins, malware behavior or data leaving the business, and respond before it affects your systems.",
      },
      {
        title: "Network security",
        body: "Business-grade firewalls, secure VPN access, network segmentation and intrusion detection that keep unauthorized users out and stop threats from spreading across your network.",
      },
      {
        title: "Endpoint protection",
        body: "Next-generation antivirus, anti-malware and device management for computers, laptops and mobile phones, so every device that touches company data meets the same security standard.",
      },
      {
        title: "Data encryption",
        body: "Encryption of sensitive information at rest and in transit, including laptop disk encryption and secure email, so only authorized users can read your data, even if a device is lost or stolen.",
      },
      {
        title: "Risk assessment and compliance",
        body: "Security audits that find vulnerabilities and gaps against the standards that apply to you, such as HIPAA, GDPR or your cyber-insurance questionnaire, followed by a prioritized plan to close them.",
      },
      {
        title: "Employee security training",
        body: "Short, practical training and simulated phishing campaigns that teach your team to spot phishing, social engineering and other common attacks, which remain the most common way breaches begin.",
      },
    ],
    forWho: [
      "Businesses renewing or applying for cyber-insurance",
      "Organizations handling health, financial or customer data",
      "Teams working remotely or across several locations",
      "Leaders who want to know where they stand on security today",
    ],
    outcomes: [
      "Threats detected and handled around the clock",
      "The controls insurers ask about, in place and documented",
      "Staff who recognize phishing attempts",
      "A clear, prioritized security roadmap",
    ],
    faqs: [
      {
        q: "What is a managed security service provider (MSSP)?",
        a: "An MSSP is a company that monitors and manages a business's security on an ongoing basis. Instead of a one-off audit, Valexity runs your security controls day to day: watching for threats, keeping protection tools up to date, responding to incidents and reporting on your security posture.",
      },
      {
        q: "What security controls do cyber-insurance carriers usually require?",
        a: "Most carriers now ask about multi-factor authentication, endpoint detection and response, regular offline or immutable backups, email filtering, patching, and security awareness training. Valexity puts these controls in place, documents them, and helps you answer the insurer's questionnaire accurately.",
      },
      {
        q: "Is my business too small to be targeted by hackers?",
        a: "No. Small and mid-sized businesses are frequent targets because they often have weaker defences than large enterprises. Most attacks are automated, such as phishing emails and password-guessing, and are aimed at any organization they can reach, regardless of size.",
      },
      {
        q: "What should we do if we think we've been hacked?",
        a: "Call us immediately on (312) 300-4207. Don't turn off affected computers or delete anything, because evidence may be needed. Disconnect suspicious devices from the network if you can. We'll contain the incident, assess what was affected, and help you recover and notify the right people.",
      },
    ],
    related: ["managed-it-services", "co-managed-it-services", "cloud-services"],
  },
  {
    slug: "cloud-services",
    category: "it",
    name: "Cloud Services",
    icon: "cloud",
    metaTitle: "Cloud Services: Microsoft 365, Google Workspace, Azure & AWS",
    metaDescription:
      "Cloud services from a Microsoft partner: Microsoft 365, Google Workspace, Azure and AWS migration, licensing, security and ongoing management.",
    headline: "Work securely from anywhere, on the cloud platform that fits your business",
    lede: "Valexity's cloud services help your business move to, secure and manage the cloud. We set up and support Microsoft 365, Google Workspace, Microsoft Azure and Amazon Web Services (AWS), so your team can collaborate and access data securely from anywhere while we handle licensing, security settings, backups and migrations.",
    summary:
      "Microsoft 365, Google Workspace, Azure and AWS: set up, migrated, secured and managed.",
    itemsTitle: "Cloud platforms we manage",
    items: [
      {
        title: "Microsoft 365",
        body: "Word, Excel, PowerPoint, Outlook, Teams, SharePoint and OneDrive on every device. We handle licensing, migration from old email servers, Teams and SharePoint setup, security policies and backup, as a Microsoft partner.",
      },
      {
        title: "Google Workspace",
        body: "Gmail, Docs, Drive, Meet and Calendar for teams that prefer Google's tools. We set up domains and users, migrate mailboxes and files, configure sharing and security settings, and support your staff day to day.",
      },
      {
        title: "Microsoft Azure",
        body: "Scalable compute, storage and networking for applications, file servers and virtual desktops. We design, deploy and manage Azure environments with cost controls, so you only pay for what you actually use.",
      },
      {
        title: "Amazon Web Services (AWS)",
        body: "Computing, storage and databases on the world's largest cloud platform. We help you migrate workloads, set up secure access and backups, and keep monthly spend predictable.",
      },
    ],
    forWho: [
      "Businesses still running an on-premises email or file server",
      "Teams that work remotely or across several sites",
      "Companies with unused or mismatched software licenses",
      "Organizations planning to move applications to the cloud",
    ],
    outcomes: [
      "Secure access to files and email from anywhere",
      "Licenses matched to what each user actually needs",
      "Cloud data that is backed up, not just synced",
      "A planned migration with minimal downtime",
    ],
    faqs: [
      {
        q: "Should my business use Microsoft 365 or Google Workspace?",
        a: "Both are excellent. Microsoft 365 suits businesses that rely on desktop Excel, Word and Outlook, use Teams, or need advanced security and compliance features. Google Workspace suits teams that work mainly in the browser and value simplicity. Valexity can recommend the best fit based on how your team works and the apps you depend on.",
      },
      {
        q: "Is my data backed up automatically in Microsoft 365?",
        a: "Not fully. Microsoft keeps the service running, but deleted or encrypted files and mailboxes can be lost once retention periods expire. A separate cloud backup protects against accidental deletion, departing employees and ransomware. Valexity includes Microsoft 365 and Google Workspace backup in our managed plans.",
      },
      {
        q: "How long does a cloud email migration take?",
        a: "It depends on the number of mailboxes and the amount of data, but most migrations are planned so staff keep working throughout. We copy data in the background, switch over outside business hours, and help users reconnect their devices the next morning.",
      },
      {
        q: "Can you reduce our cloud costs?",
        a: "Often, yes. We review your Microsoft 365, Google Workspace, Azure and AWS subscriptions for unused licenses, oversized resources and better-fitting plans, then make the changes for you and keep spending under review.",
      },
    ],
    related: ["managed-it-services", "cyber-security", "it-procurement"],
  },
  {
    slug: "print-services",
    category: "it",
    name: "Print Services",
    icon: "printer",
    metaTitle: "Managed Print Services: Printers, Repair & Paper Supply",
    metaDescription:
      "Managed print services for offices: printers, copiers and multifunction devices, fast service and repair, and reliable paper supply from Valexity.",
    headline: "Printers that just work, and a single supplier for hardware, repairs and paper",
    lede: "Valexity's print services help your business cut printing costs and downtime. We supply and set up printers, copiers and multifunction devices, repair and maintain them, and keep you stocked with paper, all from one supplier that also understands the network and security settings your printers depend on.",
    summary: "Print hardware, service and repair, and reliable paper supply.",
    itemsTitle: "What we provide",
    items: [
      {
        title: "Print hardware",
        body: "High-performance printers, copiers and multifunction devices sized for your volume, from a single desktop printer to a fleet across several offices. We install, network and secure each device, and set up scanning to email or cloud storage.",
      },
      {
        title: "Service and repair",
        body: "Fast, professional repair and preventive maintenance to keep printing equipment running. When a device fails, we diagnose whether it's the printer, the driver or the network, and fix the real cause.",
      },
      {
        title: "Paper supply",
        body: "Reliable, cost-effective paper sourcing for every type of printing, delivered on a schedule that matches your usage, so you never run out before a deadline.",
      },
    ],
    forWho: [
      "Offices with several printers from different brands",
      "Businesses with high-volume or specialist print needs",
      "Teams that lose time to printer problems",
      "Organizations that want to secure printers on the network",
    ],
    outcomes: [
      "Fewer printer problems and faster repairs",
      "Right-sized devices for your actual volume",
      "One supplier for hardware, service and supplies",
      "Printers secured like every other network device",
    ],
    faqs: [
      {
        q: "What are managed print services?",
        a: "Managed print services combine printer hardware, maintenance, repairs and supplies into one arrangement with one provider. Instead of managing several vendors and surprise repair bills, your business gets reliable printing with predictable costs and a single point of contact.",
      },
      {
        q: "Can you support the printers we already own?",
        a: "Yes. We can service, network and secure most existing business printers and multifunction devices. When a device is near the end of its life or costs more to run than to replace, we'll tell you and recommend a suitable replacement.",
      },
      {
        q: "Why do printers need to be secured?",
        a: "Network printers store scanned documents, connect to email and often run outdated firmware, which makes them an easy target. Valexity updates printer firmware, changes default passwords and restricts access, as we do for every other device on your network.",
      },
    ],
    related: ["it-procurement", "managed-it-services", "cyber-security"],
  },
  {
    slug: "it-procurement",
    category: "it",
    name: "IT Procurement",
    icon: "cart",
    metaTitle: "IT Procurement: Hardware, Software & Networking Equipment",
    metaDescription:
      "IT procurement for businesses: we source, buy, configure and deploy hardware, software and networking equipment that fits your budget.",
    headline: "The right technology at the right price, delivered ready to use",
    lede: "Valexity's IT procurement service takes the work out of buying technology. We recommend, source and purchase laptops, desktops, servers, software and networking equipment that fit your budget and technical requirements, then configure and deploy them so they arrive ready to work.",
    summary:
      "Sourcing, purchasing and deploying hardware, software and networking equipment.",
    itemsTitle: "How procurement works",
    items: [
      {
        title: "Needs assessment and recommendations",
        body: "We match equipment to how each role actually works, so you don't overspend on specifications nobody needs or underspend on devices that slow your team down.",
      },
      {
        title: "Sourcing and purchasing",
        body: "We work with major manufacturers and distributors, including Dell, HP, Lenovo, Cisco Meraki and Microsoft, to source business-grade equipment and licenses at competitive prices.",
      },
      {
        title: "Configuration and deployment",
        body: "New devices are enrolled, secured, updated and set up with your applications before they reach your staff, so a new starter can sign in and work on day one.",
      },
      {
        title: "Online store",
        body: "Looking for specific IT products? Visit the Valexity online store to browse hardware, software, networking equipment and accessories, all available to buy directly.",
      },
    ],
    forWho: [
      "Businesses refreshing laptops or desktops",
      "Companies opening a new office or onboarding staff",
      "Teams that need networking or Wi-Fi upgrades",
      "Anyone tired of researching specifications and vendors",
    ],
    outcomes: [
      "Business-grade equipment that matches each role",
      "Competitive pricing without the research",
      "Devices delivered secured and ready to use",
      "A clear record of what you own and its warranty",
    ],
    faqs: [
      {
        q: "Why buy IT equipment through an IT provider instead of a retailer?",
        a: "Business-grade devices last longer, come with better warranties and include management features that consumer models lack. When Valexity sources equipment, we also configure, secure and enroll it before delivery, track warranties, and make sure it works with your existing systems.",
      },
      {
        q: "Can I buy IT products online from Valexity?",
        a: "Yes. The Valexity online store at shop.valexity.com offers hardware, software, networking equipment and accessories. For larger orders, or if you'd like equipment configured before delivery, contact us for a quote.",
      },
      {
        q: "Do you handle software licensing?",
        a: "Yes. We buy and manage licenses for Microsoft 365, Google Workspace, security tools and line-of-business applications, and review them regularly so you're not paying for licenses nobody uses.",
      },
    ],
    related: ["cloud-services", "print-services", "managed-it-services"],
  },
  {
    slug: "co-managed-it-services",
    category: "it",
    name: "Co-Managed IT Services",
    icon: "users",
    metaTitle: "Co-Managed IT Services: Support for Your In-House IT Team",
    metaDescription:
      "Co-managed IT services that work alongside your in-house IT team: extra capacity, security expertise, monitoring and strategic IT support.",
    headline: "Extra capacity and expertise for the IT team you already have",
    lede: "Co-managed IT is a partnership in which Valexity works alongside your in-house IT staff rather than replacing them. Your team keeps ownership of IT, and we add what they're missing: extra hands for projects, specialist security and cloud skills, round-the-clock monitoring, and the tools a larger IT department would have.",
    summary:
      "Support that integrates with your in-house IT team, adding capacity, tools and specialist skills.",
    itemsTitle: "How we support your IT department",
    items: [
      {
        title: "Augmenting your team's capabilities",
        body: "We act as an extension of your IT department, adding expertise in network security, cloud platforms and data management, so your staff have senior engineers to call on.",
      },
      {
        title: "Scalable support",
        body: "When your team is stretched during growth, a system upgrade or a vacation period, we step in with extra capacity, so day-to-day support doesn't suffer while big projects get done.",
      },
      {
        title: "Proactive monitoring and maintenance",
        body: "Continuous monitoring of servers, devices and networks, plus patching and maintenance, so your team isn't firefighting issues that tools could have caught early.",
      },
      {
        title: "Enhanced security and compliance",
        body: "Endpoint protection, threat monitoring, MFA and backup managed to a consistent standard, with the documentation auditors and insurers ask for.",
      },
      {
        title: "Escalation and expert troubleshooting",
        body: "For complex or urgent problems, your team can escalate to our engineers for hands-on troubleshooting and fast resolution.",
      },
      {
        title: "Collaboration on IT strategy",
        body: "We work with your IT lead on roadmaps, budgets, vendor choices and major projects, giving you an outside perspective grounded in what works across many environments.",
      },
    ],
    forWho: [
      "Businesses with one or two internal IT staff",
      "IT teams facing a large project or migration",
      "Organizations that need after-hours or vacation coverage",
      "IT managers who want enterprise tools without enterprise cost",
    ],
    outcomes: [
      "Your team keeps control, and gains backup",
      "Projects delivered without dropping daily support",
      "Security tools and expertise in place",
      "A clear split of who handles what",
    ],
    faqs: [
      {
        q: "What is co-managed IT?",
        a: "Co-managed IT is a shared IT model where an outside provider works alongside a company's internal IT staff. The internal team keeps ownership and day-to-day decisions, while the provider, such as Valexity, adds capacity, specialist skills, security tools and out-of-hours coverage. Responsibilities are agreed in writing, so nothing falls between the two teams.",
      },
      {
        q: "Will co-managed IT replace my IT staff?",
        a: "No. Co-managed IT is designed to make your internal team more effective, not to replace it. Most clients use us to take routine work, monitoring and after-hours support off their team, so their staff can focus on projects and the business.",
      },
      {
        q: "How do responsibilities get divided?",
        a: "During onboarding we agree a responsibility matrix with your IT lead, covering who handles help desk tickets, patching, security alerts, backups, projects and vendor management. It's reviewed regularly and adjusted as your team changes.",
      },
      {
        q: "Can we use your tools as well as your engineers?",
        a: "Yes. Co-managed clients typically get access to our monitoring, patching, documentation and security platforms, giving your team the same tools we use without buying and maintaining them separately.",
      },
    ],
    related: ["managed-it-services", "cyber-security", "cloud-services"],
  },

  // ─────────────────────────── DIGITAL SERVICES ───────────────────────────
  {
    slug: "website-design-services",
    category: "digital",
    name: "Website Design",
    icon: "palette",
    metaTitle: "Website Design: Custom, Responsive & E-commerce Websites",
    metaDescription:
      "Custom website design for businesses: responsive layouts, e-commerce, UI/UX, easy content management, redesigns and ongoing maintenance.",
    headline: "Websites that look the part and bring in business",
    lede: "Valexity designs custom websites that represent your brand and turn visitors into customers. Every site we design is responsive on any device, fast, accessible and easy to update, and because our web team works with our IT and security engineers, hosting, security and maintenance are taken care of.",
    summary:
      "Custom, responsive websites with strong UI/UX, e-commerce and easy content management.",
    itemsTitle: "Design services",
    items: [
      {
        title: "Custom website design",
        body: "An original design built around your brand, your customers and what you want visitors to do, not a template that looks like everyone else's.",
      },
      {
        title: "Responsive design",
        body: "Layouts that adapt to phones, tablets and desktops, so the site reads well and works properly for every visitor, on every screen.",
      },
      {
        title: "E-commerce solutions",
        body: "Online stores with product catalogs, secure checkout, payment gateways and order management, designed to make buying easy.",
      },
      {
        title: "UI/UX design",
        body: "Clear navigation, readable typography and thoughtful page structure, tested with real tasks so visitors find what they need quickly.",
      },
      {
        title: "Content management systems",
        body: "Sites your team can update without a developer, so you can publish news, edit pages and add products whenever you need to.",
      },
      {
        title: "Website redesign",
        body: "A modern refresh for an outdated site, keeping the content and search rankings you've earned while improving design, speed and conversion.",
      },
      {
        title: "Ongoing support and maintenance",
        body: "Updates, security patches, backups, uptime monitoring and content changes, so the site stays fast and secure after launch.",
      },
    ],
    forWho: [
      "Businesses whose website looks dated or doesn't work on phones",
      "Companies launching a new brand, product or location",
      "Teams that can't update their own site easily",
      "Retailers ready to sell online",
    ],
    outcomes: [
      "A modern site that reflects your brand",
      "More inquiries from the same traffic",
      "Fast load times and strong search foundations",
      "A site your team can update",
    ],
    faqs: [
      {
        q: "What does a website redesign include?",
        a: "A Valexity redesign covers a content and performance review, a new design, development, migration of existing pages, redirects to protect search rankings, testing on all devices, and launch. We keep the URLs and content that already perform well and improve everything around them.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. We build on content management systems or structured content that let your team edit text, images, blog posts and products without coding. We also offer maintenance plans if you'd rather we make changes for you.",
      },
      {
        q: "Do you design accessible websites?",
        a: "Yes. We design to WCAG 2.2 Level AA guidelines, including sufficient color contrast, keyboard navigation, descriptive alt text and properly labelled forms, so your site works for everyone and reduces legal risk.",
      },
    ],
    related: ["website-development-services", "api-integration-services", "cloud-services"],
  },
  {
    slug: "api-integration-services",
    category: "digital",
    name: "API Integration",
    icon: "plug",
    metaTitle: "API Integration Services: Custom APIs, Security & Testing",
    metaDescription:
      "API integration services: connect third-party tools, build custom REST or GraphQL APIs, and secure, test, document and maintain them.",
    headline: "Connect your systems so data flows on its own",
    lede: "Valexity's API integration services connect the applications your business runs on, such as CRMs, payment gateways, accounting software, e-commerce platforms and internal databases, so information moves between them automatically and securely. We integrate third-party APIs, build custom APIs when off-the-shelf options fall short, and test, document and maintain everything we build.",
    summary:
      "Third-party integrations and custom APIs that are secure, tested and documented.",
    itemsTitle: "Integration services",
    items: [
      {
        title: "Third-party API integration",
        body: "We connect your website or platform to payment gateways, social media platforms, CRMs, marketing and analytics tools, so they extend what your systems can do.",
      },
      {
        title: "Custom API development",
        body: "When off-the-shelf integrations don't meet your needs, we design and build custom REST, SOAP or GraphQL APIs around your exact requirements.",
      },
      {
        title: "API security and authentication",
        body: "We implement OAuth, JWT, encryption, rate limiting and least-privilege access to protect your data and keep integrations from becoming a security gap.",
      },
      {
        title: "API maintenance and support",
        body: "Continuous monitoring, bug fixes and updates keep integrations working as vendors change their APIs, with alerts when something needs attention.",
      },
      {
        title: "API testing",
        body: "Unit, integration and load testing before anything goes live, so integrations are reliable under real-world conditions and peak traffic.",
      },
      {
        title: "API documentation",
        body: "Clear documentation, including OpenAPI (Swagger) specifications, guides and examples, so your team or partners can use the API with confidence.",
      },
    ],
    forWho: [
      "Teams re-typing data between systems",
      "Businesses connecting a website to a CRM or ERP",
      "Software companies that need a public or partner API",
      "Organizations with fragile, undocumented integrations",
    ],
    outcomes: [
      "Less manual data entry and fewer errors",
      "Integrations that are secure by design",
      "Tested, documented and monitored APIs",
      "Systems that scale as you grow",
    ],
    faqs: [
      {
        q: "What is API integration?",
        a: "API integration connects two or more software applications through their application programming interfaces (APIs), so they can exchange data automatically. For example, a new web order can create a customer record in your CRM and an invoice in your accounting software without anyone re-typing it.",
      },
      {
        q: "Do you build REST and GraphQL APIs?",
        a: "Yes. Valexity builds REST, GraphQL and SOAP APIs depending on your requirements and the systems they need to work with. Every API we build includes authentication, automated tests and OpenAPI documentation.",
      },
      {
        q: "What happens when a third-party API changes?",
        a: "Vendors regularly update or retire API versions. Under a maintenance plan, we monitor your integrations, track vendor change notices, and update your code before old versions are switched off, so integrations keep working.",
      },
    ],
    related: ["website-development-services", "website-design-services", "cloud-services"],
  },
  {
    slug: "website-development-services",
    category: "digital",
    name: "Website Development",
    icon: "code",
    metaTitle: "Website Development: Full-Stack Web & App Development",
    metaDescription:
      "Full-stack website and web application development: front end, back end, databases, APIs, cloud deployment and DevOps from Valexity.",
    headline: "Full-stack development, from the interface to the infrastructure",
    lede: "Valexity's website development team builds fast, scalable web applications end to end, covering the front end your customers see, the back end and databases that power it, and the cloud infrastructure it runs on. We use modern, well-supported technologies and DevOps practices so your application is reliable to run and easy to improve.",
    summary: "Front end, back end, databases, APIs, cloud deployment and DevOps.",
    itemsTitle: "Our full-stack development services",
    items: [
      {
        title: "Front-end development",
        body: "Responsive, interactive and accessible user interfaces built with modern frameworks such as React, Next.js, Angular and Vue.js.",
      },
      {
        title: "Back-end development",
        body: "Secure server-side logic and business rules built with Node.js, Python, Ruby on Rails or PHP, designed for performance and maintainability.",
      },
      {
        title: "Database design and management",
        body: "Relational and non-relational databases, including PostgreSQL, MySQL, MongoDB and Firebase, designed for reliability, performance and growth.",
      },
      {
        title: "API development and integration",
        body: "Custom APIs and third-party integrations with payment gateways, CRMs and external services, so your application connects to the rest of your business.",
      },
      {
        title: "Cloud integration and deployment",
        body: "Deployment and scaling on AWS, Google Cloud and Microsoft Azure, with environments, backups and monitoring set up properly from the start.",
      },
      {
        title: "DevOps and continuous integration",
        body: "Automated testing and continuous integration and delivery (CI/CD) pipelines, so new features ship quickly and safely.",
      },
    ],
    forWho: [
      "Businesses that need a custom web application or portal",
      "Teams replacing spreadsheets with a purpose-built tool",
      "Companies whose current site is slow or hard to change",
      "Start-ups building a first version of their product",
    ],
    outcomes: [
      "A fast, secure application built to scale",
      "Clean, documented code you own",
      "Automated testing and deployment",
      "Hosting and monitoring handled",
    ],
    faqs: [
      {
        q: "What is full-stack development?",
        a: "Full-stack development covers both the front end of an application (what users see and interact with) and the back end (servers, databases, APIs and infrastructure). A full-stack team like Valexity's can deliver a complete, working product without you coordinating several separate vendors.",
      },
      {
        q: "Which technologies do you use?",
        a: "We choose technology for each project based on your requirements, but commonly use React and Next.js for the front end; Node.js or Python for the back end; PostgreSQL or MongoDB for data; and AWS, Azure or Google Cloud for hosting. We favor widely supported tools so your application is easy to maintain long term.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Once the project is paid for, the source code, documentation and accounts belong to your business, so you're never locked in to one provider.",
      },
    ],
    related: ["api-integration-services", "website-design-services", "cloud-services"],
  },

  // ─────────────────────────── TELECOM SERVICES ───────────────────────────
  {
    slug: "voip-services",
    category: "telecom",
    name: "VoIP",
    icon: "phone",
    metaTitle: "Business VoIP Phone Systems: Hosted VoIP & SIP Trunking",
    metaDescription:
      "Business VoIP phone systems: hosted VoIP, SIP trunking, mobile apps, call forwarding, voicemail, conferencing and auto-attendants from Valexity.",
    headline: "A business phone system that works from the office, home or anywhere",
    lede: "VoIP (Voice over Internet Protocol) replaces traditional phone lines with calls carried over your internet connection. Valexity designs, installs and supports business VoIP phone systems that cost less than legacy lines, add features like auto-attendants and call forwarding, and let your team use the same business number from a desk phone, computer or mobile.",
    summary:
      "Hosted VoIP, business VoIP, SIP trunking and mobile calling, installed and supported.",
    itemsTitle: "VoIP services",
    items: [
      {
        title: "Hosted VoIP solutions",
        body: "Cloud-based phone systems that need no on-site PBX hardware. Add users, change call routing and manage voicemail from a web portal.",
      },
      {
        title: "Business VoIP",
        body: "Phone systems tailored to your business, with call forwarding, voicemail-to-email, conferencing, call queues and auto-attendants.",
      },
      {
        title: "Residential VoIP",
        body: "Home phone service over the internet, often with lower rates for international calling, which is ideal for home offices and remote staff.",
      },
      {
        title: "SIP trunking",
        body: "Connect your existing PBX to the internet and make VoIP calls over your current data connection, without replacing the phone system you already own.",
      },
      {
        title: "VoIP for mobile devices",
        body: "Mobile and desktop apps that let staff make and take business calls on smartphones, tablets and laptops while showing your business number.",
      },
    ],
    forWho: [
      "Businesses paying for legacy copper phone lines",
      "Teams working between the office and home",
      "Companies with several locations to connect",
      "Organizations that need call queues or auto-attendants",
    ],
    outcomes: [
      "Lower monthly phone costs",
      "One business number on every device",
      "Modern features without new hardware",
      "Network tuned for clear call quality",
    ],
    faqs: [
      {
        q: "What is VoIP?",
        a: "VoIP, or Voice over Internet Protocol, is technology that carries phone calls over an internet connection instead of traditional telephone lines. For businesses, VoIP usually costs less than legacy lines and adds features such as auto-attendants, call forwarding, voicemail-to-email and mobile apps.",
      },
      {
        q: "Will VoIP call quality be as good as a landline?",
        a: "With a reliable internet connection and a correctly configured network, yes. Call quality depends on bandwidth and on prioritizing voice traffic on your network. Because Valexity manages your network as well as your phones, we configure quality of service (QoS) and firewalls for clear, stable calls.",
      },
      {
        q: "What is SIP trunking?",
        a: "SIP trunking connects an existing on-premises phone system (PBX) to the internet so it can make and receive calls over your data connection instead of physical phone lines. It's a cost-effective way to modernize without replacing phone hardware you already own.",
      },
      {
        q: "What happens to our phones if the internet goes down?",
        a: "Hosted VoIP systems can automatically forward calls to mobile phones or another location during an outage, so customers can still reach you. We also recommend a backup internet connection for businesses that rely heavily on phones.",
      },
    ],
    related: ["broadband-services", "cellular-services", "managed-it-services"],
  },
  {
    slug: "broadband-services",
    category: "telecom",
    name: "Broadband",
    icon: "wifi",
    metaTitle: "Business Broadband: Fiber, Cable, Fixed Wireless & Satellite",
    metaDescription:
      "Business internet from Valexity: fiber, cable, DSL, fixed wireless and satellite broadband, plus installation, setup and backup connections.",
    headline: "Fast, reliable business internet, sourced and supported for you",
    lede: "Valexity's broadband services find, install and support the right internet connection for each of your locations. We compare fiber, cable, DSL, fixed wireless and satellite options from multiple providers, handle installation and network setup, and manage the connection alongside your IT, so when something slows down, one team finds the cause.",
    summary:
      "Fiber, cable, DSL, fixed wireless and satellite internet, plus installation and setup.",
    itemsTitle: "Connection types we provide",
    items: [
      {
        title: "Fiber-optic internet",
        body: "The fastest and most reliable option where available, with symmetrical upload and download speeds that suit cloud apps, VoIP and video calls.",
      },
      {
        title: "Cable broadband",
        body: "Widely available high-speed internet over coaxial cable, offering strong download speeds at a competitive price for many offices.",
      },
      {
        title: "DSL",
        body: "Internet over existing telephone lines. Speeds are lower than fiber or cable, but it can be a dependable primary or backup connection where other options are limited.",
      },
      {
        title: "Satellite internet",
        body: "Coverage for remote or rural sites that wired providers don't reach, including modern low-earth-orbit services with lower latency.",
      },
      {
        title: "Fixed wireless broadband",
        body: "Internet delivered by radio from a nearby tower to an antenna on your building. It's quick to install and a strong option where cabling is difficult.",
      },
      {
        title: "Broadband installation and setup",
        body: "We coordinate the carrier installation, then set up your router, firewall, Wi-Fi and failover, so your office is online and secure on day one.",
      },
    ],
    forWho: [
      "Businesses opening or moving an office",
      "Teams frustrated by slow or unreliable internet",
      "Sites that need a backup internet connection",
      "Rural locations with limited wired options",
    ],
    outcomes: [
      "The best available connection for each site",
      "Professional installation and network setup",
      "Optional failover to keep you online",
      "One team accountable for the connection",
    ],
    faqs: [
      {
        q: "What internet speed does a small business need?",
        a: "It depends on how many people work on site and what they do. Cloud apps, video calls and VoIP need consistent upload as well as download speed. Valexity reviews your usage and recommends a connection with enough headroom for busy periods, rather than simply the cheapest or fastest plan.",
      },
      {
        q: "What is the difference between fiber and cable internet?",
        a: "Fiber uses light over glass strands and typically offers symmetrical upload and download speeds with very low latency. Cable uses coaxial lines and usually offers fast downloads but slower uploads. Fiber is usually better for heavy cloud, video and VoIP use, where it's available.",
      },
      {
        q: "Should my business have a backup internet connection?",
        a: "If an outage would stop sales, support or phones, yes. A secondary connection from a different provider or technology, such as cable plus fixed wireless or 5G, can take over automatically when the main line fails.",
      },
    ],
    related: ["voip-services", "cellular-services", "managed-it-services"],
  },
  {
    slug: "cellular-services",
    category: "telecom",
    name: "Cellular",
    icon: "smartphone",
    metaTitle: "Business Cellular & 5G: Mobile Plans, Hotspots & MDM",
    metaDescription:
      "Business cellular services: mobile data and voice plans, hotspots, 5G, international roaming and mobile device management from Valexity.",
    headline: "Mobile plans and devices managed like the rest of your IT",
    lede: "Valexity's cellular services keep your team connected on the move. We source business mobile voice, data and 5G plans, hotspots and international roaming, and manage company phones and tablets with mobile device management (MDM), so every device that holds company data is secure, up to date and easy to replace.",
    summary: "Mobile data, voice and SMS, hotspots, 5G, roaming and device management.",
    itemsTitle: "Cellular services",
    items: [
      {
        title: "Mobile data plans",
        body: "Data-only plans for smartphones, tablets, laptops and connected devices, pooled across your team where it saves money.",
      },
      {
        title: "Voice and SMS services",
        body: "Business calling and text messaging plans for staff phones, with number porting and consolidated billing.",
      },
      {
        title: "Mobile hotspot plans",
        body: "Portable Wi-Fi using the mobile network, for field teams, events, job sites and as a quick backup when the office internet is down.",
      },
      {
        title: "Mobile device management (MDM)",
        body: "Enroll, secure and monitor company-issued phones and tablets. Enforce passcodes and encryption, deploy apps, and wipe a lost device remotely.",
      },
      {
        title: "International roaming",
        body: "Cellular service for staff traveling abroad, with access to local networks and predictable costs instead of surprise roaming bills.",
      },
      {
        title: "5G services",
        body: "The latest cellular technology, offering faster speeds, lower latency and more capacity for connected devices, including 5G as a primary or backup business internet connection.",
      },
    ],
    forWho: [
      "Businesses with field, sales or remote staff",
      "Companies issuing phones or tablets to employees",
      "Teams that travel internationally",
      "Sites that need 5G backup internet",
    ],
    outcomes: [
      "The right plan for each user",
      "Lost devices locked or wiped remotely",
      "One bill and one support contact",
      "Mobile devices held to your security policy",
    ],
    faqs: [
      {
        q: "What is mobile device management (MDM)?",
        a: "Mobile device management is software that lets a business enroll, configure, secure and monitor company phones and tablets from one place. With MDM, Valexity can enforce passcodes and encryption, install approved apps, separate work and personal data, and remotely lock or wipe a lost or stolen device.",
      },
      {
        q: "Can 5G be used as business internet?",
        a: "Yes. 5G fixed wireless and 5G routers can provide primary internet where wired options are limited, or act as an automatic backup when your main connection fails. Coverage varies by location, so we check signal strength at your site before recommending it.",
      },
      {
        q: "Can you manage employee-owned phones too?",
        a: "Yes. For bring-your-own-device (BYOD) setups, MDM can protect company apps and data in a separate work profile without giving the business access to personal photos, messages or apps.",
      },
    ],
    related: ["voip-services", "broadband-services", "cyber-security"],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const categoryByKey = (key: CategoryKey) => categories.find((c) => c.key === key)!;
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const servicesIn = (key: CategoryKey) => services.filter((s) => s.category === key);
