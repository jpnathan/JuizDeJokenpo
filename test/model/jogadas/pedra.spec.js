var assert = require("assert");
var pedra = require("../../../model/jogadas/pedra");

describe("Pedra", function() {
	it("empata com pedra", function() {
		assert.equal(pedra.empataCom("pedra"), true);
	});

	it("não empata com papel", function() {
		assert.equal(pedra.empataCom("papel"), false);
	});

	it("não empata com tesoura", function() {
		assert.equal(pedra.empataCom("tesoura"), false);
	});

	it("ganha de tesoura", function() {
		assert.equal(pedra.ganhaDe("tesoura"), true);
	});

	it("não ganha de pedra", function() {
		assert.equal(pedra.ganhaDe("pedra"), false);
	});

	it("não ganha de papel", function() {
		assert.equal(pedra.ganhaDe("papel"), false);
	});
});
