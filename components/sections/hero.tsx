"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: site.socials.whatsapp, label: "WhatsApp", icon: FaWhatsapp },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.instagram, label: "Instagram", icon: FaInstagram },
];

export function Hero() {
  const { t, locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !sectionRef.current || !portraitRef.current) return;

    const isMobile = () => window.matchMedia("(max-width: 639px)").matches;
    let tween: gsap.core.Tween | null = null;

    const setup = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      const range = isMobile() ? 8 : 18;
      tween = gsap.fromTo(
        portraitRef.current,
        { yPercent: -range },
        {
          yPercent: range,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    };

    setup();
    const mq = window.matchMedia("(max-width: 639px)");
    mq.addEventListener("change", setup);
    return () => {
      mq.removeEventListener("change", setup);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label={locale === "fr" ? "Accueil" : "Home"}
      className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-gradient-to-br from-[#f05038] via-[#e8452c] to-[#c73a24] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[8vh] select-none opacity-[0.16] mix-blend-overlay md:top-[6vh]">
        <Marquee>
          <span className="font-headline text-[18vw] uppercase leading-none tracking-tight whitespace-nowrap md:text-[13vw]">
            {site.name}
          </span>
        </Marquee>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pt-32">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-widest text-white/80">{t(site.tagline)}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                {site.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-base text-white/85 md:text-lg">{t(site.heroDescription)}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/projets"
                  className="bg-white text-[#c73a24] hover:bg-[#0a0a0a] hover:text-white"
                >
                  {locale === "fr" ? "Voir mes projets" : "See my work"}
                </Button>
                <Button href="/contact" variant="outline" className="border-white/40 text-white hover:border-white hover:text-white">
                  {locale === "fr" ? "Me contacter" : "Get in touch"}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="flex justify-center md:justify-end">
            <div
              ref={portraitRef}
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-white/20 bg-black/20 shadow-2xl"
            >
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
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl px-6 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-6">
          <p className="font-mono text-sm leading-tight text-white/85">
            <span className="block">{locale === "fr" ? "// Développeur" : "// Developer"}</span>
            <span className="block font-medium text-white">
              {locale === "fr" ? "Web Full Stack" : "Full Stack Web"}
            </span>
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white hover:text-[#c73a24]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
