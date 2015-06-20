var jogadorFactory = {};

jogadorFactory.criar = function(token, apelido) {
	validarApelido(apelido);

	return {
		token: token,
		apelido: apelido
	};
};

function validarApelido(apelido) {
	if (!apelido || apelido.trim() === '')
		throw new Error('Não é possível criar um jogador sem apelido');
}

module.exports = jogadorFactory;