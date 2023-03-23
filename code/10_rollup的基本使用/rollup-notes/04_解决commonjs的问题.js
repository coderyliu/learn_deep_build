// ?如果在项目中我们通过import 方式引用了一个用module.exports={}导出的第三方的库
// ?这个时候rollup是处理不了的，因为rollup默认只支持esModule的方式
// *最好的解决办法是通过rollup给我们提供的插件 @rollup/plugin-commonjs

// !安装这个插件还会出现一个Bug,需要借助@rollup/plugin-node-resolve对模块解析
// ?在rollup.config.js中以plugin()的方式使用