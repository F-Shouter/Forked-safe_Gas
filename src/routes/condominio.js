var express = require("express");
var router = express.Router();

var condominioController = require("../controllers/condominioController");

router.post("/cadastrar", function (req, res) {
    condominioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    condominioController.autenticar(req, res);
});


module.exports = router;