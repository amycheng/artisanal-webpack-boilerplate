var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./scripts/app.js'],
  devServer: {
    contentBase: 'build'
  },
  module: {
    loaders: [
      {
        //configuring Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'scripts'),
         query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        },
        loader: 'babel'

      }
    ]
  },
  //hot loading
  // to view changes live go to localhost:8080/webpack-dev-server/bundle
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};