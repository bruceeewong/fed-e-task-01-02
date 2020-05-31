var arr = [1, 2, 3, 4, 5];

// 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// 3
for (let i = arr.length; i > 0; i--) {
  console.log(arr[i]);
}

// 4
for (let i in arr) {
  console.log(arr[i]);
}

// 5
arr.forEach(function (item) {
  console.log(item);
});
