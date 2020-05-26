// 高阶函数-函数作为参数

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}

// 测试
(function () {
  let arr = [1, 3, 4, 7, 8];

  forEach(arr, function (item) {
    console.log(item);
  });
})();

function filter(array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// 测试
(function () {
  let arr = [1, 3, 4, 7, 8];

  const result = filter(arr, function (item) {
    return item % 2 === 0;
  });
  console.log(result);
})();
