// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  // X+ D * count > Y

  return Math.ceil((Y - X) / D);
}

console.log(solution(1, 6, 2));
