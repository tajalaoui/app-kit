// presets/crown/index.js

/**
 * Custom component styles for the Crown theme
 * This file defines passthrough (pt) styles for PrimeVue components
 */

export default {
  // Global theme transition for all components
  global: {
    css: `
      .theme-transition {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }
    `,
  },

  // Custom Button styles
  button: {
    root: ({ props }) => ({
      class: [
        // Base button styling
        "theme-transition",

        // Apply primary action color for primary buttons
        {
          "bg-action hover:bg-action-hover text-white":
            props.severity === "primary" || !props.severity,
          "bg-success hover:bg-success/80 text-white":
            props.severity === "success",
          "bg-warning hover:bg-warning/80 text-white":
            props.severity === "warning",
          "bg-error hover:bg-error/80 text-white": props.severity === "danger",
          "bg-info hover:bg-info/80 text-black": props.severity === "info",
          "bg-disabled text-white/70 cursor-not-allowed": props.disabled,
        },
      ],
    }),
  },

  // Custom Card styles
  card: {
    root: {
      class: "bg-surface-bg border border-border rounded theme-transition",
    },
    title: {
      class: "text-primary-text font-medium",
    },
    content: {
      class: "text-primary-text",
    },
    footer: {
      class: "border-t border-border pt-3",
    },
  },

  // Custom DataTable styles
  datatable: {
    // Add your custom DataTable styling here
  },

  // Add more component customizations as needed
};
