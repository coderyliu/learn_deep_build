// ?用gulp对我们的项目进行打包
// ?包括js语法兼容,压缩,丑化  html文件打包 css文件打包 搭建一个本地服务
// *需要注意的是gulp不能进行模块化打包构建分析依赖关系
// *所以，以前用gulp都是在jQuery项目中
const {
  src,
  dest,
  series,
  parallel,
  watch
} = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const inject = require('gulp-inject')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync')

// ?html-task
function htmlTask() {
  return src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('./dist'))
}

// ?css-task
// ?css文件是好处理的，注入成为link,但是要注意样式名不能重复
function cssTask() {
  return src('./src/**/*.css')
    .pipe(cleanCSS())
    .pipe(dest('./dist'))
}

// ?js-task
// ?js文件处理之后注入到html文件上，还要注意引用的顺序问题，是不好处理的
// ?第三方库文件直接写到html文件上面，其余的文件待会再看看用模块化处理
function jsTask() {
  return src('./src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser({
      mangle: true
    }))
    .pipe(dest('./dist'))
}

// ?inject-task
function injectTask() {
  return src('./dist/*.html')
    .pipe(inject(src(['./dist/**/*.js', './dist/**/*.css']), {
      relative: true
    }))
    .pipe(dest('./dist'))
}

// ?任务并行处理打包
const buildTask = parallel(htmlTask, cssTask, jsTask)

// ?串行注入
const finialTask = series(buildTask, injectTask)

// ?搭建本地服务器
const bs = browserSync.create()
const serve = () => {
  bs.init({
    port: 8080,
    open: true,
    files: './dist/*',
    server: {
      baseDir: './dist'
    }
  })
}

const serveTask = series(finialTask, serve)


module.exports = {
  finialTask,
  serveTask
}

exports.default = () => {
  watch('./src/**/*', finialTask)
}