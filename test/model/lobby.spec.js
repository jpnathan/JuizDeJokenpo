var should = require('chai').should();
var Lobby = require('../../model/lobby');

describe('Lobby de jogadores', function() {
	var lobby, jogador, outroJogador;

	beforeEach(function() {
		lobby = new Lobby();
		
		jogador = {
			token: 'asdoj123asfd',
			nome: 'Renan'
		};

		outroJogador = {
			token: 'sad[pwg]w[1',
			nome: 'Siravegna'
		};
	});

	it('deve adicionar um novo jogador', function() {
		lobby.adicionarJogador(jogador);

		lobby.obterJogadores().should.deep.equal([jogador]);
	});

	it('não deve adicionar jogadores de nomes iguais', function() {
		lobby.adicionarJogador(jogador);

		(function() {
			lobby.adicionarJogador(jogador);
		}).should.throw(Error, 'Este nome já está sendo usado por outra pessoa');
	});

	it('deve obter um jogador pelo seu token', function() {
		lobby.adicionarJogador(jogador);
		lobby.adicionarJogador(outroJogador);

		lobby.obter(jogador.token).should.equal(jogador);
		lobby.obter(outroJogador.token).should.equal(outroJogador);
	});

	it('deve remover um jogador pelo seu token', function() {
		lobby.adicionarJogador(jogador);
		lobby.adicionarJogador(outroJogador);

		lobby.removerJogador(outroJogador.token);

		lobby.obterJogadores().should.deep.equal([jogador]);
	});

	it('deve remover o jogador corretamente o último jogador', function() {
		lobby.adicionarJogador(jogador);

		lobby.removerJogador(jogador.token);

		lobby.obterJogadores().should.deep.equal([]);
	});

	it('não deve remover ninguem caso não encontre o jogador pelo token', function() {
		lobby.adicionarJogador(jogador);
		lobby.adicionarJogador(outroJogador);
		var tokenInexistente = '][213rweof';

		lobby.removerJogador(tokenInexistente);

		lobby.obterJogadores().should.deep.equal([jogador, outroJogador]);
	});
});