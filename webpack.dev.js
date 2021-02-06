const path = require("path");
const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  });