const roteador = require('express').Router()
const TabelaProdutos = require('./TabelaProdutos')

const listarProdutos = [
    {
        "name": "Aiphone",
        "preco": 3000
    }
]

roteador.use('/',  (requisicao, resposta) => {
    //const resultados = await TabelaProdutos.listar()
    resposta.send(
        JSON.stringify(listarProdutos)
    )
})

module.exports = roteador