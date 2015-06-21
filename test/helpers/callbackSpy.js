var parametrosDeChamada;
var quantidadeDeChamadas = 0;

function callbackSpy() {
	quantidadeDeChamadas++;
	parametrosDeChamada = arguments;
}

callbackSpy.quantidadeDeChamadas = function() {
	var quantidade = quantidadeDeChamadas;
	quantidadeDeChamadas = 0;

	return quantidade;
};

callbackSpy.parametro = function(posicao) {
	quantidadeDeChamadas = 0;
	
	return parametrosDeChamada[posicao];
};

module.exports = callbackSpy;