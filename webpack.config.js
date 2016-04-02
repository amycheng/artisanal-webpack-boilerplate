var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/app.js'],
   output: {
      path: __dirname + "/build/js",
      filename: "bundle.js"
    },
  devServer: {
    contentBase: 'build'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        //configuring Babel
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src/scripts'),
         query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        },
        loader: 'babel'

      },
      {
        //configuring sass
        test: /\.scss$/,
        include: path.join(__dirname, 'src/scss'),
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  //hot loading
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};