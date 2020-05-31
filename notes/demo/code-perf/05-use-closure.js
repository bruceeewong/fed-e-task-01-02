// 定义具名闭包比匿名闭包效率高

function test(fn) {
  console.log(fn());
}

function test2() {
  return "aaa";
}

test(function () {
  return "aaa";
});

test(test2);
