/* Configuration de la version hébergée (à remplir une fois). Rien ici n'est secret : les clés secrètes restent côté serveur.
   - firebase : configuration Web d'un projet Firebase (Authentication : Google, Apple, e-mail ; Firestore). Voir README > Comptes.
   - aiEndpoint : URL du serveur d'IA (server/ai-proxy.mjs). Voir README > Assistant IA. */
const APP_CONFIG = {
  firebase: { // configuration Web publique du projet Firebase « sirat-islam » (pas un secret : la sécurité vient des règles Firestore)
    apiKey: "AIzaSyBPj1vXIlF8kOPlEeZyIOBycRFfNplwmLk",
    authDomain: "sirat-islam-eb53c.firebaseapp.com",
    projectId: "sirat-islam-eb53c",
    storageBucket: "sirat-islam-eb53c.firebasestorage.app",
    messagingSenderId: "1023883505356",
    appId: "1:1023883505356:web:2afa48f8adae0133f81c69",
  },
  providers: { google: true, facebook: false, apple: false, email: true }, // active seulement ceux que tu as configurés dans Firebase
  aiEndpoint: null, // exemple : "https://ton-serveur.example/ask"
};
