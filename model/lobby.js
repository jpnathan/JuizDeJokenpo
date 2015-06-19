function Lobby() {
	var self = this;
	var jogadores = [];

	self.adicionarJogador = function(novoJogador) {
		validarJogadorComNomeRepetido(novoJogador);

		jogadores.push(novoJogador);
	};

	self.obterNome = function(token) {
		for (var index = 0; index < jogadores.length; index++) {
			var jogador = jogadores[index];

			if (jogador.token === token)
				return jogador.nome;
		}

		return null;
	};

	self.obterJogadores = function() {
		return jogadores;
	};

	self.removerJogador = function(jogador) {
	};

	function validarJogadorComNomeRepetido(novoJogador) {
		jogadores.map(function(jogador) {
			if (jogador.nome === novoJogador.nome)
				throw new Error('Este nome já existe');
		});
	}
}

module.exports = Lobby;