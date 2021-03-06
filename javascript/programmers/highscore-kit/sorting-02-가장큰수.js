function solution(numbers) {
  let answer = numbers
    .map(number => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join('');
  return answer[0] === '0' ? '0' : answer;
}
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 00, 0, 0, 0]));

// return : "9534330"
