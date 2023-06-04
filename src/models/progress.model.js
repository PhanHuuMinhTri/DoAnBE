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
}

module.exports = new Progress();
