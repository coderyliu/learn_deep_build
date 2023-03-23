// ?rollup是什么?
// *rollup是一个javascript模块化打包工具
// ?在rollup官网中我们可见一看到一句这样的官方介绍:
// *rollup.js The JavaScript module bundler Compile small pieces of code into something larger and more complex
// *意思就是说，rollup是一个js模块化打包工具，把小的代码片段编译成大的或者复杂的库、应用程序

// *平常我们用rollup一般打包库文件比较常见，像vue/react/dayjs等第三方库基本上都是用的rollup打包的
// *具体用rollup打包库文件的好处，我们待会用用就可以知道了
// !最主要的原因是通过简单的配置可以兼容浏览器、cmd、amd、cjs几种方式引入第三方库文件，而webpack需要配置的更多

// !需要注意的是rollup默认只能处理ESModule的模块方方式，处理commonjs等需要借助插件的帮助

// todo 场景
// todo webpack通常用于打包业务代码
// todo rollup通常用于打包第三方的库文件