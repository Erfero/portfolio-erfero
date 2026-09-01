"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { Reveal } from "@/components/ui/reveal";
import { DeviceMockup } from "@/components/ui/device-mockup";
import { OtherProjects } from "@/components/sections/other-projects";
import type { Project } from "@/lib/types";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-sm uppercase tracking-widest text-[#f05038]">
      {"// "}
      {children}
    </p>
  );
}

export function ProjectDetailContent({ project }: { project: Project }) {
  const { t, locale } = useLocale();

  return (
    <article className="bg-[#0a0a0a] pb-16 text-white md:pb-24">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Reveal>
          <Link href="/projets" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {locale === "fr" ? "Tous les projets" : "All projects"}
          </Link>
        </Reveal>
      </div>

      {project.image && (
        <div className="mt-8">
          <DeviceMockup image={project.image} alt={t(project.name)} />
        </div>
      )}

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-end">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">
            {project.category === "shopify" ? "Shopify" : "Full stack"}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {t(project.name)}
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <Label>Overview</Label>
          <p className="text-white/75">{t(project.description)}</p>
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 font-medium text-[#f05038] hover:underline"
          >
            {locale === "fr" ? "Voir" : "View"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal>
          <Label>{locale === "fr" ? "Contexte" : "Context"}</Label>
          <p className="max-w-3xl text-white/75">{t(project.context)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal>
          <Label>{locale === "fr" ? "Mon rôle" : "My role"}</Label>
          <p className="max-w-3xl text-white/75">{t(project.role)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal>
          <Label>{locale === "fr" ? "Fonctionnalités clés" : "Key features"}</Label>
          <ul className="grid gap-3 md:grid-cols-2">
            {t(project.features).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-white/75">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#f05038]" />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <Label>{locale === "fr" ? "Résultat" : "Result"}</Label>
          <p className="text-white">{t(project.results)}</p>
        </Reveal>
      </div>

      <div className="mt-16">
        <OtherProjects currentSlug={project.slug} />
      </div>
    </article>
  );
}
