const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Path = require('path');
const Webpack = require('webpack');

const jsFiles = ['main'];
const cssFiles = ['style'];
const htmlFiles = ['index'];

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    jsFiles.map(name => `./src/javascripts/${name}.js`),
    cssFiles.map(name => `./src/stylesheets/${name}.css`),
  ].flat(),
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    cssFiles.map(name => new MiniCssExtractPlugin({
      filename: `${name}.css`,
    })),
    htmlFiles.map(name => new HtmlWebpackPlugin({
      template: `./src/views/${name}.html`,
      filename: `${name}.html`,
    })),
  ].flat(),
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    openPage: '',
    port: 8080,
    watchContentBase: true,
  },
};
