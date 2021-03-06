const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './js/BrowserEntry.jsx'],
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
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'FACEBOOK_KEY': JSON.stringify(process.env.FACEBOOK_KEY),
        'TWITTER_KEY': JSON.stringify(process.env.TWITTER_KEY),
        'HOST_URL': JSON.stringify(process.env.HOST_URL),
        'ITEMS_API_URL': JSON.stringify(process.env.ITEMS_API_URL)
      }
    })
  ],
  postcss: function () {
    return [autoprefixer, precss]
  }
}
