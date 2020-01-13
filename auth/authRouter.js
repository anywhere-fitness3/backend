const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcyrptjs');
const secrets = require('./secrets.js');

const Usersmodel = require('../users/usersModel.js');

//endpoints  beginning with api/auth
// async? await?

router.post('/register',  (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

Usersmodel.add(user)
.then(saved => {
    const token = generateToken(saved);
    res.status(201).json
    ({created_user: saved, 
        id: saved.id,
        token:token, 
    message: 'New user creted' 
});
})
.catch(error => {
    console.log(error);
    res.status(500).json
    ({ message: 'New User not created' 
});
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Usersmodel.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.pasword)) {
            const token = generateToken(user);
            res.status(200).json({
                username: user.username,
                id: user.id,
                token: token,  
                message: 'Welcome!'
                // 'Welcome ${user.username}!'
            });
        } else {
            res.status(401).json({ message: 'Login Failed' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ 
            message: 'Login could not be created',
    });
});

function generateToken(user) {
    const payload = {
        userid: user.id,
        username: user.username
    };
    const options = {
        expiresIn: "24 hours"
    };
    const token = jwt.sign(payload, secrets.jwtSecret, options);
    return token;
}

module.exports = router;