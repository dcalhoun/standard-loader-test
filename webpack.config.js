var path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, '/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'standard-loader', exclude: /node_modules/ }
    ]
  }
}
