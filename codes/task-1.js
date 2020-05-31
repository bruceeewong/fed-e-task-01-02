const fp = require("lodash/fp");

// 数据
// horsepower 马力, dollar_value　价格, in_stock　库存
const cars = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];

// 练习１:使用函数组合 fp.flowRight()　重新实现下面这个函数
(function () {
  let isLastInStock = function (cars) {
    // 获取最后一条数据
    let last_car = fp.last(cars);
    // 获取最后一条数据的　in_stock　属性值
    return fp.prop("in_stock", last_car);
  };
})();

// 答案:
(function () {
  const isLastInStock = fp.flowRight(fp.prop("in_stock"), fp.last);
  console.log(isLastInStock(cars)); // false
})();

// -------------------------------------------------------------

// 练习２　使用 fp.flowRight, fp.prop, fp.first获取第一个car的name
// 答案:
(function () {
  const getFirstCarName = fp.flowRight(fp.prop("name"), fp.first);
  console.log(getFirstCarName(cars)); // Ferrari FF
})();

//  -------------------------------------------------------------

// 练习３：使用帮助函数　_average　重构　averageDollarValue，使用函数组合的方式实现
(function () {
  let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
  }; // <- 无需改动

  let averageDollarValue = function (cars) {
    let dollar_values = fp.map(function (car) {
      return car.dollar_value;
    }, cars);
    return _average(dollar_values);
  };
})();

// 答案
(function () {
  let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
  }; // <- 无需改动

  const getCarDollar = (car) => car.dollar_value;

  const averageDollarValue = fp.flowRight(_average, fp.map(getCarDollar));
  console.log(averageDollarValue(cars)); // 790700
})();

// 练习４：使用 flowRight 写一个 sanitizeNames　的函数，返回一个下划线连接的消协字符串
// 把数组中的name转换为这种形式，例如 sanitizeNames(["Hello World"]) => ["hello_world"]
(function () {
  const input = ["Hello World"];

  const _underscore = (str) => str.replace(/\W+/g, "_");

  const lowerAndUnderscore = fp.flowRight(_underscore, fp.toLower);

  const sanitizeNames = fp.map(lowerAndUnderscore);

  console.log(sanitizeNames(input));
})();
