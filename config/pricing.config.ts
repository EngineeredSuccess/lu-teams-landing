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
            teamSize: '1-5',
            features: [
                'Do 5 członków zespołu',
                'HEXACO Synergy Radar',
                'Conflict Predictions (3-6 miesięcy)',
                'Analiza ról w zespole',
                'Raporty indywidualne',
                'Eksport PDF',
                'Wsparcie Email (48h)'
            ]
        },
        professional: {
            name: 'Professional',
            priceUSD: 149,
            teamSize: '6-15',
            features: [
                'Wszystko z planu Starter',
                'Do 15 członków zespołu',
                'Priority Support (24h)',
                'Advanced Analytics',
                'Custom Reports',
                'Team Synergy Dashboard'
            ]
        },
        scale: {
            name: 'Scale',
            priceUSD: 349,
            teamSize: '16-50',
            features: [
                'Wszystko z planu Professional',
                'Do 50 członków zespołu',
                'Dedicated Account Manager',
                'API Access',
                'Custom Integrations',
                'White-label Options'
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
