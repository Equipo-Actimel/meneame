const express = require('express')
const router = express.Router()
const Noticia = require("../models/noticias");


router.route('/news')
    .get(async(req, res) => {
        try {
            let noticias = await Noticia.find().exec()
            res.json(noticias);
        } catch (err) {
            res.status(404).json({ message: e.message })
        }

    })
module.exports = router