// reference count

const user1 = { age: 11 };
const user2 = { age: 11 };
const user3 = { age: 11 };

const nameList = [user1.age, user2.age, user3.age];

function fn() {
  num1 = 1; // 运行完引用计数不为０
  const num2 = 2; // 运行完引用计数为０
}

fn();
