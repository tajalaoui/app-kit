import path from "path";
import CrownPreset from "./presets/crown-preset";

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
    "nuxt-delay-hydration",
    "@nuxtjs/partytown",
  ],

  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: CrownPreset,
      },
      pt: {
        global: {
          root: () => ({
            class: "theme-transition",
          }),
        },
      },
    },
    importPT: { as: "Crown", from: "~/presets/crown" },
  },

  css: [
    "primeicons/primeicons.css",
    "./assets/css/base.css",
    "./assets/css/variables.css",
    "./assets/css/theme.css",
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

  build: {
    transpile: ["primevue"],
  },

  app: {
    head: {
      htmlAttrs: {
        class: "", // Will be updated dynamically by useTheme composable
      },
    },
  },

  runtimeConfig: {
    public: {
      theme: {
        default: "light",
      },
    },
  },
});
