function Partida(jogador, outroJogador) {
	var self = this;

	jogadores = {};
	jogadores[jogador.token] = undefined;
	jogadores[outroJogador.token] = undefined;

	self.jogar = function(jogador, jogada, callback) {
		jogadores[jogador.token] = jogada;

		if (self.estado() === 'Jogada finalizada')
			if (callback !== undefined) {
				callback('pedra venceu');
			}
	};

	self.estado = function() {
		return jogadores[jogador.token] === undefined || jogadores[outroJogador.token] === undefined ? 'Esperando jogada' : 'Jogada finalizada';
	};

	self.obterJogada = function(jogador) {
		return jogadores[jogador.token];
	};

	self.possuiJogador = function(jogador) {
		return jogadores.hasOwnProperty(jogador.token);
	};

	self.possuiJogadores = function(jogador, outroJogador) {
		return self.possuiJogador(jogador) && self.possuiJogador(outroJogador);
	};
}

module.exports = Partida;