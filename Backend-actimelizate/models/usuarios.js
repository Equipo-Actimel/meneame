const mongoose = require("mongoose");
const usuarioSchema = require("./schemas/usuarios");

const usuarioModel = mongoose.model("news", usuarioSchema);

module.exports = usuarioModel;