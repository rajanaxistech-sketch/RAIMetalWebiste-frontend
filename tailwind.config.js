/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C76A",
          dark: "#8B6914",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          light: "#E8E8E8",
          dark: "#888888",
        },
        dark: {
          100: "#2E2E2E",
          200: "#242424",
          300: "#1A1A1A",
          400: "#111111",
          500: "#0A0A0A",
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        metal: "0 20px 60px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(90deg, rgba(10, 10, 10, 0.94) 0%, rgba(10, 10, 10, 0.7) 48%, rgba(10, 10, 10, 0.2) 100%)",
      },
    },
  },
  plugins: [],
};
