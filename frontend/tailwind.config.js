/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        "base-bg": {
          light: "#F5F5F5", // Soft White
          dark: "#121212", // Charcoal
        },
        "surface-bg": {
          light: "#EEEEEE", // Warm Grey
          dark: "#1C1C1C", // Deep Graphite
        },
        text: {
          primary: {
            light: "#1C1C1C", // Rich Black
            dark: "#F5F5F5", // White
          },
          secondary: {
            light: "#757575", // Neutral Grey
            dark: "#CCCCCC", // Light Grey
          },
        },
        action: {
          DEFAULT: "#29F709", // Neon Green (same for both modes)
          hover: "#24CC00", // Deep Green (same for both modes)
          disabled: {
            light: "#B3B3B3", // Light Grey
            dark: "#5A5A5A", // Muted Grey
          },
        },
        info: "#CDDC39", // Lime (same for both modes)
        link: {
          light: "#38B000", // Forest Green
          dark: "#7AEB42", // Light Green
        },
        border: {
          light: "#DDDDDD", // Silver Grey
          dark: "#2E2E2E", // Muted Graphite
        },
        success: "#4CAF50", // Green (same for both modes)
        warning: "#FF9800", // Orange (same for both modes)
        error: "#F44336", // Red (same for both modes)
      },
      boxShadow: {
        light: "0 4px 6px rgba(0, 0, 0, 0.1)",
        dark: "0 4px 6px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
