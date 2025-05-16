var alertaModel = require("../models/alertaModel");

function retornar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var statusAlerta = req.body.statusAlertaServer;
    var acao_rapida = req.body.acao_rapidaServer;
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        alertaModel.retornar(statusAlerta, acao_rapida)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o retorno! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    retornar
}