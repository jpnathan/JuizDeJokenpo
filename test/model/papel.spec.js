var assert = require("assert");
var papel = require("../../model/papel");

describe("Papel", function() {
	it("empata com papel", function() {
		assert.equal(papel.empataCom, "papel");
	});

	it("ganha de pedra", function() {
		assert.equal(papel.ganhaDe, "pedra");
	});

	it("perde para tesoura", function() {
		assert.equal(papel.perdePara, "tesoura");
	});
});