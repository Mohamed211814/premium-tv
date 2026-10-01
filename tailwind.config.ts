import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f0ff",
          100: "#ede0ff",
          200: "#dcc2ff",
          300: "#c494ff",
          400: "#984fff",
          500: "#5e17eb", // Exact User Purple
          600: "#520dd4",
          700: "#430ab3",
          800: "#360a8f",
          900: "#2d0a73",
          950: "#130238",
        },
        gold: {
          50: "#fffef0",
          100: "#fffcc2",
          200: "#fff885",
          300: "#fff047",
          400: "#ffde59", // Exact User Gold
          500: "#e6c230",
          600: "#c79e1b",
          700: "#9e7714",
          800: "#805d16",
          900: "#6b4c16",
          950: "#3e2908",
        },
        ruby: {
          50: "#fff1f3",
          100: "#ffe4e8",
          200: "#fecdce",
          300: "#fda4af",
          400: "#f6476b",
          500: "#d11d4d", // Exact User Ruby/Crimson
          600: "#b9103e",
          700: "#9b0b32",
          800: "#820c2d",
          900: "#6f0e2b",
          950: "#3e0314",
        },
        dark: {
          base: "#000000",
          card: "#0d0718",
          cardHover: "#180c2e",
          border: "rgba(255, 255, 255, 0.12)",
          borderGlow: "rgba(94, 23, 235, 0.5)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "tricolor": "linear-gradient(135deg, #5e17eb 0%, #d11d4d 50%, #ffde59 100%)",
        "purple-ruby": "linear-gradient(135deg, #5e17eb 0%, #d11d4d 100%)",
        "ruby-gold": "linear-gradient(135deg, #d11d4d 0%, #ffde59 100%)",
        "gold-purple": "linear-gradient(135deg, #ffde59 0%, #5e17eb 100%)",
        "hero-light": "radial-gradient(ellipse at 50% -10%, rgba(94, 23, 235, 0.15) 0%, rgba(209, 29, 77, 0.1) 40%, rgba(255, 222, 89, 0.15) 75%, #ffffff 100%)",
        "mesh-light": "radial-gradient(at 10% 20%, rgba(94, 23, 235, 0.12) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(209, 29, 77, 0.12) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(255, 222, 89, 0.18) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(94, 23, 235, 0.1) 0px, transparent 50%)",
        "card-light-purple": "linear-gradient(145deg, #ffffff 0%, #f9f5ff 100%)",
        "card-light-ruby": "linear-gradient(145deg, #ffffff 0%, #fff1f4 100%)",
        "card-light-gold": "linear-gradient(145deg, #ffffff 0%, #fffef0 100%)",
        "card-light-tricolor": "linear-gradient(145deg, #fbf7ff 0%, #fff4f6 50%, #fffdf2 100%)",
      },
      boxShadow: {
        "glow-purple": "0 10px 30px -5px rgba(94, 23, 235, 0.2)",
        "glow-ruby": "0 10px 30px -5px rgba(209, 29, 77, 0.2)",
        "glow-gold": "0 10px 30px -5px rgba(255, 222, 89, 0.3)",
        "glow-tricolor": "0 15px 35px -5px rgba(209, 29, 77, 0.18)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
