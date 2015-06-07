var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var juiz = require("./model/juiz");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var porta = process.env.PORT || 1100;

var router = express.Router();

router.post("/analisarJogada", function(req, res) {
	var jogada = req.body;

	res.json(juiz.analisar(jogada.jogada1, jogada.jogada2));
});

app.use("/api", router);

app.listen(porta);

console.log("Juiz de jokenpo iniciado na porta " + porta);