var jogadaFactory = require("../model/jogadaFactory");

var juiz = {};
var resultadoDaJogada = { 
	pedra: "pedra",
	papel: "papel",
	tesoura: "tesoura",
	empate: "empate"
};

juiz.analisar = function(jogada1, jogada2) {
	if (jogada1 === "pedra" && jogada2 === "papel")
		return resultadoDaJogada.papel;

	else if (jogada1 === "pedra" && jogada2 === "tesoura")
		return resultadoDaJogada.pedra;

	else if (jogada1 === "papel" && jogada2 === "pedra")
		return resultadoDaJogada.papel;

	else if (jogada1 === "papel" && jogada2 === "tesoura")
		return resultadoDaJogada.tesoura;

	else if (jogada1 === "tesoura" && jogada2 === "pedra")
		return resultadoDaJogada.pedra;

	else if (jogada1 === "tesoura" && jogada2 === "papel")
		return resultadoDaJogada.tesoura;

	return resultadoDaJogada.empate;
};

module.exports = juiz;