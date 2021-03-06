const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },

    { test: /\.(css)$/, use: ['style-loader', 'css-loader']}
    ],
  },

plugins: [ new HtmlWebpackPlugin({
template: './index.html'})]
}


module.exports = config;