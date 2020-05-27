'use strict'
//Dependencias usadas
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//HAY QUE CONECTAR MONGOOSE AQUÍ
const app = express()

//Configuramos middlewares
app.use(express.json())
app.use(cors())

//Traemos las rutas de ficheros externos
const newsRoute = require('./routes/news')


//enganchamos las rutas
app.use(newsRoute)



const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('¡Hola mundo!')
})


app.listen(port, () => {
    console.log(`Servidor activo en localhost:${port}!`)
})

module.exports = app