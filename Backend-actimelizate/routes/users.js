const express = require('express')
const router = express.Router()
const Usuario = require("../models/users");
const jwt = require("jsonwebtoken");
const mustAuth = require("../middlewares/mustAuth");
const bearerToken = require("express-bearer-token");
const firebase = require("firebase");
const config = require("../config.js");
const app = express();
const { json } = require("express");

app.use(json());
app.use(bearerToken());

const JWT_PASSWORD = "supersecretpassword";

firebase.initializeApp(config.firebaseConfig)

async function checkEmailAndPassword(email, pass) {
    let auth = await firebase.auth().signInWithEmailAndPassword(email, pass);
    return auth;
}

router.route('/users')
    .get(async(req, res) => {
        let itemList = await Usuario.find().exec();

        res.json(itemList);
    })
    .post(async(req, res) => {
        try {
            let auth = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);

            let usuarioMongo = {
                email: req.body.email,
                _id: auth.user.uid,
                name: req.body.name,
                surname: req.body.surname,
                profile: req.body.profile
            };

            let newUser = await new Usuario(usuarioMongo).save()
            let userJSON = newUser.toJSON()

            res.status(201).json(userJSON);

        } catch (e) {
            res.status(404).json({ message: e.message })
            return
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