const path = require("path");

module.exports = {
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
};
