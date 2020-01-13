const router = require("express").Router();
const Usersmodel = require("./usersModel");
const restricted = require("../auth/restrictedMiddleware.js");


//get the users
router.get("/", restricted, async (req, res) => {
  try {
    const users = await Usersmodel.findAll();
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

module.exports = router;
