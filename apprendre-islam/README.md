# Sirat — apprendre l'Islam de 0 à 100

Application mobile (PWA, sans dépendance). Ouvrir `index.html`, ou : `python3 -m http.server` puis http://localhost:8000 (installable sur téléphone via le navigateur).

## Contenu
- **101 niveaux (0 à 100), 155 chapitres, 775 questions** rédigés : fondamentaux, Sîra complète, prophètes (Adam à Sulayman, Yunus, Ayyub, Musa, Issa, Yusuf…), compagnons, histoire après le Prophète ﷺ (califes, dynasties, sciences), Coran, pratique (prière, jeûne, zakat, Hajj, invocations), croyance, éthique, grands bilans et examen final.
- Chaque chapitre : 2 leçons + question rapide, quiz de 5 questions, sources citées, « Le savais-tu ? ».
- **Verset, hadith et histoire du jour**, **cartes de révision** (79 mots arabes avec répétition espacée), **lexique**, **carte historique** avec vrais contours (Natural Earth) et zoom.
- Les sources viennent de références classiques (Coran, Bukhari, Muslim, Tirmidhi, Sîra d'Ibn Hichâm, At-Tabari, Ibn Kathir…) mais **doivent être relues et validées par une personne qualifiée** avant toute publication.

## Fonctionnement pédagogique
XP ≠ maîtrise. Un niveau se valide à 60 % de maîtrise ; les chapitres d'un niveau s'ouvrent dans l'ordre libre ; examens (tous les 10 niveaux à partir du 20) facultatifs à 65 %, repassables ; révision espacée des erreurs ; option « Tout débloquer ». Série, objectif quotidien (5/10/15/20 min), défi du jour, badges.

## Voix

Les noms arabes (Muhammad ﷺ, Abu Bakr, Umar, Uthman, Ali, Khadija, les prophètes…) sont lus par une voix arabe si l'appareil en a une ; sinon ils sont adaptés pour la voix française (approximation). Voir `js/names.js`.

**Tes propres enregistrements de noms** : dépose des fichiers `.mp3` dans `apprendre-islam/audio/noms/` en suivant la liste de `audio/NOMS.md` (30 noms à faire en premier). Le site lit ton enregistrement à la place de la voix synthétique, dans toutes les leçons ; les noms sans fichier gardent la voix de l'appareil. La liste des fichiers présents est générée à chaque publication (`tools/gen-noms-index.js`).
La lecture des leçons utilise **en priorité un enregistrement humain** `audio/<chapitre>-<leçon>.mp3` s'il existe, sinon la voix de synthèse la plus naturelle de l'appareil, lue phrase par phrase. Voir `audio/README.md` et `audio/SCRIPT.md` (texte de chaque leçon, généré par `node tools/gen-audio-script.js`).

## Sons
Pas de musique de fond. Uniquement de petits bruits (aucun instrument ni mélodie) : gouttes pour « juste », bruit sourd pour « faux », un petit « bloop » d'eau très doux et de mini vibrations pour les boutons (deux réglages séparés). Tout est réglable dans Profil → Paramètres.

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


## À faire
Faire relire le contenu ; enregistrer les voix ; ajouter les vidéos ; notifications natives (Capacitor) ; comptes et synchronisation.

## Réseau

- **Réseau** (onglet central) : répertoire de vidéos, rappels et ressources (TikTok, YouTube, sites). Sources : liste intégrée dans `js/videos.js` et `js/reseau.js`, collection partagée `resources` et ressources ajoutées par chaque personne. Les liens externes ne sont pas vérifiés.

## Droits

© 2026 Sabri Jelassi. Tous droits réservés (voir LICENSE).

## Profil, comptes et classement mondial

- **Profil** (fonctionne tout de suite, sans serveur) : prénom, nom, âge, photo (réduite à 160 px). Message « Bienvenue Prénom ! » et « Salam Prénom ! » sur l'accueil.
- **Comptes en ligne** (Google, Facebook, Apple, e-mail + mot de passe) et **classement mondial** : nécessitent un projet Firebase gratuit. Le mot de passe est géré par Firebase Authentication, jamais stocké par l'application.
  1. Crée un projet sur console.firebase.google.com, puis ajoute une application Web et copie sa configuration dans `js/config.js` (clé `firebase`).
  2. Authentication > Méthode de connexion : active « Adresse e-mail/Mot de passe » et « Google » (simple). Facebook demande une application sur developers.facebook.com ; Apple demande un compte Apple Developer payant. Mets ensuite `facebook: true` / `apple: true` dans `providers` de `js/config.js`.
  3. Authentication > Paramètres > Domaines autorisés : ajoute `sirat-islam.fr` (et `sabri22j.github.io`).
  4. Firestore Database : crée la base, puis colle `server/firestore.rules` dans l'onglet Règles et publie.
- **Bouton Google fiable sur iPhone (recommandé)** : mets l'« ID client Web » (Firebase > Authentication > Google > Configuration du SDK Web) dans `googleClientId` de `js/config.js`, puis, dans Google Cloud Console > API et services > Identifiants > « Web client », ajoute `https://sirat-islam.fr` et `https://www.sirat-islam.fr` aux « Origines JavaScript autorisées ».
- **Règles de confidentialité appliquées** : compte en ligne à partir de 13 ans ; classement et photo publics à partir de 15 ans et sur option ; seuls prénom, initiale du nom, photo, XP et rang sont visibles. À faire relire pour le RGPD (mineurs, politique de confidentialité).
- **Limite connue** : les XP sont envoyés par l'application, donc le classement n'est pas protégé contre la triche sans validation côté serveur.

## Parcours enfants (mode par défaut)

12 mondes, 68 aventures (272 petites leçons illustrées, 340 questions : choix, vrai/faux, remise dans l'ordre, association), grand défi par monde, défi du jour (qui reprend les erreurs), étoiles, tenues et badges à débloquer.
Sirâj est interactif (yeux qui suivent le doigt, clignements, réactions au toucher, bouche qui parle) et lit tout à voix haute.

- Données : `js/kdata1.js` … `js/kdata12.js` (formats dans `js/kdata0.js`). À faire relire par une personne qualifiée.
- Interface : `js/kids.js` ; personnage : `js/kidchar.js`.
- Voix : `audio/kids/*.mp3`, générées avec `tools/kids-audio/` (voir son README). Remplaçables par de vraies voix du même nom.
- Réglage « Mode enfant » dans Paramètres ; le parcours des grands (100 niveaux) reste disponible.

### Nouveautés enfants (jeux et apprentissage)
- **Jeux** : mémoire (paires mot / sens), vrai ou faux éclair (60 s), « Mes erreurs » (questions ratées à revoir), bonus d'étoiles quotidien.
- **Sourates à apprendre** : Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, Al-Kawthar, Al-'Asr (arabe, phonétique, sens, test du mot manquant).
- **Mes mots arabes** : le dico de Sirâj, débloqué au fil des aventures.
- **Plus facile** : bouton précédent, indice, « revoir la leçon », récapitulatif de fin d'aventure, grand texte, mode d'emploi.
- **Sirâj** : s'endort après un moment, se réveille au toucher, câlin (appui long), conseils qui tournent, accompagne le joueur sur la carte.

### Révision espacée (mémoire)
Chaque aventure terminée devient un **module** à retenir : première révision 2 h après, puis 1 jour, 3 jours, 7 jours, 14 jours, 30 jours, 90 jours. Réussir repousse la révision ; une erreur ramène le module à 2 h (niveau −2).
Écrans : accueil (niveau de mémoire, compte à rebours avant la prochaine révision, « N modules en attente »), Modules, Progression (donut de mémoire, répertoire de toutes les révisions avec heure et temps restant), rappels (notifications si autorisées).
Mauvaise réponse : la bonne réponse s'affiche et la question est reposée à la fin (2 fois au plus). Code : `js/kidsrs.js`.
