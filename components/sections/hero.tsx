"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: site.socials.whatsapp, label: "WhatsApp", icon: FaWhatsapp },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.instagram, label: "Instagram", icon: FaInstagram },
];

export function Hero() {
  const { t, locale } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-32">
        <div className="flex flex-col justify-center gap-6">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-widest text-accent">{t(site.tagline)}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">{t(site.heroDescription)}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/projets">{locale === "fr" ? "Voir mes projets" : "See my work"}</Button>
              <Button href="/contact" variant="outline">
                {locale === "fr" ? "Me contacter" : "Get in touch"}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3 pt-4">
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
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-secondary">
            <Image
              src="/images/erfero.jpg"
              alt={site.name}
              fill
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
