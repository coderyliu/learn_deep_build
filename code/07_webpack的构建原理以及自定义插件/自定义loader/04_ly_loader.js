const { validate } = require("schema-utils");
const schema = require("./schema/04_loader_schema.json");

module.exports = function (content) {
  console.log("ly_loader_4", content);
  // ?如何给loader传递参数以及如何获取参数
  // 1. 给loader传递参数： 在webpack.config.js中配置loader时，在loader后面添加参数options
  // 2. 获取参数： 在loader中，通过this.getOptions()获取参数
  // 3. 使用参数

  // ?如何校验参数呢？
  // 1. 使用schema-utils库
  // 2. 在loader中，通过this.getOptions()获取参数
  // 3. 使用schema-utils库校验参数

  const options = this.getOptions();
  console.log(options);
  validate(schema, options);

  return content;
};
