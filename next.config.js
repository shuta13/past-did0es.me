const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const individual = require("./public/json/individual.json")
const joint = require("./public/json/joint.json")

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
    const works = individual.concat(joint)
    works.map(work => {
      const name = work.img.split(".")[0]
      paths[`/details/${name}`] = { page: "/details/[name]" }
    })
    return paths
  }
}))