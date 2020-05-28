const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let noticiaSchema = new Schema({
    title: { type: String, required: false },
    content: { type: String, required: false },
    uid: { type: String, required: false },
    user: { type: String, required: false }
})

module.exports = noticiaSchema