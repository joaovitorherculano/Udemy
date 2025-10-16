class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    } 
}

const p1 = new Pessoa('João', 30);
p1.falar();

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} 

const p2 = CriarPessoa('Maria');
p2.falar();