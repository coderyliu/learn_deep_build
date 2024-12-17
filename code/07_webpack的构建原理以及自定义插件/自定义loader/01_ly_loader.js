module.exports = function (content, sourceMap, meta) {
  // ?loader实际上导出的是一个函数
  // 接受三个参数，分别为
  // 1. content - 经过上一个loader处理返回的源代码内容
  // 2. sourceMap - 源代码的映射信息
  // 3. meta - 元数据
  console.log(content, sourceMap, meta);

  // ? 必须要返回处理后的内容,没有返回就是undefined
  return content;
};

// module.exports.pitch = function () {
//   console.log("loader_01");
// };
