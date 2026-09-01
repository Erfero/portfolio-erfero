"use client";

import { useLocale } from "@/lib/locale-context";
import { technologies } from "@/data/technologies";
import { Marquee } from "@/components/ui/marquee";
import { TechIcon } from "@/components/ui/tech-icon";

export function TechTrustStrip() {
  const { locale } = useLocale();

  return (
    <section className="border-b border-border bg-secondary/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {locale === "fr" ? "Technologies que je maîtrise" : "Technologies I work with"}
        </p>
      </div>
      <Marquee>
        {technologies.map((tech) => (
          <div key={tech.name} className="flex items-center gap-2 text-muted-foreground">
            <TechIcon icon={tech.icon} className="h-5 w-5" />
            <span className="whitespace-nowrap text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
