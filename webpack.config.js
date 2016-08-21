const webpack = require('webpack');

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
    })
  ]

};