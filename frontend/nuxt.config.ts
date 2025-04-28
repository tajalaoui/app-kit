import path from "path";
import CrownPreset from "./presets/crown-preset";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "nuxt-security",
    "@nuxt/icon",
    // "@nuxtjs/i18n",
    "nuxt-delay-hydration",
    "@nuxtjs/partytown",
  ],
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      // Use our custom preset
      theme: {
        preset: CrownPreset,
      },
      // Global passthrough function for theme transitions
      pt: {
        global: {
          root: ({ props, parent }) => ({
            class: "theme-transition",
          }),
        },
      },
    },
    // Set up custom passthrough (pt) styles
    importPT: { as: "Crown", from: "~/presets/crown" },
  },
  css: [
    "./assets/css/base.css",
    "./assets/css/variables.css", // Single source of CSS variables
    "primeicons/primeicons.css",
    "./assets/css/tailwind.css",
  ],
  image: {
    defaults: {
      loading: "lazy",
      quality: 80,
      format: "webp",
    },
  },
  site: {
    url: "https://example.com",
    name: "App Kit",
    description: "Your modern app dashboard",
    defaultLocale: "en",
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },

  // Build configuration
  build: {
    transpile: ["primevue"],
  },

  // App-level configuration
  app: {
    head: {
      htmlAttrs: {
        class: "", // Will be updated dynamically by useTheme composable
      },
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      theme: {
        default: "light", // Default theme
      },
    },
  },
});
