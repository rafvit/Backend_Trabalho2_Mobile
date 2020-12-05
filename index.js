require('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser')
const cors  = require('cors')

const InicializaMongoServer = require('./src/config/db')
const routes = require('./src/routes')

InicializaMongoServer()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(5001, () =>{
    console.log('Tudo Certo!')
})
