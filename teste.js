var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Lobby = require('./model/lobby');
var jogadorFactory = require('./model/jogadorFactory');
var juiz = require('./model/juiz');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var jogadasEmEspera = {};
var jogadores = [];
var lobby = new Lobby();

io.on('connection', function(socket) {
	socket.on('entrar', function(apelido) {
		var jogador = jogadorFactory.criar(socket.id, apelido);

		jogadores.push(jogador);
		lobby.adicionarJogador(jogador);

		socket.emit('entrada-registrada');

		console.log('Jogador conectou');
	});

	socket.on('jogada', function(jogada) {
		var meuToken = socket.id;
		var minhaJogada = jogada.jogada;
		var tokenDoAdversario = jogada.tokenDoAdversario;

		if (jogadasEmEspera[tokenDoAdversario] === undefined)
			jogadasEmEspera[meuToken] = minhaJogada;
		else {
			if (meuToken === tokenDoAdversario) return;

			var meuNome = lobby.obterNome(meuToken);
			var nomeDoAdversario = lobby.obterNome(tokenDoAdversario);

			var jogadaDoAdversario = jogadasEmEspera[tokenDoAdversario];
			delete jogadasEmEspera[tokenDoAdversario];

			var jogadaVencedora = juiz.analisar(minhaJogada, jogadaDoAdversario);
			var resposta = 'Jogador ' + (jogadaVencedora === minhaJogada ? meuNome : nomeDoAdversario) + ' venceu jogando ' + jogadaVencedora;

			var resposta = {
				jogadaVencedora: resposta
			};

			console.log(meuToken);
			console.log(tokenDoAdversario);
			console.log(resposta);

			io.to(meuToken).emit('jogadaVencedora', resposta);
			io.to(tokenDoAdversario).emit('jogadaVencedora', resposta);
		}
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