const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const plugins = [
  new HtmlWebpackPlugin({
    template: join(paths.src, 'index.html'),
  }),
];

module.exports = plugins;
