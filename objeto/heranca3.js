const pai = { nome: 'Pedro', corCabelo: 'preto' } 

const filha1 = Object.create(pai)
filha1.nome = 'Ana' 
console.log(filha1.nome) // Ana
console.log(filha1.corCabelo) // preto
console.log(filha1.__proto__ === pai) // true

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})                                          
console.log(filha2.nome) // Bia
console.log(filha2.corCabelo) // preto
filha2.nome = 'Carla' // não vai alterar por causa do writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preto

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // [ 'nome' ]

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}