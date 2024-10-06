const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
};
