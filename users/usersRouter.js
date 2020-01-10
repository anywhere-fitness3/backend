const server = require("../api/server.js");
const router = require("express").Router();
const Usersmodel = require("./usersModel");
const restricted = require("../auth/restricted.js");

module.exports = router;

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

// //delet a user
// router.post("/:userid/classes/", restricted, async (req, res) => {
//   try {
//     const classes = {
//       user_id: req.params.userid,
//       class_id: req.params.classId,
//     }
//       });
//     }
