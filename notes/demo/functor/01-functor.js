// Functor 函子

class Container {
  constructor(value) {
    this._value = value;
  }

  // 避免 new, 函数式变成思想
  static of(value) {
    return new Container(value);
  }

  map(fn) {
    return new Container(fn(this._value)); // 返回新的函子, 新容器初始值为执行了回调的结果
  }
}

(function () {
  // const result = new Container(5).map((x) => x + 1).map((x) => x * x);
  const result = Container.of(5)
    .map((x) => x + 1)
    .map((x) => x * x);
  console.log(result);
})();

(function () {
  // 传null出现不纯的例子, null没有toUpperCase方法
  // const result = Container.of(null).map((x) => x.toUpperCase);
  // console.log(result);
})();

// 把美元转换成人民币　'$299.99' -->
(function () {
  const toRMB = (s) =>
    new Container(s)
      .map((s) => s.replace(/\$/, ""))
      .map((s) => s * 7)
      .map((s) => s.toFixed(2));

  console.log(toRMB("$299.99"));
})();
