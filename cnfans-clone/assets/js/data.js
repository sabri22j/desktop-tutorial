const CNY_TO_EUR = 0.128;
const SERVICE_FEE = 0.03;

const CATEGORIES = ['Tous', 'Vêtements', 'Chaussures', 'Sacs', 'Électronique', 'Maison', 'Accessoires'];

const PLATFORMS = ['Taobao', 'Weidian', '1688', 'Tmall'];

const EMOJI_BG = ['#fde9a8', '#fcd5ce', '#ffe3b3', '#fbd0c8', '#fff0c2', '#f9dcc4'];

const PRODUCTS = [
  { id: 1, name: 'Sweat à capuche oversize coton épais', cat: 'Vêtements', cny: 138, weight: 0.8, platform: 'Taobao', emoji: '🧥', sales: 4210 },
  { id: 2, name: 'T-shirt graphique streetwear unisexe', cat: 'Vêtements', cny: 59, weight: 0.25, platform: 'Weidian', emoji: '👕', sales: 8120 },
  { id: 3, name: 'Baskets montantes semelle épaisse', cat: 'Chaussures', cny: 289, weight: 1.2, platform: 'Taobao', emoji: '👟', sales: 2540 },
  { id: 4, name: 'Sandales de plage légères', cat: 'Chaussures', cny: 45, weight: 0.45, platform: '1688', emoji: '🩴', sales: 12900 },
  { id: 5, name: 'Sac bandoulière en cuir PU', cat: 'Sacs', cny: 96, weight: 0.5, platform: 'Tmall', emoji: '👜', sales: 3300 },
  { id: 6, name: 'Sac à dos étanche 25L', cat: 'Sacs', cny: 118, weight: 0.9, platform: 'Taobao', emoji: '🎒', sales: 5100 },
  { id: 7, name: 'Écouteurs sans fil Bluetooth 5.3', cat: 'Électronique', cny: 79, weight: 0.15, platform: '1688', emoji: '🎧', sales: 20400 },
  { id: 8, name: 'Montre connectée sport étanche', cat: 'Électronique', cny: 159, weight: 0.2, platform: 'Tmall', emoji: '⌚', sales: 6700 },
  { id: 9, name: 'Lampe LED de bureau rechargeable', cat: 'Maison', cny: 68, weight: 0.6, platform: 'Taobao', emoji: '💡', sales: 3900 },
  { id: 10, name: 'Set de 4 tasses en céramique', cat: 'Maison', cny: 52, weight: 1.4, platform: 'Weidian', emoji: '☕', sales: 1800 },
  { id: 11, name: 'Lunettes de soleil polarisées', cat: 'Accessoires', cny: 38, weight: 0.1, platform: 'Weidian', emoji: '🕶️', sales: 9800 },
  { id: 12, name: 'Casquette brodée réglable', cat: 'Accessoires', cny: 42, weight: 0.15, platform: 'Taobao', emoji: '🧢', sales: 7400 }
];

// Tarifs d'expédition simplifiés : [premier kg €, kg supplémentaire €, délai]
const SHIPPING = {
  'France':      { 'Standard':  [14, 7.5, '12–20 jours'], 'Express': [24, 11, '6–10 jours'] },
  'Belgique':    { 'Standard':  [14, 7.5, '12–20 jours'], 'Express': [24, 11, '6–10 jours'] },
  'Allemagne':   { 'Standard':  [13, 7,   '10–18 jours'], 'Express': [23, 10.5, '5–9 jours'] },
  'Espagne':     { 'Standard':  [15, 8,   '12–22 jours'], 'Express': [25, 11.5, '6–11 jours'] },
  'Italie':      { 'Standard':  [15, 8,   '12–22 jours'], 'Express': [25, 11.5, '6–11 jours'] },
  'Royaume-Uni': { 'Standard':  [12, 6.5, '10–16 jours'], 'Express': [22, 10, '5–8 jours'] },
  'Canada':      { 'Standard':  [18, 9,   '15–25 jours'], 'Express': [30, 14, '7–12 jours'] },
  'États-Unis':  { 'Standard':  [17, 9,   '14–24 jours'], 'Express': [29, 13, '6–10 jours'] }
};

const FAQ = [
  ['Comment passer commande ?', 'Collez le lien d’un produit chinois (Taobao, Weidian, 1688…) ou parcourez le catalogue, ajoutez au panier, puis payez. Nous achetons pour vous.'],
  ['Quels sont les frais ?', 'Prix du produit converti en euros + 3 % de frais de service + frais d’expédition internationale selon le poids.'],
  ['Puis-je voir mon article avant l’envoi ?', 'Oui, des photos de contrôle qualité sont prises à l’entrepôt et vous les validez avant l’expédition.'],
  ['Combien de temps stockez-vous mes colis ?', '90 jours gratuitement, pour regrouper plusieurs achats en un seul envoi.'],
  ['Est-ce un vrai service ?', 'Non : ce site est une démonstration front-end. Aucun paiement ni achat réel n’est effectué.']
];
