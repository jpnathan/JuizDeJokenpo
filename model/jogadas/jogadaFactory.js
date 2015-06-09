var jogadaFactory = {};

jogadaFactory.criarPara = function(jogada) {
	return require("../jogadas/" + jogada);
};

module.exports = jogadaFactory;