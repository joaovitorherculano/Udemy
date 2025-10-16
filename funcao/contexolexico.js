const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}      

function exec() {
    const valor = 'Local'
    minhaFuncao()
}   
exec() // 'Global' - contexto léxico (onde a função foi declarada)

// Se a função fosse declarada dentro de exec(), o valor impresso seria 'Local'