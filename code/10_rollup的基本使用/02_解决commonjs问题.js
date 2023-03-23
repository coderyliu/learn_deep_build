const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: "coderyliu"
  },
  plugins: [
    commonjs(),
    resolve()
  ]
}