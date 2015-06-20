function Lobby() {
	var self = this;
	var jogadores = [];

	self.adicionarJogador = function(novoJogador) {
		validarJogadorComNomeRepetido(novoJogador);

		jogadores.push(novoJogador);
	};

	self.obter = function(token) {
		return jogadores.filter(function(jogador) {
			return jogador.token === token;
		})[0];
	};

	self.obterJogadores = function() {
		return jogadores;
	};

	self.removerJogador = function(token) {
		jogadores.map(function(jogador, index) {
			if (jogador.token === token)
				jogadores = jogadores.splice(index - 1, 1);
		});
	};

	function validarJogadorComNomeRepetido(novoJogador) {
		jogadores.map(function(jogador) {
			if (jogador.nome === novoJogador.nome)
				throw new Error('Este nome já está sendo usado por outra pessoa');
		});
	}
}

module.exports = Lobby;