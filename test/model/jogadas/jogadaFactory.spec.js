var assert = require("assert");
var jogadaFactory = require("../../../model/jogadas/jogadaFactory");
var papel = require("../../../model/jogadas/papel");
var tesoura = require("../../../model/jogadas/tesoura");
var pedra = require("../../../model/jogadas/pedra");

describe("Jogada factory", function() {
	it("deve criar um papel", function() {
		var jogadaCriada = jogadaFactory.criarPara("papel");

		assert.equal(jogadaCriada, papel);
	});

	it("deve criar uma tesoura", function() {
		var jogadaCriada = jogadaFactory.criarPara("tesoura");

		assert.equal(jogadaCriada, tesoura);
	});

	it("deve criar uma pedra", function() {
		var jogadaCriada = jogadaFactory.criarPara("pedra");

		assert.equal(jogadaCriada, pedra);
	});
});