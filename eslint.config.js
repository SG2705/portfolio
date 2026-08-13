import js from "@eslint/js";
import pluginFormatjs from "eslint-plugin-formatjs";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginJsdoc from "eslint-plugin-jsdoc";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignore patterns
  {
    ignores: ["dist", "node_modules", "eslint.config.js"],
  },

  js.configs.recommended,

  // TypeScript recommended + type-checked + strict
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,

  // Main rules for all source files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: true,
        cacheLifetime: { glob: Infinity },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: pluginImport,
      formatjs: pluginFormatjs,
      jsdoc: pluginJsdoc,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // =====================
      // React-Specific Rules
      // =====================
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      "react/prop-types": "off",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".tsx", ".jsx"] },
      ],
      "react/jsx-curly-spacing": [
        "error",
        { when: "never", allowMultiline: true },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never", propElementValues: "always" },
      ],
      "react/jsx-curly-newline": [
        "error",
        { multiline: "consistent", singleline: "consistent" },
      ],
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens",
          assignment: "parens",
          return: "parens",
          arrow: "parens",
          condition: "parens",
          logical: "parens",
          prop: "ignore",
        },
      ],

      // =====================
      // Accessibility Rules
      // =====================
      ...pluginJsxA11y.configs.recommended.rules,

      // =====================
      // JSDoc Rules
      // =====================
      "jsdoc/require-jsdoc": ["warn", { publicOnly: true }],
      "jsdoc/require-description": "warn",

      // =====================
      // TypeScript-Specific Rules
      // =====================
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // =====================
      // Import Rules
      // =====================
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/first": "error",
      "import/no-cycle": "off",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/prefer-default-export": "warn",

      // =====================
      // Import Sorting Rules
      // =====================
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^(@|components)(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/order": "off",

      // =====================
      // Code Style Rules
      // =====================
      curly: ["error", "all"],
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": ["error", { before: false, after: true }],
      "space-in-parens": ["error", "never"],
      "padded-blocks": ["error", "never"],
      "no-restricted-syntax": "off",
      "no-continue": "off",
      "no-nested-ternary": "off",

      // =====================
      // Whitespace & Formatting Rules
      // =====================
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "newline-after-var": ["error", "always"],
      "newline-before-return": "error",
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "block" },
        { blankLine: "always", prev: "block", next: "*" },
        { blankLine: "always", prev: "*", next: "block-like" },
        { blankLine: "always", prev: "block-like", next: "*" },
      ],

      // =====================
      // Best Practices & Miscellaneous
      // =====================
      "no-param-reassign": "off",
      "default-case": "off",
      "no-unused-vars": "off", // Using TypeScript version
      "no-underscore-dangle": "off",
      "no-warning-comments": "error",
      "prefer-arrow-callback": "off",

      // =====================
      // FormatJS / i18n Rules
      // =====================
      "formatjs/enforce-id": [
        "error",
        { idInterpolationPattern: "[sha512:contenthash:base64:6]" },
      ],
      "formatjs/enforce-default-message": "error",
      "formatjs/no-literal-string-in-jsx": "error",
    },
  },

  // Test file overrides
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    rules: {
      "formatjs/no-literal-string-in-jsx": "off",
    },
  },

  // index.ts / exports.ts overrides
  {
    files: ["**/index.ts", "**/exports.ts"],
    rules: {
      "simple-import-sort/imports": "off",
      "simple-import-sort/exports": "off",
      "import/first": "off",
      "import/order": "off",
      "import/newline-after-import": "off",
      "newline-after-var": "off",
    },
  },

  // CSS module type definitions
  {
    files: ["*.module.css.d.ts"],
    rules: {
      "newline-after-var": "off",
    },
  },

  // Prettier must be last to override any conflicting formatting rules
  eslintPluginPrettier,
);
