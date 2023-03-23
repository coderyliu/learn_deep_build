// ?什么是terser呢?
// *terser就是一个js代码的压缩机/绞肉机,就是帮助我们丑化/压缩js代码的
// *我们知道webpack在生产模式下是会自动压缩Js代码的，以前利用的uglify-js来实现丑化压缩的
// *但是现在uglify-js以及uglify-es已经不再维护了，在webpack5中已经借助terser来实现Js代码的丑化压缩

// todo 1.terser的命令行使用
// ?terser其实和babel/postcss一样是一个工具，只不过在webpack中我们通过babel-loader/postcss-loader来实现
// ?那么terser在webpack是通过terser-webpack-plugin来实现的
// ?我们可以安装terser这个工具来实现Js代码的丑化
// todo 常用命令 npx terser 源文件 -o 目标文件夹 (-c -m两个参数的配置)
// *具体-c ,-m的参数配置，可以参考github仓库配置文件说明:https://github.com/webpack-contrib/terser-webpack-plugin

// *如果没有添加具体的-c(compress压缩) -m(mangle姣肉机)那么是不会有什么效果
// *-c arrows=true(把对象或者类中的函数转化为箭头函数) dead_code=true(没有的代码，删除) arguments=true(函数参数使用arguments[0]表示) 
// *-m keep_fnames=true 保持函数名字不变 keep_

// todo 2.terser在webpack中使用
// ?在webpack5中使用terser，是在optimization中，有minimize和minimizer两个选项的
// ?生产环境下，minimize默认为true，即如果要使用terserPlugin要先将minimize设置为true
// ?在minimizer中以new terserPlugin({参数配置})使用
