const webpack = require('webpack')
const packageJson = require('./package.json')

module.exports = {
  filename: __filename,
  debug: true,
  devtool: '#source-map',
  output: {
    filename: '[name]-web.js',
    path: 'build/',
    pathinfo: true
  },
  entry: {
    'bundle': `./src/${packageJson.name}.js`,
    'bundle.min': `./src/${packageJson.name}.js`
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
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
