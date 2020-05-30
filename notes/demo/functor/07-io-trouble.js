// IO 函子的问题
const fs = require("fs");
const fp = require("lodash/fp");

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

  let cat = fp.flowRight(print, readFile);

  const result = cat("../package.json"); // IO(IO(x))
  console.log(result.value().value()); // 嵌套函子就会调用困难
})();
