// *首先我们来看一个重要的:代码分割 code splitting
// *什么意思呢：如果我们不做任何处理的话，会发现，所有的文件在webpack的打包下，会构成一个依赖图，所有的依赖文件
// *都会被打包到一个bundle.js中，那么这个文件中实际上是包含很多代码：
// todo 包括:a.我们的业务代码 b.第三方库的代码 c.webpack的运行时代码
// *这么多代码被打包到同一个js文件中，会造成体积过大
// todo 就会引起几个问题：a.体积过大，不方便管理 b.体积过大，浏览器解析时间长，会出现页面白屏的效果
// ?解决这个问题，可能会有SSR(服务端渲染),懒加载(预加载),代码分割,树摇等处理方式
// *code splitting 主要有三种方式:
// todo a.多入口打包
// todo b.import()的懒加载
// todo c.自定义分包 splitChunksPlugin

// ?1.多入口打包
// todo 指的是在webpack 的entry中我们可以利用entry解析入口文件进行多入口打包，主要的使用方式是:
// ?entry是一个对象，具体的参数属性可以查看官网理解
// entry: {
//   index: {
//     import: './src/index.js'
//   },
//   main: {
//     import: './src/main.js'
//   }
// }
// *进行多入口打包的时候会发现，css文件也会进行多入口打包，打包到相应的css/[name].[contenthash:8].css
// *同样，假如这两个入口文件都依赖axios，对axios也都会进行打包，这个时候可以利用属性dependOn来优化,
// ?可以通过shared:['axios']的方式来共享这个库，这个库就会被分离出去

// ?2.Import()语法下的懒加载/按需加载
// *通过import()函数可以让引入的文件被单独打包成一个文件
// *还可以通过魔法注释生成一些我们想要的名称和功能,包括:/*webpackChunkName:'name' webpackPrefetch:boolean webpackPreload:boolean */

// ?3.通过webpack给我们提供的自定义分包方式splitChunksPlugin，已经通过splitChunks来实现了，底层原理是通过splitChunksPlugin实现的
// *使用的方式是在optimization:{}中使用
// *属性包括:chunkIds,splitChunks,cacheGroup等