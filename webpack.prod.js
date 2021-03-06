const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'assets/js/[name].[contenthash].js',
  },
  plugins: [new CssMinimizerPlugin()],
  optimization: {
    emitOnErrors: true,
    minimize: true,
  },
});
