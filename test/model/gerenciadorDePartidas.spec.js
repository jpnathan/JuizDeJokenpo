var should = require('chai').should();
var jogadorFactory = require('../../model/jogadorFactory');
var Partida = require('../../model/Partida'); 
var gerenciadorDePartidas = require('../../model/gerenciadorDePartidas'); 

describe('Gerenciador de partidas', function() {
	var jogador = jogadorFactory.criar(1, 'Renan');
	var outroJogador = jogadorFactory.criar(2, 'Siravegna');

	it('deve localizar uma partida pelos jogadores', function() {
		var partida = new Partida(jogador, outroJogador);
		gerenciadorDePartidas.adicionar(partida);

		var partida = gerenciadorDePartidas.obterPor(jogador, outroJogador);

		partida.should.not.equal(undefined);
	});
});