const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: ['./']
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'src'),
        options: {
          presets: [
            ['env', { module: false }],
            'react'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  plugins: [
    new HtmlPlugin()
  ]
};
