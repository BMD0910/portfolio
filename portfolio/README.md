# Portfolio

Portfolio React/Vite. Les projets sont définis dans `src/data/portfolio.js`; toute modification de contenu doit être faite dans le tableau `projects` de ce fichier.

## Modifier les projets

Chaque entrée du tableau contient le nom, le slug, l’image, les descriptions, les technologies et la couleur du projet. Ajoutez ou modifiez une entrée en conservant ces propriétés, puis vérifiez le résultat avec `npm run build`.

Les changements sont publiés avec le code : poussez le commit sur GitHub pour déclencher le déploiement Vercel. Il n’y a plus de panneau `/admin`, de stockage navigateur utilisé par l’application, ni de configuration Supabase à renseigner.

## Commandes

```sh
npm install
npm run dev
npm run build
```