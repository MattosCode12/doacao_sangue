let doadores = [];

const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaDoadores");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();

     if (!nome || !email || !idade || !peso || !tipo || !telefone || !cidade || !estado) {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    if (nome.split(" ").length < 2) {
        mensagem.textContent = "Digite nome e sobrenome!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Email inválido!";
        return;
    }

    if (idade < 16) {
        mensagem.textContent = "Idade mínima é 16 anos!";
        return;
    }

    if (peso < 50) {
        mensagem.textContent = "Peso mínimo é 50kg!";
        return;
    }

    if (!/^\d+$/.test(telefone)) {
        mensagem.textContent = "Telefone deve conter apenas números!";
        return;
    }

    
