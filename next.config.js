const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass(withImages({
  devIndicators: {
    autoPrerender: false,
  },
  webpack(config) {
    // add opt
    return config
  }
}))