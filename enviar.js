// document.getElementById("meuFormulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita o comportamento padrão do formulário
    
//     // Pega os valores dos campos
//         let nome = document.getElementById("nome").value;
//         let email = document.getElementById("email").value;
//         let senha = document.getElementById("senha").value;
//         console.log("nome: " + nome + " email: " + email + " senha: " + senha);
//         console.log("teste");
//     // Monta o objeto de dados para enviar
//         let data = {
//         nome: nome,
//         email: email,
//         senha: senha
//     };
    
//     // Envia a requisição POST usando AJAX
//         let xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://forum-api-jr.up.railway.app/usuarios", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 document.getElementById("resposta").innerHTML = "Formulário enviado com sucesso!";
//             } else {
//                 document.getElementById("resposta").innerHTML = "Erro ao enviar formulário.";
//             }
//         }
//     };
    
//     xhr.send(JSON.stringify(data));
// });

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value; 
    
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
        document.getElementById("resposta").innerHTML = "Formulário enviado com sucesso!";
    })
    .catch(error => {
        document.getElementById("resposta").innerHTML = "Erro ao enviar formulário.";
    });
});