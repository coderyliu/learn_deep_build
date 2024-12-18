const { AsyncSeriesHook } = require("tapable");

// 异步串行钩子 - 异步串行钩子是tapable库中的一种钩子类型

class Compiler {
  constructor() {
    this.hooks = {
      // 异步串行钩子
      asyncSeriesHook: new AsyncSeriesHook(["name", "age"])
    };

    // 2. 注册一个监听器
    // ?如果要使用asyncSeriesHook, 那么需要使用tapAsync方法
    this.hooks.asyncSeriesHook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log(`event1: name = ${name}, age = ${age}`);
        // !注意：callback()必须调用，否则会阻塞后续事件的执行
        callback();
      }, 3000);
    });

    // 监听器是可以注册多个的，并且可以按照注册的顺序依次执行
    this.hooks.asyncSeriesHook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log(`event2: name = ${name}, age = ${age}`);
        // !注意：callback()必须调用，否则会阻塞后续事件的执行
        callback();
      }, 3000);
    });

    // *试一下如果使用tap方法会怎么样
    // 这样也会触发,因为tap方法的回调函数是同步的
    this.hooks.asyncSeriesHook.tap("event3", (name, age, callback) => {
      // 同步代码
      console.log(`event3: name = ${name}, age = ${age}`);
      callback();
    });

    // *如果使用tap监听，那么回调函数必须是同步的，无异步任务,否则不会等待事件执行完毕
    this.hooks.asyncSeriesHook.tap("event4", (name, age, callback) => {
      // 异步代码
      setTimeout(() => {
        console.log(`event4: name = ${name}, age = ${age}`);
        callback();
      }, 3000);
    });
  }
}

const compiler = new Compiler();

// 3. 触发钩子
// ?触发异步钩子需要使用callAsync方法
compiler.hooks.asyncSeriesHook.callAsync("张三", 18, () => {
  console.log("所有事件执行完毕");
});

// 如果使用call方法呢？
// !报错
// compiler.hooks.asyncSeriesHook.call("张三", 18, () => {
//   console.log("所有事件执行完毕");
// });
