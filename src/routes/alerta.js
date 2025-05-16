var express = require("express");
var router = express.Router();

var alertaController = require("../controllers/alertaController");

router.post("/retornar", function (req, res) {
    alertaController.retornar(req, res);
});


module.exports = router;