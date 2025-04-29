/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./presets/**/*.{js,ts}",
  ],
};
