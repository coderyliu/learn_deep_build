// ?这个Main主要是用来引入demo

import {sum} from './demo/01_测试usedExports'
console.log(sum(1,2))

import './demo/02_测试sideEffects'

import './assets/css/index.css'

import './assets/css/测试cssTreeShaking.css'

import {sub} from './demo/03_测试作用域提升'
console.log(sub(2,1))

import './demo/04_测试CSS-TreeShaking'