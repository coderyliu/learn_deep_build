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