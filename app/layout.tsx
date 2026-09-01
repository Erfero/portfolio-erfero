import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import { ThemeProvider, THEME_BOOTSTRAP_SCRIPT } from "@/lib/theme-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PreloaderGate } from "@/components/preloader/preloader-gate";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

// Closest free equivalent to the licensed "Headline One/Two" (HPLHS) fonts
// used for bold vintage-headline treatments — used sparingly for display impact.
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full Stack Web Developer",
  email: site.email,
  url: site.url,
  address: {
    "@type": "Place",
    name: site.location,
  },
  sameAs: [site.socials.whatsapp, site.socials.linkedin, site.socials.github, site.socials.instagram],
  knowsAbout: [
    "Web development",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Shopify",
    "WordPress",
    "SEO",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} suppressHydrationWarning />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LocaleProvider>
            <PreloaderGate>
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </PreloaderGate>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
