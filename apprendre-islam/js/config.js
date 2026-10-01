/* Configuration de la version hébergée (à remplir une fois). Rien ici n'est secret : les clés secrètes restent côté serveur.
   - firebase : configuration Web d'un projet Firebase (Authentication : Google, Apple, e-mail ; Firestore). Voir README > Comptes.
   - aiEndpoint : URL du serveur d'IA (server/ai-proxy.mjs). Voir README > Assistant IA. */
const APP_CONFIG = {
  firebase: null, // exemple : { apiKey: "...", authDomain: "xxx.firebaseapp.com", projectId: "xxx", appId: "..." }
  providers: { google: true, facebook: false, apple: false, email: true }, // active seulement ceux que tu as configurés dans Firebase
  aiEndpoint: null, // exemple : "https://ton-serveur.example/ask"
};
