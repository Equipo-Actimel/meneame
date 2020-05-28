const mongoose = require("mongoose");
const userSchema = require("./schemas/usuarios");

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;