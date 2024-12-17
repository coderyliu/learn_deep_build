module.exports = function (content, sourceMap, meta) {
  // ?loader的执行顺序是从右向左执行的（从下到上）
  // ?如果想要从左向右执行，可以使用pitch - pitch的执行顺序是从左向右执行的（从上到下）
  // console.log(content, sourceMap, meta);
  // return content + "ly_loader_3";

  // 如果我们想要在loader中进行异步操作呢？
  // setTimeout(() => {
    // *可以发现，webpack在异步操作中，不会等待异步操作完成之后再执行下一个loader
  //   console.log("ly_loader_3");
  //   return content;
  // }, 2000);

  // 如果想要在loader中进行异步操作，可以使用this.async()
  // *使用了this.async()之后，该loader被称为异步loader
  // *没有使用this.async()的loader被称为同步loader
  const callback = this.async();
  setTimeout(() => {
    // *可以发现，通过this.async(), webpack在异步操作中，会等待异步操作完成之后再执行下一个loader
    console.log("ly_loader_3");
    callback(null, content);
  }, 2000);

  // return content;
};

// *loader的执行顺序为什么是相反的
// run-loader先优先执行PitchLoader，在执行PitchLoader时进行loaderIndex++；
// run-loader之后会执行NormalLoader，在执行NormalLoader时进行loaderIndex--；

// module.exports.pitch = function () {
//   console.log("loader-03");
// };
