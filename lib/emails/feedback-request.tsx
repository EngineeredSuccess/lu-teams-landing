// Feedback Request Email - sent 14 days after beta invitation
export function getFeedbackRequestHtml(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How's Your LU Teams Experience?</title>
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
        Hey ${firstName}! 💭
      </h2>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
        You've been testing LU Teams for a couple of weeks now, and we'd love to hear from you!
      </p>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
        Your feedback is <strong style="color: #64ffda;">incredibly valuable</strong> to us. As an early beta tester, your insights will directly shape the features and improvements we prioritize.
      </p>

      <!-- CTA Button -->
      <div style="text-align: center; margin: 32px 0;">
        <a href="https://app.luteams.com/feedback" style="display: inline-block; background: linear-gradient(135deg, #64ffda 0%, #a78bfa 100%); color: #0a192f; font-weight: bold; font-size: 16px; padding: 16px 32px; border-radius: 8px; text-decoration: none;">
          Share Your Feedback →
        </a>
      </div>

      <p style="font-size: 14px; line-height: 1.6; margin: 0 0 24px 0; color: #8892b0; text-align: center;">
        Takes less than 3 minutes
      </p>

      <div style="background-color: rgba(100, 255, 218, 0.1); border-left: 4px solid #64ffda; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <p style="font-size: 14px; margin: 0 0 12px 0; color: #ccd6f6;">
          <strong>We'd especially love to know:</strong>
        </p>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="font-size: 14px; line-height: 1.8; padding: 2px 0;">• What's working well for you?</li>
          <li style="font-size: 14px; line-height: 1.8; padding: 2px 0;">• What's confusing or frustrating?</li>
          <li style="font-size: 14px; line-height: 1.8; padding: 2px 0;">• What features would you love to see?</li>
        </ul>
      </div>

      <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
        Haven't had a chance to explore yet? No worries! Here are some quick things to try:
      </p>

      <ul style="list-style: none; padding: 0; margin: 0 0 24px 0;">
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">🧠 Create your first team and add members</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">⚡ Run a synergy analysis</li>
        <li style="font-size: 14px; line-height: 1.8; padding: 4px 0;">📊 Check out the team dynamics dashboard</li>
      </ul>

      <p style="font-size: 16px; line-height: 1.6; margin: 0;">
        Thanks for being part of our journey. Your input truly matters!
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

export function getFeedbackRequestPlainText(name?: string): string {
  const firstName = name?.split(" ")[0] || "there";

  return `
Hey ${firstName}! 💭

You've been testing LU Teams for a couple of weeks now, and we'd love to hear from you!

Your feedback is incredibly valuable to us. As an early beta tester, your insights will directly shape the features and improvements we prioritize.

👉 Share Your Feedback: https://app.luteams.com/feedback
(Takes less than 3 minutes)

We'd especially love to know:
• What's working well for you?
• What's confusing or frustrating?
• What features would you love to see?

Haven't had a chance to explore yet? No worries! Here are some quick things to try:
• 🧠 Create your first team and add members
• ⚡ Run a synergy analysis
• 📊 Check out the team dynamics dashboard

Thanks for being part of our journey. Your input truly matters!

---
Built for Aerospace, Tech & Advanced Manufacturing leaders
© 2025 LU Teams by Leadership Unfiltered
  `.trim();
}