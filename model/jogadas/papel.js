var papel = {};

papel.empataCom = function(jogada) {
	return jogada === "papel";
};

papel.ganhaDe = function(jogada) {
	return jogada === "pedra";
};

module.exports = papel;