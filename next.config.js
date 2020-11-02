const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const works = require("./public/json/works.json")

module.exports = withSass(withImages({
  env: {
    ENV: process.env.ENV
  },
  devIndicators: {
    autoPrerender: false,
  },
  cssModules: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: [
        "raw-loader"
      ]
    })
    return config
  },
  exportPathMap: async function(
    defaultPathMap,
    {
      dev,
      dir,
      outDir,
      distDir,
      buildId
    }
  ) {
    const paths = {
      "/": { page: "/" },
      "/works": { page: "/works" },
      "/contact": { page: "/contact" },
    }
    works.map(work => {
      const name = work.img.split(".")[0]
      paths[`works/${name}`] = { page: "works/[name]" }
    })
    return paths
  }
}))
