# Portfolio électoral — Next.js + Vercel

Un site moderne, dynamique et ultra-rapide pour une campagne électorale.

## Stack
- Next.js (App Router), TypeScript
- Tailwind CSS, design glassmorphism + mesh gradients
- Framer Motion (animations), Dark/Light mode
- API Routes (formulaires: newsletter, bénévolat, contact)
- SEO (OG image dynamique, sitemap, robots)
- PWA (manifest)
- Vercel Analytics

## Démarrage

1. Prérequis:
   - Node.js 18+
   - Compte Vercel

2. Installation:
   ```bash
   pnpm i # ou npm i / yarn
   ```

3. Configurer les variables:
   - Copiez `.env.example` vers `.env` et complétez:
     - `NEXT_PUBLIC_SITE_URL`
     - `RESEND_API_KEY` (optionnel)
     - `FORMS_TO_EMAIL` (adresse de réception)

4. Lancer en local:
   ```bash
   pnpm dev
   ```

5. Déployer sur Vercel:
   - Poussez ce dossier sur GitHub
   - Importez le repo sur Vercel
   - Ajoutez les variables d’environnement dans Vercel > Settings > Environment Variables
   - Déployez

## Personnalisation
- Modifiez `lib/site.ts` pour le nom, slogan, réseaux, dons, stats.
- Modifiez `data/*.ts` pour le programme, les événements, les soutiens, la galerie.
- Remplacez les images dans `public/`:
  - `/candidate.jpg` (portrait)
  - `/photos/*.jpg` (galerie)
  - `/icon-192.png`, `/icon-512.png`, `/favicon.ico`, `/og.jpg`

## Conformité & RGPD
- Ajoutez une page des mentions légales et politique de confidentialité si nécessaire.
- Intégrez un bandeau cookies si vous utilisez des trackers tiers.

## Idées d’extensions
- Blog/Actualités (MDX)
- Multilingue (next-intl)
- Page Équipe
- Endorsements avancés (logos, carrousel)
- Intégration paiement (Stripe) pour dons (selon réglementation)

Bon déploiement !