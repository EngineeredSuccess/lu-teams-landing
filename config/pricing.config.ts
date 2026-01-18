// Unified pricing configuration for LU Teams
// All prices are stored in USD and converted to other currencies

export const PRICING_CONFIG = {
    baseCurrency: 'USD',
    exchangeRates: {
        USD: 1,
        PLN: 4.0,
        EUR: 0.92,
        GBP: 0.79
    },
    plans: {
        starter: {
            name: 'Starter',
            priceUSD: 49,
            teamSize: '1-10',
            features: [
                'Do 10 członków zespołu',
                'Oceny HEXACO',
                'Podstawowy Synergy Radar (5 skanów/mies)',
                'Wsparcie Email'
            ]
        },
        professional: {
            name: 'Professional',
            priceUSD: 149,
            teamSize: 'Do 30',
            features: [
                'Do 30 członków zespołu',
                'Nielimitowane oceny HEXACO',
                'Pełny Synergy Radar (20 skanów/mies)',
                'Analiza Dynamiki Ról',
                'Alerty Przewidywania Konfliktów',
                'Priorytetowe Wsparcie'
            ]
        },
        scale: {
            name: 'Scale',
            priceUSD: 349,
            teamSize: 'Do 75',
            features: [
                'Do 75 członków zespołu',
                'Wszystko z planu Professional',
                'Porównanie wielu zespołów',
                'Moduł kalibracji rekrutacji',
                'Kwartalna rozmowa strategiczna (1h)',
                'Dedykowany Opiekun Klienta'
            ]
        }
    }
} as const;

export type Currency = keyof typeof PRICING_CONFIG.exchangeRates;
export type PlanKey = keyof typeof PRICING_CONFIG.plans;

/**
 * Convert USD price to target currency
 */
export function convertPrice(priceUSD: number, targetCurrency: Currency): number {
    const rate = PRICING_CONFIG.exchangeRates[targetCurrency];
    return Math.round(priceUSD * rate);
}

/**
 * Get plan price in specific currency
 */
export function getPlanPrice(planKey: PlanKey, currency: Currency): number {
    const plan = PRICING_CONFIG.plans[planKey];
    return convertPrice(plan.priceUSD, currency);
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency: Currency): string {
    const symbols: Record<Currency, string> = {
        USD: '$',
        PLN: 'zł',
        EUR: '€',
        GBP: '£'
    };
    return symbols[currency];
}

/**
 * Format price with currency
 */
export function formatPrice(amount: number, currency: Currency): string {
    const symbol = getCurrencySymbol(currency);

    // PLN shows symbol after amount
    if (currency === 'PLN') {
        return `${amount} ${symbol}`;
    }

    // Others show symbol before
    return `${symbol}${amount}`;
}
