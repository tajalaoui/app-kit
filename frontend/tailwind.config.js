// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/primevue/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Common colors that don't change between modes
        action: "#29F709", // Neon Green
        "action-hover": "#24CC00", // Deep Green
        info: "#CDDC39", // Lime
        success: "#4CAF50", // Green
        warning: "#FF9800", // Orange
        error: "#F44336", // Red
      },
      boxShadow: {
        light: "0 4px 6px rgba(0, 0, 0, 0.1)",
        dark: "0 4px 6px rgba(255, 255, 255, 0.1)",
      },
      textColor: {
        // Text colors that will be set via CSS variables
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        // Background colors that will be set via CSS variables
        base: "var(--base-bg)",
        surface: "var(--surface-bg)",
      },
      borderColor: {
        // Border colors that will be set via CSS variables
        default: "var(--border)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
