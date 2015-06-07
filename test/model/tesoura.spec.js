var assert = require("assert");
var tesoura = require("../../model/tesoura");

describe("Tesoura", function() {
	it("empata com tesoura", function() {
		assert.equal(tesoura.empataCom("tesoura"), true);
	});

	it("não empata com papel", function() {
		assert.equal(tesoura.empataCom("papel"), false);
	});

	it("não empata com pedra", function() {
		assert.equal(tesoura.empataCom("pedra"), false);
	});

	it("ganha de papel", function() {
		assert.equal(tesoura.ganhaDe("papel"), true);
	});

	it("não ganha de pedra", function() {
		assert.equal(tesoura.ganhaDe("pedra"), false);
	});

	it("não ganha de tesoura", function() {
		assert.equal(tesoura.ganhaDe("tesoura"), false);
	});
});