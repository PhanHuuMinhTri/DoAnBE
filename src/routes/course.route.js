const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/Course.controller");

router.get("/:id", CourseController.getCourse);
router.delete("/delete/:id", CourseController.deleteCourse);
router.get("/", CourseController.getAllCourse);
router.post("/add", CourseController.addCourse);
router.post("/edit", CourseController.updateCourse);
module.exports = router;
