import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le parcours d'Erféro Keoula — développeur web full stack basé à Cotonou, Bénin : expériences, formation, compétences et références.",
};

export default function AboutPage() {
  return <AboutContent />;
}
