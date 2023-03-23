// *直接在vite.config.js中编写相应的逻辑

// todo 1.Vite处理css资源
// *Vite是可以直接对css资源进行打包的，无需借助其它插件

// todo 2.Vite处理less资源
// *借助less工具，直接Install,就可以了

// todo 3.Vite对css的后处理
// *借助postcss工具，postcss-preset-env就可以了，在postcss.config.js中编写响应的插件和预设

// todo 4.Vite对Ts文件的处理
// *Vite天然支持Ts文件，原理在上面介绍了，利用ESBuild编译==>Es6+ 返回给浏览器

// todo 5.Vite对vue的处理
// *vue3需要借助@vitejs/plugin-vue处理sfc 在plugin中使用vue()就可以了

// todo 6.Vite对react jsx处理
// *Vite天然支持react的jsx语法 如果是其它的jsx语法，可能需要借助插件，比如vue的Jsx需要借助@vitejs/plugin-vue-jsx

// todo 如果需要处理其它资源，可以看vite官网查看文档