import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    number: "01",
    title: { fr: "Sites web créatifs", en: "Creative websites" },
    description: {
      fr: "Des sites vitrines et landing pages modernes, animés, pensés pour convaincre en quelques secondes.",
      en: "Modern, animated showcase sites and landing pages, built to convince in a few seconds.",
    },
    offerings: {
      fr: [
        "Portfolios et sites vitrines",
        "Landing pages orientées conversion",
        "Animations et micro-interactions",
        "Développement responsive",
        "Optimisation des performances",
      ],
      en: [
        "Portfolios and showcase sites",
        "Conversion-focused landing pages",
        "Animations and micro-interactions",
        "Responsive development",
        "Performance optimization",
      ],
    },
  },
  {
    number: "02",
    title: { fr: "Applications web & SaaS full stack", en: "Full stack web apps & SaaS" },
    description: {
      fr: "Des applications complètes, du frontend à la base de données, avec une vraie logique métier.",
      en: "Complete applications, from the frontend to the database, with real business logic.",
    },
    offerings: {
      fr: [
        "Frontend React, Vue, Angular",
        "API REST en Node.js, Laravel ou NestJS",
        "Modélisation et gestion de bases de données",
        "Authentification et gestion des rôles",
        "Architectures temps réel",
      ],
      en: [
        "React, Vue, Angular frontends",
        "REST APIs in Node.js, Laravel or NestJS",
        "Database modeling and management",
        "Authentication and role management",
        "Real-time architectures",
      ],
    },
  },
  {
    number: "03",
    title: { fr: "E-commerce Shopify sur-mesure", en: "Custom Shopify e-commerce" },
    description: {
      fr: "Des boutiques Shopify pensées pour la conversion, pas seulement pour être jolies.",
      en: "Shopify stores designed for conversion, not just to look pretty.",
    },
    offerings: {
      fr: [
        "Thèmes Liquid personnalisés",
        "Structure de page orientée conversion",
        "Automatisation de la gestion des commandes",
        "Optimisation mobile-first",
        "Intégrations d'applications tierces",
      ],
      en: [
        "Custom Liquid themes",
        "Conversion-focused page structure",
        "Order management automation",
        "Mobile-first optimization",
        "Third-party app integrations",
      ],
    },
  },
  {
    number: "04",
    title: { fr: "Intégration WordPress & CMS", en: "WordPress & CMS integration" },
    description: {
      fr: "Des sites WordPress rapides et sur-mesure, orientés expérience utilisateur.",
      en: "Fast, custom WordPress sites focused on user experience.",
    },
    offerings: {
      fr: [
        "Personnalisation de thèmes et plugins",
        "Sites orientés expérience utilisateur",
        "Migration et optimisation de sites existants",
        "Back-office adapté aux besoins du client",
        "Maintenance et support",
      ],
      en: [
        "Theme and plugin customization",
        "UX-focused site builds",
        "Migration and optimization of existing sites",
        "Back-office tailored to client needs",
        "Maintenance and support",
      ],
    },
  },
  {
    number: "05",
    title: { fr: "SEO & Contenu web", en: "SEO & web content" },
    description: {
      fr: "Une double compétence rare : je construis des sites qui marchent ET qui se font trouver sur Google.",
      en: "A rare double skill set: I build sites that work AND that get found on Google.",
    },
    offerings: {
      fr: [
        "Recherche de mots-clés et stratégie éditoriale",
        "Rédaction d'articles optimisés SEO",
        "SEO technique (sitemap, JSON-LD, métadonnées)",
        "Amélioration du référencement de sites existants",
        "Suivi de positionnement",
      ],
      en: [
        "Keyword research and editorial strategy",
        "SEO-optimized article writing",
        "Technical SEO (sitemap, JSON-LD, metadata)",
        "Improving ranking on existing sites",
        "Ranking tracking",
      ],
    },
  },
];
