function fn() {
  const obj1 = {};
  const obj2 = {};

  // 循环引用，引用计数GC无法回收
  obj1.name = obj2;
  obj2.name = obj1;
  return;
}

fn();
