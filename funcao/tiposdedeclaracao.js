//function declaration
function soma(x, y) {
  return x + y;
}
console.log(soma(1, 2));

//function expression
const sub = function (x, y) {
  return x - y;
}
console.log(sub(1, 2));

//named function expression
const mult = function mult(x, y) {
  return x * y;
}
console.log(mult(1, 2));

//arrow function
const div = (x, y) => {  return x / y; }
console.log(div(1, 2));

//arrow function (simplificada)
const div2 = (x, y) => x / y;
console.log(div2(1, 2));