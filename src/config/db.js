const mongoose = require ('mongoose')

const InicializaMongoServer = async() => {
    try {
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Conectado com sucesso!')
    } catch (error) {
        console.log('Não foi possível conectar!')
    }
}

module.exports = InicializaMongoServer