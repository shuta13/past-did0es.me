const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

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
  }
}))