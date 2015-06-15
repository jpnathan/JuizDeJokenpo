var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var juiz = require("./model/juiz");

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

var jogadasEmEspera = {};
var jogadores = [];

io.on("connection", function(socket) {
	socket.on("entrar", function(mensagem) {
		jogadores.push({
			id: socket.id,
			nome: mensagem
		});
	});

	socket.on("jogada", function(jogada) {
		var meuToken = socket.id;
		var minhaJogada = jogada.jogada;
		var tokenDoAdversario = jogada.tokenDoAdversario;

		if (jogadasEmEspera[tokenDoAdversario] === undefined)
			jogadasEmEspera[meuToken] = minhaJogada;
		else {
			if (meuToken === tokenDoAdversario) return;

			var meuNome, nomeDoAdversario;

			for (var index = 0; index < jogadores.length; index++) {
				if (jogadores[index].id === meuToken)
					meuNome = jogadores[index].nome;
				else if (jogadores[index].id === tokenDoAdversario)
					nomeDoAdversario = jogadores[index].nome;
			}

			var jogadaDoAdversario = jogadasEmEspera[tokenDoAdversario];
			delete jogadasEmEspera[tokenDoAdversario];

			console.log("Jogador 1: ", meuToken);
			console.log("Jogador 2: ", tokenDoAdversario);

			var jogadaVencedora = juiz.analisar(minhaJogada, jogadaDoAdversario);
			var resposta = "Jogador " + (jogadaVencedora === minhaJogada ? meuNome : nomeDoAdversario) + " venceu jogando " + jogadaVencedora;

			var resposta = {
				jogadaVencedora: resposta
			};

			socket.to(meuToken).emit("jogadaVencedora", resposta);
			socket.to(tokenDoAdversario).emit("jogadaVencedora", resposta);
		}
	});

	console.log("a user connected");

	socket.on("disconnect", function() {
		for (var index = 0; index < jogadores.length; index++) {
			if (jogadores[index].id === socket.id) {
				console.log("Id encontrado: ", socket.id);
				jogadores.slice(index);
			}
		}

		console.log("user disconnected");
	});
});

app.get("/api/jogadoresOnline", function(req, res) {
	console.log('teste');
	res.json(jogadores);
});

http.listen(3000, function() {
	console.log("listening on *:3000");
});