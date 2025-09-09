// novo recurso do ES2015   
const pessoa = {
    nome: 'Ana',
    idade: 5,  
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

const { nome, idade } = pessoa // tirando de dentro do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // tirando de dentro do objeto pessoa e renomeando
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // tirando de dentro do objeto pessoa e atribuindo valor padrão
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // tirando de dentro do objeto pessoa e de dentro do objeto endereco
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa // tirando de dentro do objeto pessoa e de dentro do objeto conta
console.log(ag, num) // Erro! conta não existe!