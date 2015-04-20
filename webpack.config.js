'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/client/entry',
  output: {
    path: __dirname + '/public/scripts/',
    filename: 'app.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader?stage=1'], exclude: /node_modules/ }
    ]
  }
};
