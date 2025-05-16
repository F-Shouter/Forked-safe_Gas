var database = require("../database/config")

function cadastrar(nome, cep, logradouro, numLog, cnpj, senha) {
    var instrucaoSql = `
        INSERT INTO condominio (nome_condominio, cep, logradouro, numero_logradouro, cnpj, senha) VALUES ('${nome}', '${cep}', '${logradouro}', '${numLog}', '${cnpj}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(cnpj, senha) {
    var instrucaoSql = `
        SELECT idCondominio, nome_condominio, cnpj, senha FROM condominio WHERE cnpj = '${cnpj}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    autenticar,
};