import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#1d3557",
        },
        cyan: {
          DEFAULT: "#64ffda",
          dark: "#4fd1c5",
          glow: "rgba(100, 255, 218, 0.5)",
        },
        purple: {
          DEFAULT: "hsl(260, 100%, 65%)",
          glow: "hsla(260, 100%, 65%, 0.5)",
        },
        slate: {
          300: "#ccd6f6",
          400: "#8892b0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(100, 255, 218, 0.6)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 30px rgba(100, 255, 218, 0.5)",
        "neon-purple": "0 0 30px hsla(260, 100%, 65%, 0.5)",
        "neon-cyan-sm": "0 0 15px rgba(100, 255, 218, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;