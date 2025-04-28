import Aura from "@primevue/themes/aura";
import { definePreset } from "@primeuix/themes";

export const MyPreset = definePreset(Aura, {
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
