const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: isDev ? 'inline-cheap-source-map' : 'source-map',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
    publicPath: isDev ? '/' : '/junox/dist/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: [/(node_modules)/, /(src)/],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
        ].filter(Boolean),
      },
      {
        test: /\.worklet\.js$/,
        use: { loader: 'worklet-loader' },
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Juno 60 Synth Emulator',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    !isDev
      ? new MiniCssExtractPlugin({
          filename: 'app.[hash].css',
        })
      : null,
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
}
