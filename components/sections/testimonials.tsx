"use client";

import { useLocale } from "@/lib/locale-context";
import { testimonials } from "@/data/testimonials";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const { t, locale } = useLocale();

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Témoignages" : "Testimonials"}</SectionLabel>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.05}
              className="flex flex-col gap-4 rounded-2xl border border-border p-6"
            >
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{t(testimonial.quote)}&rdquo;</p>
              <div className="mt-auto">
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{t(testimonial.role)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
