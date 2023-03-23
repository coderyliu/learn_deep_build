import {
  formatDateTime
} from '@/utils/format'

// 引入css文件
import '@/assets/css/index.css'
import '@/assets/css/font.css'
// 引入less文件
import './assets/less/index.less'

// ?把第三方包合并为一个chunk打包成单独chunk
import dayjs from 'dayjs'
console.log(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))

const res = formatDateTime(undefined,null)
console.log(res)

// ?处理ts文件
import './ts/math.ts'