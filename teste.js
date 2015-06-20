var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Lobby = require('./model/lobby');
var Partida = require('./model/partida');
var jogadorFactory = require('./model/jogadorFactory');
var juiz = require('./model/juiz');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var lobby = new Lobby();

io.on('connection', function(socket) {
	socket.on('entrar', function(apelido) {
		var jogador = jogadorFactory.criar(socket.id, apelido);

		lobby.adicionarJogador(jogador);

		socket.emit('entrada-registrada');

		console.log('Jogador conectou');
	});

	// TODO: Validar se o jogador escolhido já não está em um desafio
	socket.on('desafiar-jogador', function(tokenDoAdversario) {
		var meuToken = socket.id;

		io.to(tokenDoAdversario).emit('desafio', meuToken);
	});

	// TODO: Validar se o jogador escolhido já não está em um desafio
	socket.on('aceitar-desafio', function(tokenDoAdversario) {
		var eu = lobby.obter(socket.id);
		var meuAdversario = lobby.obter(tokenDoAdversario);

		var partida = new Partida(eu, meuAdversario);
		gerenciadorDePartidas.adicionar(partida);

		io.to(meuToken).emit('iniciar-partida', partida);
		io.to(tokenDoAdversario).emit('iniciar-partida', partida);
	});

	socket.on('jogada', function(jogada) {
		var eu = lobby.obter(socket.id);
		var minhaJogada = jogada.jogada;
		var meuAdversario = lobby.obter(tokenDoAdversario);

		var partida = gerenciadorDePartidas.obterPor(eu, meuAdversario);

		partida.jogar(eu, minhaJogada, function(resultado) {
			io.to(eu.token).emit('resultado', resultado);
			io.to(meuAdversario.token).emit('resultado', resultado);
		});
	});

	socket.on('disconnect', function() {
		var token = socket.id;
		lobby.removerJogador(token);

		console.log('Jogador desconectou');
	});
});

app.get('/api/jogadoresOnline', function(req, res) {
	res.json(lobby.obterJogadores());
	console.log('Jogadores obtidos');
});

http.listen(3300, function() {
	console.log('Juiz rodando!');
});