
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

function login() {
    // get value from input 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; 
    // create a new request object
    const request = new Request('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify({
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

function logout() { 
    // create a new request object
    const request = new Request('http://localhost:3000/api/logout', {
        method: 'POST',
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

// capture the form submit event
document.getElementById('cadastro').addEventListener('click', (event) => {
    // prevent the form from refreshing the page
    event.preventDefault();
    // call `cadastro()`
    cadastro();
});

