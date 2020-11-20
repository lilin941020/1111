const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

module.exports = {
  lintOnSave: false,
  outputDir: 'docs',
  publicPath: './',
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
}
