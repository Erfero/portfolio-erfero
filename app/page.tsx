import { Hero } from "@/components/sections/hero";
import { TechTrustStrip } from "@/components/sections/tech-trust-strip";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Services } from "@/components/sections/services";
import { ProjectsTeaser } from "@/components/sections/projects-teaser";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TechTrustStrip />
      <AboutTeaser />
      <Services />
      <ProjectsTeaser />
      <Testimonials />
      <ContactCta />
    </>
  );
}
