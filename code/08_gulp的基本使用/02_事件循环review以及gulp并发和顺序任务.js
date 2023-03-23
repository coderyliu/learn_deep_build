// ?并行任务和串行任务
// ?主要通过gulp给我们提供的两个API series-串行(前面的任务执行完了，才会执行后面的任务),parallel--并行(一起执行)
const {
  series,
  parallel
} = require('gulp')

function foo1(cb) {
  setTimeout(() => {
    console.log('foo1 执行了')
    cb()
  }, 2000)
}

function foo2(cb) {
  setTimeout(() => {
    console.log('foo2 执行了')
    cb()
  }, 1000)
}

function foo3(cb) {
  setTimeout(() => {
    console.log('foo3 执行了')
    cb()
  }, 3000)
}

// todo 串行任务效果 依次打印foo1 foo2 foo3 会消耗6.xxs
const seriesTask = series(foo1, foo2, foo3)

// todo 并行任务效果 先打印foo2 foo1 foo3 消耗3.xxs
const parallelTask = parallel(foo1, foo2, foo3)

// !这里也强调一下事件循环
// !浏览器中的事件循环和Node中的事件循环
// todo 浏览器中的事件循环我们可以分为两个事件类型：宏任务和微任务(promise.then() .catch()的回调函数，MutationObserve())
// *宏任务：script标签，setTimeout,setInterval,网络请求，文件处理(读写)，数据库操作等
// ?我们把一次宏任务，一次微任务构成一次完整的事件循环，依次重复这个过程成为事件循环
// !需要注意的是，浏览器在执行所有的宏任务之前会先清空微任务队列中的任务，在执行宏任务，所以才会有一次宏任务，一次微任务
// *组成:浏览器的v8，线程池(网络线程，定时器线程，io线程等)，任务队列(其他线程执行完任务之后，返回的回调函数放在任务队列中分为宏任务，微任务)

// todo Node中的事件循环，也可以分为两个类型：宏任务，微任务
// !但是不同的是在宏任务队列中，我们又分为队列的优先级：setTimeout,setInterval队列>待定回调(系统的某些错误)>io队列>setImmediate队列>关闭的回调函数
// !微任务:nextTick() >> promise.then()的回调函数 >> queueMicrotask
// *Node中的事件循环主要是由Node的一个库libuv库来维护的
// *Node中一次完整的事件循环成为一次tick(滴)

// *之所以这里强调事件循环是因为必要以为定时器的3s,2s设置的时间并发以后会等完成之后在执行
// *当并发之后，如果其他线程优先执行完之后返回回到函数，就会执行
// todo 案例
// todo 结果打印的是2==>1==>3
setTimeout(() => {
  console.log(1)
}, 2000)

setTimeout(() => {
  console.log(2)
}, 1000)

setTimeout(() => {
  console.log(3)
}, 3000)

module.exports = {
  seriesTask,
  parallelTask
}