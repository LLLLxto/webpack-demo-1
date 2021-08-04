const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, //把 base 所有属性抄过来
  mode: 'development',
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}
