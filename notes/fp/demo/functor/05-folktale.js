// folktale

const { compose, curry } = require("folktale/core/lambda");
const { toUpper, first } = require("lodash/fp");

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
