// presets/crown-preset.js
import { definePreset } from "@primevue/themes";

export default definePreset({
  name: "crown",

  // Color palette definition using CSS variables
  semantic: {
    primary: {
      50: "var(--action-50)",
      100: "var(--action-100)",
      200: "var(--action-200)",
      300: "var(--action-300)",
      400: "var(--action-400)",
      500: "var(--action)",
      600: "var(--action-600)",
      700: "var(--action-hover)",
      800: "var(--action-800)",
      900: "var(--action-900)",
      950: "var(--action-950)",
    },

    // Status colors
    info: { 500: "var(--info)" },
    success: { 500: "var(--success)" },
    warning: { 500: "var(--warning)" },
    danger: { 500: "var(--error)" },

    // Surface colors mapping
    surface: {
      0: "var(--surface-bg)",
      50: "var(--surface-bg-50)",
      100: "var(--surface-bg)",
      200: "var(--surface-bg)",
      300: "var(--border)",
      400: "var(--border)",
      500: "var(--secondary-text)",
      600: "var(--secondary-text)",
      700: "var(--primary-text)",
      800: "var(--primary-text)",
      900: "var(--primary-text)",
      ground: "var(--base-bg)",
      section: "var(--surface-bg)",
      card: "var(--surface-bg)",
      overlay: "var(--surface-bg)",
      border: "var(--border)",
    },
  },
});
