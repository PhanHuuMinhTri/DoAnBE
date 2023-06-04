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
}

module.exports = new ProgressController();
