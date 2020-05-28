const mongoose = require("mongoose");
const noticiaSchema = require("./schemas/noticias");

const noticiaModel = mongoose.model("news", noticiaSchema);

module.exports = noticiaModel;