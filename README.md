# Sirat

Apprendre l'islam pas à pas, avec Sirâj la petite lanterne : parcours enfants (12 mondes, 68 aventures, révision espacée) et parcours des grands (101 niveaux).

Ce dépôt contient deux choses distinctes, publiées ensemble sur https://sirat-islam.fr :

| Dossier | Contenu | Adresse |
|---|---|---|
| `site/` | Le site vitrine : accueil, confidentialité, mentions légales, page 404 | `https://sirat-islam.fr/` |
| `apprendre-islam/` | L'application (PWA sans framework, voir son [README](apprendre-islam/README.md)) | `https://sirat-islam.fr/app/` |

## Publication

Chaque envoi sur `main` lance `.github/workflows/pages.yml` : il assemble `_site/` (le contenu de `site/` à la racine, celui de `apprendre-islam/` sous `app/`, sans `tools/`, `server/` ni le README) puis le publie sur GitHub Pages. Le nom de domaine est dans `site/CNAME`.

`site/sw.js` est un « désinstalleur » : il remplace l'ancien service worker de l'application, qui était servi à la racine, puis se retire. L'application a maintenant le sien sous `/app/`.

## Tester en local

```
mkdir -p _site/app && cp -r site/. _site/ && cp -r apprendre-islam/. _site/app/
cd _site && python3 -m http.server 8000
```

Puis http://localhost:8000 (site) et http://localhost:8000/app/ (application).

## À compléter avant la grande diffusion

- `CONTACT_EMAIL` et `ADRESSE_EDITEUR` dans `site/*.html` (contact, confidentialité, mentions légales).
- Relecture des pages légales, et du contenu religieux par une personne qualifiée.

## Droits

© 2026 Sabri Jelassi. Tous droits réservés (voir [LICENSE](LICENSE)).
