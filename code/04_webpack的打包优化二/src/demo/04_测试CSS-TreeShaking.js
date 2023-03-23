// ?测试css的tree-shaking
const h1El=document.createElement('h1')
h1El.classList.add('title')
h1El.textContent='哈哈哈'
document.body.appendChild(h1El)