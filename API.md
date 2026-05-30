# Documentation API - RéACTIF Website

## Aperçu

Ce dépôt ne contient pas d'API backend (pas de serveur applicatif, pas de base de données, pas d'endpoints JSON).
Le projet expose uniquement des routes HTTP statiques servies par GitHub Pages.

- Type de service: site statique (SPA + pages dédiées)
- Authentification: aucune
- Versionnement API: non applicable
- Format de réponse principal: `text/html; charset=utf-8`

## Base URL

- Production: `https://<votre-domaine>/`
- Développement local (Vite): `http://localhost:5173/`

## Endpoints disponibles

### 1) Accueil

- `GET /`
- Description: page vitrine principale.
- Réponse succès: `200 OK` avec contenu HTML.

Exemple:

```bash
curl -i https://<votre-domaine>/
```

### 2) Support

- `GET /support/`
- Description: page de support avec contact par email.
- Réponse succès: `200 OK` avec contenu HTML.

Exemple:

```bash
curl -i https://<votre-domaine>/support/
```

### 3) Confidentialité

- `GET /confidentialite/`
- Description: engagement de confidentialité.
- Réponse succès: `200 OK` avec contenu HTML.

Exemple:

```bash
curl -i https://<votre-domaine>/confidentialite/
```

## Codes de statut attendus

- `200 OK`: route statique trouvée.
- `404 Not Found`: route inexistante.
- `301/302`: redirection possible selon configuration d'hébergement/domaine.

## En-têtes et CORS

- CORS: non pertinent pour ce site (aucune API XHR/fetch interne exposée).
- Cache: géré par l'hébergeur/CDN (GitHub Pages ou équivalent).

## Sécurité et données

- Aucune collecte de données personnelles côté API (aucune API de collecte).
- Aucun token, cookie de session, ou mécanisme d'authentification applicative.

## OpenAPI (état actuel)

Le service ne fournit pas de contrat OpenAPI exploitable pour des opérations métier, car il n'expose pas d'API JSON/REST.
Si une API backend est ajoutée plus tard, ce fichier devra être complété avec:

- schémas de requêtes/réponses
- authentification (ex: Bearer token)
- gestion d'erreurs normalisée
- exemples d'appels POST/PUT/DELETE

## Changelog API

- `2026-05-30`: création de la documentation API initiale pour la surface HTTP statique.
