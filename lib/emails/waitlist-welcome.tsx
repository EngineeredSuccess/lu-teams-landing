// HTML email template function - avoids React rendering issues in production builds
export function getWaitlistWelcomeHtml(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to LU Teams</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a192f; color: #ccd6f6;">
  <div style="padding: 40px 20px; max-width: 600px; margin: 0 auto;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 32px; font-weight: bold; color: #64ffda; margin: 0 0 8px 0;">
        LU Teams
      </h1>
      <p style="color: #8892b0; margin: 0; font-size: 14px;">
        by Leadership Unfiltered
      </p>
    </div>

    <!-- Main Content -->
    <div style="background-color: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 32px; border: 1px solid rgba(100, 255, 218, 0.2);">
      <h2 style="font-size: 24px; font-weight: bold; color: #ffffff; margin: 0 0 16px 0;">
        Hey ${firstName}! 👋
      </h2>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
        Welcome to the LU Teams beta waitlist! You're now among the first to experience the future of team building.
      </p>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        We're building something special: an AI-powered tool that analyzes personality dynamics to predict team synergy
        <strong style="color: #64ffda;">before you even start a project</strong>.
      </p>

      <div style="background-color: rgba(100, 255, 218, 0.1); border-left: 4px solid #64ffda; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <p style="font-size: 14px; font-style: italic; margin: 0; color: #ccd6f6;">
          "You're brilliant at strategy. Let LU Teams handle the people dynamics."
        </p>
      </div>

      <h3 style="font-size: 18px; font-weight: 600; color: #ffffff; margin: 0 0 12px 0;">
        What's coming:
      </h3>

      <ul style="list-style: none; padding: 0; margin: 0 0 24px 0;">
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">🧠 Personality Analysis - Deep insights into team dynamics</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">⚠️ Conflict Prediction - Spot issues before they happen</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">💡 Smart Recommendations - Data-driven team compositions</li>
      </ul>

      <p style="font-size: 16px; line-height: 1.6; margin: 0;">
        We'll keep you updated on our progress and let you know as soon as beta access is available.
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(100, 255, 218, 0.1);">
      <p style="font-size: 14px; color: #8892b0; margin: 0 0 8px 0;">
        Built for Aerospace, Tech & Advanced Manufacturing leaders
      </p>
      <p style="font-size: 12px; color: #8892b0; margin: 0;">
        © 2025 LU Teams by Leadership Unfiltered
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
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