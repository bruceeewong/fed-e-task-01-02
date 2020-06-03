// Either 函子
// 用于异常处理

class Left {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Left(value);
  }

  map(fn) {
    return this;
  }
}

class Right {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Right(value);
  }

  map(fn) {
    return Right.of(fn(this._value));
  }
}

(function () {
  const r1 = Right.of(12).map((x) => x + 2);
  const r2 = Left.of(12).map((x) => x + 2);

  console.log(r1);
  console.log(r2);
})();

function parseJSON(str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (e) {
    return Left.of({ error: e.message });
  }
}

(function () {
  const r1 = parseJSON("{ name: zs }");
  console.log(r1);

  const r2 = parseJSON(`{ "name": "zs" }`);
  console.log(r2);
})();
