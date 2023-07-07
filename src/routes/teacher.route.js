const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/Teacher.controller");

router.get("/", TeacherController.getTeacher);
router.get("/list", TeacherController.getListTeacher);
router.get("/:id", TeacherController.getTeacherInfo);
router.post("/add", TeacherController.addTeacher);
router.post("/edit", TeacherController.updateTeacher);
router.delete("/delete/:id", TeacherController.deleteTeacher);

module.exports = router;
