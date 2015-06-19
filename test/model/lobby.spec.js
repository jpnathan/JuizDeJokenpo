var should = require('chai').should();
var Lobby = require('../../model/lobby');

describe('Lobby de jogadores', function() {
	var lobby, jogador;

	beforeEach(function() {
		lobby = new Lobby();
		jogador = {
			token: 1000,
			nome: 'Renan'
		};
	});

	it('deve adicionar um novo jogador', function() {
		lobby.adicionarJogador(jogador);

		lobby.obterJogadores().should.have.length(1);
		lobby.obterJogadores()[0].should.equal(jogador);
	});

	it('não deve adicionar jogadores de nomes iguais', function() {
		lobby.adicionarJogador(jogador);

		(function() {
			lobby.adicionarJogador(jogador);
		}).should.throw(Error, 'Este nome já existe');
	});

	it('deve obter o nome de um jogador pelo seu token', function() {
		var outroJogador = {
			token: 1234,
			nome: 'Siravegna'
		};
		lobby.adicionarJogador(jogador);
		lobby.adicionarJogador(outroJogador);

		lobby.obterNome(jogador.token).should.equal(jogador.nome);
		lobby.obterNome(outroJogador.token).should.equal(outroJogador.nome);
	});

	xit('deve remover um jogador pelo seu token', function() {
		var outroJogador = {
			token: 1234,
			nome: 'Siravegna'
		};
		lobby.adicionarJogador(jogador);
		lobby.adicionarJogador(outroJogador);

		lobby.removerJogador(outroJogador);

		lobby.obterJogadores().should.have.length(1);
		lobby.obterJogadores[0].nome.should.not.equal(jogador.nome);
	});
});