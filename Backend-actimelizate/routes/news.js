const express = require('express')
const router = express.Router()
const Noticia = require("../models/noticias");
const mustAuth = require("../middlewares/mustAuth");

router.route('/news')
    .get(async(req, res) => {
        try {
            let noticias = await Noticia.find({}).exec()
            res.json(noticias);
        } catch (err) {
            res.status(404).json({ message: e.message })
        }
    })
    .post(mustAuth(), async(req, res) => {
        try {
            let newProduct = await new Noticia(req.body).save()
            res.status(200).json(newProduct)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    })

router.route('/news/:id')
    .get(async(req, res) => {
        try {

            let itemList = req.app.get('news')
            let searchId = req.params.id

            let foundItem = await Noticia.findById({ _id: searchId }).exec()

            if (!foundItem) {
                res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
                return
            }

            res.json(foundItem)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    })
    .put(mustAuth(), async(req, res) => {
        try {
            let searchId = req.params.id
            let updateItem = await Noticia.findOneAndUpdate(searchId, req.body, { new: true })

            if (!updateItem) {
                res.status(404).json({ 'message': 'El elemento que intentas editar no existe' })
                return
            }
            res.json(updateItem)
        } catch (err) {
            res.status(500).json({ 'message': 'No se ha podido resolver la solicitud' })
        }
    })
    .delete(mustAuth(), async(req, res) => {
        try {
            let searchId = req.params.id
            let deleteItem = await Noticia.deleteOne({ _id: searchId })

            if (deleteItem.deleteCount === 0) {
                res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
                return
            }
            console.info(deleteItem)
            res.status(204).json
        } catch (err) {
            res.status(500).json({ 'message': 'No se ha podido resolver la solicitud' })
        }

    })


module.exports = router