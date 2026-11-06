/**
 * Hero photos for the service and overview pages. All are real photographs from Wikimedia Commons,
 * under licenses that allow commercial use. None are AI-generated.
 *
 * CC BY photos must keep their credit, which PageHero shows automatically. CC0 photos need no credit;
 * their source is recorded here anyway so anyone can check the license. To swap in the client's own
 * photo, replace the file in public/services and remove `credit`.
 */
export type Photo = {
  src: string;
  alt: string;
  license: string;
  source: string;
  /** CSS object-position: keeps the subject in frame when the banner crops the photo. */
  position?: string;
  credit?: { by: string; license: string; licenseUrl: string; source: string };
};

export const servicePhotos: Record<string, Photo> = {
  "it-services": {
    src: "/services/it-services.jpg",
    position: "center 22%",
    alt: "An IT professional with a laptop in a server room",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_191.jpg",
    credit: { by: "WOCinTech Chat", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_191.jpg" },
  },
  "managed-it-services": {
    src: "/services/managed-it-services.jpg",
    position: "center 72%",
    alt: "Two colleagues working through an IT issue together on laptops in a bright office",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_28.jpg",
    credit: { by: "WOCinTech Chat", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_28.jpg" },
  },
  "cyber-security": {
    src: "/services/cyber-security.jpg",
    position: "center 35%",
    alt: "A person working at a monitor in a dark room",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Man_working_on_computer_(Unsplash).jpg",
  },
  "cloud-services": {
    src: "/services/cloud-services.jpg",
    alt: "An aisle of illuminated server racks in a data center",
    license: "CC BY 3.0",
    source: "https://commons.wikimedia.org/w/index.php?curid=16886979",
    credit: { by: "The National Archives (UK)", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", source: "https://commons.wikimedia.org/w/index.php?curid=16886979" },
  },
  "print-services": {
    src: "/services/print-services.jpg",
    position: "center 62%",
    alt: "A row of laser printers in an office",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/w/index.php?curid=117755504",
    credit: { by: "Jemimus", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", source: "https://commons.wikimedia.org/w/index.php?curid=117755504" },
  },
  "it-procurement": {
    src: "/services/it-procurement.jpg",
    position: "center 82%",
    alt: "A desk with a desktop computer, laptop and keyboard",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:An_office_table_and_computers_(Unsplash).jpg",
  },
  "co-managed-it-services": {
    src: "/services/co-managed-it-services.jpg",
    position: "center 62%",
    alt: "A team meeting around a long conference table with laptops",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_170.jpg",
    credit: { by: "WOCinTech Chat", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_170.jpg" },
  },
  "digital-services": {
    src: "/services/digital-services.jpg",
    position: "center 30%",
    alt: "Three colleagues working on laptops together on a sofa",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_57.jpg",
    credit: { by: "WOCinTech Chat", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_57.jpg" },
  },
  "website-development-services": {
    src: "/services/website-development-services.jpg",
    position: "center 40%",
    alt: "A developer's laptop showing code on a round table, seen from above",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_44.jpg",
    credit: { by: "WOCinTech Chat", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", source: "https://commons.wikimedia.org/wiki/File:Wocintech_(microsoft)_-_44.jpg" },
  },
  "ai-automation-services": {
    src: "/services/ai-automation-services.jpg",
    position: "center 42%",
    alt: "A desk workstation with a large monitor, lit by violet light",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Desktop_purple_neon_light_(Unsplash).jpg",
  },
  "api-integration-services": {
    src: "/services/api-integration-services.jpg",
    alt: "Lines of source code on a computer screen",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Code_on_computer_monitor_(Unsplash).jpg",
  },
  "telecom-services": {
    src: "/services/telecom-services.jpg",
    position: "center 28%",
    alt: "A telecommunications tower with antenna dishes",
    license: "CC0",
    source: "https://commons.wikimedia.org/w/index.php?curid=103047695",
  },
  "voip-services": {
    src: "/services/voip-services.jpg",
    position: "center 42%",
    alt: "An IP desk phone in an office",
    license: "CC0",
    source: "https://commons.wikimedia.org/w/index.php?curid=44430140",
  },
  "broadband-services": {
    src: "/services/broadband-services.jpg",
    alt: "The back of network equipment with its cabling",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Beautiful_technology_(Unsplash).jpg",
  },
  "cellular-services": {
    src: "/services/cellular-services.jpg",
    position: "center 45%",
    alt: "A person using a smartphone at a desk beside a laptop",
    license: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Charlz_Guti%C3%A9rrez_De_Pi%C3%B1eres_2016_(Unsplash).jpg",
  },
};
