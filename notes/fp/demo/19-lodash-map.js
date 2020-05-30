// lodash　和　lodash/fp　的 map 区别

const _ = require("lodash");
const fp = require("lodash/fp");

(function () {
  console.log(_.map(["23", "6", "10"], parseInt)); // [23,NaN, 2]
  // map会给回调传item, index, arr三个参数
  // 而parseInt第二个参数为代表转换进制, 传１会出错
  // parseInt('23', 0, array)
  // parseInt('23', 1, array)
  // parseInt('23', 2, array)

  // 需要对parseInt柯里化
  const curriedParseInt = _.curry((val) => parseInt(val, 10));
  console.log(_.map(["23", "6", "10"], curriedParseInt)); // 得到预期[23, 6, 2]
})();

(function () {
  // 直接用fp模块的map
  console.log(fp.map(parseInt, ["23", "6", "10"])); // 只会把数组元素带入parseInt
})();
