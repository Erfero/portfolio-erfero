export type Locale = "fr" | "en";

export interface LocalizedText {
  fr: string;
  en: string;
}

export interface LocalizedList {
  fr: string[];
  en: string[];
}

export type ProjectCategory = "fullstack" | "shopify";

export interface Project {
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  context: LocalizedText;
  role: LocalizedText;
  results: LocalizedText;
  features: LocalizedList;
  tags: string[];
  stack: string[];
  externalLink: string;
  image: string | null;
  category: ProjectCategory;
}

export interface Experience {
  title: LocalizedText;
  company: string;
  location: string;
  date: string;
  points: LocalizedList;
}

export interface EducationEntry {
  title: LocalizedText;
  school: string;
  date: LocalizedText;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Service {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  offerings: LocalizedList;
}

export interface WhyHireMePoint {
  title: LocalizedText;
  detail: LocalizedText;
}

export interface Stat {
  value: string;
  label: LocalizedText;
}

export interface Testimonial {
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
}

export interface Reference {
  name: string;
  role: LocalizedText;
  email: string;
}
