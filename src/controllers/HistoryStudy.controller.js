const historyStudy = require("../models/history-study.model");

class HistoryStudyController {
  getHistoryByUser(req, res) {
    const courseId = req.params.idCourse;
    const userId = req.params.idUser;
    const lessonId = req.params.idLesson;

    try {
      historyStudy.getInfoHistoryByUser(
        { courseId, lessonId, userId },
        (err, rows) => {
          if (!err) {
            res.status(200).send(rows);
          } else {
            res.status(500).json({ error: "error when get history from db" });
          }
        }
      );
    } catch (error) {}
  }
}

module.exports = new HistoryStudyController();
