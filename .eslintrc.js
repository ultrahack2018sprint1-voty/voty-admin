module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    expect: true,
    module: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: ["prettier", "vue", "html"],
  settings: {
    "html/html-extensions": [".html"],
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".vue"]
      }
    }
  },

  rules: {
    // Eslint rules
    "no-trailing-spaces": "error",
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "never"],
    "no-console": "off",

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Prettier rules. See more in `.prettierrc`
    "prettier/prettier": "error",

    // Vue rules
    "vue/mustache-interpolation-spacing": ["error", "never"],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never"
      }
    ],
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/html-indent": ["error", 2],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ],

    // import rules
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ]
  }
}
