const db = require("../config/db");

class HistoryStudy {
  updateHistorySubmit({ id, courseId, userId }, callback) {
    db.query(
      `select * from historystudy where idCourse = '${courseId}' && idLesson = '${id}' && idUser = '${userId}'`,
      (err, row) => {
        if (row?.length === 0) {
          db.query(
            `INSERT INTO historystudy (idCourse, idLesson, idUser) VALUES ('${courseId}', '${id}', '${userId}')`,
            (err, row) => {
              callback(err, row);
            }
          );
        }
      }
    );
  }

  getListStudyByIdUserAndCourseId({ courseId, userId }, callback) {
    db.query(
      `select * from historystudy where idCourse = '${courseId}'  && idUser = '${userId}'`,
      (err, row) => {
        callback(err, row);
      }
    );
  }

  getInfoHistoryByUser({ courseId, lessonId, userId }, callback) {
    db.query(
      `select * from historystudy where idCourse = '${courseId}' && idLesson = '${lessonId}'  && idUser = '${userId}'`,
      (err, row) => {
        callback(err, row);
      }
    );
  }
}

module.exports = new HistoryStudy();
