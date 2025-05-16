var database = require("../database/config")

function retornar(statusAlerta, acao_rapida) {
    var instrucaoSql = `
        SELECT statusAlerta, acao_rapida FROM alerta WHERE...  '${statusAlerta}', '${acao_rapida}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    retornar,
};