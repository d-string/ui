const path = require("node:path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/storybook.js"],
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
};
