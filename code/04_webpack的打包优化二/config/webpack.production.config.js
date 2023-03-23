const path = require('path')
const glob = require('glob')

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// ?CSS TreeShaking
const {
  PurgeCSSPlugin
} = require('purgecss-webpack-plugin')

// ?gzip压缩
const CompressionPlugin = require('compression-webpack-plugin')

// ?打包文件分析
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: './public/favicon.ico',
        to: path.join(__dirname, '../dist/favicon.ico')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css'
    }),
    new PurgeCSSPlugin({
      // paths属性是必须的，没有会报错
      paths: glob.sync(`${path.join(__dirname,'../src')}/**/*`, {
        nodir: true
      })
    }),
    // ?scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // ?gzip压缩
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: 'gzip'
    }),
    // ?webpack打包分析
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 1024 * 30,
      minSize: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[id].[contenthash:10].js'
        },
        utils: {
          test: /utils/,
          filename: 'js/[id].[contenthash:10].js'
        }
      }
    },
    chunkIds: 'deterministic',
    runtimeChunk: {
      name: 'runtime'
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            arrows: true,
            dead_code: true,
            arguments: true
          },
          mangle: true
        }
      }),
      new CssMinimizerPlugin()
    ],
    // todo 实现TreeShaking
    usedExports: true
  },
  externals: {
    axios: 'axios'
  }
}