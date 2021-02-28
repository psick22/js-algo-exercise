// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    console.log(char);
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else {
      if (
        (char === ']' && stack[stack.length - 1] === '[') ||
        (char === ')' && stack[stack.length - 1] === '(') ||
        (char === '}' && stack[stack.length - 1] === '{')
      ) {
        stack.pop();
      } else {
        return 0;
      }
    }
    console.log(stack);
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution('{[(()())]}'));
