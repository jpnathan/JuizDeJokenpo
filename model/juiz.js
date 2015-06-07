var juiz = {};

juiz.analisar = function(jogada1, jogada2) {
	if (jogada1 === "pedra" && jogada2 === "papel")
		return "papel";

	else if (jogada1 === "pedra" && jogada2 === "tesoura")
		return "pedra";

	else if (jogada1 === "papel" && jogada2 === "pedra")
		return "papel";

	else if (jogada1 === "papel" && jogada2 === "tesoura")
		return "tesoura";

	else if (jogada1 === "tesoura" && jogada2 === "pedra")
		return "pedra";

	else if (jogada1 === "tesoura" && jogada2 === "papel")
		return "tesoura";

	return "empate";
};

module.exports = juiz;