#!/usr/bin/env node

const {
  program
} = require('commander')
const helpOptions=require('./core/help')
const createCommands=require('./core/create')

// todo 1.版本参数 version,动态来自package.json
const version = require('../package.json').version
program.version(version, '-V --version')

// todo 2.自定义一些其它的options
helpOptions()

// todo 3.自定义创建命令
createCommands()

// ?第一步先解析命令行参数，实际上命令行参数放在process.argv中
program.parse(process.argv)