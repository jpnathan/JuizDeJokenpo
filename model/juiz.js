var jogadaFactory = require("../model/jogadas/jogadaFactory");

var juiz = {};

juiz.analisar = function(jogada1, jogada2) {
	var jogada = jogadaFactory.criarPara(jogada1);

	if (jogada.empataCom(jogada2))
		return "empate";

	return jogada.ganhaDe(jogada2) ? jogada1 : jogada2;
};

module.exports = juiz;