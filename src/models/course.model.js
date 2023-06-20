const db = require("../config/db");

class Course {
  getCourse(id, callback) {
    db.query(
      `Select * from course inner join teacher on course.idTeacher = teacher.idTeacher where nameCourse = '${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getAllCourse(callback) {
    db.query(
      `Select * from course join teacher on course.idTeacher = teacher.idTeacher`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new Course();
