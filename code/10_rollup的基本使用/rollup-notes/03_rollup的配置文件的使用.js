module.exports = {
  // ?打包的入口文件
  input: './src/index.js',
  // todo 第一种方式:直接导出umd，适应所有模块化引入方式
  // output: {
  //   file: './dist/bundle.js',
  //   format: 'umd',
  //   name: 'coderyliu'
  // }
  // todo 第二种方式output还可以是一个数组
  output: [{
      file: './dist/bundle_cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/bundle_amd.js',
      format: 'amd'
    },
    {
      file: './dist/bundle_iife.js',
      format: 'iife',
      name: "coderyliu"
    },
    {
      file: './dist/bundle_umd.js',
      format: 'umd',
      name: "coderyliu"
    }
  ]
}