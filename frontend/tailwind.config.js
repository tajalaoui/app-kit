/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Use CSS variables for colors to maintain a single source of truth
        "base-bg": "var(--base-bg)",
        "surface-bg": "var(--surface-bg)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        action: "var(--action)",
        "action-hover": "var(--action-hover)",
        disabled: "var(--disabled)",
        info: "var(--info)",
        link: "var(--link)",
        border: "var(--border)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      boxShadow: {
        theme: "0 2px 8px var(--shadow)",
      },
    },
  },
  plugins: [
    // Optional: you could add tailwindcss-primeui here if needed
  ],
};
