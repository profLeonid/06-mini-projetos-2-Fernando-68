'use strict'

const tabuadaCompleta = () => {
    const numero = Number(document.getElementById("numero").value)
    const tabelaBody = document.getElementById("tabelaBody")

    tabelaBody.innerHTML = ""

    if(isNaN(numero || numero < 1 || numero == "")){
        console.log("Digite um numero valido entre 1 e 10.")
        tabelaBody.innerHTML = `
        <tr>
        <td colspan="5"> Digite um número válido entre 1 e 10.</td>
        <tr>
        `
        return
    }

   

    for(let i = 1; i <= 10; i++){
        const linha = `
        <tr>
        <td>${i}</td>
        <td>${numero + i}</td>
        <td>${numero - i}</td>
        <td>${numero * i}</td>
        <td>${(numero / i).toFixed(2)}</td>
        `

        tabelaBody.innerHTML+= linha
    }
}
