// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  const stack = [];

  for (let i = 0; i < S.length; i++) {
    let char = S[i];

    if (char === '(') {
      stack.push(char);
    } else {
      if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution('(()(())())'));
console.log('----');
console.log(solution('())'));
