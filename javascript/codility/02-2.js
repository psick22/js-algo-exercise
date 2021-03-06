// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const temp = {};

  A.forEach((item, index) => {
    if (!temp[item]) {
      temp[item] = 1;
    } else {
      //페어는 짝수
      delete temp[item];
    }
  });

  // for (const [key, value] of Object.entries(temp)) {
  //   if (value % 2 === 1) {
  //     answer = parseInt(key);
  //   }
  // }

  return parseInt(Object.keys(temp)[0]);
}

console.log(solution([1, 3, 1, 3, 5]));
