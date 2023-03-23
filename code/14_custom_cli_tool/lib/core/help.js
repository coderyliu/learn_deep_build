// ?定义一些其他的参数
// !只是添加参数options，在命令行可以看到所有的命令，若要执行，还需要通过commander.command来定义执行action
const {
  program
} = require('commander')

function helpOptions() {
  program.option('-des --describe', '这是一个创建react项目的脚手架工具')

  program.option('-d --dest <dest>', 'a destination folder,例如:-d src/component')

  // ?监听help命令，commander默认处理help命令
  program.on('--help', () => {
    console.log("\n")
    console.log("others:\n  other options")
  })
}

module.exports = helpOptions