'use strict'
//Dependencias usadas
const express = require('express')
const mongoose = require('mongoose')
const config = require("./config")
const cors = require('cors')
const app = express()

//HAY QUE CONECTAR MONGOOSE AQUÍ

//Configuramos middlewares
app.use(express.json())
app.use(cors())

//Traemos las rutas de ficheros externos
const newsRoute = require('./routes/news')
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')

//enganchamos las rutas
app.use(newsRoute)
app.use(usersRoute)
app.use(authRoute)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('¡Hola mundo!')
})

async function connectDatabase() {
    let db = mongoose.connection;
    try {
        await mongoose.connect('mongodb+srv://actimel:actimelizate@base1-4yusi.mongodb.net/news?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.log("Imposible conectar a la base de datos");
        console.log(err);
    }
}
async function init() {
    await connectDatabase();
    app.listen(PORT, () => console.log(`Conectado al puerto ${PORT}`));
}


init();
module.exports = app