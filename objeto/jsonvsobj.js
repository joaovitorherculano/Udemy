const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Erro de sintaxe
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":{"d1":4,"d2":5}}')) // { a: 1, b: 2, c: 3, d: { d1: 4, d2: 5 } }
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":[5,6,7]}')) // { a: 1, b: 2, c: 3, d: [ 5, 6, 7 ] }
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":[{"d1":4},{"d2":5}]}')) // { a: 1, b: 2, c: 3, d: [ { d1: 4 }, { d2: 5 } ] }
