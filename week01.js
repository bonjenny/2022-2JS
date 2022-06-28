// normal JS function
function myFnc() {
  ...
}
// or
var myFnc() = function() {
  ...
}

// arrow function
const myFnc = () => {
  ...
}

function printMyName(name) {
  console.log(name);
}
printMyName('Max');


const printMyName1 = (name) => {
  console.log(name);
}
printMyName1('Max');


// 인수가 1개인 경우
const printMyName2 = name => {
  console.log(name);
}
printMyName2('Max');


// 인수가 0개인 경우 - 빈 괄호쌍 무조건 입력
const printMyName3 = () => {
  console.log('Max');
}
printMyName3();


// 인수가 2개인 경우
const printMyName4 = (name, age) => {
  console.log(name, age);
}
printMyName4('Max', 28);
