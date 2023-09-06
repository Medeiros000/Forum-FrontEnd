function handleSuccessfulLogin(token) {
    // Armazene o token no localStorage
    localStorage.setItem("jwtToken", token);
}

function login() {
    // get value from input 
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const data = ({ "nome": nome, "senha": senha });
    console.log(data);
    // create a new request object
    const request = new Request('https://forum-api-jr.up.railway.app/login', {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    console.log(request);
    // pass request object to `fetch()`
    fetch(request)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            handleSuccessfulLogin(json.token);
            if (json.token == undefined) {
                resposta.innerHTML = "Login não efetuado!"
            } else {
                resposta.innerHTML = "Login efetuado com sucesso!" +
                    '<a href="/index.html">Voltar</a>';
            }
        })
        .catch(err => {
            console.log(err);
        });
}

// montando o elemento com o json na div resposta
const resposta = document.createElement('div');
resposta.setAttribute('id', 'resposta');
document.body.appendChild(resposta);


// capture the form submit event
document.getElementById('loginForm').addEventListener('submit', (event) => {
    // prevent the form from refreshing the page
    event.preventDefault();

    login();
});

const input = document.querySelector('#senha');
const img = document.querySelector('#olho');
img.addEventListener('click', function () {
    input.type = input.type == 'text' ? 'password' : 'text';
});