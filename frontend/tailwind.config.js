module.exports = {
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        // "--primary-color": "#29f709",
        "base-bg": "#F5F5F5",
        "surface-bg": "#EEEEEE",
        "primary-text": "#1C1C1C",
        "secondary-text": "#757575",
        action: "#29F709",
        "action-hover": "#24CC00",
        disabled: "#B3B3B3",
        info: "#CDDC39",
        link: "#38B000",
        border: "#DDDDDD",
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",

        // Dark mode colors
        dark: {
          // "--primary-color": "#29f709",
          "base-bg": "#121212",
          "surface-bg": "#1C1C1C",
          "primary-text": "#F5F5F5",
          "secondary-text": "#CCCCCC",
          action: "#29F709",
          "action-hover": "#24CC00",
          disabled: "#5A5A5A",
          info: "#CDDC39",
          link: "#7AEB42",
          border: "#2E2E2E",
          success: "#4CAF50",
          warning: "#FF9800",
          error: "#F44336",
        },
      },
      boxShadow: {
        light: "0 2px 8px rgba(0, 0, 0, 0.1)",
        dark: "0 2px 8px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
