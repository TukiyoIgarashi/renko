var nodeExternals = require('webpack-node-externals');
var slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
}

