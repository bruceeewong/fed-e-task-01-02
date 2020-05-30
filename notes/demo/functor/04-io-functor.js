// IO 函子
// 封装不纯的操作

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

// 调用
const r = IO.of(process).map((p) => p.execPath);
console.log(r);
console.log(r.value());
