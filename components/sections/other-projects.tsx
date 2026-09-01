"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function OtherProjects({ currentSlug }: { currentSlug: string }) {
  const { t, locale } = useLocale();
  const others = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-[#0a0a0a] py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>{locale === "fr" ? "Autres projets" : "Other projects"}</SectionLabel>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                href={`/projets/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-accent"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={t(project.name)}
                      fill
                      sizes="20rem"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-accent/40">
                      <span className="px-2 text-center font-display text-sm font-semibold">{t(project.name)}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-display text-base font-semibold tracking-tight">{t(project.name)}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-white/50">
                    {project.category === "shopify" ? "Shopify" : "Full stack"}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
