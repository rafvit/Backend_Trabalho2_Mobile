const mongoose = require ('mongoose')
const pessoaSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    dataDeNascimento:{
        type: Date,
        required: true
    },
    tipoPessoa:{
        type: String,
        required: true
    },
    telefone:{
        type: Number,
        required: true
    }
})

const pessoa = mongoose.model('pessoa', pessoaSchema)

module.exports = pessoa