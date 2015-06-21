var should = require('chai').should();
var jogadorFactory = require('../../model/jogadorFactory');
var Partida = require('../../model/partida');
var callbackSpy = require('../helpers/callbackSpy');

describe('Partida', function() {
	var jogador = jogadorFactory.criar(1, 'Renan');
	var outroJogador = jogadorFactory.criar(2, 'Siravegna');

	it('deve criar com jogadores', function() {
		var partida = new Partida(jogador, outroJogador);

		partida.possuiJogador(jogador).should.equal(true);
		partida.possuiJogador(outroJogador).should.equal(true);
	});

	it('deve indicar que não existe um jogador que não está na partida', function() {
		var jogadorInexistente = jogadorFactory.criar(3, 'Outro jogador');

		var partida = new Partida(jogador, outroJogador);

		partida.possuiJogador(jogadorInexistente).should.equal(false);
	});

	it('deve indicar se possui os jogadores na partida', function() {
		var partida = new Partida(jogador, outroJogador);

		partida.possuiJogadores(jogador, outroJogador).should.equal(true);
	});

	it('deve receber uma jogada', function() {
		var jogada = 'papel';
		var outraJogada = 'pedra';
		var partida = new Partida(jogador, outroJogador);

		partida.jogar(jogador, jogada);
		partida.jogar(outroJogador, outraJogada);

		partida.obterJogada(jogador).should.equal(jogada);
		partida.obterJogada(outroJogador).should.equal(outraJogada);
	});

	it('deve indicar se está esperando uma jogada', function() {
		var partida = new Partida(jogador, outroJogador);

		partida.jogar(jogador, 'pedra');

		partida.estado().should.equal('Esperando jogada');
	});

	it('deve indicar o vencedor caso já tenha as duas jogadas', function() {
		var jogada = 'tesoura';
		var outraJogada = 'pedra';
		var partida = new Partida(jogador, outroJogador);

		partida.jogar(jogador, jogada, callbackSpy);
		partida.jogar(outroJogador, outraJogada, callbackSpy);

		callbackSpy.quantidadeDeChamadas().should.equal(1);
		callbackSpy.parametro(0).should.equal('pedra venceu');
	});
});