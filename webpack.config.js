const path = require('path')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './js/BrowserEntry.jsx'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader?-autoprefixer')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('postcss-loader')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('sass-loader')
      },
      {
        test: /\.png$/,
        use: ExtractTextPlugin.extract('url-loader?limit=100000')
      },
      {
        test: /\.jpg$/,
        use: ExtractTextPlugin.extract('file-loader')
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: ExtractTextPlugin.extract('url?limit=10000&mimetype=application/font-woff')
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: ExtractTextPlugin.extract('url?limit=10000&mimetype=application/octet-stream')
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: ExtractTextPlugin.extract('file')
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ExtractTextPlugin.extract('url?limit=10000&mimetype=image/svg+xml')
      },
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
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
  ]
}
