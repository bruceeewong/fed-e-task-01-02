class MayBe {
  static of(value) {
    return new MayBe(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value));
  }

  isNothing() {
    return this._value === null || this._value === undefined;
  }
}

(function () {
  // 可以避免Null带来的错误，但不知到是哪里发生了错误
  const result = MayBe.of("Hello World")
    .map((x) => x.toUpperCase())
    .map((x) => null)
    .map((x) => x.split(" "));
  console.log(result);
})();
