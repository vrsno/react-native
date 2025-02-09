// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:prettier/recommended"],

  pluging: ["prettier"], // Correcto

  rules: {
    "prettier/prettier": ["error", { endOfLine: "lf" }],
  },
};
