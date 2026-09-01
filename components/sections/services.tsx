"use client";

import { useLocale } from "@/lib/locale-context";
import { services } from "@/data/services";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const { t, locale } = useLocale();

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Services" : "Services"}</SectionLabel>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.05} className="bg-background p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {t(service.title)}
                </h3>
                <span className="font-mono text-sm text-accent">{service.number}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t(service.description)}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {t(service.offerings).map((offering) => (
                  <li key={offering} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {offering}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
