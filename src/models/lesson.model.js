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
}

module.exports = new Lesson();
