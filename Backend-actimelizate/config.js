let envs = {}
if (process.env.NODE_ENV !== "production") {
    const dotenv = require("dotenv");
    const result = dotenv.config();
    envs = result.parsed
}

const firebaseConfig = {
    apiKey: "AIzaSyCmnK_nmjwlmF-Xg7T8wxIcp49ZxlaHMek",
    authDomain: "meneame-6756e.firebaseapp.com",
    databaseURL: "https://meneame-6756e.firebaseio.com",
    projectId: "meneame-6756e",
    storageBucket: "meneame-6756e.appspot.com",
    messagingSenderId: "436683681670",
    appId: "1:436683681670:web:78cb966a8d02914af0c607"
};

const mongoConfig = process.env.MONGO_DB_URL || envs.MONGO_DB_URL;

const config = {
    firebaseConfig,
    mongoConfig
}

exports.firebaseConfig = firebaseConfig
exports.mongoConfig = mongoConfig

module.exports = config;