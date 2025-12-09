// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // Não vai funcionar
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true1    
pessoa.sobrenome = 'Silva' // Não vai funcionar
delete pessoa.nome // Não vai funcionar
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
const carro = { modelo: 'Gol', ano: 2019 }
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro)) // Congelado: true
carro.modelo = 'Vectra' // Não vai funcionar
delete carro.ano // Não vai funcionar
console.log(carro)


