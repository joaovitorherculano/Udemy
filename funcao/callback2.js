const notas = [7.7, 6.5, 8.9, 9.2, 5.5, 3.6, 4.0, 7.1, 8.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//com callback
const notasBaixas2 = notas.filter(function (nota) { // passando uma funcao anonima como callback
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) // passando uma arrow function como callback
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7 // funcao que retorna true se a nota for menor que 5

const notasBaixas4 = notas.filter(notasMenorQue7) // passando a funcao notasMenorQue5 como callback
console.log(notasBaixas4)