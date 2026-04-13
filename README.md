# 📘 README — Projet Visuance

## 🧭 Introduction

**Visuance**

---

## 🎯 Objectifs du projet

- Concevoir une interface moderne et responsive
- Mettre en valeur du contenu visuel (images, branding, médias)
- Utiliser des technologies frontend récentes
- Assurer performance et maintenabilité

---

## 💡 Contexte et problématique

Dans un contexte où la communication digitale est essentielle, Visuance vise à proposer une plateforme permettant de centraliser et présenter efficacement des contenus visuels (branding, marketing, storytelling).

Le projet répond au besoin de :

- Structurer des contenus graphiques
- Offrir une navigation fluide
- Valoriser une identité visuelle forte

---

## 🧠 Phase de réflexion (Conception)

### Choix techniques

Le projet repose sur un stack moderne :

- **React 19** : bibliothèque principale pour l’UI
- **Vite** : outil de build rapide et performant
- **TypeScript** : typage statique pour plus de robustesse
- **Tailwind CSS** : framework CSS utilitaire
- **React Router** : gestion de la navigation

### Architecture

Le projet suit une architecture frontend modulaire basée sur React et Vite, avec une séparation claire entre logique, composants et ressources.

### Organisation des dossiers

```bash
visuance-main/
  index.html
  package.json
  vite.config.ts
  tailwind.config.js
  /public
    /fonts
    /images
  /src
    main.tsx
    App.tsx
    App.css
    index.css
    /assets
      hero.png
    /components
      Header.tsx
      Footer.tsx
      ConceptSection.tsx
    /pages
      Home.tsx
      About.tsx
      Contact.tsx
      Group.tsx
    /types
      content.ts
```

```bash
/src
  /components   # Composants réutilisables
  /pages        # Pages principales
  /assets       # Images, médias
  /styles       # Styles globaux
  main.tsx      # Point d’entrée
  App.tsx       # Composant principal
```

---

## 🛠️ Phase de développement

### Mise en place de l’environnement

```bash
npm install
npm run dev
```

### Scripts disponibles

- `npm run dev` : lancement du serveur de développement
- `npm run build` : build de production

### Développement des fonctionnalités

- Intégration de composants React
- Gestion des routes avec React Router
- Intégration d’assets visuels (images, logos, branding)
- Mise en page avec Tailwind CSS

### Bonnes pratiques

- Typage avec TypeScript
- Linting avec ESLint
- Structure claire des fichiers

---

## 🚀 Déploiement

Le projet peut être déployé via `Vercel`

---
