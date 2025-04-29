// composables/useTheme.ts
import { ref, onMounted, watch } from "vue";

export function useTheme() {
  const isDark = ref(false);

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    isDark.value =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    applyTheme();
  };

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark-theme", isDark.value);
    document.documentElement.classList.toggle("dark", isDark.value);
    localStorage.setItem("theme", isDark.value ? "dark" : "light");

    // Update PrimeVue theme
    const linkId = "theme-css";
    const linkElement = document.getElementById(linkId);

    if (linkElement?.getAttribute("href")) {
      const href = linkElement.getAttribute("href") || "";
      const newHref = isDark.value
        ? href.replace("crown-light", "crown-dark")
        : href.replace("crown-dark", "crown-light");

      if (newHref !== href) {
        linkElement.setAttribute("href", newHref);
      }
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  watch(isDark, applyTheme);

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
