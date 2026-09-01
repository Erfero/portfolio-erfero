"use client";

import { useLocale } from "@/lib/locale-context";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/project-card";

const featuredSlugs = ["boutique-aurore", "centre-operations", "ecommerce-mern", "velora", "app-mobile-flutter", "api-laravel-gestion"];

export function ProjectsTeaser() {
  const { locale } = useLocale();
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionLabel>{locale === "fr" ? "Projets" : "Projects"}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <Button href="/projets" variant="outline">
              {locale === "fr" ? "Tous mes projets" : "All my projects"}
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
