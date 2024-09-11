function searchButton(){
    let section = document.getElementById("resultados-pesquisa");
    let results = "";

    for (let dado of dados) {
        results += `
        <div class="item-resultado">
            <h2>${dado.title}</h2>
            <p class="descricao-meta">${dado.description}</p>
            <a href=${dado.url} target="_blank">Mais informações</a>
        </div>
        `
    };

    section.innerHTML = results;
}