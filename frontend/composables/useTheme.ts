// composables/useTheme.ts
import { ref, onMounted, watch } from "vue";

export function useTheme() {
  const isDark = ref(false);

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      isDark.value = savedTheme === "dark";
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      isDark.value = prefersDark;
    }

    applyTheme();
  };

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.add("dark"); // For Tailwind dark mode
    } else {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", isDark.value ? "dark" : "light");

    // Update PrimeVue theme
    const linkId = "theme-css";
    let linkElement = document.getElementById(linkId);

    if (linkElement) {
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

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  // Watch for changes and apply theme
  watch(isDark, () => {
    applyTheme();
  });

  onMounted(() => {
    initTheme();

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
