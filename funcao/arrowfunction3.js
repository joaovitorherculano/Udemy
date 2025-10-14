let comparaComThis = function (param) {
    console.log(this === param)
}       

comparaComThis(global) // no node o this aponta para o objeto global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind amarra o this a um objeto
comparaComThis(global)
comparaComThis(obj)

comparaComThis = param => console.log(this === param) // o this em arrow function aponta para o contexto em que a função foi escrita
comparaComThis(global)
comparaComThis(module.exports)

comparaComThis = comparaComThis.bind(obj) // bind não funciona em arrow function
comparaComThis(obj)
comparaComThis(module.exports)