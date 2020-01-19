const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withGLTF = require('gltf-webpack-loader')

module.exports = withSass(withImages({
  devIndicators: {
    autoPrerender: false,
  },
  webpack(config) {
    // add opt
    config.module.rules.push({
      test: /\.(gltf)$/,
      loader: "gltf-webpack-loader"
    })
    config.module.rules.push({
      test: /\.(bin)$/,
      loader: 'file-loader'
    })
    return config
  }
}))