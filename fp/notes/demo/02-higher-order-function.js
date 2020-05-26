// 高阶函数-函数作为返回值

function makeFn() {
  let msg = 'Hello function';
  return function () {
    console.log(msg);
  };
}

// 测试
(function () {
  const fn = makeFn();
  fn();
})();

// 模拟 Lodash once方法
function once(fn) {
  let done = false;

  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}

// 测试
(function () {
  const pay = once(function (money) {
    console.log(`支付了 ${money} RMB`);
  });

  // 多次调用，只执行一次
  pay(5);
  pay(5);
  pay(5);
})();
