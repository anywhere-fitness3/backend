// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json();

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../auth/secrets");

const Usersmodel = require("../users/usersModel.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log("Add...: " + user);

  Usersmodel.add(user)
    .then(saved => {
      console.log("Saved: " + saved);
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log("Error: " + error);
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Usersmodel.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token,
          user_id: user.id
        });
      } else {
        res.status(401).json({ message: "Login Failed" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;

function generateToken(user) {
  const payload = {
    userid: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "24 hours"
  };
  const token = jwt.sign(payload, secrets.jwtSecret, options);
  return token;
}


