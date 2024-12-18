const { AsyncParallelHook } = require('tapable')

class Compiler {
  constructor() {
    this.hooks = {
      // 异步并行钩子
      asyncParallelHook: new AsyncParallelHook(["name", "age"])
    };

    // 2. 注册监听器
    // ?如果要使用asyncParallelHook, 那么需要使用tapAsync方法
    // !可以看到，event1和event2是并行执行的
    this.hooks.asyncParallelHook.tapAsync("event1", (name, age) => {
      setTimeout(() => {
        console.log(`event1: name = ${name}, age = ${age}`);
      }, 3000);
    });

    this.hooks.asyncParallelHook.tapAsync("event2", (name, age) => {
      setTimeout(() => {
        console.log(`event2: name = ${name}, age = ${age}`);
      }, 3000);
    });
  }
}

const compiler = new Compiler();

// 触发异步钩子需要使用callAsync方法
compiler.hooks.asyncParallelHook.callAsync("张三", 18);
