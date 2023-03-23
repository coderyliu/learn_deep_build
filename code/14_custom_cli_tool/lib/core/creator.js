// ?来创建执行的action
const {
  reactRepo
} = require('../config/repo-config')
const ora = require('ora')
const inquirer = require('inquirer')
// promisify
const {
  promisify
} = require('util')
const download = promisify(require('download-git-repo'))
const {
  commandSpawn
} = require('../utils/teminal')

class Creator {
  constructor(projectName, targetPath) {
    this.name = projectName
    this.target = targetPath
  }

  async create() {
    // 1.获取项目模板
    // const repo=await this.getRepo()
    const spinner = ora('wait react template download ...').start()
    // 2.获取版本号

    // 3.下载
    await download(reactRepo, this.name, {
      clone: true
    })

    spinner.stop()

    // 4.是否下载依赖
    await this.installModules()

    // 5.是否run serve
    await this.serveBrowser()
  }

  // todo 1.获取项目模板
  // getRepo() {

  // }

  // todo 2.安装依赖
  async installModules() {
    const {
      action
    } = await inquirer.prompt([{
      name: 'action',
      type: 'list',
      message: 'Do you want to install the dependence? yes or not: ',
      choices: [{
          name: "yes",
          value: true
        },
        {
          name: "no",
          value: false
        }
      ]
    }])

    if (!action) {
      return
    } else {
      const spinner = ora('the dependence installing~').start()
      // 执行npm install
      const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
      await commandSpawn(command, ['install'], {
        cwd: `./${this.name}`
      })
      spinner.stop()
    }
  }

  // todo 3.run serve
  async serveBrowser() {
    const {
      action
    } = await inquirer.prompt([{
      name: 'action',
      type: 'list',
      message: 'Do you want to run dev on the browser ~ ',
      choices: [{
          name: "yes",
          value: true
        },
        {
          name: "no",
          value: false
        }
      ]
    }])

    if (!action) {
      return
    } else {
      const spin = ora('run server ~').start()
      await commandSpawn(command, ['run dev'], {
        cwd: `./${this.name}`
      })
      spin.stop()
    }
  }
}

module.exports = Creator