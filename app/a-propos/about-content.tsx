"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { experiences } from "@/data/experiences";
import { education, strengths, reference } from "@/data/education";
import { whyHireMe } from "@/data/why-hire-me";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function AboutContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <Reveal>
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-3xl border border-border bg-secondary">
              <Image
                src="/images/erfero.jpg"
                alt={site.name}
                fill
                sizes="20rem"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>{locale === "fr" ? "À propos" : "About"}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {site.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-accent">{t(site.role)}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-muted-foreground">{t(site.bio)}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-2xl text-muted-foreground">{t(site.bioSecondary)}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button href="/contact">{locale === "fr" ? "Un projet en tête ?" : "Got a project?"}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.05}>
                <p className="font-display text-4xl font-semibold text-accent md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t(stat.label)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>{locale === "fr" ? "Expérience" : "Experience"}</SectionLabel>
          </Reveal>
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05} className="grid gap-2 py-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight">{t(exp.title)}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">{exp.date}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {t(exp.points).map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel>{locale === "fr" ? "Formation" : "Education"}</SectionLabel>
            </Reveal>
            {education.map((entry) => (
              <Reveal key={entry.school} delay={0.05}>
                <p className="font-display text-lg font-semibold tracking-tight">{t(entry.title)}</p>
                <p className="text-sm text-muted-foreground">{entry.school}</p>
                <p className="mt-1 font-mono text-xs text-accent">{t(entry.date)}</p>
              </Reveal>
            ))}

            <Reveal delay={0.1} className="mt-10">
              <SectionLabel>{locale === "fr" ? "Qualités" : "Strengths"}</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {t(strengths).map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <SectionLabel>{locale === "fr" ? "Référence" : "Reference"}</SectionLabel>
            <p className="font-display text-lg font-semibold tracking-tight">{reference.name}</p>
            <p className="text-sm text-muted-foreground">{t(reference.role)}</p>
            <a href={`mailto:${reference.email}`} className="mt-1 inline-block text-sm text-accent hover:underline">
              {reference.email}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionLabel>{locale === "fr" ? "Pourquoi me choisir" : "Why hire me"}</SectionLabel>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {whyHireMe.map((point, i) => (
              <Reveal key={point.title.fr} delay={i * 0.05} className="bg-background p-6">
                <p className="font-display text-base font-semibold tracking-tight">{t(point.title)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t(point.detail)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
