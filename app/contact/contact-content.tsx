"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/data/site";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

const socialLinks = [
  { href: site.socials.whatsapp, label: "WhatsApp", icon: FaWhatsapp },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.instagram, label: "Instagram", icon: FaInstagram },
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactContent() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <SectionLabel>{locale === "fr" ? "Contact" : "Contact"}</SectionLabel>
            <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {locale === "fr" ? "Parlons de votre projet" : "Let's talk about your project"}
            </h1>
          </Reveal>

          <Reveal delay={0.05} className="mt-8 flex flex-col gap-3 text-muted-foreground">
            <p>{site.location}</p>
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-foreground">
              {site.phone}
            </a>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                {locale === "fr" ? "Nom" : "Name"}
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-muted-foreground">
                {locale === "fr" ? "Message" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="resize-none rounded-lg border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
            >
              {status === "loading"
                ? locale === "fr"
                  ? "Envoi..."
                  : "Sending..."
                : locale === "fr"
                  ? "Envoyer"
                  : "Send"}
            </button>

            {status === "success" && (
              <p className="text-sm text-accent">
                {locale === "fr" ? "Message envoyé, merci ! Je reviens vers vous rapidement." : "Message sent, thank you! I'll get back to you soon."}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                {locale === "fr"
                  ? `Une erreur est survenue. Écrivez-moi directement à ${site.email}.`
                  : `Something went wrong. Email me directly at ${site.email}.`}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
