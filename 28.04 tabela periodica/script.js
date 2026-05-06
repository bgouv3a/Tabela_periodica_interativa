const tabela = document.getElementById("tabela")

colecaoElementos.forEach((elemento) => {
    const quadrado = tabela.rows[elemento.linha-1].cells[elemento.coluna-1]
    
    quadrado.innerHTML = `
    <h4>${elemento.numeroAtomico}</h4>
    <h1>${elemento.simbolo}</h1>
    <h2>${elemento.nome}</h2>
    `
    quadrado.style.backgroundColor = elemento.corGrupo
    quadrado._elemento = elemento  
})

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('mouseover', (event) => {
        const quadrado = event.currentTarget
        const elemento = quadrado._elemento
        if (!elemento) return
        //detalhes do painel
        document.getElementById("painel-simbolo").style.backgroundColor = elemento.corGrupo
        document.getElementById("info-nome").textContent = elemento.nome
        document.getElementById("info-simbolo").textContent = elemento.simbolo
        document.getElementById("info-numero").textContent = elemento.numeroAtomico
        document.getElementById("info-massa").textContent = elemento.massaAtomica
        document.getElementById("info-td-config").textContent = elemento.configuracaoEletronica
        //quadrado grande do painel
        document.getElementById("info-td-simbolo").textContent = elemento.simbolo
        document.getElementById("info-td-numero").textContent = elemento.numeroAtomico
        document.getElementById("info-td-massa").textContent = elemento.massaAtomica
       
        Object.entries(coresPorGrupo).forEach(([grupo, cor]) => {
            const item = document.createElement('div')
            item.innerHTML = `
                <span style="background-color: ${cor}"></span>
                <p>${grupo}</p>
            `
            legenda.appendChild(item)
        })
    })
})

