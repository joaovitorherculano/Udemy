console.log(Math.ceil(6.1)) // arredonda para cima
console.log(Math.floor(6.9)) // arredonda para baixo

const obj = {}
obj.nome = 'Bola' // notação ponto 
// obj['nome'] = 'Bola2' // notação colchetes
console.log(obj.nome)   

function Obj(nome) {
    this.nome = nome // notação ponto
    this.exec = function() {
        console.log('Exec...')
    }
}   

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome) 
obj3.exec()