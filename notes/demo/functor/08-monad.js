// IO Monad 单子，解决IO函子的问题
const fs = require("fs");
const fp = require("lodash/fp");
const { split, find } = require("lodash/fp");

class IO {
  value = null;

  constructor(fn) {
    this.value = fn; // 延迟调用
  }

  static of(value) {
    return new IO(() => {
      return value;
    });
  }

  map(fn) {
    const wrapper = fp.flowRight(fn, this.value); // this.value是函数
    return new IO(wrapper);
  }

  join() {
    return this.value(); // 取值
  }

  flatMap(fn) {
    return this.map(fn).join(); // 将结果函子内部的值取出
  }
}

(function () {
  let readFile = function (filename) {
    return new IO(function () {
      return fs.readFileSync(filename, "utf-8");
    });
  };

  let print = function (x) {
    return new IO(function () {
      console.log(x);
      return x;
    });
  };

  let result = readFile("../package.json")
    .map(split("\n"))
    .map(find((x) => x.includes("version")))
    .flatMap(print)
    .join(); // 函子内部实现
})();
