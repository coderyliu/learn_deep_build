const ConfigStore = require('configstore') //本地存储json库
const ora = require('ora')
// const fs = require('fs')

function sleep(timer) {
  return new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id)
      resolve()
    }, timer)
  })
}

// ?添加执行动画函数
function wrapLoading(fn, message, ...args) {
  return new Promise(async (resolve, reject) => {
    const spinner = ora(message)

    try {
      spinner.start()
      const data = await fn(...args)
      spinner.stop()
      resolve(data)
    } catch (err) {
      spinner.fail('fetch failed, refetching ...')
      await sleep(Number(ConfigStore.get('sleep')) || 2000)
      wrapLoading(fn, message, ...args)
    }
  })
}

module.exports = {
  wrapLoading
}

// const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));

// function initConfig(options) {
//   const ly = packageJson.name;

//   return new ConfigStore(ly, Object.assign({}, options))
// }
//创建configstore,里面可以设置一些公用的变量，为的是cli更加灵活
// const configStore = initConfig()