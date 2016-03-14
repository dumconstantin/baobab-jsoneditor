const webpack = require('webpack')

module.exports = {
  filename: __filename,
  debug: true,
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    path: 'dist/',
    pathinfo: true
  },
  entry: {
    'bundle': './src/entry.js',
    'bundle.min': './src/entry.js'
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
