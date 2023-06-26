const express = require("express");
const router = express.Router();
const LessonController = require("../controllers/Lesson.controller");

router.get("/course/:id", LessonController.getListLessonByIdCourse);
router.get("/:id", LessonController.getListLessonByIdLesson);
router.post("/add", LessonController.addLesson);
router.post("/edit", LessonController.updateLesson);
router.delete("/delete/:id", LessonController.deleteLesson);
module.exports = router;
