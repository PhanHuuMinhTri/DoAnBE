const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/Teacher.controller");

router.get("/", TeacherController.getTeacher);

module.exports = router;
