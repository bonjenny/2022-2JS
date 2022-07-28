function solution(priorities, location) {
  var answer = location + 1;
  var flag = 0;
  let prior = [...priorities];
  impor = [...new Set(prior.sort((a,b) => b-a))];
  while (priorities.length != 0) {
      if (priorities[0] == impor[0]) {
          if (location == 1) { flag = 1; }
          priorities.shift();
          if (priorities.indexOf(impor[0]) == -1) {
              impor.shift();
          }
      }
      else {
          priorities.push(priorities.shift());
          if (location <= 1) location = priorities.length;
          else location--;
      }
  }
  if (flag != 0) answer = flag;
  else answer = location;
  return answer;
}