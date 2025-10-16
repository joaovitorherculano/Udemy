const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}   

fabricantes.forEach(imprimir) // passando a funcao imprimir como callback
fabricantes.forEach(function (a) { // passando uma funcao anonima como callback
    console.log(a)
})
 