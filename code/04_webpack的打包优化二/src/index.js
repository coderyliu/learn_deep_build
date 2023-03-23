// ?使用entry需要借助两个库来使用
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// 引入css文件
import '@/assets/css/index.css'

// 引入less文件
import './assets/less/index.less'

import ReactDom from 'react-dom/client'

// ?处理react
import App from './react/App.jsx'
const root=ReactDom.createRoot(document.querySelector('#root'))
root.render(<App></App>)

// ?都引入axios
import './utils/fetch'
import './utils/math'

// ?演示import()的按需加载
const btnEl=document.createElement('button')
const btn2El=document.createElement('button')
btnEl.textContent='关于'
btn2El.textContent='分类'

btnEl.addEventListener('click',()=>{
  import(/*webpackChunkName:'about', webpackPrefetch:true*/'./router/about.js')
})

btn2El.addEventListener('click',()=>{
  import(/*webpackChunkName:'category', webpackPrefetch:true*/'./router/category.js')
})

document.body.appendChild(btnEl)
document.body.appendChild(btn2El)