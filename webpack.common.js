const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: '/private/var/www/webpack-demo',
  entry: {
    app: './src/app.js',
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      template: './src/index.template.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contentHash].css',
    }),
  ],
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
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.svg/i,
        type: 'asset/inline',
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|mp4|woff|woff2|eot|ttf|otf|css)/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/static/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.(css)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/css/[name].[hash][ext][query]',
        },
      },
    ],
  },
};
