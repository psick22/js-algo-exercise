// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let max = 0;
  let temp = 0;

  // 처음부터 더하는 값이 음수가 되지 않는 한 계속 더하는것이 max
  const sum = A.reduce((acc, cur) => {
    temp = acc + cur;
    // 두수를 더한 값이 0 이하가 되면 acc에 0을 반환 -> 새로운 시작
    if (temp < 0) {
      return 0;
    }

    // temp가 max보다 작으면 acc에 temp를 반환
    if (temp < max) {
      return temp;
    }
    // 이외의 경우 (temp가 max보다 커지면) max를 temp로 바꾸고 acc 에 max를 반환
    max = temp;
    return max;
  }, 0);

  return max === 0 ? Math.max(...A) : max;
}

// maximum sum of any slice of A
// A = [3, 2, -6, 4, 0]

console.log(solution([1, -2, 2, 1]));
