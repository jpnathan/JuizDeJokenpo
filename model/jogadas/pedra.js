var pedra = {};

pedra.empataCom = function(jogada) {
	return jogada === "pedra";
};

pedra.ganhaDe = function(jogada) {
	return jogada === "tesoura";
};

module.exports = pedra;