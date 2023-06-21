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

  addCourse(req, res) {
    const data = req.body;
    try {
      course.addCourse(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add course success");
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }

  updateCourse(req, res) {
    const data = req.body;
    try {
      course.updateCourse(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update course success");
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }

  deleteCourse(req, res) {
    const id = req.params.id;
    try {
      course.deleteCourse(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete course success");
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new CourseController();
