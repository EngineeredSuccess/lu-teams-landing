"use client";

import { useState, useEffect } from "react";
import { Currency } from "@/config/pricing.config";

interface CurrencySwitcherProps {
    className?: string;
}

export default function CurrencySwitcher({ className = "" }: CurrencySwitcherProps) {
    const [currency, setCurrency] = useState<Currency>('PLN');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load saved currency preference
        const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
        if (savedCurrency && ['USD', 'PLN', 'EUR', 'GBP'].includes(savedCurrency)) {
            setCurrency(savedCurrency);
        }
    }, []);

    const handleCurrencyChange = (newCurrency: Currency) => {
        setCurrency(newCurrency);
        localStorage.setItem('preferredCurrency', newCurrency);

        // Dispatch custom event for other components to listen
        window.dispatchEvent(new CustomEvent('currencyChanged', {
            detail: { currency: newCurrency }
        }));
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className={`currency-switcher ${className}`}>
                <select className="currency-select" disabled>
                    <option>PLN (zł)</option>
                </select>
            </div>
        );
    }

    return (
        <div className={`currency-switcher ${className}`}>
            <select
                value={currency}
                onChange={(e) => handleCurrencyChange(e.target.value as Currency)}
                className="currency-select text-xs font-bold px-2 py-1 rounded border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Wybierz walutę"
            >
                <option value="USD" className="bg-slate-900">USD ($)</option>
                <option value="PLN" className="bg-slate-900">PLN (zł)</option>
                <option value="EUR" className="bg-slate-900">EUR (€)</option>
                <option value="GBP" className="bg-slate-900">GBP (£)</option>
            </select>
        </div>
    );
}

/**
 * Hook to use currency in components
 */
export function useCurrency(): Currency {
    const [currency, setCurrency] = useState<Currency>('PLN');

    useEffect(() => {
        // Load initial currency
        const savedCurrency = localStorage.getItem('preferredCurrency') as Currency;
        if (savedCurrency && ['USD', 'PLN', 'EUR', 'GBP'].includes(savedCurrency)) {
            setCurrency(savedCurrency);
        }

        // Listen for currency changes
        const handleCurrencyChange = (e: Event) => {
            const customEvent = e as CustomEvent<{ currency: Currency }>;
            setCurrency(customEvent.detail.currency);
        };

        window.addEventListener('currencyChanged', handleCurrencyChange);

        return () => {
            window.removeEventListener('currencyChanged', handleCurrencyChange);
        };
    }, []);

    return currency;
}
