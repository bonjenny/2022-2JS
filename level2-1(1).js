function solution(N, road, K) {
  var answer = 0;
  let ans = new Set();
  ans.add(1);

  //1. 1번 마을과 바로 연결
  for (var i in road) {
      if (road[i][0] == 1)
          ans.add(road[i][1]);
      if (road[i][1] == 1)
          ans.add(road[i][0]);
  }
  console.log('ans',ans);

  //2. 다른 마을을 거쳐서 연결
  //아직 선택되지 않은 마을 v찾기
  let vil = new Set();
  for (i=2; i<=N; i++)
      vil.add(i);
  vil = new Set([...vil].filter(x => !ans.has(x)));
  console.log('vil',vil);

  //v와 연결된 마을 vl찾기
  let vl = new Set();
  let dict = {}
  for (vi of vil) {
      for (var i in road) {
          if (road[i][0] == vi) {
              vl.add(road[i][1]);
              dict[road[i][1]] = road[i][2];
              console.log('dict!');
          }
          if (road[i][1] == vi) {
              vl.add(road[i][0]);
              dict[road[i][0]] = road[i][2];
              console.log('dict!');
          }
      }
      //vl이 1번과 연결되었는지 찾기
      for (vli of vl) {
          for (var i in road) {
              if (road[i][0] == vli && road[i][1] == 1) {
                  if (dict[road[i][0]] + road[i][2] <= K){
                      ans.add(vi);
                      console.log('ans!');
                  }
              }
              if (road[i][0] == 1 && road[i][1] == vli) {
                  if (dict[road[i][1]] + road[i][2] <= K){
                      ans.add(vi);
                      console.log('ans!');
                  }
              }
          }
      }
  }

  console.log('ans',ans);
  answer = ans.size;
  return answer;
}