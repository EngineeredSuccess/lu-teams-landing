// Beta Invitation Email - sent 3 days after joining waitlist
export function getBetaInvitationHtml(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Beta Access is Ready!</title>
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
        Hey ${firstName}! 🎉
      </h2>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
        Great news - <strong style="color: #64ffda;">your beta access is ready!</strong>
      </p>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        You're one of the first to experience LU Teams, our AI-powered platform that analyzes personality dynamics to predict team synergy before you even start a project.
      </p>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 32px 0;">
        <a href="https://app.luteams.com" style="display: inline-block; background: linear-gradient(135deg, #64ffda 0%, #a78bfa 100%); color: #0a192f; font-weight: bold; font-size: 16px; padding: 16px 32px; border-radius: 8px; text-decoration: none;">
          Start Testing Now →
        </a>
      </div>

      <div style="background-color: rgba(100, 255, 218, 0.1); border-left: 4px solid #64ffda; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <p style="font-size: 14px; font-style: italic; margin: 0; color: #ccd6f6;">
          As an early beta tester, your feedback will directly shape the future of LU Teams. We can't wait to hear what you think!
        </p>
      </div>

      <h3 style="font-size: 18px; font-weight: 600; color: #ffffff; margin: 0 0 12px 0;">
        What you can explore:
      </h3>

      <ul style="list-style: none; padding: 0; margin: 0 0 24px 0;">
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">🧠 Upload team profiles and get personality insights</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">⚠️ See potential friction points before they become problems</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">💡 Get AI-powered recommendations for optimal team compositions</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">📊 Visualize team dynamics with interactive charts</li>
      </ul>

      <p style="font-size: 16px; line-height: 1.6; margin: 0;">
        Questions or ideas? Just reply to this email - we read every message.
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

export function getBetaInvitationPlainText(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
Hey ${firstName}! 🎉

Great news - your beta access is ready!

You're one of the first to experience LU Teams, our AI-powered platform that analyzes personality dynamics to predict team synergy before you even start a project.

👉 Start Testing Now: https://app.luteams.com

As an early beta tester, your feedback will directly shape the future of LU Teams. We can't wait to hear what you think!

What you can explore:
• 🧠 Upload team profiles and get personality insights
• ⚠️ See potential friction points before they become problems
• 💡 Get AI-powered recommendations for optimal team compositions
• 📊 Visualize team dynamics with interactive charts

Questions or ideas? Just reply to this email - we read every message.

---
Built for Aerospace, Tech & Advanced Manufacturing leaders
© 2025 LU Teams by Leadership Unfiltered
  `.trim();
}