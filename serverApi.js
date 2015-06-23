var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var juiz = require('./model/juiz');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

var porta = process.env.PORT || 80;

var router = express.Router();

router.post('/analisarJogada', function(req, res) {
	var jogada = req.body;
	var resposta = {
		jogadaVencedora: juiz.analisar(jogada.jogada1, jogada.jogada2)
	};
	console.log('Jogada recebida');

	res.json(resposta);
});

app.use('/api', router);

app.listen(porta);

console.log('API do juiz de jokenpo iniciado na porta ' + porta);