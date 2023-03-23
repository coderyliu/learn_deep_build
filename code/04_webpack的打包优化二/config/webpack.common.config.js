const path = require('path')

// *引入merge做配置文件分离,以及production/development的配置文件
const {
  merge
} = require('webpack-merge')
const productionConfig = require('./webpack.production.config')
const developmentConfig = require('./webpack.development.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  ProvidePlugin
} = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader/dist/index')

// ?对打包的时间分析
const SpeedMeasurePlugin=require('speed-measure-webpack-plugin')
// const smp=new SpeedMeasurePlugin()
// smp.wrap(整个导出的config)

const commonConfig = (isProduction) => {
  return {
    // ?单入口文件打包
    entry: './src/main.js',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'js/[name].[contenthash:10].js',
      chunkFilename: 'js/[name].[contenthash:10].js',
    },
    module: {
      rules: [
        // ?这里需要注意区分开发环境和生产环境,开发环境一般用style-loader
        // ?生产环境一般把CSS分离成外部的css文件
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader', 'less-loader'
          ]
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg)$/,
          type: 'asset',
          generator: {
            filename: 'img/[hash:10].[ext]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 20 * 1024
            }
          }
        },
        {
          test: /\.(woff2?|eot|ttf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'font/[name][hash:8].[ext]'
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(m?jsx?|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../public/index.html'),
        filename: 'index.html',
        title: 'webpack configure',
        //* 压缩html
        minify: isProduction ? {
          // 移除空格
          collapseWhitespace: true,
          // 移除注释
          removeComments: true,
          // keepClosingSlash: true,
          // removeRedundantAttributes: true,
          // removeScriptTypeAttributes: true,
          // removeStyleLinkTypeAttributes: true,
          // useShortDoctype: true
        } : false
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      // ? shimming
      new ProvidePlugin({
        // key表示在项目中使用的名称
        // value表示要导入的第三方库名称
        // axios:'axios',
        _: 'lodash'
      })
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.json', '.vue', '.jsx'],
      alias: {
        '@': path.join(__dirname, '../src')
      }
    },
    performance: {
      hints: false
    }
  }
}

module.exports = (env) => {
  // ?webpack导出的是一个函数的时候，接受两个参数，第一个是env,里面有一些环境参数信息
  // ?我们在package.json执行脚本的时候也可以传递参数:--env production 里面就会有一个production:true
  const isProduction = env.production
  const mergeConfig = isProduction ? productionConfig : developmentConfig

  return merge(commonConfig(isProduction), mergeConfig)
}