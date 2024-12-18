const { SyncWaterfallHook } = require("tapable");

// tapable库是webpack的核心库，用于实现插件系统
// 它提供了一系列的钩子（hook），用于在webpack的构建过程中插入自定义逻辑
// 常见的钩子类型包括：SyncHook（同步钩子）、AsyncHook（异步钩子）、SyncBailHook（同步熔断钩子）等

class Compiler {
  constructor() {
    this.hooks = {
      // 同步钩子 - 同步钩子是tapable库中最简单的钩子类型
      syncWaterfallHook: new SyncWaterfallHook(["name", "age"])
    };

    // 2. 注册一个监听器
    // ?waterfall的特点: 返回值会作为下一个监听器的参数
    this.hooks.syncWaterfallHook.tap("event1", (name, age) => {
      return '{ name: "李四", age: 20 }';
    });

    // 监听器是可以注册多个的，并且可以按照注册的顺序依次执行
    this.hooks.syncWaterfallHook.tap("event2", (name, age) => {
      console.log(`event2: name = ${name}, age = ${age}`);
    });
  }
}

const compiler = new Compiler();

// 3. 触发钩子
compiler.hooks.syncWaterfallHook.call("张三", 18);
