const path = require("path");
const withImages = require("next-images");
const response = require("./pages/api/response.json");

module.exports = withImages({
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
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = {
      "/": { page: "/" },
      "/works": { page: "/works" },
      "/contact": { page: "/contact" },
      "/api/v1": { page: "/api/v1" }
    };
    response.map(res => {
      paths[`/works/${res.pathname}`] = { page: "/works/[name]" };
    });
    return paths;
  }
});
