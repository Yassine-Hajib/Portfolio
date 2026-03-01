# Yassine Hajib — Portfolio

Portfolio personnel en **React (JavaScript pur)** + Tailwind CSS v4 + Framer Motion.

> ⚠️ Aucun TypeScript — 100% JavaScript

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrir → [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js         ← JS (pas .ts)
├── src/
│   ├── App.jsx            ← Tout le portfolio ici
│   ├── main.jsx
│   └── index.css
└── public/
    └── certificates/      ← Vos images ici
        ├── Cpp.png
        ├── Python.png
        ├── Git&GitHub.png
        └── Unix.png
```

## 🏆 Ajouter vos certificats

Copiez vos images dans `public/certificates/` avec ces noms exacts :

| Fichier | Certificat |
|---------|-----------|
| `Cpp.png` | C++ — EPFL |
| `Python.png` | Python for AI — IBM |
| `Git&GitHub.png` | Git & GitHub — Google |
| `Unix.png` | Unix Workbench — Johns Hopkins |

## 📦 Build production

```bash
npm run build
# → fichiers dans /dist
```

## 🛠️ Technologies

- React 19 (JavaScript)
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Vite 6
