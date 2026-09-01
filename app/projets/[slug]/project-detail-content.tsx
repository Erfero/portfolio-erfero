"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

export function ProjectDetailContent({ project }: { project: Project }) {
  const { t, locale } = useLocale();

  return (
    <article className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "fr" ? "Tous les projets" : "All projects"}
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <SectionLabel>{project.category === "shopify" ? "Shopify" : "Full stack"}</SectionLabel>
          <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{t(project.name)}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t(project.tagline)}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs">
              {tech}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <Button href={project.externalLink} external>
            {locale === "fr" ? "Voir le projet en ligne" : "View live project"}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>

      {project.image && (
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-5xl px-6">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
              <Image src={project.image} alt={t(project.name)} fill sizes="80rem" className="object-cover object-top" />
            </div>
          </div>
        </Reveal>
      )}

      <div className="mx-auto mt-16 grid max-w-4xl gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Le projet" : "The project"}</SectionLabel>
          <p className="text-muted-foreground">{t(project.description)}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionLabel>{locale === "fr" ? "Contexte" : "Context"}</SectionLabel>
          <p className="text-muted-foreground">{t(project.context)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Mon rôle" : "My role"}</SectionLabel>
          <p className="text-muted-foreground">{t(project.role)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Fonctionnalités clés" : "Key features"}</SectionLabel>
          <ul className="flex flex-col gap-3">
            {t(project.features).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-6">
        <Reveal className="rounded-2xl border border-border p-6">
          <SectionLabel>{locale === "fr" ? "Résultat" : "Result"}</SectionLabel>
          <p className="text-foreground">{t(project.results)}</p>
        </Reveal>
      </div>
    </article>
  );
}
