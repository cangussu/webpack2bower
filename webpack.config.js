var webpack = require('webpack');

// This library has dependencies to other libraries which should not be
// included in the compiled version. See:
// https://github.com/webpack/webpack/tree/master/examples/externals
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    library: "webpack2bower",
    libraryTarget: "umd",
    filename: 'webpack2bower.js'
  },
  externals: {
    // Immutable is going to be imported externaly by a script tag
    "immutable": "Immutable"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map'
};
