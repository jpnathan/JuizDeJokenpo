var jogadaFactory = require("../model/jogadaFactory");

var juiz = {};

juiz.analisar = function(jogada1, jogada2) {
	var jogada = jogadaFactory.criarPara(jogada1);

	if (jogada.empataCom === jogada2)
		return "empate";

	if (jogada.ganhaDe === jogada2)
		return jogada1;
	else
		return jogada2;
};

module.exports = juiz;