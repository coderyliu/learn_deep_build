// ?vite怎么打包其它资源
// 1.css资源
import './css/index.css'

// ?2ts资源
import {
  formatPrice
} from '@/ts/math.ts'
console.log(formatPrice(50))

// ?3.vue资源
import {
  createApp
} from 'vue'
import App from './vue/App.vue'

const app = createApp(App)
app.mount('#app')