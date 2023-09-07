
document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confSenha = document.getElementById("confirmarSenha").value;
    const resposta = document.getElementById("resposta");
    if (nome == "" || email == "" || senha == "" || confSenha == "") {
        document.getElementById("resposta").innerHTML = "Preencha todos os campos.";
        return;
    }
    if (senha != confSenha) {
        document.getElementById("resposta").innerHTML = "Senhas não conferem.";
        return;
    }

    const data = ({
        "nome": nome,
        "email": email,
        "senha": senha
    });
    console.log(data);
    fetch('https://forum-api-jr.up.railway.app/usuarios', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            resposta.innerHTML = "Usuário enviado com sucesso!";
        })
        .catch(error => {
            resposta.innerHTML = "Erro ao enviar formulário.";
        });
});
const input = document.querySelector('#senha');
const img = document.querySelector('#olho2');
img.addEventListener('click', function () {
    input.type = input.type == 'text' ? 'password' : 'text';
});

const input2 = document.querySelector('#confirmarSenha');
const img2 = document.querySelector('#olho3');
img2.addEventListener('click', function () {
    input2.type = input2.type == 'text' ? 'password' : 'text';
});