const CNY_TO_EUR = 0.128;
const SERVICE_FEE = 0.03;

const CATEGORIES = ['all', 'clothing', 'shoes', 'bags', 'electronics', 'home', 'accessories'];

const EMOJI_BG = ['#fde9a8', '#fcd5ce', '#ffe3b3', '#fbd0c8', '#fff0c2', '#f9dcc4'];

const PRODUCTS = [
  { id: 1, cat: 'clothing', cny: 138, weight: 0.8, emoji: '🧥', sales: 4210 },
  { id: 2, cat: 'clothing', cny: 59, weight: 0.25, emoji: '👕', sales: 8120 },
  { id: 3, cat: 'shoes', cny: 289, weight: 1.2, emoji: '👟', sales: 2540 },
  { id: 4, cat: 'shoes', cny: 45, weight: 0.45, emoji: '🩴', sales: 12900 },
  { id: 5, cat: 'bags', cny: 96, weight: 0.5, emoji: '👜', sales: 3300 },
  { id: 6, cat: 'bags', cny: 118, weight: 0.9, emoji: '🎒', sales: 5100 },
  { id: 7, cat: 'electronics', cny: 79, weight: 0.15, emoji: '🎧', sales: 20400 },
  { id: 8, cat: 'electronics', cny: 159, weight: 0.2, emoji: '⌚', sales: 6700 },
  { id: 9, cat: 'home', cny: 68, weight: 0.6, emoji: '💡', sales: 3900 },
  { id: 10, cat: 'home', cny: 52, weight: 1.4, emoji: '☕', sales: 1800 },
  { id: 11, cat: 'accessories', cny: 38, weight: 0.1, emoji: '🕶️', sales: 9800 },
  { id: 12, cat: 'accessories', cny: 42, weight: 0.15, emoji: '🧢', sales: 7400 }
];

// Simplified shipping rates per country: [first kg €, extra kg €, min days, max days]
const SHIPPING = {
  fr: { standard: [14, 7.5, 12, 20], express: [24, 11, 6, 10] },
  be: { standard: [14, 7.5, 12, 20], express: [24, 11, 6, 10] },
  de: { standard: [13, 7, 10, 18], express: [23, 10.5, 5, 9] },
  es: { standard: [15, 8, 12, 22], express: [25, 11.5, 6, 11] },
  it: { standard: [15, 8, 12, 22], express: [25, 11.5, 6, 11] },
  uk: { standard: [12, 6.5, 10, 16], express: [22, 10, 5, 8] },
  ca: { standard: [18, 9, 15, 25], express: [30, 14, 7, 12] },
  us: { standard: [17, 9, 14, 24], express: [29, 13, 6, 10] }
};
