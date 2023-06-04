const express = require("express");
const router = express.Router();
const ProgressController = require("../controllers/Progress.controller");

router.get("/:idCourse/:idUser", ProgressController.getProgressById);

module.exports = router;
