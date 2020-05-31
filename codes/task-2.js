const { Maybe, Container } = require("./support");
const fp = require("lodash/fp");

// 练习１ 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1
(function () {
  let maybe = Maybe.of([5, 6, 1]);

  // 题目理解：让functor数组元素都增加相同的值
  let ex1 = function (functor, val) {
    // 为函子中的数组元素增加相同的值
    return functor.map((arr) => {
      return fp.map(fp.add(val), arr);
    });
  };

  console.log(ex1(maybe, 100)); // Maybe {_value: [105,106,101]}
})();

// -------------------------------------------------------------

// 练习２: 实现一个函数 ex2, 能够使用 fp.first 获取列表的第一个元素
(function () {
  let xs = Container.of(["do", "ray", "me", "fa", "so", "la", "ti", "do"]);

  let ex2 = function (functor) {
    // 先拿到包含第一个元素的函子，再取出其内部的值返回
    const firstValueFunctor = functor.map((arr) => {
      return fp.first(arr);
    });
    return firstValueFunctor._value;
  };

  console.log(ex2(xs)); // do
})();

// -------------------------------------------------------------

// 练习３: 实现一个函数ex3, 使用 safeProp 和 fp.first 找到 user 的名字首字母
(function () {
  let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x]);
  });
  let user = { id: 2, name: "Albert" };

  // 答案
  let ex3 = function (x, o) {
    // 包装传入的对象和要获取的值到functor中
    const nameFunctor = safeProp(x, o);
    const resultFunctor = nameFunctor.map((val) => {
      return fp.first(val);
    });
    return resultFunctor._value;
  };

  console.log(ex3("name", user)); // A
})();

// -------------------------------------------------------------

// 练习３: 使用Maybe重写ex4,不要有if语句
(function () {
  let ex4 = function (n) {
    if (n) {
      return parseInt(n);
    }
  };

  // 明确原函数的输出,代入js数据类型
  console.log(ex4(11)); // 11
  console.log(ex4(0)); // undefined
  console.log(ex4("a")); // NaN
  console.log(ex4(true)); // NaN
  console.log(ex4(false)); // undefined
  console.log(ex4(undefined)); // undefined
  console.log(ex4(null)); // undefined
  console.log(ex4(new Object())); // NaN

  console.log("---------------------------");
})();

// 答案 1
// 受限于 isNothing　的逻辑,正常解法不能完全模拟输出
(function () {
  let ex4 = function (n) {
    //
    const functor = Maybe.of(n);
    const resultFunctor = functor.map((val) => {
      return parseInt(val);
    });
    return resultFunctor._value;
  };

  console.log(ex4(11));
  console.log(ex4(0)); // 输出不同　0
  console.log(ex4("a"));
  console.log(ex4(true));
  console.log(ex4(false)); // 输出不同　NaN
  console.log(ex4(undefined));
  console.log(ex4(null)); // 输出不同 null
  console.log(ex4(new Object()));
  console.log("---------------------------");
})();
