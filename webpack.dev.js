const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  plugins: [
    new ExtractTextPlugin('[name].css'),
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
})
