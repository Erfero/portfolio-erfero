import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Erféro Keoula pour discuter de votre projet web, application ou boutique Shopify.",
};

export default function ContactPage() {
  return <ContactContent />;
}
