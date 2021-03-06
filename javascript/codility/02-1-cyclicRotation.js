// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const length = A.length;
  K = K % length;
  for (let i = 0; i < K; i++) {
    A.unshift('k');
  }
  const splice = A.splice(length);

  const newArr = A.map((item, index) => {
    if (item === 'k') {
      return splice[index];
    } else {
      return item;
    }
  });

  return newArr;
}
