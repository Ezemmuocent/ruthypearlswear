// Nigeria-specific configuration for RuthyPearls Wear
// Includes payment methods, taxes, and regional settings

export const NIGERIA_CONFIG = {
  // Country Info
  country: 'Nigeria',
  currency: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
  },

  // Tax Configuration
  taxes: {
    vat: 0.075, // 7.5% Nigerian Value Added Tax
    withholding: 0.05, // 5% withholding tax (optional)
  },

  // Shipping Configuration
  shipping: {
    standard: {
      name: 'Standard Delivery',
      cost: 2500, // ₦2,500
      days: '5-7',
      regions: ['All Nigeria'],
    },
    express: {
      name: 'Express Delivery',
      cost: 5000, // ₦5,000
      days: '2-3',
      regions: ['Lagos', 'Abuja', 'Port Harcourt'],
    },
    freeThreshold: 10000, // Free shipping on orders over ₦10,000
  },

  // Payment Methods
  paymentMethods: [
    {
      id: 'card',
      name: 'Debit/Credit Card',
      provider: 'Flutterwave/Stripe',
      acceptedCards: ['Visa', 'Mastercard', 'Verve'],
      available: true,
    },
    {
      id: 'flutterwave',
      name: 'Flutterwave',
      description: 'Mobile money, bank transfer, card',
      available: true,
    },
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      available: true,
    },
    {
      id: 'ussd',
      name: 'USSD',
      description: '*901# (for MTN, Airtel, Glo)',
      available: true,
    },
  ],

  // Business Information
  business: {
    name: 'RuthyPearls Wear',
    email: 'info@ruthypearlswear.com',
    phone: '+234 8061759998',
    address: 'Calabar, Nigeria',
    whatsapp: '+234 8176298161',
    businessHours: {
      weekday: '24/7',
      weekend: '10:00 AM - 4:00 PM WAT',
    },
  },

  // Language
  language: 'en',
  timezone: 'WAT', // West Africa Time

  // Popular Cities for Shipping
  majorCities: [
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Kano',
    'Ibadan',
    'Benin City',
    'Calabar',
    'Enugu',
    'Kaduna',
    'Maiduguri',
    'Umuahia',
    'Abeokuta',
    'Ilorin',
    'Ogbomosho',
    'Onitsha',
  ],

  // VAT Registration Number (update with your actual BRN)
  taxId: 'BRN: XXXXXXXXXXXXX',

  // Terms & Conditions
  terms: {
    minOrderValue: 1000, // Minimum ₦1,000
    maxOrderValue: 5000000, // Maximum ₦500,000
    returnPolicy: {
      days: 30,
      condition: 'Unused, with original tags',
    },
  },
};

// Helper function to apply Nigerian tax
export function applyNigerianVAT(amount: number): {
  subtotal: number;
  vat: number;
  total: number;
} {
  const vat = amount * NIGERIA_CONFIG.taxes.vat;
  return {
    subtotal: amount,
    vat: Math.round(vat),
    total: amount + Math.round(vat),
  };
}

// Helper to get shipping cost
export function getShippingCost(
  cartTotal: number,
  expressDelivery: boolean = false
): number {
  if (cartTotal >= NIGERIA_CONFIG.shipping.freeThreshold) {
    return 0;
  }
  return expressDelivery
    ? NIGERIA_CONFIG.shipping.express.cost
    : NIGERIA_CONFIG.shipping.standard.cost;
}
