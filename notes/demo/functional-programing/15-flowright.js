// 模拟 lodash flowRight

function flowRight(...args) {
  return function (value) {
    // 从后向前，将处理结果reduce叠加
    return args.reverse().reduce((acc, fn) => {
      return fn(acc);
    }, value); // 初始值为value
  };
}

const toUpper = (val) => val.toUpperCase();
const first = (arr) => arr[0];
const reverse = (arr) => arr.reverse();

const getLastUpper = flowRight(toUpper, first, reverse); // 从右向左

const arr = ["a", "b", "c"];

console.log(getLastUpper(arr));
