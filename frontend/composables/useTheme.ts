// composables/useTheme.ts
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
      if (href) {
        if (isDark.value && href.includes("crown-light")) {
          linkElement.setAttribute(
            "href",
            href.replace("crown-light", "crown-dark")
          );
        } else if (!isDark.value && href.includes("crown-dark")) {
          linkElement.setAttribute(
            "href",
            href.replace("crown-dark", "crown-light")
          );
        }
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

    // Listen for system theme changes
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
