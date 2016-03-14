var webpack = require('webpack')
var packageJson = require('./package.json')
var packageHeader = require('package-header').build(require('./package.json'))

module.exports = {
  filename: __filename,
  debug: true,
  devtool: '#source-map',
  output: {
    filename: '[name]-web.js',
    path: require("path").resolve("./build"),
    pathinfo: true
  },
  entry: {
    'bundle': `./src/main.js`,
    'bundle.min': `./src/main.js`
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\-web\.js$/,
      minimize: true
    }),
    new webpack.BannerPlugin(packageHeader, { raw: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
