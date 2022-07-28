function solution(new_id) {
  var answer = '';
  //1단계
  answer = new_id.toLowerCase();
  
  //2단계
  var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
  answer = answer.replace(reg,'');
  
  //3단계
  while (answer.includes('..'))
      answer = answer.replace('..','.');
  
  //4단계
  if (answer.substr(0,1) == '.')
      answer = answer.substr(1);
  if (answer.substr(-1) == '.')
      answer = answer.slice(0,-1);
  
  //5단계
  if (answer.length == 0)
      answer = 'a';
  
  //6단계
  if (answer.length >= 16)
      answer = answer.slice(0,15);
  if (answer.substr(-1) == '.')
      answer = answer.slice(0,-1);
  
  //7단계
  if (answer.length <= 2) {
      while (answer.length != 3) {
          answer = answer + answer.substr(-1);
      }
  }
  return answer;
}