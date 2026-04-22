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
        surface: {
          DEFAULT: "#050508",
          raised: "#0a0c12",
          card: "#0d1018",
        },
        ink: {
          DEFAULT: "#e8eaef",
          muted: "#9aa3b2",
          subtle: "#6b7280",
        },
        accent: {
          cyan: "#22d3ee",
          indigo: "#818cf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(34, 211, 238, 0.25)",
        "glow-indigo": "0 0 50px -12px rgba(129, 140, 248, 0.2)",
        card: "0 24px 80px -32px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,5,8,0) 0%, rgba(5,5,8,0.85) 40%, #050508 100%), radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.12), transparent)",
        "radial-accent":
          "radial-gradient(ellipse 120% 80% at 50% 0%, rgba(34,211,238,0.08), transparent 55%), radial-gradient(ellipse 80% 60% at 100% 20%, rgba(129,140,248,0.06), transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
