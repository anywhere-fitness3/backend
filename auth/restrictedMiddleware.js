const jsonwebtok = require("jsonwebtoken");
const secrets = require("./secrets");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        jsonwebtok.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err)
 {
     return res.status(401).json({ message: "Login Required" });
 } else {
     req.decodedToken = decodedToken;
     next();
 }
        });
    } else {
        return res.status(401).json({ message: "Login Required" });
    }
};