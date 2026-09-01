"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLocale();

  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={t(project.name)}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-2xl font-semibold text-primary-foreground">
              {t(project.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight">{t(project.name)}</h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
        </div>
        <p className="text-sm text-muted-foreground">{t(project.tagline)}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
