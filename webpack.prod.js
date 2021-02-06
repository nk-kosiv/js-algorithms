const path = require("path");
const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});