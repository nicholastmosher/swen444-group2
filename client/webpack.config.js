let path = require('path');
let webpack = require('webpack');

let APP_DIR = path.resolve(__dirname, 'src');
let BUILD_DIR = path.resolve(__dirname, 'public');

let config = {
  entry: [
    APP_DIR + '/js/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
