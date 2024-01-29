exports.add = "123";

exports.foo = function () {
  console.log("I am foo");
};

// 如果 module.exports 存在，则导出的是 module.exports
// 否则导出的是 exports
// module.exports = function fun() {
//   console.log("I am fun");
// };
