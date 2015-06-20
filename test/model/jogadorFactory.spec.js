var should = require('chai').should();
var jogadorFactory = require('../../model/jogadorFactory');

describe('Jogador factory', function() {
	it('deve criar um novo jogador', function() {
		var jogadorEsperado = {
			token: '1230sdv',
			apelido: 'Renan'
		};

		var novoJogador = jogadorFactory.criar(jogadorEsperado.token, jogadorEsperado.apelido);

		novoJogador.should.deep.equal(jogadorEsperado);
	});

	it('não deve criar um jogador com apelido vazio', function() {
		(function() {
			jogadorFactory.criar('123', '');
		}).should.throw(Error, 'Não é possível criar um jogador sem apelido');
	});

	it('não deve criar um jogador sem apelido', function() {
		(function() {
			jogadorFactory.criar('123', undefined);
		}).should.throw(Error, 'Não é possível criar um jogador sem apelido');
	});
});