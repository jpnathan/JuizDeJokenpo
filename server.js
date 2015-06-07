var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var porta = process.env.PORT || 1100;

var router = express.Router();

router.post("/analisarJogada", function(req, res) {
	console.log(req.body.a);
	res.json("Resposta inválida");
});

app.use("/api", router);

app.listen(porta);

console.log("Juiz de jokenpo iniciado na porta " + porta);