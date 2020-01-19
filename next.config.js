const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withSass(withImages(withFonts({
  devIndicators: {
    autoPrerender: false,
  },
  webpack(config) {
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext]",
          },
        },
        "babel-loader",
        "webpack-glsl-loader",
      ],
    });
    return config
  }
})))