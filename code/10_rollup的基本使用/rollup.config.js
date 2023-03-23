const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const babel = require('@rollup/plugin-babel')
const terser = require('@rollup/plugin-terser')
const vue = require('rollup-plugin-vue')
const replace = require('@rollup/plugin-replace')
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const css = require('rollup-plugin-css-only')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: "coderyliu"
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      babelHelpers: 'bundled'
    }),
    terser(),
    vue({
      css: false
    }),
    replace({
      // vue的使用需要这行代码
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // ?搭建本地服务器
    !isProduction && serve({
      open: true,
      port: 8080,
      contentBase: ['dist']
    }),
    !isProduction && livereload(),
    // ?将css单独提取位一个文件
    css({
      output: 'bundle.css'
    })
  ]
}