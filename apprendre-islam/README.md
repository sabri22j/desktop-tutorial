# Sirat — apprendre l'Islam de 0 à 100

Application mobile (PWA, sans dépendance). Ouvrir `index.html`, ou : `python3 -m http.server` puis http://localhost:8000 (installable sur téléphone via le navigateur).

## Contenu
- **101 niveaux (0 à 100), 155 chapitres, 775 questions** rédigés : fondamentaux, Sîra complète, prophètes (Adam à Sulayman, Yunus, Ayyub, Musa, Issa, Yusuf…), compagnons, histoire après le Prophète ﷺ (califes, dynasties, sciences), Coran, pratique (prière, jeûne, zakat, Hajj, invocations), croyance, éthique, grands bilans et examen final.
- Chaque chapitre : 2 leçons + question rapide, quiz de 5 questions, sources citées, « Le savais-tu ? ».
- **Verset, hadith et histoire du jour**, **cartes de révision** (79 mots arabes avec répétition espacée), **lexique**, **assistant sourcé** hors ligne (26 réponses), **carte historique** avec vrais contours (Natural Earth) et zoom.
- Les sources viennent de références classiques (Coran, Bukhari, Muslim, Tirmidhi, Sîra d'Ibn Hichâm, At-Tabari, Ibn Kathir…) mais **doivent être relues et validées par une personne qualifiée** avant toute publication.

## Fonctionnement pédagogique
XP ≠ maîtrise. Un niveau se valide à 60 % de maîtrise ; les chapitres d'un niveau s'ouvrent dans l'ordre libre ; examens (tous les 10 niveaux à partir du 20) facultatifs à 65 %, repassables ; révision espacée des erreurs ; option « Tout débloquer ». Série, objectif quotidien (5/10/15/20 min), défi du jour, badges.

## Voix
La lecture des leçons utilise **en priorité un enregistrement humain** `audio/<chapitre>-<leçon>.mp3` s'il existe, sinon la voix de synthèse la plus naturelle de l'appareil, lue phrase par phrase. Voir `audio/README.md` et `audio/SCRIPT.md` (texte de chaque leçon, généré par `node tools/gen-audio-script.js`).

## Sons
Uniquement des sons de la nature et de petits bruits (aucun instrument ni mélodie) : ambiances (eau et vent, pluie, vagues, oiseaux), gouttes pour « juste », bruit sourd pour « faux », « tic » des boutons. Tout est réglable dans Profil → Paramètres.

## Vidéos (à venir)
Chaque chapitre accepte `video: { title, url }` (8e argument de `ch(...)`) : un bouton « Vidéo » s'affiche alors. Fournir les liens de sources fiables pour les brancher.

## Structure
`js/content*.js` (contenu), `js/engine.js` (XP, maîtrise, révision, série, badges), `js/daily.js` (versets, hadiths, lexique), `js/art.js` (icônes et illustrations sans personnes représentées), `js/audio.js` (sons), `js/voice.js` (lecture), `js/app1-3.js` (interface).

## À faire
Faire relire le contenu ; enregistrer les voix ; ajouter les vidéos ; vrai assistant IA (serveur, sources vérifiables, aucune référence inventée) ; notifications natives (Capacitor) ; comptes et synchronisation.
