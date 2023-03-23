// ?webpack在生产环境下会给我们自动进行js压缩丑化，实际上是用的terser这个工具
// ?同样,webpack默认在生产环境下并对满足使用ES6Module的模块化方式进行TreeShaking
// *TreeShaking就是一种减少打包代码体积的一种技术，必须满足两个条件：(1)production环境 (2)ES6Module

// todo 1.其中一种TreeShaking的使用方式是webpack5提供给我们的usedExports默认为true
// *这个选项是在optimization中使用，目的是为了帮助我们把没有使用到的函数从我们的代码中去除
// *会发现在开发环境，usedExports为false ,生产环境下为true

// todo 2.TreeShaking的另一种使用是通过sideEffects来实现 默认为true(production)
// *sideEffects是一种副作用，在我们前端开发中，比如react中有纯函数这种概念，副作用通常是bug产生的温床
// *比如：我们在项目中直接通过import ''引入了一个文件，那么这个文件中有些函数我们没有用到，这些函数在usedExports的作用下
// *也会被删除，但是里面如果有这样的代码:window.xxx=xxx
// *之所以window.xxx=xxx不会被剔除，是因为webpack担心这个window上的属性可能在多个地方使用，所以不会被剔除
// !这种在实习的时候，会在项目中看到，我们向全局对象window上添加了很多属性来在全局共享一些东西，是非常方便的
// !所以，这里面的sideEffects建议我们对所有的Js文件都使用，我是不推荐的，因为可以在全局共享属性，也是有用的
// todo sideEffects的设置是放在package.json中来使用的，支持布尔值，也支持一个数组
// !如果为TRUE，表示对所有文件都使用sideEffects，那么css文件也会被剔除，所以我们通常会'*.css'包括不剔除的css文件
// !但是我个人认为sideEffects默认为false会更好一点