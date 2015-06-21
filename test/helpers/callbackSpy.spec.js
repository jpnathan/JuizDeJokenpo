var should = require('chai').should();
var callbackSpy = require('./callbackSpy');

describe('Callback spy', function() {
	it('deve informar qual o valor do parâmetro baseado na sua posição de chamada', function() {
		var parametro1 = 1;
		var parametro2 = 'Renan';

		callbackSpy(parametro1, parametro2);

		callbackSpy.parametro(0).should.equal(parametro1);
		callbackSpy.parametro(1).should.equal(parametro2);
		should.not.exist(callbackSpy.parametro(2));
	});

	it('deve informar a quantidade de chamadas', function() {
		callbackSpy();
		callbackSpy();
		callbackSpy();

		callbackSpy.quantidadeDeChamadas().should.equal(3);
	});

	it('deve reiniciar a quantidade de chamadas ao perguntar o valor do parâmetro', function() {
		callbackSpy();
		
		callbackSpy.parametro(0);

		callbackSpy.quantidadeDeChamadas().should.equal(0);
	});

	it('deve reiniciar a quantidade de chamadas ao perguntar a quantidade pela primeira vez', function() {
		callbackSpy();

		callbackSpy.quantidadeDeChamadas();

		callbackSpy.quantidadeDeChamadas().should.equal(0);
	});
});