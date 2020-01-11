const router = require("express").Router();
const Classesmodel = require("./classesModel.js");

// //get classes by id
router.get("/", restricted, async (req, res) => {
  try {
    const classes = await Classesmodel.find();
    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Classes not found"
    });
  }
});

//get classes by id
router.get("/:id/classes", async (req, res) => {
  try {
    const classes = await Classesmodel.findById(req.params.id);

    if (classes) {
    res.status(200).json(classes);
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
        const classes = await Classesmodel.FindById(req.params.id);
if (classes) {
    res.status(200).json(classes);
} else {
res.status(404).json({ message: 'Class not found' });
}
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// //delet a class
router.delete("/:id/classes/", async (req, res) => {
  try {
    const count = await Classesmodel.remove(req.params.id);
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
        const classes = await Classesmodel.update(req.params.id, req.body);
        if (classes) {
            res.status(200).json(classes);
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
        const classes = await Classesmodel.add(req.body);
        res.status(200).json(classes);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;