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
      "/": { page: "/" }
    }
    works.map(work => {
      const name = work.img.split(".")[0]
      paths[`works/details/${name}`] = { page: "works/details/[name]" }
    })
    return paths
  }
}))
