// ?rollup的打包配置文件
const commonjs = require('@rollup/plugin-commonjs')
const nodeResolve = require('@rollup/plugin-node-resolve')
const replace = require('@rollup/plugin-replace')
const {
  babel
} = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')
const postcss = require('rollup-plugin-postcss')
const image = require('@rollup/plugin-image')
const clear = require('rollup-plugin-clear')
const htmlTemplate = require('rollup-plugin-generate-html-template');
const json = require('rollup-plugin-json')
const css = require('rollup-plugin-css-only')
const serve=require('rollup-plugin-serve')
const livereload=require('rollup-plugin-livereload')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  input: './src/index.jsx',
  output: {
    format: 'iife',
    name: 'testRollup',
    file: 'dist/bundle.js',
  },
  plugins: [
    // ?默认rollup只支持ESModule 通过插件支持CommonJS
    commonjs({
      include: ["node_modules/**"],
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
      exclude: /node_modules/
    }),
    // ?ES6+==>ES5&&polyfill&&react jsx==>js
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      // plugins: ["@babel/plugin-transform-runtime"],
    }),
    // ?生产环境下压缩js代码
    isProduction && terser(),
    // ?将css文件兼容
    isProduction && postcss(),
    // ?识别image,可以使用Import方式导入图片
    image(),
    // ?下一次构建时清空dist
    clear({
      targets: ['dist']
    }),
    // ?注入环境变量
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production') // 否则会报：process is not defined的错
    }),
    // ?复制html文件
    htmlTemplate({
      template: 'public/index.html',
      target: 'dist/index.html',
    }),
    json(),
    // ?单独提取css文件
    css({
      output: 'bundle.css'
    }),
    // ?搭建本地服务器
    !isProduction && serve({
      open: true,
      port: 8080,
      contentBase: ['dist']
    }),
    !isProduction && livereload(),
  ],
  external: [{
    includeDependencies: true,
  }]
}