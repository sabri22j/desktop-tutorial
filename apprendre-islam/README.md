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

## Comptes (Google, Apple, e-mail)
L'application fonctionne sans compte (mode invité, progression sur l'appareil). Pour activer les connexions et la synchronisation entre appareils (version hébergée) :
1. Créer un projet sur https://console.firebase.google.com, puis **Authentication** : activer Google, Apple (nécessite un compte Apple Developer) et e-mail/mot de passe ; ajouter votre domaine dans « Domaines autorisés ».
2. Créer une base **Firestore** avec ces règles : `match /users/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }`.
3. Copier la configuration Web du projet dans `js/config.js` (`firebase: { apiKey, authDomain, projectId, appId }`). Ces valeurs ne sont pas secrètes.
La progression est fusionnée par date de dernière modification (la plus récente gagne). Les réglages de sons et de voix restent propres à chaque appareil. Dans une page Claude, la connexion utilise le compte Claude du lecteur.

## Assistant IA
L'assistant est « ancré » : il retrouve les chapitres et réponses sourcées pertinents, puis demande à Claude de répondre **uniquement** à partir de ces extraits, sans inventer de référence (prompt dans `js/assistant.js`). Il affiche les chapitres consultés.
- Dans une page Claude : appel direct avec le compte Claude du lecteur.
- Version hébergée : `node server/ai-proxy.mjs` (après `npm i @anthropic-ai/sdk`, variable `ANTHROPIC_API_KEY`, clé gardée côté serveur, limite de 20 questions par heure et par IP), puis renseigner `aiEndpoint` dans `js/config.js`.
- Sans IA : réponses préparées hors ligne.
Cette IA reste une aide : elle ne remplace pas un savant.

## À faire
Faire relire le contenu ; enregistrer les voix ; ajouter les vidéos ; vrai assistant IA (serveur, sources vérifiables, aucune référence inventée) ; notifications natives (Capacitor) ; comptes et synchronisation.

## Assistant IA personnel et Réseau

- **Ton IA** : dans l'onglet Assistant, chacun colle sa propre clé API (Claude, ChatGPT/OpenAI ou Gemini). La clé reste sur l'appareil (localStorage), elle n'est ni synchronisée ni envoyée à Sirat. L'assistant répond alors à toutes les questions ; ce qui ne vient pas des chapitres est signalé, avec des références à vérifier. Il n'existe pas de connexion « avec son abonnement ChatGPT/Claude » pour les applications tierces : la clé API (paiement à l'usage chez le fournisseur) est la voie réaliste.
- **Réseau** (onglet central) : répertoire de vidéos, rappels et ressources (TikTok, YouTube, sites). Sources : liste intégrée `SEED_RES` dans `js/reseau.js`, collection partagée `resources` (champs `title`, `url`, `author`, `topic`, `note`) et ressources ajoutées par chaque personne. Les liens externes ne sont pas vérifiés.

## Droits

© 2026 Sabri Jelassi. Tous droits réservés (voir LICENSE).

## Profil, comptes et classement mondial

- **Profil** (fonctionne tout de suite, sans serveur) : prénom, nom, âge, photo (réduite à 160 px). Message « Bienvenue Prénom ! » et « Salam Prénom ! » sur l'accueil.
- **Comptes en ligne** (Google, Facebook, Apple, e-mail + mot de passe) et **classement mondial** : nécessitent un projet Firebase gratuit. Le mot de passe est géré par Firebase Authentication, jamais stocké par l'application.
  1. Crée un projet sur console.firebase.google.com, puis ajoute une application Web et copie sa configuration dans `js/config.js` (clé `firebase`).
  2. Authentication > Méthode de connexion : active « Adresse e-mail/Mot de passe » et « Google » (simple). Facebook demande une application sur developers.facebook.com ; Apple demande un compte Apple Developer payant. Mets ensuite `facebook: true` / `apple: true` dans `providers` de `js/config.js`.
  3. Authentication > Paramètres > Domaines autorisés : ajoute `sirat-islam.fr` (et `sabri22j.github.io`).
  4. Firestore Database : crée la base, puis colle `server/firestore.rules` dans l'onglet Règles et publie.
- **Règles de confidentialité appliquées** : compte en ligne à partir de 13 ans ; classement et photo publics à partir de 15 ans et sur option ; seuls prénom, initiale du nom, photo, XP et rang sont visibles. À faire relire pour le RGPD (mineurs, politique de confidentialité).
- **Limite connue** : les XP sont envoyés par l'application, donc le classement n'est pas protégé contre la triche sans validation côté serveur.
