// 纯函数和不纯的函数

// slice & splice

(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 每次调用输出都相同，是纯函数
  console.log(arr.slice(0, 3));
  console.log(arr.slice(0, 3));
  console.log(arr.slice(0, 3));

  // 相同输入，不同输出，不是纯函数
  console.log(arr.splice(0, 3));
  console.log(arr.splice(0, 3));
  console.log(arr.splice(0, 3));
})();

// 纯函数
function getSum(n1, n2) {
  return n1 + n2;
}
