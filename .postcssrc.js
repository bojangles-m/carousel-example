module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 1%'],
      stage: 0,
    },
    'postcss-nested': true,
  },
};
