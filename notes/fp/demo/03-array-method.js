// 模拟常用高阶函数

// map
function map(array, fn) {
  const result = [];
  for (let value of array) {
    result.push(fn(value));
  }
  return result;
}

// 测试
(function () {
  let arr = [1, 2, 3, 4];
  arr = map(arr, v => v * v);
  console.log(arr);
})();

// every
function every(array, fn) {
  for (let value of array) {
    if (!fn(value)) {
      return false;
    }
  }
  return true;
}

// 测试
(function () {
  let arr = [9, 12, 14];
  const result = every(arr, v => v > 8);
  console.log(result);
})();

// some
function some(array, fn) {
  for (let value of array) {
    if (fn(value)) {
      return true;
    }
  }
  return false;
}

// 测试
(function () {
  let arr = [9, 12, 14];
  const result = some(arr, v => v > 13);
  console.log(result);
})();
