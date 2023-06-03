const lesson = require("../models/lesson.model");

class LessonController {
  getListLessonByIdCourse(req, res) {
    const id = req.params.id;
    try {
      lesson.getListLessonByIdCourse(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }

  getListLessonByIdLesson(req, res) {
    const id = req.params.id;
    try {
      lesson.getListLessonByIdLesson(id, (err, rows) => {
        if (!err) {
          console.log("rows", rows);
          res.status(200).send(rows[0]);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new LessonController();
