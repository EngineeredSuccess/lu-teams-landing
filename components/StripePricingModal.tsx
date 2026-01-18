"use client";

import { useState, useEffect, useRef } from "react";
import { useCurrency } from "./CurrencySwitcher";
import { getCurrencySymbol, type Currency } from "@/config/pricing.config";

export default function StripePricingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const pricingTableRef = useRef<HTMLDivElement>(null);
    const currency = useCurrency();

    useEffect(() => {
        // Load Stripe pricing table script
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/pricing-table.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);

        // Check hash on mount
        if (window.location.hash === "#pricing") {
            setIsOpen(true);
        }

        // Listen for hash changes
        const handleHashChange = () => {
            if (window.location.hash === "#pricing") {
                setIsOpen(true);
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        // Add Stripe pricing table element when script is loaded
        if (scriptLoaded && isOpen && pricingTableRef.current) {
            // Clear existing table first
            pricingTableRef.current.innerHTML = '';

            const pricingTable = document.createElement('stripe-pricing-table');
            pricingTable.setAttribute('pricing-table-id', 'prctbl_1SnI1rJtc8SKwxCzgKlI98G7');
            pricingTable.setAttribute('publishable-key', 'pk_live_51SnHOeJtc8SKwxCzbLPLwsyPVZVkBsfjVtO4wBsHjv9FoaKsbstArR9HYXC0gciemmez4VKkE1rDKvvTy4Z9pv7U00naQCecYk');
            // Pass currency preference
            pricingTable.setAttribute('client-reference-id', `currency_${currency}`);
            pricingTableRef.current.appendChild(pricingTable);
        }
    }, [scriptLoaded, isOpen, currency]); // Re-create when currency changes

    const closeModal = () => {
        setIsOpen(false);
        // Use replaceState to avoid triggering hashchange
        window.history.replaceState(null, "", window.location.pathname);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
        >
            <div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors shadow-lg"
                    aria-label="Zamknij"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Stripe Pricing Table Container */}
                <div className="p-8 pt-16" ref={pricingTableRef}>
                    {!scriptLoaded && (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
