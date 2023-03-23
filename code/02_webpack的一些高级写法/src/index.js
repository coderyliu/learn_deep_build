// ?使用entry需要借助两个库来使用
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// todo 1.处理react组件jsx语法
import ReactDom from 'react-dom/client'

// todo 2.热更新 hot只能处理非入口文件的其它Js文件
if(module.hot){
  module.hot.accept('./utils/format.js',()=>{
    console.log('hot')
  })
}

// todo 3.处理ts文件
import './ts/math.ts'

// todo 4.懒加载引入js文件

// todo 5.处理vue的.vue文件
import {
  createApp
} from 'vue'
import Hello from '@/vue/hello.vue'


// ?处理react
import App from './react/App.jsx'
const root=ReactDom.createRoot(document.querySelector('#root'))
root.render(<App></App>)

// ?引入vue组件
const app = createApp(Hello)

app.mount('#app')