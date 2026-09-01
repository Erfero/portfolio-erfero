import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "boutique-aurore",
    name: { fr: "Boutique Aurore", en: "Aurore Boutique" },
    tagline: {
      fr: "E-commerce mode — variantes, avis, codes promo",
      en: "Fashion e-commerce — variants, reviews, promo codes",
    },
    description: {
      fr: "Boutique mode complète : variantes taille/couleur, avis clients notés, codes promo, liste de favoris et tunnel de commande, avec une identité visuelle propre (rose-gold, typographie éditoriale).",
      en: "A complete fashion storefront: size/color variants, rated customer reviews, promo codes, a wishlist, and a checkout flow, with its own distinct visual identity (rose-gold, editorial typography).",
    },
    context: {
      fr: "Projet personnel pour aller plus loin qu'un simple catalogue : une boutique mode complète avec variantes produits, avis clients et codes promo, sur une identité visuelle entièrement différente du reste de mon portfolio pour prouver que je sais sortir d'une seule direction artistique.",
      en: "Personal project to go beyond a simple catalog: a complete fashion storefront with product variants, customer reviews and promo codes, on a visual identity entirely different from the rest of my portfolio — proof I can step outside a single art direction.",
    },
    role: {
      fr: "Fullstack Next.js : catalogue, variantes, panier, avis, codes promo, tunnel de commande.",
      en: "Fullstack Next.js: catalog, variants, cart, reviews, promo codes, checkout flow.",
    },
    results: {
      fr: "En ligne et fonctionnel — ajoute un article, applique le code BIENVENUE10 et commande.",
      en: "Live and functional — add an item, apply code BIENVENUE10, and check out.",
    },
    features: {
      fr: [
        "Variantes taille/couleur par produit avec gestion de stock par variante",
        "Avis clients notés (étoiles) affichés sur chaque fiche produit",
        "Codes promo appliqués en temps réel au récapitulatif de commande",
        "Favoris persistants, produits similaires suggérés, tiroir panier animé",
      ],
      en: [
        "Size/color variants per product with per-variant stock tracking",
        "Star-rated customer reviews shown on every product page",
        "Promo codes applied live to the order summary",
        "Persistent wishlist, related-product suggestions, animated cart drawer",
      ],
    },
    tags: ["nextjs", "mongodb", "e-commerce"],
    stack: ["Next.js", "TypeScript", "MongoDB", "Framer Motion", "Vercel"],
    externalLink: "https://boutique-aurore.vercel.app",
    image: "/images/projects/boutique-aurore.png",
    category: "fullstack",
  },
  {
    slug: "centre-operations",
    name: { fr: "Centre d'opérations Social & Support", en: "Social & Support Ops Center" },
    tagline: {
      fr: "Messagerie unifiée, calendrier, tickets",
      en: "Unified inbox, content calendar, ticket queue",
    },
    description: {
      fr: "Outil interne pensé pour des équipes marketing/support : boîte de réception sociale unifiée, calendrier de publication et file de tickets, réunis dans un seul tableau de bord.",
      en: "An internal tool built for marketing/support teams: a unified social inbox, a content calendar and a support ticket queue, brought together in one dashboard.",
    },
    context: {
      fr: "Projet personnel inspiré d'un vrai besoin d'entreprise : centraliser messagerie sociale, planification de contenu et support client, au lieu de jongler entre plusieurs outils déconnectés.",
      en: "Personal project inspired by a real business need: centralizing social messaging, content planning and customer support instead of juggling several disconnected tools.",
    },
    role: {
      fr: "Développeur fullstack : conception et développement des 3 modules, du frontend à l'API.",
      en: "Fullstack developer: designed and built all 3 modules, from frontend to API.",
    },
    results: {
      fr: "En ligne et fonctionnel — réponds à un message ou fais avancer un ticket pour le tester.",
      en: "Live and functional — reply to a message or advance a ticket to try it out.",
    },
    features: {
      fr: [
        "Boîte de réception unifiée (mentions et messages privés) avec réponse directe",
        "Calendrier de contenu mensuel avec création et changement de statut des publications",
        "File de tickets support avec priorité, assignation et notes internes",
        "Tableau de bord avec indicateurs clés calculés en temps réel",
      ],
      en: [
        "Unified inbox (mentions and DMs) with direct reply",
        "Monthly content calendar with post creation and status changes",
        "Support ticket queue with priority, assignment and internal notes",
        "Dashboard with key metrics computed in real time",
      ],
    },
    tags: ["react", "nodejs", "mongodb"],
    stack: ["React", "Node.js", "MongoDB", "Framer Motion", "Vercel"],
    externalLink: "https://ops-center-eta.vercel.app",
    image: "/images/projects/centre-operations.png",
    category: "fullstack",
  },
  {
    slug: "studio-meridien",
    name: { fr: "Studio Méridien", en: "Studio Méridien" },
    tagline: {
      fr: "Vitrine agence en PHP — CMS léger, SEO réel",
      en: "PHP agency site — lightweight CMS, real SEO",
    },
    description: {
      fr: "Site vitrine multi-pages pour une agence web fictive : services, études de cas, blog SEO et formulaire de contact fonctionnel, construit en PHP natif sans framework.",
      en: "A multi-page site for a fictional web agency: services, case studies, an SEO blog and a working contact form, built in native PHP with no framework.",
    },
    context: {
      fr: "Projet personnel pour prouver mes compétences PHP/CMS sans dépendre de WordPress : un site agence multi-pages avec un vrai contenu SEO, un formulaire de contact qui persiste réellement les demandes, et une identité visuelle chaleureuse propre à ce projet.",
      en: "Personal project to prove my PHP/CMS skills without relying on WordPress: a multi-page agency site with real SEO content, a contact form that genuinely persists submissions, and a warm visual identity of its own.",
    },
    role: {
      fr: "Développement PHP complet : pages, formulaire de contact, SEO technique (sitemap, JSON-LD, meta).",
      en: "Full PHP development: pages, contact form, technical SEO (sitemap, JSON-LD, meta tags).",
    },
    results: {
      fr: "En ligne et fonctionnel — envoie un message via le formulaire de contact pour le tester.",
      en: "Live and functional — send a message through the contact form to try it.",
    },
    features: {
      fr: [
        "4 articles de blog SEO réels, avec schéma JSON-LD Article et sitemap.xml généré dynamiquement",
        "Formulaire de contact validé et persisté en base, avec vue admin protégée par clé",
        "Carrousel de témoignages et animations d'apparition au scroll en JavaScript natif",
        "6 études de cas détaillées (défi, solution, résultat) et 4 pages de services",
      ],
      en: [
        "4 real SEO blog articles, with Article JSON-LD schema and a dynamically generated sitemap.xml",
        "Validated, persisted contact form with a key-protected admin view",
        "Testimonial carousel and scroll-reveal animations in native JavaScript",
        "6 detailed case studies (challenge, solution, result) and 4 service pages",
      ],
    },
    tags: ["php", "seo", "mongodb"],
    stack: ["PHP", "MongoDB", "JavaScript", "SEO technique", "Vercel"],
    externalLink: "https://studio-meridien.vercel.app",
    image: "/images/projects/studio-meridien.png",
    category: "fullstack",
  },
  {
    slug: "dashboard-analytics-vue",
    name: { fr: "Dashboard Analytics", en: "Analytics Dashboard" },
    tagline: {
      fr: "Vue.js + API Node — pilotage business en temps réel",
      en: "Vue.js + Node API — real-time business tracking",
    },
    description: {
      fr: "Dashboard analytique façon SaaS : navigation par sidebar, KPI avec tendances, graphiques et export, connecté à une API Node.js maison.",
      en: "SaaS-style analytics dashboard: sidebar navigation, trend-aware KPIs, charts and export, backed by a custom Node.js API.",
    },
    context: {
      fr: "Projet personnel pour approfondir Vue.js côté frontend et la construction d'API côté backend, sur un cas d'usage concret : suivre des métriques business en temps réel avec une UI au niveau des vrais outils SaaS.",
      en: "Personal project to go deeper on Vue.js on the frontend and API design on the backend, on a concrete use case: tracking business metrics in real time with a UI on par with real SaaS tools.",
    },
    role: {
      fr: "Fullstack : frontend Vue.js + API Node.js + modélisation des données.",
      en: "Fullstack: Vue.js frontend + Node.js API + data modeling.",
    },
    results: {
      fr: "En ligne et fonctionnel — connecte-toi avec le compte démo pour l'essayer.",
      en: "Live and functional — sign in with the demo account to try it.",
    },
    features: {
      fr: [
        "Navigation par sidebar avec sections Ventes / Trafic / Inscriptions",
        "Cartes KPI avec mini-graphiques et variation vs période précédente",
        "Graphiques interactifs (courbes, barres, répartition) + tableau des meilleurs jours",
        "Filtres par période, export CSV et authentification (compte démo inclus)",
      ],
      en: [
        "Sidebar navigation with Sales / Traffic / Signups sections",
        "KPI cards with mini sparklines and change vs. previous period",
        "Interactive charts (lines, bars, breakdown) plus a best-days table",
        "Period filters, CSV export and authentication (demo account included)",
      ],
    },
    tags: ["vuejs", "nodejs", "api"],
    stack: ["Vue.js 3", "Chart.js", "Node.js API (Vercel Functions)", "Vercel"],
    externalLink: "https://dashboard-analytics-vue.vercel.app",
    image: "/images/projects/dashboard-analytics-vue.png",
    category: "fullstack",
  },
  {
    slug: "panel-admin-angular",
    name: { fr: "Panel d'administration Angular", en: "Angular Admin Panel" },
    tagline: {
      fr: "Sidebar, KPI et gestion des rôles et permissions",
      en: "Sidebar, KPIs, and role & permission management",
    },
    description: {
      fr: "Panel d'administration complet : connexion, vue d'ensemble avec statistiques, gestion des utilisateurs, rôles et permissions.",
      en: "Full admin panel: login, KPI overview, and user, role and permission management.",
    },
    context: {
      fr: "Projet personnel pour explorer Angular et TypeScript sur un cas classique mais exigeant : la gestion fine des droits d'accès dans une interface d'administration au niveau d'un vrai produit SaaS.",
      en: "Personal project to explore Angular and TypeScript on a classic but demanding case: fine-grained access control in an admin interface on par with a real SaaS product.",
    },
    role: {
      fr: "Développement frontend complet en Angular, architecture par composants standalone.",
      en: "Full Angular frontend development, standalone-component architecture.",
    },
    results: {
      fr: "En ligne et fonctionnel — crée, modifie ou supprime un utilisateur pour le tester.",
      en: "Live and functional — create, edit or delete a user to try it out.",
    },
    features: {
      fr: [
        "Authentification (route guard) et vue d'ensemble avec KPI et activité récente",
        "Gestion des utilisateurs avec rôles et permissions granulaires",
        "Tableau de données avec tri, pagination et recherche en temps réel",
        "Formulaires réactifs typés + matrice de permissions éditable par rôle et par module",
      ],
      en: [
        "Authentication (route guard) and an overview with KPIs and recent activity",
        "User management with granular roles and permissions",
        "Data table with sorting, pagination and live search",
        "Typed reactive forms + an editable permission matrix by role and module",
      ],
    },
    tags: ["angular", "typescript", "material"],
    stack: ["Angular 18", "TypeScript", "Angular Material", "Signals", "Vercel"],
    externalLink: "https://panel-admin-angular.vercel.app",
    image: "/images/projects/panel-admin-angular.png",
    category: "fullstack",
  },
  {
    slug: "app-mobile-flutter",
    name: { fr: "Code4Life Connect", en: "Code4Life Connect" },
    tagline: {
      fr: "Une seule base de code Flutter, messagerie multi-conversations",
      en: "One Flutter codebase, multi-conversation messaging",
    },
    description: {
      fr: "Messagerie d'équipe façon Slack : plusieurs conversations, présence en ligne, indicateur de saisie, interface adaptative desktop/mobile, compilée depuis une base de code Flutter unique.",
      en: "Slack-style team messaging: multiple conversations, online presence, typing indicator, adaptive desktop/mobile UI, compiled from a single Flutter codebase.",
    },
    context: {
      fr: "Projet personnel pour étendre mes compétences fullstack au mobile : une seule base de code Flutter pour couvrir web, iOS et Android, avec une UI qui s'adapte vraiment à chaque taille d'écran plutôt qu'un simple format mobile étiré.",
      en: "Personal project to extend my fullstack skills to mobile: a single Flutter codebase covering web, iOS and Android, with a UI that genuinely adapts to each screen size instead of a stretched mobile layout.",
    },
    role: {
      fr: "Développement mobile complet : UI adaptative, authentification, architecture temps réel.",
      en: "Full mobile development: adaptive UI, authentication, real-time architecture.",
    },
    results: {
      fr: "En ligne et fonctionnel — connecte-toi avec le compte démo pour voir les messages arriver en direct.",
      en: "Live and functional — sign in with the demo account to watch messages arrive live.",
    },
    features: {
      fr: [
        "Interface adaptative : 3 volets sur desktop (conversations, fil, profil), navigation mobile dédiée en dessous de 880px",
        "4 conversations avec avatars, regroupement des messages et indicateur « en train d'écrire »",
        "Présence en ligne et messagerie en direct, via une architecture Streams prête pour un backend temps réel (type Firebase)",
        "Compilée pour le web depuis une base de code 100% partagée avec iOS/Android",
      ],
      en: [
        "Adaptive interface: 3-pane desktop layout (conversations, thread, profile), dedicated mobile navigation below 880px",
        '4 conversations with avatars, message grouping and a "typing" indicator',
        "Online presence and live messaging, built on a Streams architecture ready for a real-time backend (e.g. Firebase)",
        "Compiled for web from a codebase 100% shared with iOS/Android",
      ],
    },
    tags: ["flutter", "dart", "streams"],
    stack: ["Flutter", "Dart", "Dart Streams", "Material 3", "Vercel"],
    externalLink: "https://appmobileflutter.vercel.app",
    image: "/images/projects/app-mobile-flutter.png",
    category: "fullstack",
  },
  {
    slug: "api-laravel-gestion",
    name: { fr: "Gestion de projets Laravel", en: "Laravel Project Management" },
    tagline: {
      fr: "API + interface complète, authentification par token",
      en: "Full API + interface, token-based auth",
    },
    description: {
      fr: "Application de gestion de projets et tâches avec une vraie interface (pas juste une API) : crée des projets, assigne des tâches, suis leur avancement.",
      en: "Project and task management app with a real interface (not just an API): create projects, assign tasks, track progress.",
    },
    context: {
      fr: "Projet personnel pour consolider mes compétences backend PHP/Laravel sur un cas exigeant : une API sécurisée consommée par une vraie interface, déployée en serverless sur Vercel.",
      en: "Personal project to reinforce my PHP/Laravel backend skills on a demanding case: a secured API consumed by a real interface, deployed serverless on Vercel.",
    },
    role: {
      fr: "Développement fullstack : API (modèles, migrations, authentification, endpoints) + interface consommant l'API.",
      en: "Fullstack development: API (models, migrations, auth, endpoints) + the interface consuming it.",
    },
    results: {
      fr: "En ligne et fonctionnel — teste la démo en direct (connexion + chargement des projets) sur la page du projet.",
      en: "Live and functional — try the live demo (login + loading projects) on the project page.",
    },
    features: {
      fr: [
        "Interface complète (pas de doc statique) : connexion, projets, tâches, tout piloté via l'API",
        "Authentification par token (Laravel Sanctum) et gestion des rôles utilisateurs",
        "Cycle de statut des tâches en un clic, création/suppression de projets et tâches",
        "Endpoints REST versionnés avec relations, pagination et Form Requests dédiées",
      ],
      en: [
        "Full interface (not static docs): login, projects, tasks — all driven through the API",
        "Token-based authentication (Laravel Sanctum) and user role management",
        "One-click task status cycling, project and task creation/deletion",
        "Versioned REST endpoints with relations, pagination and dedicated Form Requests",
      ],
    },
    tags: ["laravel", "php", "sanctum"],
    stack: ["Laravel 12", "PHP", "Sanctum", "SQLite", "API REST", "Vercel"],
    externalLink: "https://api-laravel-gestion.vercel.app",
    image: "/images/projects/api-laravel-gestion.png",
    category: "fullstack",
  },
  {
    slug: "app-temps-reel-firebase",
    name: { fr: "Messagerie temps réel multi-canaux", en: "Multi-Channel Real-Time Messaging" },
    tagline: {
      fr: "React + Firebase — façon Slack, en direct",
      en: "React + Firebase — Slack-style, live",
    },
    description: {
      fr: "Messagerie multi-canaux avec présence en ligne, interface 3 volets sur desktop, synchronisée instantanément via Firestore.",
      en: "Multi-channel messaging with online presence, a 3-pane desktop layout, instantly synced through Firestore.",
    },
    context: {
      fr: "Projet personnel pour maîtriser les architectures temps réel : messages et présence en ligne synchronisés sans rechargement de page, entre tous les visiteurs connectés, avec une UI multi-canaux façon Slack.",
      en: "Personal project to master real-time architectures: messages and online presence synced with no page reload, across every connected visitor, with a Slack-style multi-channel UI.",
    },
    role: {
      fr: "Fullstack : frontend React + Firebase (Firestore, Auth anonyme, règles de sécurité).",
      en: "Fullstack: React frontend + Firebase (Firestore, anonymous auth, security rules).",
    },
    results: {
      fr: "En ligne et fonctionnel — ouvre la page dans deux onglets pour voir la synchro en direct.",
      en: "Live and functional — open the page in two tabs to watch the sync happen live.",
    },
    features: {
      fr: [
        "4 canaux de discussion avec aperçu du dernier message, avatars colorés par utilisateur",
        "Interface 3 volets sur desktop (canaux, fil actif, présence), navigation dédiée sur mobile",
        "Indicateur de présence en ligne (battements réguliers, expiration automatique)",
        "Authentification anonyme et règles de sécurité Firestore (lecture publique, écriture restreinte)",
      ],
      en: [
        "4 channels with last-message previews, avatars colored per user",
        "3-pane desktop layout (channels, active thread, presence), dedicated mobile navigation",
        "Online presence indicator (regular heartbeats, automatic expiry)",
        "Anonymous authentication and Firestore security rules (public read, restricted write)",
      ],
    },
    tags: ["react", "firebase", "realtime"],
    stack: ["React", "Cloud Firestore", "Firebase Auth", "Vercel"],
    externalLink: "https://app-temps-reel-firebase.vercel.app",
    image: "/images/projects/app-temps-reel-firebase.png",
    category: "fullstack",
  },
  {
    slug: "ecommerce-mern",
    name: { fr: "Boutique en ligne MERN", en: "MERN Online Store" },
    tagline: {
      fr: "React, Node, MongoDB — du catalogue à la commande",
      en: "React, Node, MongoDB — from catalog to checkout",
    },
    description: {
      fr: "Boutique e-commerce de bout en bout : catalogue produits en base, panier persistant, tunnel de commande complet (sans paiement réel).",
      en: "End-to-end e-commerce store: database-backed product catalog, persistent cart, full checkout flow (no real payment).",
    },
    context: {
      fr: "Projet personnel pour construire un e-commerce complet de bout en bout, sans passer par une plateforme no-code, afin de maîtriser chaque étape du tunnel de vente jusqu'à la persistance en base.",
      en: "Personal project to build a complete e-commerce flow end to end, without a no-code platform, to master every step of the sales funnel down to database persistence.",
    },
    role: {
      fr: "Fullstack MERN complet : catalogue, panier, commandes, API REST.",
      en: "Full MERN stack: catalog, cart, orders, REST API.",
    },
    results: {
      fr: "En ligne et fonctionnel — ajoute un produit au panier et passe une commande de test.",
      en: "Live and functional — add a product to your cart and place a test order.",
    },
    features: {
      fr: [
        "Recherche, filtres par catégorie et favoris (persistants), produits similaires suggérés",
        "Catalogue produits chargé depuis MongoDB, pages détail par produit",
        "Panier persistant (localStorage) et tunnel de commande complet",
        "Commande enregistrée en base avec décrément du stock côté serveur",
      ],
      en: [
        "Search, category filters and persistent favorites, with suggested related products",
        "Product catalog loaded from MongoDB, per-product detail pages",
        "Persistent cart (localStorage) and full checkout flow",
        "Orders saved to the database with server-side stock decrement",
      ],
    },
    tags: ["react", "nodejs", "mongodb"],
    stack: ["React", "Node.js", "MongoDB", "Mongoose", "Vercel"],
    externalLink: "https://ecommerce-mern-steel.vercel.app",
    image: "/images/projects/ecommerce-mern.png",
    category: "fullstack",
  },
  {
    slug: "booking-nextjs",
    name: { fr: "Prise de rendez-vous en ligne", en: "Online Booking System" },
    tagline: {
      fr: "Next.js — réservation de créneaux en temps réel",
      en: "Next.js — real-time slot booking",
    },
    description: {
      fr: "Système de prise de rendez-vous complet : choix de prestation, créneaux disponibles en temps réel, confirmation, vue admin.",
      en: "Complete appointment-booking system: service selection, real-time slot availability, confirmation, admin view.",
    },
    context: {
      fr: "Projet personnel pour maîtriser Next.js (App Router, Route Handlers, TypeScript) sur un cas très concret et réutilisable : la prise de rendez-vous en ligne, un besoin réel pour des indépendants ou petites structures.",
      en: "Personal project to master Next.js (App Router, Route Handlers, TypeScript) on a very concrete, reusable case: online appointment booking, a real need for freelancers and small businesses.",
    },
    role: {
      fr: "Fullstack Next.js : API (Route Handlers, MongoDB), UI du parcours de réservation, vue admin.",
      en: "Fullstack Next.js: API (Route Handlers, MongoDB), the booking flow UI, and the admin view.",
    },
    results: {
      fr: "En ligne et fonctionnel — réserve un créneau de test pour voir le parcours complet.",
      en: "Live and functional — book a test slot to see the full flow.",
    },
    features: {
      fr: [
        "Parcours en 4 étapes : prestation, date, créneau disponible, coordonnées",
        "Disponibilité calculée en temps réel (jours ouvrés, créneaux déjà pris exclus)",
        "Index unique en base pour empêcher tout double-réservation d'un créneau",
        "Vue admin protégée par clé d'accès listant toutes les réservations",
      ],
      en: [
        "4-step flow: service, date, available slot, contact details",
        "Real-time availability (business days only, already-booked slots excluded)",
        "Unique database index preventing any double-booking of a slot",
        "Key-protected admin view listing every booking",
      ],
    },
    tags: ["nextjs", "typescript", "mongodb"],
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    externalLink: "https://booking-nextjs-nine.vercel.app",
    image: "/images/projects/booking-nextjs.png",
    category: "fullstack",
  },
  {
    slug: "blog-seo-nuxt",
    name: { fr: "Code4Life Insights", en: "Code4Life Insights" },
    tagline: {
      fr: "Nuxt.js — blog technique optimisé SEO",
      en: "Nuxt.js — SEO-optimized technical blog",
    },
    description: {
      fr: "Blog technique sur le développement web et le SEO : rendu statique, sitemap généré dynamiquement, JSON-LD, balises Open Graph sur chaque article.",
      en: "Technical blog on web development and SEO: static rendering, a dynamically generated sitemap, JSON-LD, Open Graph tags on every article.",
    },
    context: {
      fr: "Projet personnel pour mettre en pratique ma double compétence développeur/référenceur : un blog Nuxt 3 dont chaque page respecte les fondamentaux techniques du SEO, pas juste le contenu éditorial.",
      en: "Personal project to put my developer/SEO double skill set into practice: a Nuxt 3 blog where every page respects the technical fundamentals of SEO, not just the editorial content.",
    },
    role: {
      fr: "Fullstack Nuxt : contenu (Nuxt Content), génération du sitemap et des métadonnées, mise en page.",
      en: "Fullstack Nuxt: content (Nuxt Content), sitemap and metadata generation, layout.",
    },
    results: {
      fr: "En ligne et fonctionnel — consulte un article pour voir le rendu et les métadonnées SEO.",
      en: "Live and functional — open an article to see the rendering and SEO metadata.",
    },
    features: {
      fr: [
        "4 articles techniques réels sur le SEO et le développement web",
        "Sitemap.xml et robots.txt générés dynamiquement à partir du contenu",
        "Schéma JSON-LD Article et balises Open Graph sur chaque page",
        "Pages prérendues au build (SSG) pour un chargement instantané",
      ],
      en: [
        "4 real technical articles on SEO and web development",
        "Sitemap.xml and robots.txt dynamically generated from the content",
        "JSON-LD Article schema and Open Graph tags on every page",
        "Pages prerendered at build time (SSG) for instant loading",
      ],
    },
    tags: ["nuxt", "vuejs", "seo"],
    stack: ["Nuxt 3", "Vue.js", "Nuxt Content", "TypeScript", "Vercel"],
    externalLink: "https://blog-seo-nuxt.vercel.app",
    image: "/images/projects/blog-seo-nuxt.png",
    category: "fullstack",
  },
  {
    slug: "url-shortener-nestjs",
    name: { fr: "Raccourcisseur de liens", en: "Link Shortener" },
    tagline: {
      fr: "NestJS — API structurée avec stats de clics",
      en: "NestJS — structured API with click stats",
    },
    description: {
      fr: "API de raccourcissement de liens avec redirection et comptage de clics en temps réel, construite avec l'architecture modulaire de NestJS.",
      en: "Link-shortening API with redirection and real-time click counting, built on NestJS's modular architecture.",
    },
    context: {
      fr: "Projet personnel pour maîtriser NestJS et son architecture modulaire (contrôleurs, services, DTO validés par décorateurs) sur un cas simple mais complet : un raccourcisseur de liens avec suivi des clics.",
      en: "Personal project to master NestJS and its modular architecture (controllers, services, decorator-validated DTOs) on a simple but complete case: a link shortener with click tracking.",
    },
    role: {
      fr: "Backend NestJS complet : modules, contrôleurs, validation, persistance MongoDB.",
      en: "Full NestJS backend: modules, controllers, validation, MongoDB persistence.",
    },
    results: {
      fr: "En ligne et fonctionnel — crée un lien court et teste sa redirection.",
      en: "Live and functional — create a short link and test its redirect.",
    },
    features: {
      fr: [
        "Création de liens courts avec code personnalisé optionnel",
        "Redirection avec comptage de clics en temps réel",
        "Validation stricte des entrées via des DTO décorés (class-validator)",
        "Protection contre les codes réservés et les doublons",
      ],
      en: [
        "Short link creation with an optional custom code",
        "Redirection with real-time click counting",
        "Strict input validation via decorated DTOs (class-validator)",
        "Protection against reserved codes and duplicates",
      ],
    },
    tags: ["nestjs", "typescript", "mongodb"],
    stack: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "Vercel"],
    externalLink: "https://url-shortener-nestjs-livid.vercel.app",
    image: "/images/projects/url-shortener-nestjs.png",
    category: "fullstack",
  },
  {
    slug: "kanban-board",
    name: { fr: "Tableau Kanban", en: "Kanban Board" },
    tagline: {
      fr: "React — gestion de tâches par glisser-déposer",
      en: "React — drag-and-drop task management",
    },
    description: {
      fr: "Application de gestion de tâches façon Trello : tableaux multiples, colonnes personnalisables, cartes avec priorité/étiquettes/échéance, glisser-déposer fluide, tout persisté en local.",
      en: "Trello-style task management app: multiple boards, customizable columns, cards with priority/labels/due dates, smooth drag-and-drop, all persisted locally.",
    },
    context: {
      fr: "Projet personnel front-end pur pour démontrer une interaction complexe (glisser-déposer multi-colonnes) sans dépendre d'un backend : idéal pour un usage local ou comme brique à connecter à une API plus tard.",
      en: "Pure front-end personal project to demonstrate a complex interaction (multi-column drag-and-drop) with no backend dependency: ideal for local use or as a building block to wire up to an API later.",
    },
    role: {
      fr: "Développement front-end complet : architecture des données, drag-and-drop, persistance locale.",
      en: "Full front-end development: data architecture, drag-and-drop, local persistence.",
    },
    results: {
      fr: "En ligne et fonctionnel — crée un tableau, ajoute des cartes et déplace-les entre les colonnes.",
      en: "Live and functional — create a board, add cards, and drag them between columns.",
    },
    features: {
      fr: [
        "Tableaux multiples, colonnes et cartes entièrement personnalisables",
        "Glisser-déposer natif entre colonnes avec aperçu animé de la carte",
        "Cartes avec description, priorité, étiquettes colorées et échéance",
        "Sauvegarde automatique dans le navigateur, aucune donnée perdue au rechargement",
      ],
      en: [
        "Multiple boards, fully customizable columns and cards",
        "Native drag-and-drop between columns with an animated card preview",
        "Cards with description, priority, colored labels and due dates",
        "Auto-saved in the browser — nothing lost on reload",
      ],
    },
    tags: ["react", "javascript", "dnd"],
    stack: ["React", "dnd-kit", "Context API + useReducer", "localStorage", "Vercel"],
    externalLink: "https://kanban-board-cyan-three.vercel.app",
    image: "/images/projects/kanban-board.png",
    category: "fullstack",
  },
  {
    slug: "velora",
    name: { fr: "Velora", en: "Velora" },
    tagline: {
      fr: "Boutique Shopify — poudre de camouflage capillaire premium",
      en: "Shopify store — premium hair-concealment powder",
    },
    description: {
      fr: "Boutique Shopify premium pour une poudre de camouflage capillaire homme : storytelling fort, témoignages de barbiers, carrousel avant/après.",
      en: "Premium Shopify store for a men's hair-concealment powder: strong storytelling, barber testimonials, before/after carousel.",
    },
    context: {
      fr: "Projet client dans le cadre de mon activité de développeur Shopify freelance. Objectif : construire la boutique la plus aboutie visuellement de mon portfolio Shopify, avec un storytelling capable de convertir sur un marché anglophone exigeant.",
      en: "Client project as part of my freelance Shopify work. Goal: build the most visually accomplished store in my Shopify portfolio, with storytelling strong enough to convert in a demanding English-speaking market.",
    },
    role: {
      fr: "Développeur Shopify : thème Liquid sur-mesure, CRO, storytelling, intégration des témoignages.",
      en: "Shopify developer: custom Liquid theme, CRO, storytelling, testimonial integration.",
    },
    results: {
      fr: "Boutique en ligne, considérée comme la meilleure exécution visuelle de mon portfolio Shopify.",
      en: "Live store, considered the best visually executed build in my Shopify portfolio.",
    },
    features: {
      fr: [
        "Storytelling orienté confiance en soi, avec témoignages vidéo de barbiers",
        "Carrousel avant/après intégré à la fiche produit",
        "Structure de page orientée conversion (preuve sociale, objections, garantie)",
        "Thème Liquid entièrement personnalisé",
      ],
      en: [
        "Confidence-focused storytelling, with video testimonials from barbers",
        "Before/after carousel built into the product page",
        "Conversion-focused page structure (social proof, objection handling, guarantee)",
        "Fully custom Liquid theme",
      ],
    },
    tags: ["shopify", "cro", "storytelling"],
    stack: ["Shopify", "Liquid", "CRO", "JavaScript"],
    externalLink: "https://velora-r.com",
    image: null,
    category: "shopify",
  },
  {
    slug: "sublimebust",
    name: { fr: "SublimeBust", en: "SublimeBust" },
    tagline: {
      fr: "Boutique Shopify — bien-être et beauté naturelle",
      en: "Shopify store — wellness and natural beauty",
    },
    description: {
      fr: "Boutique Shopify pour une gamme bien-être (gummies, tisane, huile, soutien-gorge de massage) autour de la thématique des courbes naturelles.",
      en: "Shopify store for a wellness product range (gummies, herbal tea, oil, massage bra) built around the theme of natural curves.",
    },
    context: {
      fr: "Projet client freelance : refonte complète de la boutique pour améliorer la présentation produit et la structure de conversion.",
      en: "Freelance client project: a complete storefront redesign to improve product presentation and conversion structure.",
    },
    role: {
      fr: "Développeur Shopify : refonte du thème, structure de page, optimisation de la conversion.",
      en: "Shopify developer: theme redesign, page structure, conversion optimization.",
    },
    results: {
      fr: "+32% de ventes mesurées après la refonte.",
      en: "+32% measured sales increase after the redesign.",
    },
    features: {
      fr: [
        "Refonte complète de la structure de page produit",
        "Mise en avant de la preuve sociale et des bénéfices produit",
        "Optimisation mobile-first du tunnel d'achat",
        "Intégration d'une gamme de produits complémentaires",
      ],
      en: [
        "Complete product-page structure redesign",
        "Social proof and product benefits front and center",
        "Mobile-first checkout flow optimization",
        "Integration of a complementary product range",
      ],
    },
    tags: ["shopify", "e-commerce", "wellness"],
    stack: ["Shopify", "Liquid", "CRO"],
    externalLink: "https://sublimebust.com",
    image: null,
    category: "shopify",
  },
  {
    slug: "curmaparis",
    name: { fr: "CurmaParis", en: "CurmaParis" },
    tagline: {
      fr: "Boutique Shopify — gamme de soins au curcuma",
      en: "Shopify store — turmeric skincare line",
    },
    description: {
      fr: "Boutique Shopify pour une gamme complète de soins au curcuma (savons, gommages, masques, sérums), avec un catalogue étoffé et de vrais avis clients.",
      en: "Shopify store for a complete turmeric skincare line (soaps, scrubs, masks, serums), with a rich catalog and real customer reviews.",
    },
    context: {
      fr: "Projet client freelance nécessitant une structure de catalogue solide pour une gamme de plusieurs dizaines de produits, avec une note moyenne client à maintenir.",
      en: "Freelance client project requiring a solid catalog structure for a range of dozens of products, with a customer rating to maintain.",
    },
    role: {
      fr: "Développeur Shopify : architecture du catalogue, fiches produits, intégration des avis.",
      en: "Shopify developer: catalog architecture, product pages, review integration.",
    },
    results: {
      fr: "Boutique en ligne avec une note moyenne de 4,8/5 sur les avis clients.",
      en: "Live store with a 4.8/5 average customer rating.",
    },
    features: {
      fr: [
        "Catalogue structuré par gamme et type de soin",
        "Avis clients notés intégrés à chaque fiche produit",
        "Fiches produits détaillées (ingrédients, utilisation, bénéfices)",
        "Navigation et recherche optimisées pour un large catalogue",
      ],
      en: [
        "Catalog structured by range and treatment type",
        "Rated customer reviews on every product page",
        "Detailed product pages (ingredients, usage, benefits)",
        "Navigation and search optimized for a large catalog",
      ],
    },
    tags: ["shopify", "e-commerce", "beauty"],
    stack: ["Shopify", "Liquid", "CRO"],
    externalLink: "https://curmaparis.fr",
    image: null,
    category: "shopify",
  },
  {
    slug: "orasmile",
    name: { fr: "Orasmile", en: "Orasmile" },
    tagline: {
      fr: "Boutique Shopify — blanchiment dentaire à domicile",
      en: "Shopify store — at-home teeth whitening",
    },
    description: {
      fr: "Boutique Shopify pour des bandes de blanchiment dentaire à domicile, positionnée comme une alternative accessible au dentiste.",
      en: "Shopify store for at-home teeth-whitening strips, positioned as an accessible alternative to the dentist.",
    },
    context: {
      fr: "Projet client freelance orienté conversion, avec un besoin fort de rassurer sur l'efficacité et la sécurité du produit.",
      en: "Conversion-focused freelance client project, with a strong need to reassure on product efficacy and safety.",
    },
    role: {
      fr: "Développeur Shopify : structure de page orientée conversion, gestion des objections.",
      en: "Shopify developer: conversion-focused page structure, objection handling.",
    },
    results: {
      fr: "Boutique en ligne et fonctionnelle, structurée pour lever les objections avant l'achat.",
      en: "Live and functional store, structured to resolve objections before purchase.",
    },
    features: {
      fr: [
        "Structure de page orientée objections (efficacité, sécurité, prix vs dentiste)",
        "Preuve sociale et avant/après intégrés à la page produit",
        "Tableau comparatif prix vs blanchiment chez le dentiste",
        "Optimisation mobile-first du tunnel de conversion",
      ],
      en: [
        "Objection-focused page structure (efficacy, safety, price vs. dentist)",
        "Social proof and before/after built into the product page",
        "Comparison table: price vs. dentist whitening",
        "Mobile-first conversion funnel optimization",
      ],
    },
    tags: ["shopify", "cro", "beauty"],
    stack: ["Shopify", "Liquid", "CRO"],
    externalLink: "https://orasmile.myshopify.com",
    image: null,
    category: "shopify",
  },
  {
    slug: "qivote",
    name: { fr: "QiVOTE", en: "QiVOTE" },
    tagline: {
      fr: "Plateforme de vote en ligne pour événements et concours",
      en: "Online voting platform for events and contests",
    },
    description: {
      fr: "QiVOTE est une plateforme web qui permet d'organiser des campagnes de vote en ligne (événements, concours, nominations) et de laisser le public soutenir ses favoris en temps réel. Elle regroupe la découverte d'événements, le vote multi-catégories, le paiement et le suivi des résultats dans une interface moderne et responsive.",
      en: "QiVOTE is a web platform for running online voting campaigns (events, contests, nominations) and letting the public back their favorites in real time. It brings together event discovery, multi-category voting, payment and results tracking in a modern, responsive interface.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interfaces frontend (Next.js, Shadcn UI) et logique de vote et de paiement.",
      en: "Fullstack development: frontend interfaces (Next.js, Shadcn UI) and voting/payment logic.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Découverte d'événements et vote multi-catégories",
        "Paiement intégré pour soutenir ses favoris",
        "Suivi des résultats en temps réel",
        "Interface moderne et responsive",
      ],
      en: [
        "Event discovery and multi-category voting",
        "Integrated payment to support favorites",
        "Real-time results tracking",
        "Modern, responsive interface",
      ],
    },
    tags: ["nextjs", "fullstack", "payments"],
    stack: ["Next.js", "Shadcn UI", "Formik", "Yup"],
    externalLink: "https://www.adjakidjeaxel.com/projets/qivote",
    image: null,
    category: "fullstack",
  },
  {
    slug: "kumba",
    name: { fr: "Kumba", en: "Kumba" },
    tagline: {
      fr: "Location de logements au Bénin, sans intermédiaires",
      en: "Home rentals in Benin, no middlemen",
    },
    description: {
      fr: "Kumba est une plateforme de location et de réservation de logements qui simplifie la recherche d'hébergements au Bénin. Conçue comme une alternative directe aux démarcheurs et aux intermédiaires, elle met en relation locataires et propriétaires via une application mobile intuitive, avec une landing page dédiée à la présentation du service et au téléchargement de l'application.",
      en: "Kumba is a housing rental and booking platform that simplifies finding accommodation in Benin. Designed as a direct alternative to brokers and middlemen, it connects tenants and landlords through an intuitive mobile app, with a landing page dedicated to presenting the service and app downloads.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React et API Laravel/MySQL.",
      en: "Fullstack development: React interface and Laravel/MySQL API.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Recherche de logements par ville et par durée",
        "Mise en relation directe locataires / propriétaires",
        "Application mobile dédiée",
        "Landing page de présentation et de téléchargement",
      ],
      en: [
        "Search for housing by city and duration",
        "Direct connection between tenants and landlords",
        "Dedicated mobile app",
        "Presentation and download landing page",
      ],
    },
    tags: ["react", "laravel", "mysql"],
    stack: ["React", "Laravel", "MySQL"],
    externalLink: "https://www.adjakidjeaxel.com/projets/kumba",
    image: null,
    category: "fullstack",
  },
  {
    slug: "ecochamp",
    name: { fr: "EcoChamp", en: "EcoChamp" },
    tagline: {
      fr: "Un réseau social utile pour l'action environnementale",
      en: "A useful social network for environmental action",
    },
    description: {
      fr: "EcoChamp est une plateforme pensée pour mobiliser, sensibiliser et récompenser les actions environnementales. Ce n'est pas un réseau social classique, mais un réseau social utile où chaque interaction a un impact mesurable.",
      en: "EcoChamp is a platform designed to mobilize, raise awareness and reward environmental action. Not a classic social network, but a useful one where every interaction has a measurable impact.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React/Vite et logique applicative.",
      en: "Fullstack development: React/Vite interface and application logic.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Actions environnementales avec impact mesurable",
        "Mécanique de récompense communautaire",
        "Interface légère et rapide (Vite)",
        "Composants Flowbite React",
      ],
      en: [
        "Environmental actions with measurable impact",
        "Community reward mechanics",
        "Light, fast interface (Vite)",
        "Flowbite React components",
      ],
    },
    tags: ["react", "vite", "community"],
    stack: ["React", "Vite", "Flowbite React"],
    externalLink: "https://www.adjakidjeaxel.com/projets/ecochamp",
    image: null,
    category: "fullstack",
  },
  {
    slug: "smoni",
    name: { fr: "Smoni", en: "Smoni" },
    tagline: {
      fr: "Auto-école digitale, du code à l'examen",
      en: "Digital driving school, from theory to test",
    },
    description: {
      fr: "Smoni est une plateforme d'auto-école digitale qui combine outils en ligne et services physiques pour accompagner les élèves jusqu'à l'obtention du permis de conduire.",
      en: "Smoni is a digital driving-school platform combining online tools and in-person services to guide students all the way to their driving licence.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React et API Laravel/PostgreSQL.",
      en: "Fullstack development: React interface and Laravel/PostgreSQL API.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Parcours pédagogique en ligne",
        "Prise de rendez-vous pour les cours pratiques",
        "Suivi de la progression de l'élève",
        "API Laravel avec base PostgreSQL",
      ],
      en: [
        "Online learning path",
        "Booking for practical lessons",
        "Student progress tracking",
        "Laravel API with a PostgreSQL database",
      ],
    },
    tags: ["react", "laravel", "postgresql"],
    stack: ["React", "Laravel", "PostgreSQL"],
    externalLink: "https://www.adjakidjeaxel.com/projets/smoni",
    image: null,
    category: "fullstack",
  },
  {
    slug: "walab",
    name: { fr: "Walab", en: "Walab" },
    tagline: {
      fr: "Analyses médicales en ligne, résultats à distance",
      en: "Online lab tests, results anywhere",
    },
    description: {
      fr: "Walab est une application web qui simplifie l'accès aux analyses médicales. Les utilisateurs peuvent commander des tests en ligne (bilans sanguins, prélèvements, analyses de laboratoire), planifier un rendez-vous pour un prélèvement à domicile, payer en ligne et consulter leurs résultats depuis leur ordinateur ou mobile.",
      en: "Walab is a web app that simplifies access to medical lab tests. Users can order tests online (blood work, sample collection, lab analysis), book an at-home sample collection appointment, pay online and view their results from computer or mobile.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React et API Laravel/MySQL.",
      en: "Fullstack development: React interface and Laravel/MySQL API.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Commande d'analyses médicales en ligne",
        "Prise de rendez-vous pour prélèvement à domicile",
        "Paiement en ligne sécurisé",
        "Consultation des résultats à distance",
      ],
      en: [
        "Online medical test ordering",
        "Booking for at-home sample collection",
        "Secure online payment",
        "Remote results access",
      ],
    },
    tags: ["react", "laravel", "mysql"],
    stack: ["React", "Laravel", "MySQL"],
    externalLink: "https://www.adjakidjeaxel.com/projets/walab",
    image: null,
    category: "fullstack",
  },
  {
    slug: "nakama-2026",
    name: { fr: "Nakama 2026", en: "Nakama 2026" },
    tagline: {
      fr: "Site événementiel pour un rassemblement otaku",
      en: "Event site for an otaku gathering",
    },
    description: {
      fr: "Nakama est un site web événementiel qui présente une journée de rassemblement otaku : programme détaillé (accueil, jeux, karaoké, concours), présentation de l'événement, galerie visuelle et achat de billets en ligne.",
      en: "Nakama is an event website presenting a one-day otaku gathering: a detailed schedule (welcome, games, karaoke, contests), event presentation, visual gallery and online ticket sales.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface Nuxt/Vue et intégration de la billetterie.",
      en: "Fullstack development: Nuxt/Vue interface and ticketing integration.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Programme détaillé de l'événement",
        "Galerie visuelle",
        "Achat de billets en ligne",
        "Rendu statique rapide (Nuxt 4)",
      ],
      en: [
        "Detailed event schedule",
        "Visual gallery",
        "Online ticket purchase",
        "Fast static rendering (Nuxt 4)",
      ],
    },
    tags: ["nuxt", "vue", "typescript"],
    stack: ["Nuxt 4", "Vue 3", "TypeScript"],
    externalLink: "https://www.adjakidjeaxel.com/projets/nakama_2026",
    image: null,
    category: "fullstack",
  },
  {
    slug: "succes-energies",
    name: { fr: "Succès Énergies", en: "Succès Énergies" },
    tagline: {
      fr: "Vitrine pour une agence multidisciplinaire",
      en: "Showcase site for a multidisciplinary agency",
    },
    description: {
      fr: "Succès Énergies est un site web vitrine pour une agence multidisciplinaire présentant ses activités dans l'immobilier, l'aménagement du territoire, la construction, l'électricité et l'import-export. Le site est conçu pour présenter l'entreprise, ses services et ses valeurs, tout en permettant aux visiteurs d'entrer facilement en contact.",
      en: "Succès Énergies is a showcase site for a multidisciplinary agency covering real estate, urban planning, construction, electrical work and import-export. It presents the company, its services and its values, while making it easy for visitors to get in touch.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface Vue.js et intégration du contenu.",
      en: "Fullstack development: Vue.js interface and content integration.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Présentation des 5 pôles d'activité de l'agence",
        "Mise en avant des valeurs de l'entreprise",
        "Formulaire de contact",
        "Interface rapide (Vite + Tailwind CSS)",
      ],
      en: [
        "Presentation of the agency's 5 business units",
        "Company values highlighted",
        "Contact form",
        "Fast interface (Vite + Tailwind CSS)",
      ],
    },
    tags: ["vuejs", "vite", "tailwind"],
    stack: ["Vue.js", "Vite", "Tailwind CSS"],
    externalLink: "https://www.adjakidjeaxel.com/projets/succes_energies",
    image: null,
    category: "fullstack",
  },
  {
    slug: "djimans-record",
    name: { fr: "Djiman's Record", en: "Djiman's Record" },
    tagline: {
      fr: "Plateforme complète pour un studio d'enregistrement",
      en: "Full platform for a recording studio",
    },
    description: {
      fr: "DJIMAN'S RECORDS est la plateforme web d'un studio d'enregistrement professionnel. Elle combine un site vitrine (services, portfolio, tarifs, blog, contact) et un back-office pour gérer l'ensemble du contenu : vidéos, articles, offres, services, projets et annonces. Le site est bilingue, responsive, optimisé pour le référencement, et inclut un suivi détaillé de l'audience dans le dashboard admin.",
      en: "DJIMAN'S RECORDS is the web platform for a professional recording studio. It combines a showcase site (services, portfolio, pricing, blog, contact) with a back-office to manage all content: videos, articles, offers, services, projects and announcements. The site is bilingual, responsive, SEO-optimized, and includes detailed audience tracking in the admin dashboard.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React et API Django/PostgreSQL, back-office inclus.",
      en: "Fullstack development: React interface and Django/PostgreSQL API, including the back-office.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Site vitrine + back-office de gestion de contenu",
        "Blog, offres et annonces gérés en autonomie",
        "Site bilingue et optimisé SEO",
        "Suivi d'audience dans le dashboard admin",
      ],
      en: [
        "Showcase site + content management back-office",
        "Blog, offers and announcements managed autonomously",
        "Bilingual, SEO-optimized site",
        "Audience tracking in the admin dashboard",
      ],
    },
    tags: ["react", "django", "postgresql"],
    stack: ["React", "Django", "PostgreSQL"],
    externalLink: "https://www.adjakidjeaxel.com/projets/djimans_record",
    image: null,
    category: "fullstack",
  },
  {
    slug: "sms-xender",
    name: { fr: "SMS Xender", en: "SMS Xender" },
    tagline: {
      fr: "Plateforme d'envoi de SMS en masse pour entreprises",
      en: "Bulk SMS platform for businesses",
    },
    description: {
      fr: "Sms Xender est une plateforme d'envoi de SMS en masse à destination des entreprises. Elle sert de vitrine produit : elle présente les fonctionnalités, les offres et les cas d'usage, et permet aux visiteurs de s'informer, de contacter l'équipe ou d'accéder à l'espace de connexion.",
      en: "SMS Xender is a bulk SMS platform for businesses. It serves as a product showcase: presenting features, plans and use cases, and letting visitors learn more, contact the team or access the login area.",
    },
    context: {
      fr: "Projet réalisé en binôme avec Axel Salim, dans le cadre de missions de développement web communes.",
      en: "Project built in collaboration with Axel Salim, as part of shared web development work.",
    },
    role: {
      fr: "Développement fullstack : interface React (avec Three.js) et logique produit.",
      en: "Fullstack development: React interface (with Three.js) and product logic.",
    },
    results: {
      fr: "En ligne et fonctionnel.",
      en: "Live and functional.",
    },
    features: {
      fr: [
        "Présentation des fonctionnalités et des offres",
        "Cas d'usage pour entreprises",
        "Accents visuels 3D (Three.js)",
        "Formulaires validés (Formik/Yup)",
      ],
      en: [
        "Feature and pricing presentation",
        "Business use cases",
        "3D visual accents (Three.js)",
        "Validated forms (Formik/Yup)",
      ],
    },
    tags: ["react", "threejs", "b2b"],
    stack: ["React", "Three.js", "Formik", "Yup"],
    externalLink: "https://www.adjakidjeaxel.com/projets/sms_xender",
    image: "/images/projects/sms-xender.jpg",
    category: "fullstack",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
