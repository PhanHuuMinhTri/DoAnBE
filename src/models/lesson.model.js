const db = require("../config/db");

class Lesson {
  getListLessonByIdCourse(id, callback) {
    db.query(
      `Select * from lesson  where idCourse = '${id}' ORDER BY indexLesson ASC `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getListLessonByIdLesson(id, callback) {
    db.query(`Select * from lesson  where idLesson = '${id}'`, (err, rows) => {
      callback(err, rows);
    });
  }

  addLesson(data, callback) {
    db.query(
      `INSERT INTO lesson ( idCourse, type, videoUrl, indexLesson ) VALUES ( '${data?.idCourse}', '${data?.type}', '${data.videoUrl}', '${data.indexLesson}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
  updateLesson(data, callback) {
    console.log("data", data);
    db.query(
      `Update lesson set   type = '${data?.type}', videoUrl= '${data?.videoUrl}'  where idLesson ='${data?.idLesson}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  deleteLesson(id, callback) {
    db.query(`DELETE FROM lesson WHERE idLesson = '${id}'`, (err, rows) => {
      console.log("err", err);
      callback(err, rows);
    });
  }
}

module.exports = new Lesson();
