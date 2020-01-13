const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
     //token not working
     return res.status(401).json({ message: "Login Failed" });
 } else {
     req.decodedToken = decodedToken;
     next();
 }
        });
    } else {
        //token working
        return res.status(401).json({ message: "Login Required" });
    }
};