// ?rollup的命令行使用
// pnpm add rollup -D 下载
// npx rollup --version 查看版本
// ?命令行的常见命令: npx rollup -c 源文件 -o 目标文件夹 -f(format 可以格式化为什么样的方式引入)

// *常见的format值：
// *cjs commonjs的方式require exports
// *amd AMD的方式---define('',(require,exports)=>{})
// *iife 立即执行函数browser浏览器的方式 ()()
// *esm ESModule import export方式
// *umd 通用上面几种的组合值

// !若使用iife或者umd一定要加上name属性 因为要以什么name==>window.name.xxx=xxx的方式添加
