import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        paper: "#FBFAF8",
        ink: "#16161A",
        accent: {
          DEFAULT: "#1D4ED8", // Deep blue: text-safe on paper
          bright: "#2F6BFF", // Decorative use (bars, rules, dots)
          soft: "#E8EFFF",
          teal: "#14B8A6",
        },
        charcoal: "#0B0B0B",
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 22, 26, 0.04), 0 4px 14px rgba(22, 22, 26, 0.04)",
        card: "0 2px 4px rgba(22, 22, 26, 0.04), 0 14px 34px rgba(22, 22, 26, 0.09)",
      },
    },
  },
  plugins: [],
};
export default config;
