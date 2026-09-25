import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{ts,js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
        ],
    },
    {
        rules: {
            // "no-console": "warn",
            // "no-unused-vars": "warn",
            // "no-undef": "warn",
            "dot-notation": "error",
        },
    },
    tseslint.configs.recommended,
]);
