// plugins/primevue.ts
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    // This connects PrimeVue's theme with our color-mode system
    pt: {
      card: {
        root: ({ props }) => ({
          class: "theme-transition",
        }),
        body: {
          class: "theme-transition",
        },
        title: {
          class: "theme-transition",
        },
        content: {
          class: "theme-transition",
        },
      },
      button: {
        root: {
          class: "theme-transition",
        },
      },
      inputtext: {
        root: {
          class: "theme-transition",
        },
      },
      datatable: {
        root: {
          class: "theme-transition",
        },
        header: {
          class: "theme-transition",
        },
        thead: {
          class: "theme-transition",
        },
        tbody: {
          class: "theme-transition",
        },
      },
    },
  });
});
