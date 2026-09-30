# Sirat — apprendre l'Islam de 0 à 100

Application mobile (PWA, sans dépendance) inspirée de la logique pédagogique de Duolingo.
Ouvrir `index.html`, ou : `python3 -m http.server` puis http://localhost:8000 (installable sur téléphone via le navigateur).

## Ce qui est implémenté
- **Parcours 0 → 100** (101 niveaux, 11 grandes étapes). Niveaux **0 à 40 rédigés** (50 chapitres, 250 questions : Sîra complète, prophètes, compagnons, Coran, pratique) ; 41 à 100 = structure prête, contenu à écrire.
- **Niveaux → unités → chapitres → leçons → question rapide → quiz → examen.**
- **XP ≠ maîtrise** : l'XP récompense ; seule la maîtrise (par chapitre) débloque la suite (70 %). Examen (75 %) tous les 10 niveaux.
- **Révision espacée** (boîtes 0–4, rappels à J+1/3/7/14). Une question ratée reste « à revoir » ; répondre au hasard ne fait pas monter la maîtrise. Options mélangées.
- Types de questions : QCM, vrai/faux, chronologie, association, réponse libre.
- Série, objectif quotidien (5/10/15/20 min), défi quotidien, badges, profil par matière.
- **Carte historique** schématique (lieux → événements → chapitres).
- **Assistant** hors ligne : réponses préparées avec sources (Coran / Hadith / Sîra), nuances signalées, et refus de répondre sans source.
- Audio : lecture vocale du navigateur (synthèse vocale).

## À faire
- Rédiger les niveaux 11–100 (Sîra, prophètes, compagnons, Coran, pratique) avec sources, **relus par des personnes qualifiées**.
- Vrai assistant IA : nécessite un serveur (clé API jamais dans le navigateur), un prompt système imposant sources vérifiables, distinction texte / interprétation / histoire, et aucun hadith ou référence inventé.
- Audio enregistré (récitation), comptes utilisateurs/synchronisation, application native (Capacitor/React Native).

## Parcours souple
Validation d'un niveau à 60 %, chapitres d'un niveau dans l'ordre libre, examens facultatifs (65 %, repassables), option « Tout débloquer » dans Profil → Paramètres.

## Carte
Contours réels Natural Earth 1:50m (domaine public), zoom sur chaque lieu ; `js/mapdata.js` est généré à partir de ces données.

## Vidéos (à venir)
Chaque chapitre accepte un champ `video: { title, url }` (8e argument de `ch(...)`) : un bouton « 🎬 Vidéo » s'affiche alors. Fournir les liens de sources fiables pour les brancher.

## Sources
Chaque chapitre cite ses références (Coran, hadiths, Sîra). Elles sont issues de sources classiques mais **doivent être relues et validées par une personne qualifiée** avant toute publication.
