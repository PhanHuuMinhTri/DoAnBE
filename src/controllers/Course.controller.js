const course = require("../models/course.model");

class CourseController {
  getCourse(req, res) {
    const id = req.params.id;
    console.log("id", id);
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
  //   login(req, res) {
  //     auth.login(req.body, (err, rows) => {
  //       if (!err) {
  //         console.log("row", rows);
  //         res.status(200).send(rows);
  //       } else {
  //         res.status(400).json({ error: "error" });
  //       }
  //     });
  //   }
}

module.exports = new CourseController();
