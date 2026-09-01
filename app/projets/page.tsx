import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les réalisations d'Erféro Keoula — applications full stack, boutiques Shopify et plateformes web, avec stack et démo en ligne.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
