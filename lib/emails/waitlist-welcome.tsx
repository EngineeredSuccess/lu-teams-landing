import * as React from "react";

interface WaitlistWelcomeEmailProps {
  name?: string;
}

export function WaitlistWelcomeEmail({ name }: WaitlistWelcomeEmailProps) {
  const firstName = name?.split(" ")[0] || "there";

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        backgroundColor: "#0a192f",
        color: "#ccd6f6",
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#64ffda",
            margin: "0 0 8px 0",
          }}
        >
          LU Teams
        </h1>
        <p style={{ color: "#8892b0", margin: 0, fontSize: "14px" }}>
          by Leadership Unfiltered
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "12px",
          padding: "32px",
          border: "1px solid rgba(100, 255, 218, 0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ffffff",
            margin: "0 0 16px 0",
          }}
        >
          Hey {firstName}! 👋
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
          Welcome to the LU Teams beta waitlist! You&apos;re now among the first to
          experience the future of team building.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
          We&apos;re building something special: an AI-powered tool that analyzes
          personality dynamics to predict team synergy{" "}
          <strong style={{ color: "#64ffda" }}>
            before you even start a project
          </strong>
          .
        </p>

        <div
          style={{
            backgroundColor: "rgba(100, 255, 218, 0.1)",
            borderLeft: "4px solid #64ffda",
            padding: "16px",
            borderRadius: "0 8px 8px 0",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontStyle: "italic",
              margin: 0,
              color: "#ccd6f6",
            }}
          >
            &quot;You&apos;re brilliant at strategy. Let LU Teams handle the people
            dynamics.&quot;
          </p>
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#ffffff",
            margin: "0 0 12px 0",
          }}
        >
          What&apos;s coming:
        </h3>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 24px 0",
          }}
        >
          {[
            "🧠 Personality Analysis - Deep insights into team dynamics",
            "⚠️ Conflict Prediction - Spot issues before they happen",
            "💡 Smart Recommendations - Data-driven team compositions",
          ].map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: "14px",
                lineHeight: "1.8",
                padding: "4px 0",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0" }}>
          We&apos;ll keep you updated on our progress and let you know as soon as
          beta access is available.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(100, 255, 218, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#8892b0",
            margin: "0 0 8px 0",
          }}
        >
          Built for Aerospace, Tech & Advanced Manufacturing leaders
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#8892b0",
            margin: 0,
          }}
        >
          © 2025 LU Teams by Leadership Unfiltered
        </p>
      </div>
    </div>
  );
}

// Plain text version for email clients that don't support HTML
export function getWaitlistWelcomePlainText(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
Hey ${firstName}! 👋

Welcome to the LU Teams beta waitlist! You're now among the first to experience the future of team building.

We're building something special: an AI-powered tool that analyzes personality dynamics to predict team synergy before you even start a project.

"You're brilliant at strategy. Let LU Teams handle the people dynamics."

What's coming:
• 🧠 Personality Analysis - Deep insights into team dynamics
• ⚠️ Conflict Prediction - Spot issues before they happen
• 💡 Smart Recommendations - Data-driven team compositions

We'll keep you updated on our progress and let you know as soon as beta access is available.

---
Built for Aerospace, Tech & Advanced Manufacturing leaders
© 2025 LU Teams by Leadership Unfiltered
  `.trim();
}