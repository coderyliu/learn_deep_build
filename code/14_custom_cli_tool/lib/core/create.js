// ?用于创建action

const {
  program
} = require('commander')
const {
  createProjectAction,
  installDependence
} = require('./action')

const createCommands = () => {
  program.command('create <project>')
    .description('create a react project into your folder')
    .option('-f --force', 'overwrite target directory if it exists')
    .action(createProjectAction)

  program.command('install <name>')
    .description('install the project dependence')
    .option('-D', 'install the devDependence')
    .option('--save', 'install the proDependence')
    .action(installDependence)
}

module.exports = createCommands