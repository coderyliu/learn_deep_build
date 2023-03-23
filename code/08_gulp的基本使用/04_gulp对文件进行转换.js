// ?gulp的文件转换
// ?我们只是简单的使用了一下gulp给我们提供的API--src()/dest() 以及如何创建任务，并发顺行任务
// ?那如果要对js/css文件进行压缩怎么处理呢
// *其实也是像webpack一样借助插件处理就可以了
// *借助gulp的plugins,在官方文档中搜索就可以了

// todo 比如，我们将src/index.js压缩丑化
const {
  src,
  dest
} = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')

function jsTask() {
  return src('./src/*.js').pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser({
      mangle: true,
    }))
    .pipe(dest('./dist'))
}

exports.default = jsTask