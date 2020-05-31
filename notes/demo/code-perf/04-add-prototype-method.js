// 在原型对象上加方法更快

var fn1 = function () {
  this.foo = function () {
    console.log("do something");
  };
};
f1 = new fn1();

var fn2 = function () {};
fn2.prototype.foo = function () {
  console.log("do something");
};

f2 = new fn2();
