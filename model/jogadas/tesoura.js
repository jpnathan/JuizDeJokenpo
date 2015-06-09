var tesoura = {};

tesoura.empataCom = function(jogada) {
	return jogada === "tesoura";
};

tesoura.ganhaDe = function(jogada) {
	return jogada === "papel";
};

module.exports = tesoura;