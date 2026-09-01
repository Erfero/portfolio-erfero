"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { Marquee } from "@/components/ui/marquee";

const socialLinks = [
  { href: site.socials.whatsapp, label: "WhatsApp", icon: FaWhatsapp },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.instagram, label: "Instagram", icon: FaInstagram },
];

export function SiteFooter() {
  const { t, locale } = useLocale();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Marquee>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
              {locale === "fr" ? "Restons en contact" : "Let's stay in touch"}
              <span className="mx-6 text-accent">—</span>
            </span>
          ))}
        </Marquee>

        <div className="mt-12 flex flex-col gap-8">
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            {locale === "fr" ? "Me contacter" : "Get in touch"}
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span>{site.location}</span>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
              <a href={site.phoneHref} className="hover:text-foreground">
                {site.phone}
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <p className="font-mono">{t(site.quote)}</p>
            <p>{t(site.footerTagline)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
