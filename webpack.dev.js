const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'assets/js/app.js',
  },
  optimization: {
    emitOnErrors: true,
    minimize: false,
  },
});
