const server = require("../server.js");
const router = require("express").Router();
const Usersmodel = require("./usersModel");
const restricted = require("../auth/restricted.js");

module.exports = router;

//get the users
router.get("/", restricted, async (req, res) => {
  try {
    const users = await Usersmodel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User not found"
    });
  }
});

//get users by id
router.get("/:id/classes", restricted, async (req, res) => {
  try {
    const classes = await usersmodel.findById(req.params.id);

    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Classes not found for users"
    });
  }
});

//delet a user
router.post("/:id/classes/", async (req, res) => {
  try {
    const count = await usersmodel.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The user has been "
      });
    }
  }
});
