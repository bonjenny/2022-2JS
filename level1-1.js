function solution(n) {
  var answer = 0;
  if(Number.isInteger(Math.sqrt(n)) && Math.sqrt(n) > 0) {
      answer = (Math.sqrt(n)+1) ** 2
  }
  else {
      answer = -1
  }
  return answer;
}