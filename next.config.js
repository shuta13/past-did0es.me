const path = require("path");
const withImages = require("next-images");
const response = require("./pages/api/response.json");

module.exports = withImages({
  target: "serverless",
  env: {
    ENV: process.env.ENV
  },
  devIndicators: {
    autoPrerender: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/style")]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: ["raw-loader"]
    });
    return config;
  }
});
