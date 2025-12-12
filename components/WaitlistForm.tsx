"use client";

import { useState } from "react";

const industries = [
  "Aerospace & Defense",
  "Tech & SaaS",
  "Advanced Manufacturing",
  "Healthcare",
  "Financial Services",
  "Consulting",
  "Other",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    role: "",
    industry: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
        setFormData({
          email: "",
          name: "",
          company: "",
          role: "",
          industry: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 relative" id="waitlist">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card py-12">
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
                You&apos;re on the list!
              </h2>
              <p className="text-slate-400">
                Thanks for joining the beta. We&apos;ll be in touch soon with
                early access details.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative" id="waitlist">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Join the <span className="gradient-text">Beta</span>
          </h2>
          <p className="section-subtitle">
            Be among the first to experience the future of team building
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card" suppressHydrationWarning>
            <div className="space-y-6" suppressHydrationWarning>
              {/* Email - Required */}
              <div suppressHydrationWarning>
                <label htmlFor="email" className="label-text">
                  Email <span className="text-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="input-field"
                  disabled={status === "loading"}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </div>

              {/* Name - Optional */}
              <div suppressHydrationWarning>
                <label htmlFor="name" className="label-text">
                  Name <span className="text-slate-400/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field"
                  disabled={status === "loading"}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </div>

              {/* Company - Optional */}
              <div suppressHydrationWarning>
                <label htmlFor="company" className="label-text">
                  Company <span className="text-slate-400/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="input-field"
                  disabled={status === "loading"}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </div>

              {/* Role - Optional */}
              <div suppressHydrationWarning>
                <label htmlFor="role" className="label-text">
                  Role <span className="text-slate-400/60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Engineering Manager"
                  className="input-field"
                  disabled={status === "loading"}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </div>

              {/* Industry - Optional */}
              <div>
                <label htmlFor="industry" className="label-text">
                  Industry <span className="text-slate-400/60">(optional)</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                  disabled={status === "loading"}
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary-filled text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join the Beta"
                )}
              </button>

              <p className="text-center text-sm text-slate-400">
                No spam, ever. We&apos;ll only contact you about LU Teams.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}