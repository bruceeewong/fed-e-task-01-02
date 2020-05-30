// 函数组合演示
function compose(f, g) {
  return function (val) {
    return f(g(val));
  };
}

const reverse = function (array) {
  return array.reverse();
};

const first = function (array) {
  return array[0];
};

const arr = [1, 2, 3, 4, 5];
const getLast = compose(first, reverse);

console.log(getLast(arr));
