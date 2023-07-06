const db = require("../config/db");

class Progress {
  getProgressById({ courseId, userId }, callback) {
    db.query(
      `select * from userprogress where idCourse = '${courseId}'  && idUser = '${userId}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getProgressByIdCourse(courseId, callback) {
    db.query(
      `select * from userprogress JOIN user on userprogress.idUser = user.IdUser where idCourse = '${courseId}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  insertProgress({ courseId, userId, progress }) {
    db.query(
      `INSERT INTO userprogress (idUser, idCourse, progress) VALUES ('${userId}', '${courseId}', '${progress}')`
    );
  }

  updateProgress({ idProgress, progress }) {
    db.query(
      `UPDATE userprogress set  progress=' ${progress}'  where idProgress = '${idProgress}'`
    );
  }

  deleteProgress(idProgress, callback) {
    db.query(
      `Delete from userprogress where idProgress = '${idProgress}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new Progress();
