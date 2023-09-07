// Enviando a requisição do json
function getTopicos() {
    // Recuperando o token do localStorage
    const token = localStorage.getItem("jwtToken");
    // Criando um novo objeto de requisição
    const request = new Request('https://forum-api-jr.up.railway.app/topicos', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    });
    // Passando o objeto de requisição para o `fetch()`
    fetch(request)
        .then(res => res.json())
        .then(json => {
            console.log(json); // Log do JSON retornado
            criar_elementos(json) // Montando o elemento com o JSON
        })
        .catch(err => {
            const container = document.getElementById("json_container"); // Selecionando a div
            container.innerHTML = err; // Adicionando o erro na div
            console.log(err); // Log do erro
        });
}
getTopicos();

// Montando um corpo para a requisição
function montarDivComJSON(jsonData) {
    const div = document.createElement("div");
    div.className = "json-container"; // Aplicar classe para estilização
    // Itere sobre o array "content" no JSON
    for (const item of jsonData.content) {

        const subDiv = document.createElement("div");
        subDiv.className = "json-sub"; // Aplicar classe para estilização      
        // Crie elementos para cada chave-valor no objeto do array
        for (const chave in item) {
            const p = document.createElement("p");
            p.className = "json-key";
            p.innerHTML = `<span class="json-key">${chave}:</span> <span class="json-value">${item[chave]}</span>`;
            subDiv.appendChild(p);
            if (chave == "id") {
                subDiv.addEventListener("click", function () {
                    request_topico(item[chave]);
                });
            }
        }
        div.appendChild(subDiv);
    }
    return div;
}

function criar_elementos(json) {
    console.log(criar_elementos);
    const container = document.getElementById("json_container");
    container.innerHTML = "";
    // Elemento container
    container.appendChild(montarDivComJSON(json));
}

// Limpa a div e mostra o topico
function view_topico(json) {
    console.log("view_topico");
    const container = document.getElementById("json_container");
    container.innerHTML = "";
    // adicionar um botao que chama de volta os topicos
    const botao = document.createElement("button");
    botao.innerHTML = "Voltar";
    botao.addEventListener("click", function () {
        getTopicos();
    });
    container.appendChild(botao);
    // Elemento container
    container.appendChild(topico_detalhe(json));
}

// Faz a requisição do topico e devolve um json
function request_topico(id) {
    console.log("request_topico");
    // get token from localStorage
    const token = localStorage.getItem("jwtToken");
    // create a new request object
    const request = new Request('https://forum-api-jr.up.railway.app/topicos/' + id, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    });
    // pass request object to `fetch()`
    fetch(request)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            view_topico(json);
        })
        .catch(err => {
            const container = document.getElementById("json-container");
            container.innerHTML = "É necessário estar logado para visualizar os tópicos";
            console.log(err);
        });
}

// view_topico
function topico_detalhe(jsonData) {
    console.log("topico_detalhe");
    const div = document.createElement("div");
    div.className = "json-container"; // Adicione uma classe personalizada para estilização
    console.log("jsonData " + jsonData);
    const subDiv = document.createElement("div");
    div.appendChild(subDiv);
    subDiv.className = "json-sub"; // Aplicar classe para estilização
    for (Object in jsonData) {
        console.log("Object " + Object);
        if (Object == "respostas") {
            for (const item of jsonData[Object]) {
                console.log("item " + item);
                const subDiv = document.createElement("div");
                subDiv.className = "json-sub"; // Aplicar classe para estilização      
                // Crie elementos para cada chave-valor no objeto do array
                for (const chave in item) {
                    const p = document.createElement("p");
                    p.className = "json-key";
                    p.innerHTML = `<span class="json-key">${chave}:</span> <span class="json-value">${item[chave]}</span>`;
                    subDiv.appendChild(p);
                }
                div.appendChild(subDiv);
            }
        } else {
            const p = document.createElement("p");
            p.className = "json-key"; // Aplicar classe para estilização  
            p.innerHTML = `<span class="json-key">${Object}:</span> <span class="json-value">${jsonData[Object]}</span>`;
            subDiv.appendChild(p);
        }
    }
    return div;
}

const voltar = document.getElementById("imgDiv");
voltar.addEventListener("click", function () {
    getTopicos();
});