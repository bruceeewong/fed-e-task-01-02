// 演示lodash
const _ = require("lodash");

const arr = ["jack", "tom", "lucy", "kate"];

console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.toUpper(_.first(arr)));

console.log(_.reverse(arr)); // ? 纯函数
console.log(arr); // 修改了原数组

const res = _.each(arr, function (item, index) {
  console.log(item, index);
});

// 补充: seq.chain
(function () {
  var users = [
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "pebbles", age: 1 },
  ];

  var youngest = _.chain(users)
    .sortBy("age")
    .map(function (o) {
      return o.user + " is " + o.age;
    })
    .head()
    .value();

  console.log(youngest);
})();

// 补充: seq.tap
// 进入方法链序列以便修改中间结果。
(function () {
  const result = _([1, 2, 3])
    .tap(function (array) {
      // 改变传入的数组
      array.pop();
    })
    .reverse()
    .value();
  console.log(result); // => ['abc']
})();

// 补充: seq.thru
// "传递" 值到一个方法链序列以取代中间结果
(function () {
  const result = _("  abc  ")
    .chain()
    .trim()
    .thru(function (value) {
      return [value]; // 有返回值
    })
    .value();
  console.log(result); // => ['abc']
})();
