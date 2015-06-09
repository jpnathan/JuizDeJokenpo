var matrizDeJogadas = {
	pedra: { pedra: "empate", papel: "papel", tesoura: "pedra" },
	papel: { pedra: "papel", papel: "empate", tesoura: "tesoura" },
	tesoura: { pedra: "pedra", papel: "tesoura", tesoura: "empate" }
};

module.exports = matrizDeJogadas;