const db = require("../config/db");

class Teacher {
  getTeacher(callback) {
    db.query(
      `Select * from teacher join course on teacher.idTeacher = course.idTeacher`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new Teacher();
