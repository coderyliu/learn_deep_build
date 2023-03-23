// ?gulp是什么?   gulp是一个自动化工具
// *在gulp的官网上我们看到一个介绍:A toolkit to automate & enhance your workflow
// ?意思就是gulp是一个自动化工具并且增强你的工作流

// todo 使用gulp的流程大概就是：创建任务==>执行任务
// todo 创建任务的过程当中我们可以利用gulp的一些函数，在利用gulp社区提供的插件plugin来构建任务
// !比较重要的一个点在于gulp是通过文件流来执行任务的

// ?webpack是什么?  静态资源的模块化打包构建工具
// *在webpack中万物皆模块(module),我们需要各种各样的loader(css-loader,babel-loader,vue-loader,ts-loader)等
// *需要各种各样的插件(html-webpack-plugin,terser-webpack-plugin)等，以及需要各种各样的配置来打包
// ?相较于gulp，其配置文件是比较复杂的,里面的mode,devServer,entry等其实在webpack内部也是转化为plugin来执行的，除了loader

// ?那么我们可以比较出gulp的优缺点?
// *1.gulp的优点在于，简单方便，只需要编写任务，执行任务即可，而webpack需要写很多的配置文件，借助loader以及plugin
// *2.gulp相较于webpack的缺点在于,webpack是一个模块化打包工具，可以构建依赖图，而gulp不支持模块化
// !重要的点在于gulp不支持模块化,可以借助其他工具来实现模块化
