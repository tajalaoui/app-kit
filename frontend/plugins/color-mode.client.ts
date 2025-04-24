// plugins/color-mode.client.ts
export default defineNuxtPlugin({
  name: "color-mode",
  enforce: "pre", // Run before other plugins
  async setup() {
    // This runs only on client side
    const initColorMode = () => {
      // Check for saved preference
      const savedMode = localStorage.getItem("color-mode");

      if (savedMode === "dark") {
        document.documentElement.classList.add("dark");
      } else if (savedMode === "light") {
        document.documentElement.classList.remove("dark");
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // No saved preference, check system
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-mode", "dark");
      }
    };

    // Initialize immediately to avoid flashing
    initColorMode();
  },
});
