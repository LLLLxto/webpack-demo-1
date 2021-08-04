const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/assets/test.html'
    })
  ],
  module:{
      rules:[
        {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`
                  implementation: require("dart-sass")
                }
              }
            ]
          }
      ]
  }
}