"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const DIM_COLOR = "#4b4b4b";
const ACCENT_COLOR = "#f05038";
const WHITE_COLOR = "#ffffff";
const GRAY_COLOR = "rgb(167, 160, 160)";

function RevealWords({ text, variant }: { text: string; variant: "white" | "accent" | "gray" }) {
  const words = text.split(" ").filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} data-reveal={variant} style={{ color: DIM_COLOR }}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function AboutTeaser() {
  const { t, locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const titleWords = titleRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];
    const descriptionWords = descriptionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? [];

    if (reducedMotion) {
      gsap.set([...titleWords, ...descriptionWords], { clearProps: "color" });
      return;
    }

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 72%",
        end: "bottom 42%",
        scrub: 0.75,
        invalidateOnRefresh: true,
      },
    });

    let position = 0;
    titleWords.forEach((el) => {
      const variant = el.dataset.reveal;
      const target = variant === "accent" ? ACCENT_COLOR : variant === "gray" ? GRAY_COLOR : WHITE_COLOR;
      timeline.fromTo(el, { color: DIM_COLOR }, { color: target, duration: 0.09 }, position);
      position += 0.034;
    });
    descriptionWords.forEach((el) => {
      timeline.fromTo(el, { color: DIM_COLOR }, { color: GRAY_COLOR, duration: 0.07 }, position);
      position += 0.026;
    });

    const refreshTimeout = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(refreshTimeout);
      timeline.scrollTrigger?.kill();
      timeline.kill();
      gsap.set([...titleWords, ...descriptionWords], { clearProps: "color" });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] py-24 text-white md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm uppercase tracking-widest text-[#f05038]">
          {"// "}
          {locale === "fr" ? "Présentation" : "About"}
        </p>

        <h2 ref={titleRef} className="mt-6 font-display text-3xl font-medium leading-[1.3] tracking-tight md:text-5xl">
          <RevealWords text={t(site.introTitleLead)} variant="white" />{" "}
          <RevealWords text={t(site.introTitleAccent)} variant="accent" />{" "}
          <RevealWords text={t(site.introTitleTail)} variant="white" />
        </h2>

        <p ref={descriptionRef} className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
          <RevealWords text={t(site.introDescription)} variant="gray" />
        </p>

        <div className="mt-10">
          <Button href="/a-propos" variant="outline" className="w-fit border-white/20 text-white hover:border-[#f05038] hover:text-[#f05038]">
            {locale === "fr" ? "À propos" : "About me"}
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="font-display text-4xl font-semibold text-[#f05038] md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/50">{t(stat.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
