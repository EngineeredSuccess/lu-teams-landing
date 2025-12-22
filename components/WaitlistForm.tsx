"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

import { Translations } from "@/lib/translations";

interface WaitlistFormProps {
  content: Translations["waitlist"];
}

export default function WaitlistForm({ content }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(3); // Default count

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setWaitlistCount(data.count || waitlistCount + 1);
        setFormData({
          email: "",
          name: "",
          company: "",
        });
        // Update URL for conversion tracking
        window.history.pushState({}, "", "/?signup=success");
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
      <section className="py-20" id="waitlist">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-navy-light/50 border border-cyan/20 text-center">
              {/* Success Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan/20 text-cyan">
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

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {content.success.title}
              </h2>
              <p className="text-slate-400 mb-6">
                {content.success.message}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-cyan hover:text-cyan-dark transition-colors"
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
    <section className="py-20" id="waitlist">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-navy-light/50 border border-cyan/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {content.header.title} <span className="gradient-text">{content.header.highlight}</span>
              </h2>
              <p className="text-lg text-slate-400">
                {content.header.description}
              </p>
              {waitlistCount > 0 && (
                <p className="mt-4 text-sm text-cyan">
                  {content.header.count.replace("{count}", waitlistCount.toString())}
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="space-y-2">
                <label htmlFor="name" className="label-text">
                  {content.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={content.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

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
                  className="input-field"
                />
              </div>

              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary-filled text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? content.form.submitting : content.form.submit}
              </button>

              <p className="text-sm text-slate-400 text-center">
                {content.form.footer}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
