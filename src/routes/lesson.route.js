const express = require("express");
const router = express.Router();
const LessonController = require("../controllers/Lesson.controller");

router.get("/course/:id", LessonController.getListLessonByIdCourse);
router.get("/:id", LessonController.getListLessonByIdLesson);
module.exports = router;
