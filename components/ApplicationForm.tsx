"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

import { Translations } from "@/lib/translations";

interface ApplicationFormProps {
  content: Translations["application"];
}

export default function ApplicationForm({ content }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    role: "",
    company: "",
    teamSize: "",
    technicalBackground: "",
    challenge: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [appCount, setAppCount] = useState(3); // Default count

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          applicationType: "beta", // 🔴 CRITICAL TAG
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setAppCount(data.count || appCount + 1);
        setFormData({
          email: "",
          fullName: "",
          role: "",
          company: "",
          teamSize: "",
          technicalBackground: "",
          challenge: "",
        });
        // Update URL for conversion tracking
        window.history.pushState({}, "", "/?application=beta-success");
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
      <section className="py-20" id="application">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
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
                {content.success.title}
              </h2>
              <p className="text-text-secondary mb-6">
                {content.success.message}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                {content.success.reset}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="application">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-background-elevated border border-white/5 relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-text-primary">
                {content.header.title} <span className="gradient-text-gold">{content.header.highlight}</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                {content.header.description}
              </p>
              {appCount > 0 && (
                <p className="mt-4 text-sm text-primary font-medium tracking-wide">
                  {content.header.count.replace("{count}", appCount.toString())}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="label-text">
                    {content.form.email}
                  </label>
                  <input
                    id="email"
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
                  <label htmlFor="fullName" className="label-text">
                    {content.form.name}
                  </label>
                  <input
                    id="fullName"
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
                  <label htmlFor="role" className="label-text">
                    {content.form.role}
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder={content.form.rolePlaceholder}
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="label-text">
                    {content.form.company}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={content.form.companyPlaceholder}
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-2">
                <label htmlFor="teamSize" className="label-text">
                  {content.form.teamSize}
                </label>
                <div className="relative">
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="input-field appearance-none"
                  >
                    <option value="" className="bg-background-elevated">Select Team Size</option>
                    <option value="1-5" className="bg-background-elevated">1-5</option>
                    <option value="6-15" className="bg-background-elevated">6-15</option>
                    <option value="16-50" className="bg-background-elevated">16-50</option>
                    <option value="50+" className="bg-background-elevated">50+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-muted">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Technical Background */}
              <div className="space-y-2">
                <label className="label-text block">{content.form.technicalBackground}</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {[
                    { value: "eng-lead", label: "Engineering/Tech Lead" },
                    { value: "dev-mgr", label: "Senior Dev → Manager" },
                    { value: "cto", label: "CTO/VP Engineering" },
                    { value: "other", label: "Other Technical Leadership" }
                  ].map((option) => (
                    <label key={option.value} className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.technicalBackground === option.value ? 'bg-primary/20 border-primary text-text-primary' : 'bg-background-surface border-white/10 hover:border-primary/30 text-text-secondary'}`}>
                      <input
                        type="radio"
                        name="technicalBackground"
                        value={option.value}
                        checked={formData.technicalBackground === option.value}
                        onChange={handleChange}
                        required
                        className="text-primary focus:ring-primary bg-transparent border-white/20"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <label htmlFor="challenge" className="label-text">
                  {content.form.challenge}
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder={content.form.challengePlaceholder}
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  minLength={50}
                  className="input-field min-h-[100px]"
                />
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
      </div>
    </section>
  );
}
