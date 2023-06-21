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

  addCourse(data, callback) {
    console.log("data", data);
    db.query(
      `INSERT INTO course ( nameCourse, numberLession, numberTest, imageCourse, description, idTeacher) VALUES ( '${data?.nameCourse}', '${data?.numberLession}', '${data.numberTest}', '${data.imageCourse}', '${data.description}', '${data.idTeacher}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  updateCourse(data, callback) {
    db.query(
      `Update course set  nameCourse = '${data?.nameCourse}' , numberLession = '${data?.numberLession}', numberTest= '${data.numberTest}', imageCourse= '${data.imageCourse}', description= '${data.description}', idTeacher= '${data.idTeacher}'  where idCourse ='${data.idCourse}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  deleteCourse(id, callback) {
    db.query(`DELETE FROM course WHERE idCourse = '${id}'`, (err, rows) => {
      console.log("err", err);
      callback(err, rows);
    });
  }
}

module.exports = new Course();
