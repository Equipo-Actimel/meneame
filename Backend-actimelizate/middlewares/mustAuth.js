const config = require("../config");
const jwt = require("jsonwebtoken");

function mustAuth() {
    return (req, res, next) => {
        console.log(req.token)
        if (!req.token) {
            res.status(401).json({ message: "Necesitas un token JWT" });
            return;
        }

        try {
            let token = req.token;
            let user = jwt.verify(token, config.jwtKey);
            req.user = user;
        } catch (err) {
            res.status(401).json({ message: "Token inválido" });
            return;
        }
        next();
    };
}

module.exports = mustAuth;