// composables/useTheme.js
import { ref, onMounted, watch } from "vue";

export function useTheme() {
  const isDark = ref(false);

  // Set theme based on preference or system setting
  const initTheme = () => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      isDark.value = prefersDark;
    }

    applyTheme();
  };

  // Apply theme to DOM
  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.add("dark"); // For Tailwind dark mode
    } else {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.remove("dark"); // For Tailwind dark mode
    }

    // Save to localStorage
    localStorage.setItem("theme", isDark.value ? "dark" : "light");

    // Update PrimeVue theme
    const linkId = "theme-css";
    let linkElement = document.getElementById(linkId);

    if (linkElement) {
      // Replace light theme with dark theme and vice versa
      const href = linkElement.getAttribute("href");
      if (isDark.value && href.includes("lara-light-green")) {
        linkElement.setAttribute(
          "href",
          href.replace("lara-light-green", "lara-dark-green")
        );
      } else if (!isDark.value && href.includes("lara-dark-green")) {
        linkElement.setAttribute(
          "href",
          href.replace("lara-dark-green", "lara-light-green")
        );
      }
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  // Watch for changes and apply theme
  watch(isDark, () => {
    applyTheme();
  });

  // Initialize on mount
  onMounted(() => {
    initTheme();

    // Optional: Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (localStorage.getItem("theme") === null) {
          isDark.value = e.matches;
        }
      });
  });

  return {
    isDark,
    toggleTheme,
  };
}
