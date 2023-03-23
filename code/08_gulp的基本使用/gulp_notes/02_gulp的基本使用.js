// ?使用gulp非常简单，我们只需要全局安装gulp或者在项目中局部安装gulp
// *在gulpfile.js中编写我们的gulp配置就可以了
// *那么gulpfile.js中编写的任务都是一个个函数，我们可以通过gulp提供的series,parallel来串行或者并行执行多个任务

// ?编写一个简单的gulp任务
// *每一个任务都是一个函数，每个函数可以接受一个callback，执行这个callback()来告诉我们这个任务执行完毕
function foo(cb){
  console.log('第一个foo任务执行了')
  cb()
}

// ?将这个任务导出
// *在命令行通过npx gulp foo 就可以执行这个任务
module.exports={
  foo
}

// ?这里除了cb函数可以告诉gulp这个任务执行完了，也还有几种方式可以告诉gulp
// * 返回一个promise,stream流,emitter,child process等

// ?gulp中的任务主要分为两种:
// * 1.共有任务(public task):通过module.exports或者exports导出的任务
// * 2.私有任务(private task):没有导出，在内部调用，通过series或者parallel组合

// ?在gulp4.x以前，创建任务是通过gulp.task(名称,()=>{})这种方式创建的

// ?导出的任务也有很多导出方式:
// todo 还包括默认导出exports.default=任务
// todo module.exports={}
// todo exports={} exports.build=任务

// *其它的使用方式看下面的js文件