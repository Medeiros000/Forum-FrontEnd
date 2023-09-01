document.addEventListener("DOMContentLoaded", function() {
    const usuarios = document.getElementById('usuarios');
    if (usuarios) {
        usuarios.onclick = getUsuarios;
    }

    const topicos = document.getElementById('topicos');
    if (topicos) {
        topicos.onclick = getTopicos;
    }

    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        console.log("logout");
        logoutButton.onclick = logout;
    };

    const resposta = document.getElementById('resposta');

});


function handleSuccessfulLogin(token) {
    // Armazene o token no localStorage
    localStorage.setItem("jwtToken", token);
}

function cadastro() {
    // get value from input 
    const nome = document.getElementById('nome').value;     
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    // create a new request object
    const request = new Request('https://forum-api-jr.up.railway.app/usuarios', {
        method: 'POST',
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    // pass request object to `fetch()`
    fetch(request)
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log(err);
        });
}


function getUsuarios() {
    console.log("getUsuarios");
    // get token from localStorage
    const token = localStorage.getItem("jwtToken");
    // create a new request object
    const request = new Request('https://forum-api-jr.up.railway.app/usuarios', {
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
            resposta.innerHTML = JSON.stringify(json);
        })
        .catch(err => {
            console.log(err);
        });
}

function getTopicos() {
    console.log("getTopicos");
    // get token from localStorage
    const token = localStorage.getItem("jwtToken");
    // create a new request object
    const request = new Request('https://forum-api-jr.up.railway.app/topicos', {
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
            resposta.innerHTML = JSON.stringify(json);
        })
        .catch(err => {
            console.log(err);
        });
}

function logout() {
    localStorage.removeItem("jwtToken");
    resposta.innerHTML = "Logout realizado com sucesso!";
    console.log("logout");
}


