"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import type { ProjectCategory } from "@/lib/types";

type Filter = ProjectCategory | "all";

export function ProjectsContent() {
  const { locale } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = projects.filter((p) => filter === "all" || p.category === filter);

  const filters: { value: Filter; label: { fr: string; en: string } }[] = [
    { value: "all", label: { fr: "Tous", en: "All" } },
    { value: "fullstack", label: { fr: "Full stack", en: "Full stack" } },
    { value: "shopify", label: { fr: "Shopify", en: "Shopify" } },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Projets" : "Projects"}</SectionLabel>
          <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {locale === "fr" ? "Réalisations" : "Selected work"}
          </h1>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {locale === "fr" ? f.label.fr : f.label.en}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 6) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
