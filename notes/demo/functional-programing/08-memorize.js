// 记忆函数
const _ = require('lodash');

function getArea(r) {
  console.log(r); // 缓存后，只调用一次
  return Math.PI * r * r;
}

(function () {
  let getAreaWithMemory = _.memoize(getArea); // 缓存结果
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
})();

// 实现缓存函数
function memoize(fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  };
}

(function () {
  let getAreaWithMemory = memoize(getArea); // 缓存结果
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
  console.log(getAreaWithMemory(4));
})();
