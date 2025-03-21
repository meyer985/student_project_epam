import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  js.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "semi": ["error", "always"], 
      "quotes": ["error", "double"], 
      "eqeqeq": ["error", "always"], 
      "no-unused-vars": ["warn"], 
    },
    languageOptions: {
      globals: {
        ...globals.browser, 
        ...globals.node, 
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        expect: "readonly",
        $: "readonly",
        browser: "readonly"
      }
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"]
  }
]);