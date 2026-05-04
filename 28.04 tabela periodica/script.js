const tabela = document.getElementById("tabela")

colecaoElementos.forEach((elemento) => {
    const celula = tabela.rows[elemento.linha-1].cells[elemento.coluna-1]
    
    celula.innerHTML = `
    <h4>${elemento.numeroAtomico}</h4>
    <h1>${elemento.simbolo}</h1>
    <h2>${elemento.nome}</h2>
    <h3>${elemento.massaAtomica}</h3>
    `
    celula.style.backgroundColor = elemento.corGrupo
    celula._elemento = elemento  // <-- associa o objeto à célula
})

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('mouseover', (event) => {
        const celula = event.currentTarget
        const elemento = celula._elemento
        if (!elemento) return

        document.getElementById("detalhes").innerHTML = `
        <h1>${elemento.nome}</h1>
        `
    })
})