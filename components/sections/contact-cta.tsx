"use client";

import { useLocale } from "@/lib/locale-context";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  const { locale } = useLocale();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {locale === "fr"
              ? "Un projet en tête ? Construisons-le ensemble."
              : "Got a project in mind? Let's build it together."}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {locale === "fr"
              ? "Décrivez votre besoin en quelques lignes, je reviens vers vous rapidement."
              : "Describe what you need in a few lines, I'll get back to you quickly."}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <Button href="/contact">{locale === "fr" ? "Me contacter" : "Get in touch"}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
