var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var packageJson = require('./package.json')
var WebpackConfig = require('webpack-config')

var port = 1234
var host = 'localhost'

var config = new WebpackConfig()
  .extend('./webpack.config.js')
  .merge({
    output: {
      publicPath: '/'
    },
    entry: {
      app: ['./sample.js'],
      server: [
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/dev-server'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: packageJson.name,
        hash: true
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  })

delete config.entry.bundle
delete config.entry['bundle.min']

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  inline: true,
  progress: true,
  stats: 'errors-only'
})

server.listen(port, host, function() {});
