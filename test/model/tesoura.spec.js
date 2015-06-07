var assert = require("assert");
var tesoura = require("../../model/tesoura");

describe("Tesoura", function() {
	it("empata com tesoura", function() {
		assert.equal(tesoura.empataCom, "tesoura");
	});

	it("ganha de papel", function() {
		assert.equal(tesoura.ganhaDe, "papel");
	});

	it("perde para pedra", function() {
		assert.equal(tesoura.perdePara, "pedra");
	});
});