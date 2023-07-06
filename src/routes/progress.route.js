const express = require("express");
const router = express.Router();
const ProgressController = require("../controllers/Progress.controller");

router.get("/:idCourse/:idUser", ProgressController.getProgressById);
router.get("/:idCourse", ProgressController.getProgressByIdCourse);
router.delete("/delete/:idProgress", ProgressController.deleteProgress);

module.exports = router;
