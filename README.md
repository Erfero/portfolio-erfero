# Portfolio — Erféro Keoula

Portfolio personnel d'Erféro Keoula, développeur web full stack. Structure et animations inspirées de [adjakidjeaxel.com](https://www.adjakidjeaxel.com), contenu et projets propres à Erféro (tirés principalement de son ancien portfolio full stack `code4life-2` et, en complément, de son portfolio Shopify).

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Configuration requise

Copier `.env.local.example` en `.env.local` et renseigner :

- `RESEND_API_KEY` — clé API [Resend](https://resend.com) (gratuite) pour que le formulaire de contact envoie de vrais emails. Sans elle, le formulaire répond une erreur claire au lieu d'échouer silencieusement.
- `CONTACT_FROM_EMAIL` — optionnel, adresse d'expédition une fois un domaine vérifié sur Resend (sinon `onboarding@resend.dev` est utilisé par défaut).

## À remplacer

- `public/images/profile-placeholder.svg` : placeholder à remplacer par une vraie photo (utilisée dans le Hero et la page À propos).
- `data/site.ts` : vérifier l'URL finale (`site.url`) une fois le nom de domaine choisi, et le lien GitHub exact.

## Structure

- `data/` — tout le contenu (identité, expériences, projets, services, témoignages), bilingue FR/EN.
- `components/sections/` — sections de page (Hero, Services, Projets, Témoignages...).
- `app/` — pages Next.js App Router : accueil, `/a-propos`, `/projets`, `/projets/[slug]`, `/contact`.

## Déploiement

Le plus simple est [Vercel](https://vercel.com/new) : connecter le dépôt, renseigner les variables d'environnement ci-dessus, déployer.
