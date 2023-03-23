// ?js文件在production模式下会自动丑化压缩
// ?css文件需要借助两个插件:
// *将css单独提取为一个css外部文件插件MiniCssExtractPlugin以及一个压缩插件OptimizeCssAssetsWebpackPlugin

// todo 使用
// new MiniCssExtractPlugin({
//   filename:'css/[name].[contenthash:10].css'
// })

// new OptimizeCssAssetsWebpackPlugin()