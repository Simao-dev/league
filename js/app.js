function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p> Digite um nome valido</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";
    let rota = "";
    let classe = "";
    let tag = "";
    
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        rota = dado.rota.toLowerCase()
        classe = dado.classe.toLowerCase()
        tag = dado.tag.toLowerCase()

        if (nome.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) || 
            rota.includes(campoPesquisa) ||
            classe.includes(campoPesquisa) ||
            tag.includes(campoPesquisa)) {

                resultados += `
                  <div class="item-resultado">
                    <h2>
                        ${dado.nome}
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h3>extras</h3>
                    <p>Rotas:${dado.rota}</p>
                    <p>Classe:${dado.classe}</p>
                </div>
                `;
        }
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
}