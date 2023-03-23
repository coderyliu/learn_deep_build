// ?首先Vite是什么呢?
// ?Vite官网定义：Vite 是下一代的前端工具链，为开发提供更快响应
// *什么意思呢?
// *Vite是想取代webpack的，但是路还很长，Vite的更新频率是比较快的，目前已经到了4.x的一个版本

// ?Vite之所以为开发提供更快响应?
// *在于Vite的原理，Vite是在EsBuild和rollup的基础之上建立的开源工具
// *1.dev 开发环境，Vite是使用EsBuild作为解析编译工具,EsBuild相较于Babel打包编译的速度要快到10_100倍，为什么，后面介绍
// *2.build生产环境 Vite是直接采用rollup作为打包构建工具，rollup在打包构建上还是很成熟的

// ?Vite的开发环境的dev-server的原理?
// *实际上，Vite开发环境和其他工具一样，像webpack-dev-server其实本地都是开启了一个服务器
// *那么Vite也是如此，本地采用了connect服务器，以前是Koa，因为Koa可能集成的库文件太大，并且connect更适用于做socket长连接
// *在本地开启一个服务器，利用EsBuild的快速构建能力来做处理
// todo 比如，我们有一个math.ts文件，浏览器是不能识别ts代码的，必须要转为Es5语法，但是我们在开发环境肯定使用的是最新的版本
// todo 对ES6+有很大语法兼容，所以EsBuild是直接转化为Es6+的语法，没有编译为Es5的语法，这样就提高了构建速度
// todo 并且对于Ts,jsx语法，Vite是天然支持的，也就是说对于ts代码，并不会做类型检测，这样太耗费性能
// todo 浏览器向connect服务器请求math.ts文件的时候，connect服务器利用Esbuild把math.ts直接转化为Es6+语法，将这个内部已经转化为js的代码返回给浏览器
// todo 这样就达到了支持ts语法，而不需要借助其它插件，jsx也是同样的原理

// ?Vite的生产环境的原理就是利用rollup做的生产构建处理
// *之所以没有在利用EsBuild，是因为EsBuild在生产环境打包构建上，例如：代码分割,css处理等还需要更加成熟的技术来完善
// *Vite也说明，后续如果EsBuild更加成熟会做重构

