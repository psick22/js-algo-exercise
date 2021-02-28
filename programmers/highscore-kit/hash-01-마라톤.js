function solution(participant, completion) {
  var answer = '';
  const hash = {};
  participant.forEach(item => {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
  });

  completion.forEach(item => {
    if (hash[item] && hash[item] === 1) {
      delete hash[item];
    } else {
      hash[item]--;
    }
  });
  answer = Object.keys(hash)[0];
  console.log(answer);
  return answer;
}

solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
);
// participant : 마라톤에 참여한 선수들의 이름이 담긴 배열
// completeion : 완주한 선수들의 이름

// return : 완주하지 못한 선수의 이름 (1명)
