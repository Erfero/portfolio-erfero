import type { EducationEntry, Reference } from "@/lib/types";

export const education: EducationEntry[] = [
  {
    title: { fr: "Développeur Web Full Stack", en: "Full Stack Web Developer" },
    school: "High-Five University · Bénin",
    date: {
      fr: "Depuis mars 2022 — 2 ans d'enseignement + 2 ans en entreprise",
      en: "Since March 2022 — 2 years of training + 2 years in the field",
    },
  },
];

export const strengths = {
  fr: ["Communication", "Gestion de projet", "Souci du détail"],
  en: ["Communication", "Project management", "Attention to detail"],
};

export const reference: Reference = {
  name: "Tiburce Kouagou",
  role: {
    fr: "Formateur — High-Five University / Viip Interstis",
    en: "Trainer — High-Five University / Viip Interstis",
  },
  email: "tiburcekouagou@gmail.com",
};
