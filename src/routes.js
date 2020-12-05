const express = require('express')
const PessoaController = require ('./controllers/PessoaController')
const routes = express.Router()

routes.get('/pessoas', PessoaController.voltaTudo)
routes.get('/pessoa/:id', PessoaController.listarId)
routes.put('/pessoa/:id', PessoaController.update)
routes.post('/pessoa', PessoaController.create)
routes.delete('/pessoa/:id', PessoaController.delete)

module.exports = routes