var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: 'source-map',
  plugins: [
    /*new HappyPack({
      id: 'vue',
      threadPool:happyThreadPool,
      cache: true,
      verbose: true,
      // loaders is the only required parameter: 
      loaders: ['vue-loader']

      // customize as needed, see Configuration below 
    }),

    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      cache: true,
      verbose: true,
      // loaders is the only required parameter: 
      loaders: ['babel-loader']

      // customize as needed, see Configuration below 
    }),*/
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
