let obj = { name: "xm" };
let ali = obj; // 引用
obj = null; // 即使清除obj, ali还引用着，所以内存不会被清除
