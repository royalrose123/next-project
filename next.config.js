const withImages = require("next-images");

const { i18n } = require("./next-i18next.config");

module.exports = withImages({
  distDir: "build",
  i18n,
  webpack(config, options) {
    return config;
  },
});
