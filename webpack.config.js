const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: isDev ? 'inline-cheap-source-map' : 'source-map',
  entry: {
    juno60node: './src/synth.node.js',
    juno60processor: './src/synth.worklet.js',
  },
  output: {
    library: 'Junox',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: isDev ? '/' : '/junox/dist/',
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.worklet\.jsxxx$/,
        use: { loader: 'worklet-loader', options: { inline: true } },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: false,
  },
}
