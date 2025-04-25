import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["next"],
    rules: {
      "react/no-unescaped-entities": "off", // Disable warnings for unescaped entities
      "@next/next/no-page-custom-font": "off", // Disable warnings for custom fonts
      "no-unused-vars": "warn", // Warn for unused variables
      "no-console": "warn", // Warn for console.log statements
      "react/prop-types": "off", // Disable prop-types rule for React
      "@typescript-eslint/no-explicit-any": "error", // Warn for usage of 'any' type
      "react/jsx-key": "warn", // Warn if keys are missing in lists
      "react/jsx-no-duplicate-props": "error", // Error for duplicate props in JSX
      "react/jsx-no-undef": "error", // Error for un
    },
  }),
];

export default eslintConfig;
