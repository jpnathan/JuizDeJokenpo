var assert = require("assert");
var pedra = require("../../model/pedra");

describe("Pedra", function() {
	it("empata com pedra", function() {
		assert.equal(pedra.empataCom, "pedra");
	});

	it("ganha de tesoura", function() {
		assert.equal(pedra.ganhaDe, "tesoura");
	});

	it("perde para papel", function() {
		assert.equal(pedra.perdePara, "papel");
	});
});