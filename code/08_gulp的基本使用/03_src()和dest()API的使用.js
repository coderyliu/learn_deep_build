// ?gulp是基于steam流的操作
// ?gulp中提供给了我们两个API--src()和dest()分来用来创建可读流和可写流
// ?src()接受一个路径作为参数，返回该路径下的所有文件的可读流
// ?dest()接受一个输出路径作为参数，将可读流输出到该目录下
const {
  src,
  dest
} = require('gulp')

// *这两个API是我们在创建任务时主要用的两个API
// todo 将测试目录下的index.js文件读写到dist文件夹下
// ?默认任务
exports.default = () => {
  return src('./src/test-src函数和desc()函数/**/*.js').pipe(dest('./dist'))
}