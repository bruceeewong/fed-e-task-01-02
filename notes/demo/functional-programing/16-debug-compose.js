//　调试函数组合

const _ = require("lodash");

// 定义 log 纯函数
const log = (tag, val) => {
  console.log(tag, val);
  return val;
};

const split = _.curry((separator, str) => _.split(str, separator));

const join = _.curry((separator, arr) => _.join(arr, separator));

const map = _.curry((fn, arr) => _.map(arr, fn));

const trace = _.curry((tag, val) => log(tag, val));

const f = _.flowRight(
  join("-"),
  trace("map之后"),
  map(_.toLower),
  trace("split之后"),
  split(" ")
);

console.log(f("NEVER SAY DIE"));
