// lodash 组合函数 flowRight

const _ = require("lodash");

const getLastUpper = _.flowRight(_.toUpper, _.first, _.reverse); // 从右向左

const arr = ["a", "b", "c"];

console.log(getLastUpper(arr));
