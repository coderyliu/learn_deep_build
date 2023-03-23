// ?我们通过webpack打包优化，如果运行整个webpack.config.js文件，不区分开发和生产环境的话，那么会影响打包性能
// ?包括在react或者vue的框架的webpack配置当中，我们也能看见，它们就会进行环境区分和配置分离
// *主要分为开发环境和生产环境
// *这样可以减少打包配置文件体积，同时更方便我们管理配置文件
// *还可以提高打包速度和打包效率

// ?整个配置文件分离用到的是webpack-merge来分离配置文件
// !需要注意的是webpack.config.js中module.exports={}导出的并不是一个对象，而是一个函数，这个函数接受一些参数，其中包括env--当前环境
// *注意在package.json中执行脚本的时候修改执行文件
// todo build webpack --config ./config/webpack.common.config.js --env production
// todo start webpack serve --config ./config/webpack.common.config.js --env development