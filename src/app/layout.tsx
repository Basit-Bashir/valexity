import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header, type NavGroup } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { graph, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { categories, servicesIn } from "@/lib/services";
import { mainNav, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Valexity Technologies | Managed IT, Cybersecurity & Web Services in Illinois",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0b0912",
  colorScheme: "light",
};

const navGroups: NavGroup[] = categories.map((c) => ({
  name: c.name,
  href: `/${c.slug}`,
  summary: c.summary,
  items: servicesIn(c.key).map((s) => ({ name: s.name, href: `/${s.slug}` })),
}));

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={graph(organizationJsonLd(), websiteJsonLd())} />
        <Header
          groups={navGroups}
          links={mainNav}
          portals={site.portals}
          phone={{ label: site.phone, href: site.phoneHref }}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
