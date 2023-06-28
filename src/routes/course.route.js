const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/Course.controller");

router.get("/:id", CourseController.getCourse);
router.get("/", CourseController.getAllCourse);
router.post("/add", CourseController.addCourse);
router.post("/edit", CourseController.updateCourse);
router.delete("/delete/:id", CourseController.deleteCourse);

module.exports = router;
