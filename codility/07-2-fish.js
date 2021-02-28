// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  const stack = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      //하류로 가는 물고기 -> stack에 저장
      stack.push(A[i]);
    } else {
      //상류로 가는 물고기 -> 하류로 오는 물고기 만나면 비교 해야함

      while (stack.length > 0) {
        // 하류로 오는 물고기가 끝날 때까지 반복
        // stack[stack.length-1] -> 하류로 오는 물고기 중 가장 먼저 만나는 물고기의 크기
        if (A[i] > stack[stack.length - 1]) {
          stack.pop(); // 잡아먹음
        } else {
          break; // 잡아먹힘
        }
      }
      //잡아먹히지 않았다면(while문 통과했다면) count++ => 상류로 통과한 물고기 수
      if (stack.length === 0) {
        count++;
      }
    }
  }
  return count + stack.length;
}

console.log(solution([4, 3, 1, 2, 5], [0, 1, 0, 0, 0]));
