"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
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
    <footer className="border-t border-border bg-[#e9e9e7] text-[#0a0a0a]">
      <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={locale === "fr" ? "Retour en haut" : "Back to top"}
          className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:-translate-y-0.5 md:right-10 md:top-10"
        >
          <ArrowUp className="h-4 w-4" />
        </button>

        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/erfero.jpg"
            alt=""
            className="h-[78%] w-auto object-cover grayscale"
            style={{ mixBlendMode: "normal" }}
          />
        </div>

        <div className="relative z-10 py-20 md:py-28" style={{ mixBlendMode: "difference" }}>
          <Marquee>
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-6xl font-semibold uppercase leading-none tracking-tight text-white md:text-[9vw]"
              >
                {locale === "fr" ? "Restons en contact" : "Let's stay in touch"}
                <span className="mx-6">—</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-8">
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            {locale === "fr" ? "Me contacter" : "Get in touch"}
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8 text-sm">
            <div className="flex flex-col gap-1">
              <span>
                <strong>{locale === "fr" ? "Bureau : " : "Office: "}</strong>
                {site.location}
              </span>
              <span>
                <strong>{locale === "fr" ? "Mail : " : "Email: "}</strong>
                <a href={`mailto:${site.email}`} className="hover:text-accent">
                  {site.email}
                </a>
              </span>
              <span>
                <strong>{locale === "fr" ? "Téléphone : " : "Phone: "}</strong>
                <a href={site.phoneHref} className="hover:text-accent">
                  {site.phone}
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider transition-colors hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs text-black/60">
            <p className="font-mono">{t(site.quote)}</p>
            <p>{t(site.footerTagline)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
