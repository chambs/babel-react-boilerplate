const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: [
    './src/js/main.js',
  ],
  output: {
    path: __dirname + '/dist/js',
    publicPath: 'js',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'file-loader?name=../[name].[ext]'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin ({
      compress: {},
      output: {}
    }),
    new ExtractTextPlugin("../css/[name].css")
  ]
};