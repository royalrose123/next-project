const withImages = require("next-images");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withImages({
  distDir: "build",
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "royal-cool";
  },
  webpack(config, options) {
    // config.output.filename = "[name].js";
    // config.output.chunkFilename = "[name].js";

    // config.plugins.push(
    //   new MiniCssExtractPlugin({
    //     // without these Next.js will look for the generated stylesheets from the wrong place
    //     filename: "static/css/[name].css",
    //     chunkFilename: "static/css/[name].css",
    //   })
    // );

    return config;
  },
});
