const { join } = require('path');
const paths = require('./webpack/paths');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const ENV = require('dotenv').config().parsed;

let isProduction = true;

// ----------------------
// RESOLVING MODULES
// ----------------------
const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.json', '.css'],
  modules: ['node_modules', paths.css],
};

// ----------------------
// ENTRY POINT
// ----------------------
const entry = join(paths.js, 'index.tsx');

// ----------------------
// OUTPUT
// ----------------------
const outputFile = 'js/[name]-[hash]-bundle.js';
const output = {
  path: paths.build,
  filename: outputFile,
};

// ----------------------
// CLI STATS
// Lets you precisely control
// what bundle information
// gets displayed.
// ----------------------
const stats = {
  assets: true,
  children: false,
  chunks: false,
  colors: true,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: true,
  warnings: true,
};

// ----------------------
// DEV SERVER
// ----------------------
const devServer = () => {
  if (isProduction) return {};

  return {
    contentBase: paths.src,
    host: ENV.WEB_HOST,
    port: ENV.WEB_PORT,
    hot: true, // Activate hot loading on DEV environment
    historyApiFallback: {
      // Webpack Dev Server to redirect all server requests to index.html.
      disableDotRule: true,
    },
    overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors
    stats,
  };
};

// ----------------------
// WEBPACK CONFIG
// ----------------------
const config = env => {
  const mode = !env || !env.mode ? 'production' : env.mode;
  isProduction = mode === 'production';

  return {
    mode: mode,
    entry,
    output,
    plugins,
    module: {
      rules,
    },
    resolve,
    devServer: devServer(),
    stats,
  };
};

module.exports = config;
