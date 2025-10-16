//exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { // funcao anonima como callback
    console.log('O evento ocorreu!')
}

document.getElementsByTagName('body')[0].onclick = e => console.log('O evento ocorreu!') // arrow function como callback

//exemplo de callback no node
const http = require('http') // importando o modulo http
http.createServer((req, res) => { // arrow function como callback
    res.write('Bom dia!') // escrevendo na resposta
    res.end() // finalizando a resposta
}).listen(8080) // ouvindo a porta 8080

//para testar, acessar http://localhost:8080 no navegador
//ou executar no terminal: curl http://localhost:8080
//para parar o servidor, usar Ctrl + C no terminal
//ou usar o gerenciador de tarefas para finalizar o processo node
//ou usar o gerenciador de tarefas para finalizar o processo node
//ou usar o comando kill no terminal para finalizar o processo node
