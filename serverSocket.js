var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var juiz = require("./model/juiz");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

var porta = process.env.PORT || 1110;

var router = express.Router();
var jogadaEmEspera;
var resEmEspera;

router.post("/analisarJogada", function(req, res) {
	if (!jogadaEmEspera){
		console.log("Jogada esperando");
		resEmEspera = res;
		jogadaEmEspera = req.body.jogada;
	}
	else {
		var resposta = {
			jogadaVencedora: juiz.analisar(jogadaEmEspera, req.body.jogada)
		};

		res.json(resposta);
		resEmEspera.json(resposta);
		
		jogadaEmEspera = undefined;
		resEmEspera = undefined;
	}
});

app.use("/api", router);

app.listen(porta);

console.log("Juiz de jokenpo iniciado na porta " + porta);