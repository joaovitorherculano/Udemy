const soma = function (x, y) {
    return x + y
}


const imprimirResultado = function (a, b, operacao = soma) {  
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // se nao passar a funcao, assume a funcao soma
imprimirResultado(3, 4, soma) // passando a funcao soma 
imprimirResultado(3, 4, function (x, y) { // passando uma funcao anonima
    return x - y
}) 

imprimirResultado(3, 4, (x, y) => x * y) // passando uma arrow function

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar() // chamando a funcao falar do objeto pessoa

const pessoa2 = {
    falar() { // sintaxe reduzida para declarar uma funcao dentro de um objeto
        console.log('Epa')
    }
}
pessoa2.falar() // chamando a funcao falar do objeto pessoa2