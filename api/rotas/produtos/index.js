const roteador = require('express').Router()
const TabelaProdutos = require('./TabelaProdutos')

roteador.use('/', async (requisicao, resposta) => {
    const resultados = await TabelaProdutos.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador