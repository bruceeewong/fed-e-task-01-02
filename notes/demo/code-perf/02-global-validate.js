// 使用全局变量
var i, str;
for (i = 0; i < 1000; i++) {
  str += i;
}
console.log(str);

// 局部作用域
for (let i = 0; i < 1000; i++) {
  let str = "";
  str += i;
}
