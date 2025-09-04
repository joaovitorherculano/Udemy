function imprimirSoma(a, b) {
    console.log(a + b)
}   

imprimirSoma(2, 3)
imprimirSoma(2) // NaN      
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ignora os outros valores
imprimirSoma() // NaN                       

// função com retorno
function soma(a, b = 0) { // b = 0 define um valor padrão   
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // NaN