const CNY_TO_EUR = 0.128;
const SERVICE_FEE = 0.03;

const CATEGORIES = ['all', 'clothing', 'shoes', 'bags', 'electronics', 'home', 'accessories'];

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
