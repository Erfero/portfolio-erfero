"use client";

import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  const { t, locale } = useLocale();

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Présentation" : "About"}</SectionLabel>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">
              {t(site.bio)}
            </p>
          </Reveal>

          <div className="flex flex-col justify-between gap-8">
            <Reveal delay={0.1}>
              <p className="text-muted-foreground">{t(site.bioSecondary)}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <Button href="/a-propos" variant="outline" className="w-fit">
                {locale === "fr" ? "À propos" : "About me"}
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.05}>
              <p className="font-display text-4xl font-semibold text-accent md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t(stat.label)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
