const Path = require("path")

module.exports = {
  extends: Path.join(__dirname, "./packages/eslint-config/index.js"),
  rules: {
    "import/no-nodejs-modules": 0,
    "no-console": 0,
    "@next/next/no-html-link-for-pages": "off",
  },
}
