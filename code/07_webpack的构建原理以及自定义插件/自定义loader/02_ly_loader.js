module.exports = function (content, sourceMap, meta) {
  console.log(content, sourceMap, meta);
  return content + "ly_loader_2";
};

// module.exports.pitch = function () {
//   console.log("loader_02");
// };
