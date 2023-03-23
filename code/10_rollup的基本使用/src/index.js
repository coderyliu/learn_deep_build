// ?对rollup工具打包库文件测试
import {
  sub,
  mul
} from './utils/math.js'

// ?如果我在这里引入了一个通过cjs方式导出的库lodash,那么能被打包到bundle.js中么
// !会发现bundle.js是没有打包lodash这个库的，原因是因为rollup只能默认处理esModule
import _ from 'lodash'

function foo() {
  console.log(sub(1, 2))
  console.log(mul(1, 2))
  console.log(_.add(5, 8))
  console.log('coderyliu')
}
foo()

// ?使用vue组件
const divEl = document.createElement('div')
divEl.id = 'app'
document.body.appendChild(divEl)

import {
  createApp
} from 'vue'
import App from './vue/App.vue'

const app = createApp(App)
app.mount('#app')

export {
  foo
}