// ?gulp对文件的监听
// ?gulp也给我们提供了watch()用于监听文件
const {
  src,
  dest,
  watch
} = require('gulp')

// todo 例子：当src里面的*.js文件发生更新，我们可以重新执行打包任务
function buildTask() {
  return src('./src/**/*.js')
    .pipe(dest('./dist'))
}

watch('./src/**/*.js', buildTask)

exports.default = buildTask