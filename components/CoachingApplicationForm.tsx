"use client";

import { useState } from "react";
import { Translations } from "@/lib/translations";

type FormStatus = "idle" | "loading" | "success" | "error";

interface CoachingApplicationFormProps {
    content: Translations["coachingApplication"];
}

export default function CoachingApplicationForm({ content }: CoachingApplicationFormProps) {
    // 🔴 CONTROL FLAG
    const IS_FULL_Q1_2026 = true;

    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        role: "",
        companySize: "",
        teamSize: "",
        yearsInLeadership: "",
        specificChallenge: "",
        whyCoaching: "",
        budgetRange: "",
    });

    // Waitlist specific state
    const [waitlistEmail, setWaitlistEmail] = useState("");

    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleWaitlistSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: waitlistEmail,
                    applicationType: "waitlist",
                    metadata: {
                        source: "coaching_waitlist_q1_2026"
                    }
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setWaitlistEmail("");
                // Update URL for conversion tracking
                window.history.pushState({}, "", "/?application=waitlist-success");
            } else {
                setStatus("error");
                setErrorMessage(data.error || content.form.error);
            }
        } catch {
            setStatus("error");
            setErrorMessage(content.form.networkError);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    applicationType: "coaching", // 🔴 CRITICAL TAG
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    email: "",
                    fullName: "",
                    role: "",
                    companySize: "",
                    teamSize: "",
                    yearsInLeadership: "",
                    specificChallenge: "",
                    whyCoaching: "",
                    budgetRange: "",
                });
                // Update URL for conversion tracking
                window.history.pushState({}, "", "/?application=coaching-success");
            } else {
                setStatus("error");
                setErrorMessage(data.error || content.form.error);
            }
        } catch {
            setStatus("error");
            setErrorMessage(content.form.networkError);
        }
    };

    if (status === "success") {
        return (
            <div className="p-8 md:p-12 rounded-2xl bg-background-surface border border-primary/20 text-center shadow-xl shadow-primary/5">
                {/* Success Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-text-primary mb-4">
                    {IS_FULL_Q1_2026 ? "You're on the list." : content.success.title}
                </h2>
                <p className="text-text-secondary mb-6">
                    {IS_FULL_Q1_2026 ? "We'll let you know as soon as a spot opens up." : content.success.message}
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-primary hover:text-primary-light transition-colors font-medium"
                >
                    {content.success.reset}
                </button>
            </div>
        );
    }

    return (
        <div className="relative p-8 md:p-12 rounded-2xl bg-background-surface/50 backdrop-blur-md border border-primary/20 overflow-hidden shadow-2xl">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* WAITING LIST OVERLAY */}
            {IS_FULL_Q1_2026 && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background-surface/80 backdrop-blur-sm transition-all duration-300">
                    <div className="max-w-md w-full p-8 text-center bg-background-elevated border border-primary/30 rounded-xl shadow-2xl mx-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold font-display text-text-primary mb-2">
                            {content.form.fullMessage}
                        </h3>
                        <p className="text-text-secondary mb-6">
                            {content.form.waitlistSubtitle}
                        </p>

                        <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="waitlist-email" className="sr-only">{content.form.email}</label>
                                <input
                                    id="waitlist-email"
                                    type="email"
                                    value={waitlistEmail}
                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                    placeholder={content.form.waitlistEmailPlaceholder}
                                    required
                                    className="input-field w-full text-center"
                                />
                            </div>

                            {status === "error" && (
                                <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full btn-primary disabled:opacity-50"
                            >
                                {status === "loading" ? content.form.submitting : content.form.waitlistCta}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className={IS_FULL_Q1_2026 ? "filter grayscale opacity-30 pointer-events-none select-none" : ""}>
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold font-display mb-2 text-text-primary">
                        {content.header.title}
                    </h3>
                    <p className="text-text-secondary">
                        {content.header.subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="coaching-email" className="label-text">
                                {content.form.email}
                            </label>
                            <input
                                id="coaching-email"
                                name="email"
                                type="email"
                                placeholder={content.form.emailPlaceholder}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="coaching-fullName" className="label-text">
                                {content.form.name}
                            </label>
                            <input
                                id="coaching-fullName"
                                name="fullName"
                                type="text"
                                placeholder={content.form.namePlaceholder}
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Role */}
                        <div className="space-y-2">
                            <label htmlFor="coaching-role" className="label-text">
                                {content.form.role}
                            </label>
                            <input
                                id="coaching-role"
                                name="role"
                                type="text"
                                placeholder={content.form.rolePlaceholder}
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>

                        {/* Company Size & Industry */}
                        <div className="space-y-2">
                            <label htmlFor="coaching-companySize" className="label-text">
                                {content.form.companySize}
                            </label>
                            <input
                                id="coaching-companySize"
                                name="companySize"
                                type="text"
                                placeholder={content.form.companySizePlaceholder}
                                value={formData.companySize}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    {/* Team Size */}
                    <div className="space-y-2">
                        <label htmlFor="coaching-teamSize" className="label-text">
                            {content.form.teamSize}
                        </label>
                        <div className="relative">
                            <select
                                id="coaching-teamSize"
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleChange}
                                required
                                className="input-field appearance-none"
                            >
                                <option value="" className="bg-background-elevated">Select Team Size</option>
                                <option value="1-5" className="bg-background-elevated">1-5 direct reports</option>
                                <option value="6-15" className="bg-background-elevated">6-15 direct reports</option>
                                <option value="16-30" className="bg-background-elevated">16-30 direct reports</option>
                                <option value="31-50" className="bg-background-elevated">31-50 direct reports</option>
                                <option value="50+" className="bg-background-elevated">50+ direct reports</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Years in Leadership */}
                    <div className="space-y-2">
                        <label htmlFor="coaching-yearsInLeadership" className="label-text">
                            {content.form.yearsInLeadership}
                        </label>
                        <div className="relative">
                            <select
                                id="coaching-yearsInLeadership"
                                name="yearsInLeadership"
                                value={formData.yearsInLeadership}
                                onChange={handleChange}
                                required
                                className="input-field appearance-none"
                            >
                                <option value="" className="bg-background-elevated">Select Experience</option>
                                <option value="<1" className="bg-background-elevated">Less than 1 year</option>
                                <option value="1-2" className="bg-background-elevated">1-2 years</option>
                                <option value="3-5" className="bg-background-elevated">3-5 years</option>
                                <option value="6-10" className="bg-background-elevated">6-10 years</option>
                                <option value="10+" className="bg-background-elevated">10+ years</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Specific Challenge - LONGER */}
                    <div className="space-y-2">
                        <label htmlFor="coaching-specificChallenge" className="label-text">
                            {content.form.specificChallenge}
                        </label>
                        <textarea
                            id="coaching-specificChallenge"
                            name="specificChallenge"
                            rows={6}
                            minLength={200}
                            placeholder={content.form.specificChallengePlaceholder}
                            value={formData.specificChallenge}
                            onChange={handleChange}
                            required
                            className="input-field min-h-[150px]"
                        />
                        <p className="text-xs text-text-muted">
                            {formData.specificChallenge.length} / 200 minimum characters
                        </p>
                    </div>

                    {/* Why Coaching vs Tool */}
                    <div className="space-y-2">
                        <label htmlFor="coaching-whyCoaching" className="label-text">
                            {content.form.whyCoaching}
                        </label>
                        <textarea
                            id="coaching-whyCoaching"
                            name="whyCoaching"
                            rows={4}
                            minLength={100}
                            placeholder={content.form.whyCoachingPlaceholder}
                            value={formData.whyCoaching}
                            onChange={handleChange}
                            required
                            className="input-field min-h-[100px]"
                        />
                        <p className="text-xs text-text-muted">
                            {formData.whyCoaching.length} / 100 minimum characters
                        </p>
                    </div>

                    {/* Budget Range - OPTIONAL */}
                    <div className="space-y-2">
                        <label htmlFor="coaching-budgetRange" className="label-text">
                            {content.form.budgetRange}
                        </label>
                        <div className="relative">
                            <select
                                id="coaching-budgetRange"
                                name="budgetRange"
                                value={formData.budgetRange}
                                onChange={handleChange}
                                className="input-field appearance-none"
                            >
                                <option value="" className="bg-background-elevated">Prefer not to say</option>
                                <option value="<10k" className="bg-background-elevated">Under $10,000</option>
                                <option value="10k-25k" className="bg-background-elevated">$10,000 - $25,000</option>
                                <option value="25k-50k" className="bg-background-elevated">$25,000 - $50,000</option>
                                <option value="50k+" className="bg-background-elevated">$50,000+</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                        <p className="text-xs text-text-muted">
                            Helps us ensure fit before discovery call. All engagements are custom-priced.
                        </p>
                    </div>

                    {status === "error" && (
                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? content.form.submitting : content.form.submit}
                    </button>

                    <p className="text-sm text-text-muted text-center">
                        {content.form.footer}
                    </p>
                </form>
            </div>
        </div>
    );
}
