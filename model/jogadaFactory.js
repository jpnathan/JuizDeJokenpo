var jogadaFactory = {};

jogadaFactory.criarPara = function(jogada) {
	return require("../model/" + jogada);
};

module.exports = jogadaFactory;