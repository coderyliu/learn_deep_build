// ?测试副作用代码
// ?test函数没有用到，在usedExports的作用下会被剔除
export function test(){
  console.log(1)
}

// !副作用代码
window.userInfo={
  name:'coder',
  age:18,
  height:1.88
}