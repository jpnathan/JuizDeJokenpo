var matrizDeJogadas = require("../model/jogadas/matrizDeJogadas");

var juizComMatriz = {};

juizComMatriz.analisar = function(jogada1, jogada2) {
	return matrizDeJogadas[jogada1][jogada2];
};

module.exports = juizComMatriz;