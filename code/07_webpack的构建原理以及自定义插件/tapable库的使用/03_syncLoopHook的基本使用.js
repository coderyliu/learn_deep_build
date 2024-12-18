const { SyncLoopHook } = require("tapable");

// tapable库是webpack的核心库，用于实现插件系统
// 它提供了一系列的钩子（hook），用于在webpack的构建过程中插入自定义逻辑
// 常见的钩子类型包括：SyncHook（同步钩子）、AsyncHook（异步钩子）、SyncBailHook（同步熔断钩子）等

let count = 0;

class Compiler {
  constructor() {
    this.hooks = {
      // 同步钩子 - 同步钩子是tapable库中最简单的钩子类型
      syncLoopHook: new SyncLoopHook(["name", "age"])
    };

    // 2. 注册一个监听器
    // ?loop的特点: 如果返回值为true, 那么会继续执行, 直到返回值为false
    this.hooks.syncLoopHook.tap("event1", (name, age) => {
      if (count < 3) {
        console.log(`event1: name = ${name}, age = ${age}`);
        count++;
        return true;
      }
      return false;
    });

    // 监听器是可以注册多个的，并且可以按照注册的顺序依次执行
    this.hooks.syncLoopHook.tap("event2", (name, age) => {
      console.log(`event2: name = ${name}, age = ${age}`);
    });
  }
}

const compiler = new Compiler();

// 3. 触发钩子
compiler.hooks.syncLoopHook.call("张三", 18);
