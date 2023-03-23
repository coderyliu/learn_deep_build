(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.coderyliu = {}));
})(this, (function (exports) { 'use strict';

  const sub = (a, b) => {
    return a + b
  };

  const mul = (a, b) => {
    return a * b
  };

  // ?对rollup工具打包库文件测试

  function foo() {
    console.log(sub(1, 2));
    console.log(mul(1, 2));
    console.log('coderyliu');
  }

  exports.foo = foo;

}));
