const router = require("express").Router();
const UsersCoursemodel = require("./usersCourseModel.js");

// //get classes by id
router.get("/", restricted, async (req, res) => {
  try {
    const usersCourse = await UsersCoursemodel.find();
    res.status(200).json(usersCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User not found"
    });
  }
});

//get classes by id
router.get("/:id/classes", async (req, res) => {
  try {
    const usersCourse = await UsersCoursemodel.findById(req.params.id);

    if (usersCourse) {
    res.status(200).json(usersCourse);
  } else {
    res.status(404).json({
      message: "Classes not found"
    });
  }
} catch(error) {
    console.log(error);
    res.status(500).json(error);
}
});

//get classes by id
router.get('/:id', async (req, res) => {
    try {
        const usersCourse = await UsersCoursemodel.FindById(req.params.id);
if (usersCourse) {
    res.status(200).json(usersCourse);
} else {
res.status(404).json({ message: 'Class not found' });
}
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// //delet a class
router.delete("/:id/userCourse/", async (req, res) => {
  try {
    const count = await UsersCoursemodel.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "The class has been removed. " });
    } else {
        res.status(404).json({ message: 'Class could not be located' });
  }
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
});

//add a class
router.put('/:id', async (req, res) => {
    try { 
        const userCourse = await UsersCoursemodel.update(req.params.id, req.body);
        if (userCourse) {
            res.status(200).json(userCourse);
        } else {
            res.status(404).json({ message: 'Class could not be located' });
    }
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
});

router.post('/', async (req, res) => {
    try {
        const userCourse = await UsersCoursemodel.add(req.body);
        res.status(200).json(userCourse);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;