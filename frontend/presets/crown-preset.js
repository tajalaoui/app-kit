// presets/crown-preset.js
import { definePreset } from "@primeuix/themes";
import Aura from "@primevue/themes/aura";

// Define your custom preset extending Aura theme
export default definePreset(Aura, {
  name: "crown",

  // Color palette definition using Apple-inspired greens
  semantic: {
    primary: {
      50: "var(--action-50)", // Very light green tint
      100: "var(--action-100)", // Light background hover
      200: "var(--action-200)", // Light background active
      300: "var(--action-300)", // Light accent
      400: "var(--action-400)", // Medium accent
      500: "var(--action)", // Apple's iOS system green (base color)
      600: "var(--action-600)", // Slightly darker for hover states
      700: "var(--action-hover)", // Darker for active states
      800: "var(--action-800)", // Deep green for text on light backgrounds
      900: "var(--action-900)", // Very deep green for emphasized elements
      950: "var(--action-950)", // Darkest shade for special cases
    },

    // Status colors mapping from your CSS variables
    info: {
      500: "var(--info)",
    },
    success: {
      500: "var(--success)",
    },
    warning: {
      500: "var(--warning)",
    },
    danger: {
      500: "var(--error)",
    },

    // Surface colors
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

  // Global transitions for the entire theme
  global: {
    css: `
      * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }
    `,
  },
});
