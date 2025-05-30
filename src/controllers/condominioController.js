var condominioModel = require("../models/condominioModel");

function autenticar(req, res) {
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    condominioModel.autenticar(cnpj, senha)
    .then(
        function (resultadoAutenticar) {
            if (resultadoAutenticar.length == 1) {

                res.json({
                    idCondominio: resultadoAutenticar[0].idCondominio,
                    nome_condominio: resultadoAutenticar[0].nome_condominio,
                    cnpj: resultadoAutenticar[0].cnpj
                });
            } else if (resultadoAutenticar.length == 0) {
                res.status(403).send("cnpj e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }

        }
    ).catch(
        function (erro) {
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
    }



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var numLog = req.body.numLogServer;
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (numLog == undefined) {
        res.status(400).send("Seu numLog está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        condominioModel.cadastrar(nome, cep, logradouro, numLog, cnpj, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    autenticar,
    cadastrar
}