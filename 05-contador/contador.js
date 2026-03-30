'use strict'

document.getElementById("btnGerar").onclick = function() {
    let quantidade = document.getElementById("quantidade").value
    quantidade = Number(quantidade)

    if(!quantidade || isNaN(quantidade) || quantidade <= 0){
        alert("Digite uma quantidade válida")
        return
    }

    if(quantidade > 100){
        alert("Máximo permitido é 100!")
        return
    }

    const par = function(n){
        return n % 2 === 0
    }

    const multiploDe5 = function(n){
        return n % 5 === 0
    }

    const potencia2 = function(n){
        return n * n
    }

    let numeros = []
    let pares = []
    let impares = []
    let multiplos5 = []
    let potencias = []

    for(let i = 1; i <= quantidade; i++){
        numeros.push(i)

        if(par(i)){
            pares.push(i)
        }else{
            impares.push(i)
        }
        if(multiploDe5(i)){
            multiplos5.push(i)
        }
        potencias.push(potencia2(i))
    }

    let tabela = document.getElementById("tabelaBody")

    tabela.innerHTML = ""

    let max = Math.max(
        numeros.length,
        pares.length,
        impares.length,
        multiplos5.length, 
        potencias.length
    )

    for(let i = 0; i < max; i++){
        let linha = "<tr>"

        linha += "<td>" + (numeros[i] || "") + "</td>"
        linha += "<td>" + (pares[i] || "") + "</td>"
        linha += "<td>" + (impares[i] || "") + "</td>"
        linha += "<td>" + (multiplos5[i] || "") + "</td>"
        linha += "<td>" + (potencias[i] || "") + "</td>"

        linha += "</tr>"

        tabela.innerHTML += linha
    }
}

