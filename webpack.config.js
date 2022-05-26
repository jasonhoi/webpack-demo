const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
require('dotenv').config();

module.exports = {
  mode: process.env.APP_MODE || 'production',
  context: '/private/var/www/webpack-demo',
  entry: './src/index.js',
  output: {
    filename: 'assets/js/main.bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 5 App',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    emitOnErrors: false,
    minimize: true,
    // there is a JS minizer blocking issue when using CssMinimizerPlugin here
    // minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
