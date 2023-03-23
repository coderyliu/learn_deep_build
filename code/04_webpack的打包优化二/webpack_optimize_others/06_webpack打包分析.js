// ?如果我们想要对webpack的打包速度/时间/体积进行分析
// ?那我们也可以利用webpack提供给我们的插件进行使用

// todo 1.webpack对打包时间的分析
// todo 利用speed-measure-webpack-plugin 进行分析
// todo 具体的使用方式可以看官方文档
// !这里的speed-measure-webpack-plugin不兼容css-extract-webpack-plugin
// *解决方法:
// !将 mini-css-extract-plugin 的版本降低到 1.3.6 或者删除smp.wrap

// todo 2.webpack对打包文件的分析
// todo 方案一：生成一个打包分析文件，我们自己分析
// todo 使用脚本:"build-stats":"webpack --config ./config/webpack.common.config.js --env production --profile --json=stats.json"
// todo 之后我们可以在analyse这个网站上自己分析
// *但是这种方法其实还是不太友好，很麻烦
// todo 方案二:通过webpack-bundle-analyzer这个插件来使用
// *之后在浏览器中以图形化的方式使用