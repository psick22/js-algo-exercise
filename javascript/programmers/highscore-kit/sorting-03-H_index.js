function solution(citations) {
  let answer = 0;
  citations = citations.sort((a, b) => a - b);
  console.log(citations);
  //배열을 순회면서 마지막 인덱스에서 현재 인덱스를 빼면 현재 인덱스의 인용값보다 많이 인용된 갯수이므로
  // 현재 인덱스에서의 값보다 크거나 같으면 answer에 넣고
  // answer안에 있던 값과 크기 비교
  for (let i = 0; i <= citations[citations.length - 1]; i++) {
    let count = citations.length - i;
    console.log('count', count);
    console.log(i);
  }

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([5, 5, 5, 5]));
// return :  3
