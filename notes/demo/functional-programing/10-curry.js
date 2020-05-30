const _ = require("lodash");

function getSum(a, b, c) {
  return a + b + c;
}

(function () {
  const curried = _.curry(getSum);

  console.log(curried(1, 2, 3));
  console.log(curried(1)(2, 3));
  console.log(curried(1)(2)(3));
})();

(function () {
  /**
   * 模拟实现curry函数
   * @param {*} fn
   */
  function curry(fn) {
    return function curriedFn(...args) {
      // 终止条件：传入的参数数量大于等于定义的形参个数
      if (args.length >= fn.length) {
        return fn(...args); // 返回执行结果
      }
      // 如果传入的参数数量小于定义的形参个数
      // 返回包裹了前面参数的函数，接受剩余的参数
      return function (...restArgs) {
        return curriedFn(...args, ...restArgs);
      };
    };
  }

  const curried = curry(getSum);

  console.log(curried(1, 2, 3));
  console.log(curried(1)(2, 3));
  console.log(curried(1)(2)(3));
})();
