const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    userName: { type: String, required: false },
    Profile: { type: String, required: false },
    email: { type: String, required: false }
})

module.exports = usuarioSchema