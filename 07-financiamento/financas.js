function simular(){
    const valorTotal = parseFloat(document.getElementById("valor").value)
    const taxa = parseFloat(document.getElementById("taxa").value)
    const parcelas = parseInt(document.getElementById("parcelas").value)
    const tabela = document.getElementById("tabelaBody")

    if(isNaN(valorTotal) || isNaN(taxa) || isNaN(parcelas) || parcelas <= 0){
        alert("Preencha corretamente!")
        return
    }

    tabela.innerHTML = ""

    const parcela = valorTotal / parcelas
    let saldoDevedor = valorTotal

    for (let mes = 1; mes <= parcelas; mes++){

        const jurosMes = saldoDevedor * (taxa/100)
        const totalMes = parcela + jurosMes

        saldoDevedor -= parcela

        const linha = document.createElement("tr")

        linha.innerHTML = `
        <td>R$ ${mes}</td>
        <td>R$ ${parcela.toFixed(2)}</td>
        <td>R$ ${jurosMes.toFixed(2)}</td>
        <td>R$ ${totalMes.toFixed(2)}</td>
        <td>R$ ${saldoDevedor.toFixed(2)}</td>
        `
        tabela.appendChild(linha)
    }
}