function Partida(jogador, outroJogador) {
	var self = this;

	jogadores = {};

	jogadores[jogador.token] = undefined;
	jogadores[outroJogador.token] = undefined;

	self.jogar = function(jogador, jogada) {
		jogadores[jogador.token] = jogada;
	};

	self.obterJogada = function(jogador) {
		return jogadores[jogador.token];
	};

	self.possuiJogador = function(jogador) {
		return jogadores.hasOwnProperty(jogador.token);
	};

	self.possuiJogadores = function(jogador, outroJogador) {
		return self.possuiJogador(jogador) && self.possuiJogador(outroJogador);
	}
}

module.exports = Partida;