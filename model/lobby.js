function Lobby() {
	var self = this;
	var jogadores = [];

	self.adicionarJogador = function(novoJogador) {
		validarJogadorComNomeRepetido(novoJogador);

		jogadores.push(novoJogador);
	};

	self.obterNome = function(token) {
		return jogadores.filter(function(jogador) {
			return jogador.token === token;
		})[0].nome;
	};

	self.obterJogadores = function() {
		return jogadores;
	};

	self.removerJogador = function(jogadorParaRemover) {
		var posicaoDoJogador = -1;

		jogadores.map(function(jogador, index) {
			if (jogador.token === jogadorParaRemover.token)
				posicaoDoJogador = index;
		});

		jogadores = jogadores.slice(posicaoDoJogador);
	};

	function validarJogadorComNomeRepetido(novoJogador) {
		jogadores.map(function(jogador) {
			if (jogador.nome === novoJogador.nome)
				throw new Error('Este nome já existe');
		});
	}
}

module.exports = Lobby;