const course = require("../models/course.model");

class CourseController {
  getCourse(req, res) {
    const id = req.params.id;
    try {
      course.getCourse(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows[0]);
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }

  getAllCourse(req, res) {
    try {
      course.getAllCourse((err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new CourseController();
