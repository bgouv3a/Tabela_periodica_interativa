const tabela = document.getElementById("tabela")

colecaoElementos.forEach((elemento) =>{
    tabela.rows[elemento.linha-1].cells[elemento.coluna-1].innerHTML =`
    <h4>${elemento.numeroAtomico}</h4>
    <h1>${elemento.simbolo}</h1>
    <h2>${elemento.nome}</h2>
    <h3>${elemento.massaAtomica}</h3>
    `
})