// 柯里化demo
// function checkAge(min, age) {
//   return function (age) {
//     return age >= min
//   }
// }

const checkAge = (min) => (age) => age >= min;

const checkAge18 = checkAge(18);
const checkAge20 = checkAge(20);

console.log(checkAge18(20));
console.log(checkAge20(19));
