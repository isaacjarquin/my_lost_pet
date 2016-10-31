const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
<<<<<<< HEAD
const ExtractTextPlugin = require('extract-text-webpack-plugin')
=======
const ExtractTextPlugin = require('extract-text-webpack-plugin');
>>>>>>> 379f0a2f28f535121580ce25f48d1bbcfb307bd8

module.exports = {
  context: __dirname,
  entry: './js/BrowserEntry.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?-autoprefixer!postcss-loader!sass-loader')
      },
      {
        test: /\.png$/,
        loader: ExtractTextPlugin.extract('url-loader?limit=100000')
      },
      {
        test: /\.jpg$/,
        loader: ExtractTextPlugin.extract('file-loader')
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: ExtractTextPlugin.extract('url?limit=10000&mimetype=application/font-woff')
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: ExtractTextPlugin.extract('url?limit=10000&mimetype=application/octet-stream')
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: ExtractTextPlugin.extract('file')
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: ExtractTextPlugin.extract('url?limit=10000&mimetype=image/svg+xml')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: function () {
    return [autoprefixer, precss]
  }
}
