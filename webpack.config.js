const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
    publicPath: '',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: false
      })
    ]
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpeg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      template: 'template.html',
      title: 'Development',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};