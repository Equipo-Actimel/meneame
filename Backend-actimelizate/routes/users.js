const express = require('express')
const router = express.Router()
const Usuario = require("../models/users");

router.route('/users')
    .get(async(req, res) => {
        try {
            let usuarios = await Usuario.find().exec()
            res.json(usuarios);
        } catch (err) {
            res.status(404).json({ message: e.message })
        }
    })
    .post(async(req, res) => {
        try {
            let newUser = await new Usuario(req.body).save()
            res.status(200).json(newUser)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    })

router.route('/users/:id')
    .get(async(req, res) => {
        try {

            let userList = req.app.get('users')
            let searchId = req.params.id

            let foundUser = await Usuario.findById({ _id: searchId }).exec()

            if (!foundUser) {
                res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
                return
            }

            res.json(foundUser)
        } catch (e) {
            res.status(404).json({ message: e.message })
        }
    })
    .put(async(req, res) => {
        try {
            let searchId = req.params.id
            let updateUser = await Usuario.findOneAndUpdate(searchId, req.body, { new: true })

            if (!updateUser) {
                res.status(404).json({ 'message': 'El elemento que intentas editar no existe' })
                return
            }
            res.json(updateUser)
        } catch (err) {
            res.status(500).json({ 'message': 'No se ha podido resolver la solicitud' })
        }
    })
    .delete(async(req, res) => {
        try {
            let searchId = req.params.id
            let deleteUser = await Usuario.deleteOne({ _id: searchId })

            if (deleteUser.deleteCount === 0) {
                res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
                return
            }
            console.info(deleteUser)
            res.status(204).json
        } catch (err) {
            res.status(500).json({ 'message': 'No se ha podido resolver la solicitud' })
        }

    })


module.exports = router