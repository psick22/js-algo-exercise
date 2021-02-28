function solution(array, commands) {
  return commands.map(command => {
    let [i, j, k] = command;
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// commands : [i, j, k]
// return : [5, 6, 3]
