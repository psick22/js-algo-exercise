// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  let count = 0;
  // 이전 높이(스택의 마지막)보다 현재높이가 높으면 새로운 블록이 필요하므로 카운트 증가하고 스택에 추가
  // 이전 높이 보다 현재 높이가 낮으면 앞에있던 블록은 더이상 이어지지 못하므로 스택에서 삭제(현재 높이 보다 낮아질때까지지)

  //
  for (let i = 0; i < H.length; i++) {
    // 스택에 데이터가 존재하고 마지막 스택이 현재 높이 보다 높을 때 -> 현재높이보다 낮아질때까지 삭제
    while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }
    // 스택에 데이터가 없거나 마지막 스택이 현재 높이 보다 낮다면 블록이 추가되야하므로 스택에 추가하고 count ++
    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      count++;
    }
  }
  return count;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
