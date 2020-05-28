const express = require('express')
const router = express.Router()
const Usuario = require("../models/users");
const jwt = require("jsonwebtoken");
const mustAuth = require("./middlewares/mustAuth");
const bearerToken = require("express-bearer-token");
const config = require("./config");

app.use(json());
app.use(bearerToken());

const JWT_PASSWORD = "supersecretpassword";

firebase.initializeApp(config.firebaseConfig)

async function checkEmailAndPassword(email, pass) {
    let auth = await firebase.auth().signInWithEmailAndPassword(email, pass);
    return auth;
}
// Debe llamar a firebase y comprobar usuario y contraseña
router.route('/auth/login')
    .post(async(req, res) => {

    })

router.route('/users')
    .post(async(req, res) => {
        try {

            // 1- Crear usuario en firebase

            /*
            try {
                let newUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            }catch(e){
                // Manejamos el error
            }
            */

            // 2. Obtener uid del usuario creado en firebase
            // 3. Crear usuario en mongoDB

            let userData = {
                firstname: "",
                lastname: "",
                profile: "",
                email: "",
                uid: "" // <===== Debe darmelo firebase
            }
            let newUser = await new Usuario(userData).save()
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