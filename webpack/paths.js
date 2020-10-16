const { resolve } = require('path');

module.exports = {
  build: resolve(__dirname, '../build'),
  src: resolve(__dirname, '../src'),
  js: resolve(__dirname, '../src/js'),
  css: resolve(__dirname, '../src/css'),
};
