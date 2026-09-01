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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
