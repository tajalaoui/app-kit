// presets/crown-preset.js
import { definePreset } from "@primeuix/themes";
import Aura from "@primevue/themes/aura";

// Define your custom preset extending Aura theme
export default definePreset(Aura, {
  name: "crown",
  // Color palette definition
  semantic: {
    primary: {
      50: "#F2F9F2", // Very light, Apple's lightest UI green tint
      100: "#E2F5E5", // Light background hover
      200: "#CCEDCF", // Light background active
      300: "#9DDEA2", // Light accent
      400: "#66D97C", // Medium accent
      500: "#34C759", // Apple's iOS system green (base color)
      600: "#28B14A", // Slightly darker for hover states
      700: "#1D9A3D", // Darker for active states
      800: "#16802F", // Deep green for text on light backgrounds
      900: "#0F6223", // Very deep green for emphasized elements
      950: "#084D18", // Darkest shade for special cases
    },
    // You can customize other colors if needed
    info: "#CDDC39",
    success: "#4CAF50",
    warning: "#FF9800",
    danger: "#F44336", // For error states
  },
  // Optional: Override specific component styles
  components: {
    // Example: Customize button
    button: {
      root: {
        // Custom styles for buttons
      },
    },
  },

  card: {
    root: {
      class: "app-card", // You can add custom classes here
    },
    body: { class: "" },
    title: { class: "" },
    content: { class: "" },
  },
  datatable: {
    root: { class: "app-datatable" },
    header: { class: "" },
    table: { class: "" },
    thead: { class: "" },
    tbody: { class: "" },
    tfoot: { class: "" },
  },
  inputtext: {
    root: { class: "app-input" },
  },
  button: {
    root: { class: "app-button" },
  },
});
