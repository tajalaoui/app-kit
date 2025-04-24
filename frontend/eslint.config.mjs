import withNuxt from "./.nuxt/eslint.config.mjs";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  // options here
})
  .prepend
  // ...Prepend some flat configs in front
  ()
  // Override some rules in a specific config, based on their name
  .override("nuxt/typescript", {
    rules: {
      // ...Override rules, for example:
      "@typescript-eslint/ban-types": "off",
    },
  });
// ...you can chain more operations as needed
