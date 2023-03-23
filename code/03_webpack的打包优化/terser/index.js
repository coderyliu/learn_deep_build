// ?测试terser的命令行使用
const message='coderyliu'

const test=(message)=>{
  console.log(message)
}

const add=(num1,num2)=>{
  return num1+num2
}

// 无用代码
if(false){
  console.log(1)
}

class Person{
  height=1.88

  constructor(name,age){
    this.name=name
    this.age=age
  }

  eat(){
    console.log('eating')
  }
}