// ?主要是来测试一下浏览器的EsModule
import {
  sub,
  mul
} from './utils/math.js'

// !这种情况下，没有借助模块化工具，必须通过相对路径来引入
import _ from 'lodash-es/lodash.default.js'

console.log(_.join(['coder','yliu'],''))

console.log(sub(1, 2))
console.log(mul(1, 2))