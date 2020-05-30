// 副作用
let age = 18;
// 依赖外部，所以不纯，有副作用
function orderThan(yourAge) {
  return yourAge > age;
}
