var assert = require("assert");
var juizComMatriz = require("../../model/juizComMatriz");

describe("Juiz de jokenpo com matriz", function() {
	describe("deve verificar o ganhador da jogada", function() {
		it("pedra x pedra", function() {
			var vencedorDaJogada = juizComMatriz.analisar("pedra", "pedra");

			assert.equal(vencedorDaJogada, "empate");
		});

		it("pedra x papel", function() {
			var vencedorDaJogada = juizComMatriz.analisar("pedra", "papel");

			assert.equal(vencedorDaJogada, "papel");
		});

		it("pedra x tesoura", function() {
			var vencedorDaJogada = juizComMatriz.analisar("pedra", "tesoura");

			assert.equal(vencedorDaJogada, "pedra");
		});

		it("papel x papel", function() {
			var vencedorDaJogada = juizComMatriz.analisar("papel", "papel");

			assert.equal(vencedorDaJogada, "empate");
		});

		it("papel x pedra", function() {
			var vencedorDaJogada = juizComMatriz.analisar("papel", "pedra");

			assert.equal(vencedorDaJogada, "papel");
		});

		it("papel x tesoura", function() {
			var vencedorDaJogada = juizComMatriz.analisar("papel", "tesoura");

			assert.equal(vencedorDaJogada, "tesoura");
		});

		it("tesoura x tesoura", function() {
			var vencedorDaJogada = juizComMatriz.analisar("tesoura", "tesoura");

			assert.equal(vencedorDaJogada, "empate");
		});

		it("tesoura x pedra", function() {
			var vencedorDaJogada = juizComMatriz.analisar("tesoura", "pedra");

			assert.equal(vencedorDaJogada, "pedra");
		});

		it("tesoura x papel", function() {
			var vencedorDaJogada = juizComMatriz.analisar("tesoura", "papel");

			assert.equal(vencedorDaJogada, "tesoura");
		});
	});
});