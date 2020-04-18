module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx", "**/*.test.js", "**/*.test.jsx"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
