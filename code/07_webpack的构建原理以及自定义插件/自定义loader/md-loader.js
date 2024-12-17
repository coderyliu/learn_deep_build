const { marked } = require("marked");
const hls = require("highlight.js");

module.exports = function (content) {
  // 能够识别markdown文件的loader
  // !注意：我们定义了处理markdown文件的loader，但是webpack要求loader必须返回一个模块，而不是字符串

  // 处理代码高亮
  marked.setOptions({
    highlight: function (code, lang) {
      return hls.highlight(lang, code).value;
    }
  });

  // 1. 将markdown文件转换为html文件
  const html = marked(content);
  // console.log(html);
  // 2. 将html文件返回 - 返回一个模块
  const innerContent = "`" + html + "`";
  const moduleContent = `var code = ${innerContent}; export default code;`;

  return moduleContent;
};
