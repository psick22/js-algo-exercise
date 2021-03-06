function solution(numbers, target) {
  let answer = 0;

  // 재귀, 트리 (left: + , right: -)
  const count = (idx, cal) => {
    if (idx === numbers.length) {
      if (cal === target) {
        answer++;
      }
      return;
    }

    count(idx + 1, cal + numbers[idx]);
    count(idx + 1, cal - numbers[idx]);
  };

  count(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
