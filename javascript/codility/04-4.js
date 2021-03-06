// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const obj = {};
  let value;

  A.sort((a, b) => a - b);

  A.forEach((item, index) => {
    if (item > 0) {
      if (obj[item]) {
        obj[item] = 2;
      } else {
        obj[item] = 1;
      }
    }
  });
  console.log(obj);
  for (let i = 1; i < 1000001; i++) {
    if (!obj.hasOwnProperty(i)) {
      value = i;
      break;
    }
  }
  let max = parseInt(Object.keys(obj)[Object.keys(obj).length - 1]);
  console.log(value, max);

  // 중복검사
  if (Object.values(obj).indexOf(2) > -1) {
    return 0;
  }

  if (value > max) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution([1, 1]));
