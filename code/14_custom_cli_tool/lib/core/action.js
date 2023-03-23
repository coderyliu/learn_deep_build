// ?获取模板列表，获取版本，下载都是异步请求，所以会有请求的过程，为了交互友好这里加了loading的效果
// ?ora这个第三方库用来加载动画
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const Creator = require('./creator')
const ora = require('ora')
const {
  commandSpawn
} = require('../utils/teminal')

const createProjectAction = async (projectName, options) => {
  // 1.判断目录是否存在
  const cwd = process.cwd() //获取当前命令行所在目录
  const targetPath = path.join(cwd, projectName) //生成项目路径
  if (fs.existsSync(targetPath)) {
    // *如果有这个路径
    if (options.force) {
      // 有--force的情况下直接移除旧的项目
      await fs.rmdirSync(targetPath, {
        recursive: true
      })
    } else {
      // 否则的话是要覆盖还是退出
      const {
        action
      } = await inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: 'Target directory already exists,please choose an action:',
        choices: [{
            name: "Overwrite",
            value: 'overwrite'
          },
          {
            name: "Cancel",
            value: false
          }
        ]
      }])

      // 如果是退出就直接退出
      if (!action) {
        return
      } else {
        // 否则移出旧的
        console.log('\r\nRemoving...')
        console.log(targetPath)
        await fs.rmdirSync(targetPath, {
          recursive: true
        })
      }
    }
  }

  // 2.创建项目
  const creator = new Creator(projectName, targetPath)
  creator.create()
}

const installDependence = async (packageName, options) => {
  const cwd = process.cwd()
  const packageJsonPath = path.join(__dirname, './package.json')
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'

  if (!packageJsonPath.includes('package.json')) {
    return
  } else {
    if (options.save) {
      const spinner = ora('the dependence installing~').start()
      // 执行npm install
      await commandSpawn(command, ['install',packageName], {
        cwd: cwd
      })
      spinner.stop()
    } else if(options['D']){
      const spinner = ora('the dependence installing~').start()
      // 执行npm install
      await commandSpawn(command, ['install',packageName,'-'+options.D], {
        cwd: cwd
      })
      spinner.stop()
    }else{
      const spinner = ora('the dependence installing~').start()
      // 执行npm install
      await commandSpawn(command, ['install'], {
        cwd: cwd
      })
      spinner.stop()
    }
  }
}

module.exports = {
  createProjectAction,
  installDependence
}