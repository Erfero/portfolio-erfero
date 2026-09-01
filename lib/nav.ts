import type { LocalizedText } from "./types";

export const navLinks: { href: string; label: LocalizedText }[] = [
  { href: "/a-propos", label: { fr: "À propos", en: "About" } },
  { href: "/projets", label: { fr: "Projets", en: "Projects" } },
  { href: "/contact", label: { fr: "Contact", en: "Contact" } },
];
