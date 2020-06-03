// folktale

const { compose, curry } = require("folktale/core/lambda");
const { toUpper, first } = require("lodash/fp");
const MayBe = require("folktale/maybe");

(function () {
  // what is arity
  let f = curry(2, (x, y) => {
    return x + y;
  });

  console.log(f(1, 2));
  console.log(f(1)(2));
})();

(function () {
  let f = compose(toUpper, first);
  console.log(f(["a", "b", "c"]));
})();

(function () {
  const toRMB = (s) =>
    MayBe.of(s)
      .map((s) => s.replace(/\$/, ""))
      .map((s) => s * 7)
      .map((s) => s.toFixed(2))
      .getOrElse("nothing");

  console.log(toRMB("$299.99"));
})();
