const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/Course.controller");

router.get("/:id", CourseController.getCourse);

module.exports = router;
