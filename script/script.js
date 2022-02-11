var botaoAdicionar = document.querySelector("#new");
var salvarComecar = document.querySelector("#save");
var novoJogo = document.querySelector("#newgame");

if (botaoAdicionar){
	botaoAdicionar.addEventListener("click", function() {
		window.location.href = "html/input.html";
	});
}

if (salvarComecar) {
	salvarComecar.addEventListener("click", function () {
		window.location.href = "new_game.html";
	});
}

if (novoJogo){
	novoJogo.addEventListener("click", function() {
		window.location.href = "html/new_game.html";
	});
}