const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass(withImages({
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    // config.module.rules.push({ something loader opts })
    return config
  }
}))