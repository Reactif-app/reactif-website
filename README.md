# RéACTIF - Site Vitrine

Site vitrine en français pour présenter l'application RéACTIF.

## Stack choisie

- `Vite + React + TypeScript`
- Déploiement automatique via `GitHub Actions`
- Hébergement sur `GitHub Pages`

## Lancer en local

```bash
npm install
npm run dev
```

Build de production:

```bash
npm run build
npm run preview
```

## Personnalisation rapide

- Texte principal: `src/App.tsx`
- Design et couleurs: `src/styles.css`
- Visuel hero provisoire: `public/placeholder-app.svg`

Vous pouvez remplacer le visuel provisoire par vos captures réelles (par exemple `public/hero-reactif.png`) puis modifier la ligne CSS:

```css
url('/placeholder-app.svg')
```

## Déploiement GitHub Pages

### 1) Préparer le dépôt

- Poussez le code sur la branche `main`.
- Vérifiez que le workflow est présent: `.github/workflows/deploy.yml`.

### 2) Activer Pages

Dans GitHub:

1. `Settings` > `Pages`
2. Source: `GitHub Actions`

Le workflow déploiera automatiquement à chaque push sur `main`.

## DNS et domaine personnalisé

### Option A - sous-domaine (`www.reactif.app`)

1. Chez votre registrar DNS, créez un enregistrement `CNAME`:
   - Nom/Hôte: `www`
   - Cible/Value: `<votre-user>.github.io`
2. Dans GitHub `Settings > Pages`, renseignez le domaine personnalisé: `www.reactif.app`.
3. Activez `Enforce HTTPS` dès que le certificat est prêt.

### Option B - domaine racine (`reactif.app`)

1. Créez `4` enregistrements `A` pointant vers GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Ajoutez aussi un `CNAME` pour `www` vers `<votre-user>.github.io`.
3. Dans GitHub `Settings > Pages`, mettez `reactif.app` comme domaine personnalisé.

## Ajouter un fichier CNAME dans le repo (optionnel mais recommandé)

Créez un fichier `public/CNAME` contenant votre domaine exact (ex: `www.reactif.app`).
Il sera copié dans `dist/` au build, ce qui stabilise la configuration en cas de redéploiement.

## Checklist mainteneurs

- Mettre à jour les liens GitHub/contact dans `src/App.tsx`
- Remplacer le visuel hero provisoire par les captures finales
- Vérifier le domaine dans `Settings > Pages`
- Vérifier les DNS (`A` / `CNAME`) côté registrar
- Attendre la propagation DNS (quelques minutes à 24h)

## Remarque

Le texte est actuellement une base propre en français, prête à être remplacée par votre description produit finale.
