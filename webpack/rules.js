// ----------------------
// TYPESCRIPT RULES
// ----------------------
const r_ts = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

// ----------------------
// STYLE RULES
// ----------------------
/*********
 * style-loader
 * Loading style into DOM
 */
// let style_loader = require('mini-css-extract-plugin').loader;
// if (ENV.IS_DEVELOPMENT) {
let style_loader = { loader: 'style-loader' };
// }

/*********
 * css-loader
 */
const css_loader = {
  loader: 'css-loader',
  options: {
    // how many loaders before css-loader should be applied to
    // 0 => no loaders (default); 1 => postcss-loader; ...
    importLoaders: 1,
    modules: {
      localIdentName: '[path][name]___[local]___[hash:base64:5]',
      mode: 'local',
    },
  },
};

// for DEV
// if (ENV.IS_DEVELOPMENT) {
css_loader.options['sourceMap'] = true;
// }

/*********
 * postcss-loader
 */
const postcss_loader = { loader: 'postcss-loader' };

// for DEV
// if (ENV.IS_DEVELOPMENT) {
postcss_loader.options = { sourceMap: true };
// }

const r_css = {
  test: /\.s?[ac]ss$/i,
  exclude: /node_modules/,
  use: [style_loader, css_loader, postcss_loader],
};

module.exports = [r_ts, r_css];
