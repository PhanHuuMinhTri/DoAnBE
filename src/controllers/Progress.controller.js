const progress = require("../models/progress.model");

class ProgressController {
  getProgressById(req, res) {
    const courseId = req.params.idCourse;
    const userId = req.params.idUser;

    try {
      progress.getProgressById({ courseId, userId }, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when ge progress from db" });
        }
      });
    } catch (error) {}
  }

  getProgressByIdCourse(req, res) {
    const courseId = req.params.idCourse;

    try {
      progress.getProgressByIdCourse(courseId, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get progress from db" });
        }
      });
    } catch (error) {}
  }

  deleteProgress(req, res) {
    const idProgress = req.params.idProgress;
    try {
      progress.deleteProgress(idProgress, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete progress sucess");
        } else {
          res.status(500).json({ err: "error when delete progress from DB" });
        }
      });
    } catch (err) {}
  }
}

module.exports = new ProgressController();
