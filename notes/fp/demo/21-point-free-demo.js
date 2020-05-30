// point free　案例

// "world wide web" => "W. W. W"
const fp = require("lodash/fp");
const str = "world wide web";

const firstLetterToUpper = fp.flowRight(
  fp.join(". "),
  fp.map(fp.flowRight(fp.toUpper, fp.first)),
  // fp.map(fp.toUpper),
  // fp.map(fp.first),
  fp.split(" ")
);

console.log(firstLetterToUpper(str));
