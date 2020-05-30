// 演示lodash
const _ = require('lodash');

const arr = ['jack', 'tom', 'lucy', 'kate'];

console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.toUpper(_.first(arr)));

console.log(_.reverse(arr)); // ? 纯函数
console.log(arr); // 修改了原数组

const res = _.each(arr, function (item, index) {
  console.log(item, index);
});
