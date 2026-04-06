let doadores = [];

const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaDoadores");

form.addEventListener("submit", function(e) {
e.preventDefault();