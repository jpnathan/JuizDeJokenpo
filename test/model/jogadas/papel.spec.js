var assert = require("assert");
var papel = require("../../../model/jogadas/papel");

describe("Papel", function() {
	it("empata com papel", function() {
		assert.equal(papel.empataCom("papel"), true);
	});

	it("não empata com tesoura", function() {
		assert.equal(papel.empataCom("tesoura"), false);
	});

	it("não empata com pedra", function() {
		assert.equal(papel.empataCom("pedra"), false);
	});

	it("ganha de pedra", function() {
		assert.equal(papel.ganhaDe("pedra"), true);
	});

	it("não ganha de tesoura", function() {
		assert.equal(papel.ganhaDe("tesoura"), false);
	});

	it("não ganha de papel", function() {
		assert.equal(papel.ganhaDe("papel"), false);
	});
});