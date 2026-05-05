// Currency utility for Nigerian Naira
export const CURRENCY = {
  code: 'NGN',
  symbol: '₦',
  name: 'Nigerian Naira',
};

export function formatPrice(price: number): string {
  return `${CURRENCY.symbol}${price.toLocaleString('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export function formatPriceDetailed(price: number): string {
  return `${CURRENCY.symbol}${price.toLocaleString('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })} ${CURRENCY.code}`;
}

// Currency conversion helper (for future use)
export const EXCHANGE_RATES = {
  USD_TO_NGN: 750, // Approximate rate
};
