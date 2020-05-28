const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let noticiaSchema = new Schema({
    image: { type: String, required: false },
    title: { type: String, required: false },
    date: { type: String, required: false },
    body: { type: String, required: false },
    resume: { type: String, required: false },
    label: { type: String, required: false },
    author: { type: String, required: false },
    ranking: { type: Number, required: false },
    uid: { type: Number, required: false },
    enable: { type: Boolean, required: false }
})

module.exports = noticiaSchema