const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    mode: 'development',
    entry: {
      index: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[name].js',
      publicPath: '/',
      chunkFilename: 'bundle.[name].js',
    },
    resolve: {
      alias: {
        react: path.resolve('./node_modules/react')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],
    devServer:{
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
  }
};
