'use strict'

const criarListaNumeros = function(quantidade){
    let listaNumeros = []
    for(let i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}

const numerosPares = function(quantidade){
    let listaPar = []
    for(let i = 1; i <= quantidade; i++){
        if(i % 2 === 0){
           listaPar.push(i)
        }
       
    }
}

const numerosImpares = function(quantidade){
    let listaImpar = []
    for(let i = 1; i <= quantidade; i++){
        if(i % 1 === 0){
            listaImpar.push(i)
        }
    }
}

const criarLinha = function(num, par, impar, mult5, pot2){
    
}
console.log(numerosPares(10))
//console.log(criarListaNumeros)