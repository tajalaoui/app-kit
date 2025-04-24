// composables/useColorMode.ts
import { ref, watch, onMounted } from "vue";

export function useColorMode() {
  const colorMode = ref("light");

  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
    updateColorMode();
  };

  const updateColorMode = () => {
    // Update DOM
    if (colorMode.value === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-mode", "light");
    }
  };

  onMounted(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem("color-mode");
    if (savedMode) {
      colorMode.value = savedMode;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      colorMode.value = "dark";
    }

    updateColorMode();
  });

  return {
    colorMode,
    toggleColorMode,
  };
}
