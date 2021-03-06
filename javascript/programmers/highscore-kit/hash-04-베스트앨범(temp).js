function solution(genres, plays) {
  var answer = [];
  const obj = {};
  const plays = {};
  for (let i = 0; i < genres.length; i++) {
    obj2[i] = {
      genres: genres[i],
      plays: plays[i],
    };

    if (!obj[genres[i]]) {
      obj[genres[i]] = {
        totalPlay: plays[i],
        songs: [i],
      };
    } else {
      obj[genres[i]].totalPlay += plays[i];
      obj[genres[i]].songs.push(i);
    }
  }

  // plays 수가 가장 많은 장르를 선택
  // let objGenres = '';

  // Object.values(obj).forEach(item => {
  //   item.plays;
  // });

  const sort = Object.entries(obj).sort(
    ([, a], [, b]) => b.totalPlay - a.totalPlay,
  );

  console.log(sort);
  sort.forEach(item => {
    console.log(item[1].songs);
  });

  // sort.forEach((item, index) => {
  //   let songs = item[1].songs;
  //   answer.push(songs[0]);
  //   answer.push(songs[1]);
  //   console.log(songs);
  // });
  // console.log(answer);
  return answer;
}

solution(
  ['classic', 'pop', 'classic', 'classic', 'pop'],
  [500, 600, 150, 800, 2500],
);

// {1: {genres:'classic',plays:500}
// index -> 고유번호
// return : [4, 1, 3, 0]
// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
