// cadeia de protótipos (prototype chain) 
Object.prototype.attr0 = 'Z' // não faça isso em casa!! 
 
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1, filho.attr2, filho.attr3) // A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) { 
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}   

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super = acessar método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari herda carro
Object.setPrototypeOf(volvo, carro) // volvo herda carro

console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status()) // V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // 300Km/h de 324Km/h 