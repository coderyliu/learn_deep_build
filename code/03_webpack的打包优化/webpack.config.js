const path = require('path')

// ?帮助我们在开发环境快速打包清除build以前打包的plugin
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

// ?对文件复制到打包文件中
const CopyWebpackPlugin = require('copy-webpack-plugin')

// ? 打包html文件使用HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// ?把css文件单独提取出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// ?压缩css文件
// *这个插件不再维护了，用下面的插件替代
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// ?引入terser-webpack-plugin
const TerserPlugin = require('terser-webpack-plugin')

// *引入ProvidePlugin做shimming
const {
  ProvidePlugin
} = require('webpack')

// ?处理vue sfc
const {
  VueLoaderPlugin
} = require('vue-loader/dist/index')

module.exports = {
  // ?单入口文件打包
  entry: './src/index.js',
  // entry:'./terser/index.js',
  // ?多入口文件打包
  // entry: {
  //   index: {
  //     import: './src/index.js',
  //     // filename选项
  //     // filename:'js/[name].[contenthash:8].js',
  //     dependOn: 'shared'
  //   },
  //   main: {
  //     import: './src/main.js',
  //     dependOn: 'shared'
  //   },
  //   shared: ['axios']
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    // ?通过node_modules或者import()语法,或者代码分割引入的单独打包形成一个文件
    chunkFilename: 'js/[name].[contenthash:10].js',
  },
  module: {
    rules: [
      // * style-loader css==>style内部样式表
      // * css-loader对css文件的处理
      // * less-loader对less文件的处理 less==>css
      // ?如果要转化为外部样式表，需要CSSPlugin处理
      {
        test: /\.css$/,
        use: [
          // *热更新要用style-loader
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          // postcss处理样式兼容
          {
            loader: 'postcss-loader',
            // options: {
            //   ident: 'postcss',
            //   plugins: () => [
            //     // postcss 的插件 
            //     require('postcss-preset-env')()
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
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
      // ?当我们用了copy-webpack-plugin来复制icon图标时，就不要用这个Html-loader了会重复
      // {
      //   test: /\.html$/,
      //   use: 'html-loader'
      // },
      {
        test: /\.(m?jsx?|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    // ? 打包html文件使用HtmlWebpackPlugin
    // *注意，html文件中有icon，所以需要其它的plugin帮助打包Icon
    new HtmlWebpackPlugin({
      title: 'webpack review',
      filename: 'index.html',
      template: path.join(__dirname, './public/index.html'),
      //* 压缩html
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: './public/favicon.ico',
        to: path.join(__dirname, './dist/favicon.ico')
      }]
    }),
    // ?提取css文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css'
    }),
    // ?压缩css文件 用下面的取代
    // new OptimizeCssAssetsWebpackPlugin(),
    new VueLoaderPlugin(),
    // ? shimming
    new ProvidePlugin({
      // key表示在项目中使用的名称
      // value表示要导入的第三方库名称
      // axios:'axios',
      _: 'lodash'
    })
  ],
  mode: 'development',
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.css', '.vue'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  // devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    port: 8088,
    open: true,
    // host: '0.0.0.0',
    hot: true,
    proxy: {
      '/playlist': {
        target: 'http://www.coderyliu.online:3000',
        changeOrigin: true,
        pathWrite: ''
      }
    },
    compress: true,
    historyApiFallback: true
  },
  // ?代码自定义分割 第三方库单独打包形成一个chunk
  optimization: {
    splitChunks: {
      // chunks默认是async，表示只有对通过import()函数异步加载的才会拆包
      // all表示对所有第三方组件库，或者异步加载等都会拆包
      chunks: 'all',
      // maxSize表示超过这个Max就会拆包，但是有时候一个函数的体积可能就有30kb，那么这个函数是不会被拆解的
      maxSize: 1024 * 30,
      // minSize:默认是20000(20kb),表示拆包的最小体积是20kb
      minSize: 20,

      // ?重要的是这个，自定义拆包，可以对匹配的文件夹进行拆包
      cacheGroups: {
        vendors: {
          // 匹配正则
          // mac /
          // window \
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[id].[contenthash:10].js'
        },
        utils: {
          test: /utils/,
          filename: 'js/[id].[contenthash:10].js'
        }
      }
    },
    // todo 这里有一个chunksId表示，打包时的Id生成的一些数字的形式
    chunkIds: 'natural',
    // *还有一点，我们的代码有运行时文件，这样设置可以让运行时文件单独打包
    runtimeChunk: {
      name: 'runtime'
    },
    // *设置terserPlugin
    minimize: true,
    minimizer: [
      // js压缩
      new TerserPlugin({
        // 对于一些运行时文件的注释不要提取为一个单独文件
        extractComments: false,
        // 处理js压缩使用电脑cpu核数-1线程来处理
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
      // *css的压缩也是在这里，通过新的插件css-minimizer-webpack-plugin
      new CssMinimizerPlugin()
    ]
  },
  performance: {
    hints: false
  },
  // ?对指定的内容不进行打包
  externals: {
    // *key 代表不对其进行打包的库名称
    // *value 代表从cdn服务器引入的地址，之后在代码中使用的名称
    axios: 'axios',
    // react:'React'
  }
}