// ?用webpack结合gulp处理gulp不能实现模块化的缺陷
// ?既然已经使用webpack了，那干嘛不直接使用webpack，所以做个了解，怎么解决模块化就可以了
// ?学习了webpack我们就知道，处理相应的资源有相应的插件
// todo 比如：reactjsx语法 -- @babel/preset-react
// todo ES6+ ==> ES5 babel-loader @babel/preset-env
// todo js压缩 gulp-terser css压缩 gulp-minify
// todo html压缩 terser
// todo ts babel-loader @babel/preset-typescript
// todo polyfill core-js regenerator-runtime
// todo vue 插件 利用loader
// todo 图片资源 利用webpack的loader

// *总之 gulp是一个自动化工具，webpack是一个静态资源模块化打包工具，webpack在模块化打包上更成熟完善，效率更高
// *当然，在以前的项目中我们通过gulp去打包，结合webpack或者browserify也是可以实现模块化的

const gulp = require('gulp');
const webpack = require('webpack-stream');
// const del = require('del');

const paths = {
  src: {
    js: 'src/**/*.js',
    css: 'src/**/*.css',
    html: 'src/index.html',
  },
  dest: 'dist',
};

// function clean() {
//   return del([paths.dest]);
// }

function js() {
  return gulp
    .src(paths.src.js)
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'js/app.js',
        },
        module: {
          rules: [{
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env'],
                    ['@babel/preset-react', {
                      "runtime": "automatic"
                    }]
                  ],
                },
              },
            },
            {
              test: /\.(jpg|jpeg|gif|png|svg)$/,
              type: "javascript/auto",
              use: {
                loader: 'url-loader',
                options: {
                  limit: 1024 * 10,
                  name: 'img/[hash:10].[ext]',
                  esModule: false
                }
              }
            }
          ],
        },
      })
    )
    .pipe(gulp.dest(paths.dest));
}

function css() {
  return gulp.src(paths.src.css).pipe(gulp.dest(`${paths.dest}`));
}

function html() {
  return gulp.src(paths.src.html).pipe(gulp.dest(paths.dest));
}

function watch() {
  gulp.watch(paths.src.js, js);
  gulp.watch(paths.src.css, css);
  gulp.watch(paths.src.html, html);
}

// exports.clean = clean;
exports.js = js;
exports.css = css;
exports.html = html;
exports.watch = watch;

exports.default = gulp.series(gulp.parallel(js, css, html), watch);