function returnReg(str) {
  return RegExp('/[^'+str+']/gi');
}
function solution(skill, skill_trees) {
  var answer = 0;
  for (var i=0; i<skill_trees.length; i++) {
      console.log(returnReg(skill));
      skill_trees[i] = skill_trees[i].replace(returnReg(skill), '');
  }
  for (var i=0; i<skill_trees.length; i++) {
      console.log(skill_trees[i]);
      var test_str = '';
      for (var j=0; j<skill_trees[i].length; j++) {
          test_str += skill.indexOf(skill_trees[i][j]);
      }
      var cmp_str = '';
      for (var j=0; j<test_str.length; j++) {
          cmp_str += j;
      }
      console.log(test_str);
      console.log(cmp_str);
      if (test_str == cmp_str) {
          answer += 1;
      }
  }
  return answer;
}