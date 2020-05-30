// point free　只合成运算过程

const fp = require("lodash/fp");

// "Hello     World" => "hello_world"
const str = "Hello     World";
const f = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);

console.log(f(str));
