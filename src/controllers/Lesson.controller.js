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
          res.status(200).send(rows[0]);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }

  addLesson(req, res) {
    const data = req.body;
    try {
      lesson.addLesson(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add lesson success");
        } else {
          res.status(500).json({ error: "error when set lesson from db" });
        }
      });
    } catch (error) {}
  }

  updateLesson(req, res) {
    const data = req.body;
    try {
      lesson.updateLesson(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update lesson success");
        } else {
          res.status(500).json({ error: "error when set lesson from db" });
        }
      });
    } catch (error) {}
  }

  deleteLesson(req, res) {
    const id = req.params.id;
    try {
      lesson.deleteLesson(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete lesson success");
        } else {
          res.status(500).json({ error: "error when delete lesson from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new LessonController();
