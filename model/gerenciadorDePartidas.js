var gerenciadorDePartidas = {},
	partidas = [];

gerenciadorDePartidas.adicionar = function(partida){
	partidas.push(partida);
};

gerenciadorDePartidas.obterPor = function(jogador, outroJogador){
	return partidas.filter(function(partida) {
		return partida.possuiJogadores(jogador, outroJogador);
	})[0];
};

module.exports = gerenciadorDePartidas;