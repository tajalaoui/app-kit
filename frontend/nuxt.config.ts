import path from "path";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primeuix/themes";
// import CrownPreset from "./presets/crown-preset";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#eaffea",
      100: "#c6ffc6",
      200: "#97ff97",
      300: "#6cff6c",
      400: "#45fa45",
      500: "#29f709", // base
      600: "#20c906",
      700: "#189b04",
      800: "#116d02",
      900: "#0a4001",
      950: "#042100",
    },
  },
});

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
      // darkModeSelector: "system",
      ripple: true,
      theme: {
        preset: MyPreset,
      },
      // Use a global passthrough function that adds theme-transition to ALL components
      pt: {
        // This is the global passthrough that affects all components
        global: {
          // This adds theme-transition to the root of every component
          root: ({ props, parent }) => ({
            class: "theme-transition",
          }),
        },
      },
    },
    importPT: { as: "Aura", from: "~/presets/aura" },
  },
  css: [
    "./assets/css/base.css",
    "./assets/css/theme.css",
    "primeicons/primeicons.css",
    "./assets/css/tailwind.css",
  ],
  image: {
    defaults: {
      loading: "lazy",
      quality: 80, // Adjust image quality
      format: "webp", // Use WebP for smaller image sizes
    },
  },
  site: {
    url: "https://example.com",
    name: "Nuxt.js",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
  },
  // i18n: {
  //   lazy: true,
  //   langDir: "locales",
  //   locales: [
  //     { code: "en", language: "en-US", name: "English", file: "en-US.json" },
  //   ],
  //   defaultLocale: "en-US",
  //   strategy: "no_prefix",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     alwaysRedirect: true,
  //     fallbackLocale: "en",
  //   },
  // },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        // TODO Add .env var
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
        // We'll update this dynamically with JavaScript
        class: "",
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
