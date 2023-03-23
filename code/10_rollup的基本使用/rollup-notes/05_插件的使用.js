// ?我们发现这些打包工具都是共通的
// ?webpack是借助各种loader和各种plugin来打包的，gulp是创建任务和执行任务，编写任务也是借助插件来完成的
// *同样在rollup中也是借助插件来完成的：参考：https://github.com/rollup/awesome，看文档找使用方法

// todo 处理es6+==>es5  @rollup/plugin-babel 等
// todo 处理vue组件要借助 rollup-plugin-vue 和@vue/compiler-sfc
// !处理vue组件有bug 要单独设置css提取出来